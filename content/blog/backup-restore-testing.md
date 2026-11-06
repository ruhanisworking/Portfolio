---
template: article
order: 3
date: 2026-10-31
icon: doc
topic: Backups
minutes: 6
seo:
  path: /blog/backup-restore-testing/
  title: "Backup restore testing for small business | Ruhan Islam"
  description: "Most small businesses have backups but never test a restore. A step-by-step monthly backup restore testing routine, what to record, and the mistakes it catches."
  og-title: "Backup restore testing: test your backups monthly, before you need them"
  og-image-alt: "Restoring files from tested, offline backups before ransomware strikes"
  index: "true"
keywords:
  primary: backup restore testing
  secondary:
    - regular backups
    - Essential Eight
    - ransomware recovery
    - immutable backup
    - 3-2-1 backup
hero:
  crumb: Blog
  kicker: "Backups · how-to"
  line: "Backup restore testing for small business"
  lede: "When someone tells me \"we have backups\", my first question is always: when did you last restore one? Usually there's a pause. Backup restore testing is the one-hour habit that turns \"we think we're covered\" into \"we restored everything in two hours last month\"."
more:
  - name: "Essential Eight maturity level 1 checklist"
    path: "/blog/essential-eight-maturity-level-1/"
    line: "Australia's security baseline, in plain English."
  - name: "Private AI for business: ban it, buy a GPU, or neither?"
    path: "/blog/private-ai-for-business/"
    line: "Keeping client data out of public chatbots."
  - name: "The small business backup solution I'd set up for you"
    path: "/blog/small-business-backup-solution/"
    line: "Why cloud sync and a USB drive aren't backups."
body: |
  <h2 class="t-h3" id="why-test">Why backups fail silently</h2>
  <p>Backup jobs run at night. The email says "completed". Nobody opens it. Months pass. Then a server dies, a laptop is stolen, or ransomware encrypts the shared drive, and the restore fails. These are the failures a success email never shows:</p>
  <ul>
    <li><strong>The wrong folder.</strong> A path changed months ago, so the job has been copying an empty folder ever since.</li>
    <li><strong>The lost key.</strong> The backup is encrypted, which is good, but nobody saved the encryption key anywhere else.</li>
    <li><strong>The slow restore.</strong> It works, but it takes three days over the office internet, not three hours.</li>
    <li><strong>The same blast radius.</strong> The backup drive was plugged in and writable, so the ransomware encrypted it too.</li>
    <li><strong>The missing piece.</strong> Files came back, but not the database, the email, or the settings that make the software run.</li>
  </ul>
  <p>I have seen versions of every one of these in real systems. The only way to find them is backup restore testing: actually bringing data back and checking it works.</p>

  <h2 class="t-h3" id="routine">A monthly backup restore testing routine</h2>
  <p>Put a recurring hour in the calendar. Each month, rotate what you test so every important system gets a turn within a quarter.</p>
  <ol>
    <li><strong>Pick a target.</strong> One shared folder, one mailbox, one database, or a whole server, in rotation.</li>
    <li><strong>Restore to a safe place.</strong> A spare computer, a test virtual machine or a separate folder. Never over the live data.</li>
    <li><strong>Time it.</strong> Note when you started and when the data was usable. That number is your real recovery time.</li>
    <li><strong>Check the data, not just the files.</strong> Open five random documents, run a report from the restored database, log in to the restored app.</li>
    <li><strong>Check the date.</strong> How old is the newest restored change? That is how much work you would lose.</li>
    <li><strong>Write it down.</strong> One line in a log: date, what was tested, time taken, result, and anything to fix.</li>
  </ol>

  <h2 class="t-h3" id="record">What to record each time</h2>
  <div class="prose__table"><table>
    <thead><tr><th>Field</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>Date and tester</td><td>3 Nov · Sarah (office manager)</td></tr>
      <tr><td>What was restored</td><td>Accounts shared folder, 14 GB</td></tr>
      <tr><td>Restore source</td><td>Offsite copy, not the local drive</td></tr>
      <tr><td>Time to usable</td><td>1 h 40 min</td></tr>
      <tr><td>Newest data in restore</td><td>Previous night, 11:00 pm</td></tr>
      <tr><td>Result and follow-up</td><td>Pass · one folder excluded by mistake, fixed</td></tr>
    </tbody>
  </table></div>
  <p>This log is also your evidence. Insurers and auditors increasingly ask "when did you last restore?", not "do you have backups?".</p>

  <h2 class="t-h3" id="essential-eight">Regular backups and the Essential Eight</h2>
  <p>In Australia, regular backups are one of the eight strategies in the ASD's Essential Eight. At maturity level 1, backups are expected to be kept according to how critical the data is, protected so ordinary accounts can't change or delete them, and restores tested as part of disaster recovery exercises. A monthly routine and a written log cover that requirement. The <a href="/blog/essential-eight-maturity-level-1/">Essential Eight checklist</a> explains the other seven.</p>

  <h2 class="t-h3" id="immutable">Ransomware recovery needs an immutable backup</h2>
  <p>Attackers go after backups first. If every copy is online and writable, they encrypt those too. For ransomware recovery you need at least one copy they cannot touch:</p>
  <ul>
    <li><strong>The 3-2-1 backup rule:</strong> three copies of the data, on two different kinds of storage, with one copy offsite.</li>
    <li><strong>One immutable backup:</strong> object storage with a retention lock, or a drive that is disconnected after each run, so nothing can delete or change it for a set number of days.</li>
    <li><strong>Separate credentials:</strong> the backup system's password is not the same as any staff or admin password.</li>
  </ul>
  <p>Test a restore from that protected copy at least once a quarter, because that is the one you will need on the worst day.</p>
  <p>If you only take one thing from this post: put a recurring hour in your calendar called "restore something", and keep the log. It is the cheapest insurance a business can buy. For the bigger picture of how I set backups up, read <a href="/blog/small-business-backup-solution/">the small business backup solution I'd build</a>, or see how I do it for clients in <a href="/solutions/small-business-backup/">backup and recovery</a>.</p>

---
