---
template: article
order: 1
date: 2026-11-01
icon: bot
topic: Private AI
minutes: 7
seo:
  path: /blog/private-ai-for-business/
  title: "Private AI for Business: Run LLMs On-Site | Ruhan Islam"
  description: "Banning ChatGPT or buying a GPU server are the usual answers. Why both often fail, and what private AI for business should look like instead."
  og-title: "Private AI for business: ban it, buy a GPU, or neither?"
  og-image-alt: "Private AI on-premise: a local LLM running on business hardware"
  index: "true"
keywords:
  primary: private AI for business
  secondary:
    - local LLM
    - private ChatGPT
    - document search
    - self-hosted
    - client data
hero:
  crumb: Blog
  kicker: "Private AI · opinion + how-to"
  line: "Private AI for business: ban it, buy a GPU, or neither?"
  lede: "The usual answer to \"our team pastes client data into ChatGPT\" is either a strict ban or an expensive GPU server. I think both are wrong. Here is what private AI for business really involves, and when it is worth it."
more:
  - name: "Backup restore testing for small business"
    path: "/blog/backup-restore-testing/"
    line: "The one-hour habit that makes backups real."
  - name: "Essential Eight maturity level 1 checklist"
    path: "/blog/essential-eight-maturity-level-1/"
    line: "Australia's security baseline, in plain English."
  - name: "The small business backup solution I'd set up for you"
    path: "/blog/small-business-backup-solution/"
    line: "Why cloud sync and a USB drive aren't backups."
body: |
  <h2 class="t-h3" id="problem">The problem: client data in a public chatbot</h2>
  <p>Ask any small team and someone has pasted a contract, a client email or a spreadsheet into a public chatbot to "just summarise it". Nobody meant harm. It was faster. But that data now sits on someone else's servers under someone else's terms, and the business never decided that was fine.</p>

  <h2 class="t-h3" id="critique">Two popular fixes, and why I don't like them</h2>
  <p><strong>"Ban AI."</strong> It doesn't work. People keep using it on their phones, just without telling anyone. You lose the visibility you had and keep the risk.</p>
  <p><strong>"Buy a big GPU server and run everything locally."</strong> It sounds like the safe choice, and sometimes it is. But I often see it sold before anyone has measured what the team actually asks. The result is an expensive machine running a model that is weaker than what people had before, so they quietly go back to the public chatbot.</p>
  <p>The better answer is simpler: keep the documents, the history and the rules on a machine you control, and decide carefully what is allowed to go out. That is the useful core of <strong>private AI for business</strong>.</p>

  <h2 class="t-h3" id="what">What "private" actually means</h2>
  <p>People use the word loosely, so here is how I split it:</p>
  <ul>
    <li><strong>Fully local:</strong> a local LLM runs on your own hardware, with tools like Ollama and Open WebUI. Nothing leaves the building. This is the strictest option.</li>
    <li><strong>Self-hosted, API model:</strong> the app, the documents and the history live on your server; only the question (ideally with names removed) goes to a model provider under a business agreement. Cheaper, and the answers are often better.</li>
    <li><strong>Public chatbot:</strong> everything goes to the provider. Fine for general questions, not for client data.</li>
  </ul>
  <p>Most small businesses I talk to don't need the strictest option for everything. They need a clear line: which data may go out, and which never does.</p>

  <h2 class="t-h3" id="document-search">Where it shines: document search</h2>
  <p>The use that wins people over is almost always <strong>document search</strong>. You point a private ChatGPT-style assistant at your contracts, policies, manuals and past proposals, and ask in plain language: "What notice period did we agree with this supplier?" It answers and shows the file and page it took the answer from.</p>
  <p>The technique is called retrieval-augmented generation. Your files are split into chunks and indexed; when you ask, the system finds the right chunks and hands only those to the model. It doesn't "learn" your data, so you can remove a document and it is gone from the answers the next minute.</p>

  <h2 class="t-h3" id="hardware">What a local LLM needs</h2>
  <p>Honest numbers, because this is where expectations go wrong:</p>
  <ul>
    <li>A 7–14 billion parameter model runs well on a server with a single modern GPU and 32–64 GB of RAM. That is enough for summaries, drafting and document search for a small team.</li>
    <li>Bigger models give better reasoning but need far more memory. Quantised versions trade a little quality for a lot less hardware.</li>
    <li>Without a GPU it still works, just slowly. Fine for overnight jobs, painful for chat.</li>
  </ul>
  <p>My rule: start with the self-hosted, API-model setup, measure what people actually ask, and only buy hardware for a fully local model when the data truly can't leave.</p>

  <h2 class="t-h3" id="client-data">Protecting client data</h2>
  <p>A self-hosted setup is not automatically safe. The things I always add:</p>
  <ul>
    <li><strong>Redaction before anything leaves:</strong> names, phone numbers, account and ID numbers are masked before a question goes to an outside model.</li>
    <li><strong>Permissions that match your folders:</strong> if someone can't open the HR folder, the assistant won't quote it to them either.</li>
    <li><strong>An audit log:</strong> who asked what, and which documents were used in the answer.</li>
    <li><strong>Backups and updates</strong> like any other business system. It is software, it needs care.</li>
  </ul>

  <h2 class="t-h3" id="when-not">When I'd tell you not to bother</h2>
  <p>If your team only uses AI for general writing and research, with no client data involved, a business plan from a major provider is simpler and perfectly reasonable. Private AI earns its keep when the documents are sensitive, when you need answers with sources, or when per-seat prices add up across a team.</p>
  <p>If you are weighing it up, I'm happy to look at what your team actually does and tell you honestly which side you are on. That's the kind of work I do through <a href="/solutions/ai-agent-development/">AI agents and private ChatGPT setups</a>.</p>
---
