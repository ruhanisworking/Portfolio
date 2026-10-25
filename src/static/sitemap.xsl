<?xml version="1.0" encoding="UTF-8"?>
<!-- Styles /sitemap.xml for people who open it in a browser. Search engines
     ignore this file and read the XML directly. Colours mirror DESIGN.md. -->
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap — ruhan.bd</title>
        <style>
          body { margin: 0; background: #fbf8f5; color: #141110; font: 15px/1.6 "DM Sans", system-ui, sans-serif; }
          header { background: #141110; color: #fffdfb; padding: 40px 24px; }
          header h1 { margin: 0 0 6px; font: 700 28px/1.2 Georgia, serif; letter-spacing: .02em; }
          header p { margin: 0; color: rgba(255,253,251,.68); }
          header a { color: #fdba74; }
          main { max-width: 1100px; margin: 0 auto; padding: 32px 24px 64px; }
          .count { display: inline-block; padding: 4px 12px; border-radius: 999px; background: linear-gradient(135deg,#ea580c,#f97316 50%,#f59e0b); color: #141110; font-weight: 600; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; background: #fffdfb; border-radius: 14px; overflow: hidden; box-shadow: 0 4px 12px rgba(20,17,16,.06); }
          th { text-align: left; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: #8a827c; padding: 12px 16px; border-bottom: 1px solid rgba(20,17,16,.08); }
          td { padding: 14px 16px; border-bottom: 1px solid rgba(20,17,16,.06); vertical-align: top; }
          tr:last-child td { border-bottom: 0; }
          td a { color: #c2410c; font-weight: 600; text-decoration: none; word-break: break-all; }
          td a:hover { text-decoration: underline; }
          .img { color: #8a827c; font-size: 13px; }
        </style>
      </head>
      <body>
        <header>
          <h1>ruhan.bd sitemap</h1>
          <p>This is the XML sitemap search engines read. People will find the <a href="/sitemap.html">page-by-page sitemap</a> easier.</p>
        </header>
        <main>
          <span class="count"><xsl:value-of select="count(s:urlset/s:url)"/> pages</span>
          <table>
            <tr><th>Page</th><th>Last updated</th><th>Images</th></tr>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                <td><xsl:value-of select="s:lastmod"/></td>
                <td class="img"><xsl:value-of select="count(image:image)"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
