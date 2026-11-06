---
template: article
order: 4
date: 2026-10-31
icon: lock
topic: Security
minutes: 7
seo:
  path: /blog/essential-eight-maturity-level-1/
  title: "Essential Eight maturity level 1 checklist | Ruhan Islam"
  description: "A plain-English Essential Eight maturity level 1 checklist for small businesses: the eight controls, what level 1 asks for, and how to prove it to an insurer."
  og-title: "Essential Eight maturity level 1: a plain-English checklist"
  og-image-alt: "Essential Eight maturity level 1 cybersecurity checklist for small business"
  index: "true"
keywords:
  primary: Essential Eight
  secondary:
    - maturity level 1
    - multi-factor authentication
    - regular backups
    - patch applications
    - application control
hero:
  crumb: Blog
  kicker: "Security · Australia"
  line: "Essential Eight maturity level 1 checklist"
  lede: "If you do business in Australia, sooner or later an insurer or a customer asks: \"do you meet the Essential Eight?\" Here is the plain answer: the eight controls in plain English, what maturity level 1 really asks for, and where a small business should start."
more:
  - name: "Backup restore testing for small business"
    path: "/blog/backup-restore-testing/"
    line: "The one-hour habit that makes backups real."
  - name: "Private AI for business: ban it, buy a GPU, or neither?"
    path: "/blog/private-ai-for-business/"
    line: "Keeping client data out of public chatbots."
  - name: "The small business backup solution I'd set up for you"
    path: "/blog/small-business-backup-solution/"
    line: "Why cloud sync and a USB drive aren't backups."
body: |
  <h2 class="t-h3" id="what-is">What the Essential Eight is</h2>
  <p>The Essential Eight is a set of eight mitigation strategies published by the Australian Signals Directorate (ASD) through its Australian Cyber Security Centre. They are not a law for most private businesses, but they have become the common yardstick: cyber insurers ask about them, government departments expect suppliers to meet them, and larger customers send questionnaires built around them.</p>
  <p>Each strategy has three maturity levels. <strong>Maturity level 1</strong> is aimed at stopping opportunistic attackers who use widely available tools, which is exactly the kind of attack most small businesses face. It is the sensible first target. The official wording lives in the <a href="https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight/essential-eight-maturity-model" rel="noopener">Essential Eight maturity model</a>; always check the current version, because ASD updates it.</p>

  <h2 class="t-h3" id="eight">The eight controls, in plain English</h2>
  <ol>
    <li><strong>Application control:</strong> only approved programs can run on staff computers, so a file someone downloads can't simply start itself.</li>
    <li><strong>Patch applications:</strong> keep browsers, Office, PDF readers and anything facing the internet up to date.</li>
    <li><strong>Configure Microsoft Office macro settings:</strong> block macros for people who don't need them, and block macros from files that came from the internet.</li>
    <li><strong>User application hardening:</strong> browsers don't run old risky content such as Java from the web, and ads are filtered.</li>
    <li><strong>Restrict administrative privileges:</strong> admin rights only for people who need them, used from separate admin accounts.</li>
    <li><strong>Patch operating systems:</strong> Windows, macOS and servers updated on a schedule; unsupported versions replaced.</li>
    <li><strong>Multi-factor authentication:</strong> a second step at login for email, cloud apps and remote access.</li>
    <li><strong>Regular backups:</strong> backups of data, applications and settings, kept safe from ordinary accounts, and restores actually tested.</li>
  </ol>

  <h2 class="t-h3" id="level-1">What maturity level 1 asks for</h2>
  <p>At maturity level 1 the controls are about doing the basics consistently. In practice that means:</p>
  <ul>
    <li><strong>Multi-factor authentication</strong> on online services that hold your business data, starting with email and Microsoft 365 or Google Workspace.</li>
    <li><strong>Patch applications</strong> and operating systems on a schedule, with the fastest turnaround for internet-facing services when a working exploit is known. ASD sets the exact time frames in the model.</li>
    <li><strong>Application control</strong> on staff computers, at least stopping programs from running out of user folders and temporary folders.</li>
    <li>Office macros blocked for staff who don't need them, and blocked from internet files for everyone.</li>
    <li>Admin rights limited, and admin accounts not used for email or browsing.</li>
    <li><strong>Regular backups</strong> performed and kept according to how critical the data is, protected so ordinary accounts cannot change or delete them, and restores tested as part of disaster recovery exercises.</li>
  </ul>

  <h2 class="t-h3" id="order">Where to start: multi-factor authentication first</h2>
  <p>You don't need to do all eight on day one. This order gives the most protection for the least disruption:</p>
  <ol>
    <li><strong>Multi-factor authentication on email.</strong> Most business compromises start with a stolen mailbox password. Turn it on for everyone, admins first.</li>
    <li><strong>Regular backups you have restored.</strong> If ransomware gets through, this is what saves the business. See our guide to <a href="/blog/backup-restore-testing/">backup restore testing</a>.</li>
    <li><strong>Patching on autopilot.</strong> Automatic updates for browsers and Office, a monthly window for servers, and a list of anything you can't patch.</li>
    <li><strong>Separate admin accounts.</strong> The account that reads email should never be able to install software on the server.</li>
    <li><strong>Macros and application control.</strong> These take more testing, so do them once the first four are steady.</li>
  </ol>

  <h2 class="t-h3" id="evidence">How to prove it to an insurer or customer</h2>
  <p>Being compliant and being able to show it are different jobs. Keep a short evidence pack, updated every quarter:</p>
  <div class="prose__table"><table>
    <thead><tr><th>Control</th><th>Evidence that convinces</th></tr></thead>
    <tbody>
      <tr><td>Multi-factor authentication</td><td>Screenshot of the sign-in policy and a user list showing MFA enabled for every account</td></tr>
      <tr><td>Patch applications &amp; OS</td><td>An export from the update tool showing versions and dates</td></tr>
      <tr><td>Regular backups</td><td>Backup schedule, retention settings and the last restore test report with its date and time taken</td></tr>
      <tr><td>Admin privileges</td><td>A list of admin accounts and who owns each one</td></tr>
      <tr><td>Application control &amp; macros</td><td>The policy settings and one test showing a blocked file</td></tr>
    </tbody>
  </table></div>
  <p>A one-page summary on top, with what is in place, what is still in progress and the date of the next review, answers most questionnaires in minutes instead of days.</p>
  <h2 class="t-h3" id="my-take">My honest take</h2>
  <p>The Essential Eight is not glamorous, and that is its strength. Most break-ins I hear about didn't need a clever attacker; they needed one reused password without multi-factor authentication, or one unpatched server. Do the first two items on the list above this month, and you are already ahead of most small businesses. If you want a second pair of eyes, this is part of my <a href="/solutions/small-business-cybersecurity/">security and compliance</a> work.</p>

---
