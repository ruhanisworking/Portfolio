"""Commander sign-in: a tiny server-side auth service in front of ruhan.lol.

Caddy sends every request (except /login, CSS, JS and favicons) to GET /auth/verify
via forward_auth. A valid session cookie answers 200; otherwise a 302 to /login.
The login form posts to /auth/login, and /auth/logout clears the cookie.

Standard library only. Settings come from the environment (an env file on the VM,
never committed):
  CMD_USER       user name
  CMD_PASS_HASH  pbkdf2_sha256$<iterations>$<salt hex>$<hash hex>   (make it with: python server.py hash)
  CMD_SECRET     random hex that signs the session cookies (change it to sign everyone out)
  CMD_DAYS       session length in days (default 14)
"""
import base64
import hashlib
import hmac
import os
import secrets
import sys
import time
import urllib.parse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

COOKIE = "cmd_session"
MAX_FAILS, WINDOW = 5, 15 * 60  # per client IP
fails = {}


def make_hash(password, iterations=600_000):
    salt = secrets.token_bytes(16)
    dk = hashlib.pbkdf2_hmac("sha256", password.encode(), salt, iterations)
    return f"pbkdf2_sha256${iterations}${salt.hex()}${dk.hex()}"


def check_password(password, stored):
    try:
        _, it, salt, want = stored.split("$")
        dk = hashlib.pbkdf2_hmac("sha256", password.encode(), bytes.fromhex(salt), int(it))
        return hmac.compare_digest(dk.hex(), want)
    except Exception:
        return False


def sign(value):
    return hmac.new(os.environ["CMD_SECRET"].encode(), value.encode(), hashlib.sha256).hexdigest()


def new_session(user):
    exp = int(time.time()) + int(os.environ.get("CMD_DAYS", "14")) * 86400
    body = base64.urlsafe_b64encode(f"{user}|{exp}".encode()).decode()
    return f"{body}.{sign(body)}", exp


def valid_session(token):
    try:
        body, mac = token.split(".")
        if not hmac.compare_digest(mac, sign(body)):
            return False
        user, exp = base64.urlsafe_b64decode(body).decode().rsplit("|", 1)
        return user == os.environ["CMD_USER"] and int(exp) > time.time()
    except Exception:
        return False


def safe_next(n):
    return n if n.startswith("/") and not n.startswith("//") and not n.startswith("/auth/") else "/"


class Handler(BaseHTTPRequestHandler):
    server_version = "commander-auth"

    def client_ip(self):
        return (self.headers.get("Cf-Connecting-Ip") or self.headers.get("X-Forwarded-For", "").split(",")[0].strip()
                or self.client_address[0])

    def cookie(self):
        for part in (self.headers.get("Cookie") or "").split(";"):
            k, _, v = part.strip().partition("=")
            if k == COOKIE:
                return v
        return ""

    def redirect(self, where, cookie=None):
        self.send_response(303 if self.command == "POST" else 302)
        self.send_header("Location", where)
        self.send_header("Cache-Control", "no-store")
        if cookie:
            self.send_header("Set-Cookie", cookie)
        self.end_headers()

    def do_GET(self):
        path = urllib.parse.urlsplit(self.path).path
        if path == "/auth/verify":
            if valid_session(self.cookie()):
                self.send_response(200)
                self.end_headers()
            else:
                nxt = self.headers.get("X-Forwarded-Uri", "/")
                self.redirect("/login?next=" + urllib.parse.quote(safe_next(nxt), safe=""))
        elif path == "/auth/logout":
            self.redirect("/login?e=out", f"{COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax")
        else:
            self.send_error(404)

    def do_POST(self):
        if urllib.parse.urlsplit(self.path).path != "/auth/login":
            return self.send_error(404)
        length = min(int(self.headers.get("Content-Length") or 0), 4096)
        form = urllib.parse.parse_qs(self.rfile.read(length).decode(errors="replace"))
        user, password = form.get("username", [""])[0], form.get("password", [""])[0]
        nxt = safe_next(form.get("next", ["/"])[0])
        ip, now = self.client_ip(), time.time()
        recent = [t for t in fails.get(ip, []) if now - t < WINDOW]
        if len(recent) >= MAX_FAILS:
            fails[ip] = recent
            return self.redirect("/login?e=locked&next=" + urllib.parse.quote(nxt, safe=""))
        ok = hmac.compare_digest(user.strip(), os.environ["CMD_USER"]) & check_password(password, os.environ["CMD_PASS_HASH"])
        if not ok:
            fails[ip] = recent + [now]
            return self.redirect("/login?e=1&next=" + urllib.parse.quote(nxt, safe=""))
        fails.pop(ip, None)
        token, exp = new_session(os.environ["CMD_USER"])
        max_age = int(exp - now)
        self.redirect(nxt, f"{COOKIE}={token}; Path=/; Max-Age={max_age}; HttpOnly; Secure; SameSite=Lax")

    def log_message(self, fmt, *args):  # one short line per request, no cookies or bodies
        sys.stderr.write(f"{self.client_ip()} {self.command} {urllib.parse.urlsplit(self.path).path} {args[1] if len(args) > 1 else ''}\n")


if __name__ == "__main__":
    if sys.argv[1:] == ["hash"]:
        print(make_hash(sys.stdin.readline().rstrip("\n")))
    else:
        ThreadingHTTPServer(("0.0.0.0", 8000), Handler).serve_forever()
