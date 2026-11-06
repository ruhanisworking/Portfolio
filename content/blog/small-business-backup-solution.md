---
template: article
order: 2
date: 2026-11-01
icon: server
topic: Backups
minutes: 7
seo:
  path: /blog/small-business-backup-solution/
  title: "Small Business Backup Solution: 3-2-1-1-0 | Ruhan Islam"
  description: "How I'd set up a small business backup solution: the 3-2-1-1-0 rule in plain words, what to back up, which tools, and the mistakes that lose data."
  og-title: "Small business backup solution: the 3-2-1-1-0 rule explained"
  og-image-alt: "Small business backup strategy: encrypted offline copies with monthly restore tests"
  index: "true"
keywords:
  primary: small business backup solution
  secondary:
    - 3-2-1 backup
    - immutable backup
    - ransomware recovery
    - restore test
    - Microsoft 365 backup
hero:
  crumb: Blog
  kicker: "Backups · how-to"
  line: "The small business backup solution I'd set up for you"
  lede: "Cloud sync and a USB drive are the two most popular backup plans I see in small offices, and I don't trust either. Here is why, and the small business backup solution I would set up for a ten-person office instead, with the reasons behind each choice."
more:
  - name: "Backup restore testing for small business"
    path: "/blog/backup-restore-testing/"
    line: "The one-hour habit that makes backups real."
  - name: "Essential Eight maturity level 1 checklist"
    path: "/blog/essential-eight-maturity-level-1/"
    line: "Australia's security baseline, in plain English."
  - name: "Private AI for business: ban it, buy a GPU, or neither?"
    path: "/blog/private-ai-for-business/"
    line: "Keeping client data out of public chatbots."
body: |
  <h2 class="t-h3" id="problem">The problem: "we have backups"</h2>
  <p>Almost every small business owner I talk to says it. And almost every time, the "backup" turns out to be one of two things: a USB drive that someone plugs in now and then, or a folder synced to Dropbox, OneDrive or Google Drive. Both feel safe. Neither is a <strong>small business backup solution</strong>.</p>

  <h2 class="t-h3" id="critique">Why the popular fixes fail</h2>
  <p><strong>"Our files are in the cloud, so they're backed up."</strong> Sync is not backup. Sync copies every change, including the bad ones. Delete a folder by mistake and the deletion syncs. Get ransomware and the encrypted files sync, neatly replacing the good ones. Version history helps for a while, but it has limits and it lives in the same account an attacker just took over.</p>
  <p><strong>"We copy everything to a USB drive."</strong> Better than nothing, until you look closer. The drive sits plugged in, so ransomware encrypts it too. Or it lives in the same office as the computer, so a fire or a theft takes both. And the copy only happens when someone remembers, which in a busy month means never.</p>
  <p>What both have in common: nobody has ever tried to bring the data back. So here is what I'd set up instead.</p>

  <h2 class="t-h3" id="rule">The 3-2-1 backup rule, made stricter</h2>
  <p>You may know the classic 3-2-1 backup rule. I use the stricter version:</p>
  <ul>
    <li><strong>3</strong> copies of your data: the live one and two backups.</li>
    <li><strong>2</strong> different kinds of storage, so one failure can't take both.</li>
    <li><strong>1</strong> copy offsite, in case of fire, flood or theft.</li>
    <li><strong>1</strong> copy that is offline or immutable, so ransomware can't reach it.</li>
    <li><strong>0</strong> errors when you test a restore. A backup you haven't restored is a hope, not a backup.</li>
  </ul>

  <h2 class="t-h3" id="what-to-back-up">What to back up (people forget half of it)</h2>
  <ul>
    <li>Shared files and the file server, of course.</li>
    <li><strong>Microsoft 365 backup</strong> or Google Workspace backup. Many owners assume Microsoft or Google keeps everything forever. They keep the service running; deleted or encrypted mail and files are your problem after the retention window.</li>
    <li>Databases for your accounting, POS or line-of-business app, backed up with the database's own tools, not just by copying files while it runs.</li>
    <li>Settings: router and firewall configuration, server configs, the list of software and licence keys. Rebuilding without these takes days.</li>
    <li>Laptops of people who keep work locally, whatever the policy says.</li>
  </ul>

  <h2 class="t-h3" id="setup">The setup I'd build for a ten-person office</h2>
  <ol>
    <li><strong>A local backup every night</strong> to a small NAS or backup server in the office, for fast restores of everyday mistakes.</li>
    <li><strong>An encrypted offsite copy</strong> pushed to S3-compatible cloud storage, using open-source tools like restic or Kopia, so you aren't locked in to one vendor.</li>
    <li><strong>An immutable backup:</strong> that cloud bucket has object lock turned on, so nothing, not even an admin account, can delete those copies for 30 days.</li>
    <li><strong>A separate key and password</strong> for the backup system, written down and kept somewhere other than the office.</li>
    <li><strong>Monitoring</strong> that tells you when a job didn't run, rather than an email that says "success" every night.</li>
    <li><strong>A restore test every month</strong>, rotating through files, mail and databases, with a one-line log.</li>
  </ol>

  <h2 class="t-h3" id="ransomware-recovery">Ransomware recovery: the plan before the panic</h2>
  <p>When ransomware hits, people make bad decisions fast. Write the plan now, on one page:</p>
  <ul>
    <li>Who decides, and who you call first (your IT person, your insurer).</li>
    <li>Disconnect, don't switch everything off: keep evidence, stop the spread.</li>
    <li>Restore from the immutable copy onto clean machines, most critical systems first.</li>
    <li>Change passwords and check MFA before people log back in.</li>
  </ul>
  <p>Print it. If the network is encrypted, the plan on the shared drive is encrypted too.</p>

  <h2 class="t-h3" id="mistakes">The mistakes I see most</h2>
  <ul>
    <li>A USB drive that stays plugged in, which ransomware encrypts along with everything else.</li>
    <li>Backups that "completed" for months while copying an empty folder after a path change.</li>
    <li>An encryption key that only existed on the server that died.</li>
    <li>Nobody knowing how long a full restore takes until the day it matters.</li>
  </ul>
  <p>Every one of these is found by a <strong>restore test</strong>. I wrote a separate, practical guide on exactly how to run one: <a href="/blog/backup-restore-testing/">backup restore testing in an hour a month</a>. If you'd rather have someone set all of this up and keep it honest, that's what my <a href="/solutions/small-business-backup/">backup and recovery</a> work is.</p>
---
