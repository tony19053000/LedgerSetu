```text
   ██╗     ███████╗██████╗  ██████╗ ███████╗██████╗ ███████╗███████╗████████╗██╗   ██╗
   ██║     ██╔════╝██╔══██╗██╔════╝ ██╔════╝██╔══██╗██╔════╝██╔════╝╚══██╔══╝██║   ██║
   ██║     █████╗  ██║  ██║██║  ███╗█████╗  ██████╔╝███████╗█████╗     ██║   ██║   ██║
   ██║     ██╔══╝  ██║  ██║██║   ██║██╔══╝  ██╔══██╗╚════██║██╔══╝     ██║   ██║   ██║
   ███████╗███████╗██████╔╝╚██████╔╝███████╗██║  ██║███████║███████╗   ██║   ╚██████╔╝
   ╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝    ╚═════╝
```

<div align="center">

**AI-powered receipt, invoice, and expense intelligence for modern businesses.**

[🔴 Live Demo](https://ledgersetu.onrender.com) **·** [📦 Source Code](https://github.com/tony19053000/LedgerSetu)

---

*Upload a bill. Get structured financial data back. Skip the spreadsheet typing.*

</div>

---

## The Real Bottleneck in Expense Management

Every expense tool on the market promises dashboards, charts, and reports. Almost none of them solve the part that actually wastes your time:

> A receipt shows up as a photo in WhatsApp. An invoice lands as a PDF attachment in Gmail. A vendor bill gets downloaded, renamed `invoice_final_v3.pdf`, and dropped into a folder that nobody opens again.
>
> Eventually someone sits down, opens a spreadsheet, and starts typing. Vendor name. Date. Amount. Tax. Category. One row at a time. For every single document.

That's not expense *management*. That's data entry with extra steps.

The friction in financial tooling has never been about building better filters or prettier charts. It's always been about **getting the data into the system in the first place**. If your tool still expects a human to read every receipt and type every field, you haven't solved the problem — you've just moved the spreadsheet into a browser.

**LedgerSetu attacks that first bottleneck directly.**

You upload a receipt, invoice, or bill. The AI reads it — vendor, amount, date, currency, tax, category — and structures it into a transaction-ready record. You review, edit if needed, and save. The document goes from a messy file to usable business data in seconds, not minutes.

---

## How It Works

```text
   ┌──────────────────────┐
   │  Upload Receipt/PDF   │
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────┐
   │  Store File Securely  │
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────────────┐
   │  Prepare Document for AI      │
   │  → image / preview handling   │
   │  → metadata extraction        │
   └──────────┬───────────────────┘
              │
              ▼
   ┌──────────────────────────────┐
   │  Analyze with AI              │
   │  → merchant / vendor name     │
   │  → amount / currency          │
   │  → invoice date / number      │
   │  → tax / GST details          │
   │  → category suggestion        │
   └──────────┬───────────────────┘
              │
              ▼
   ┌──────────────────────────────┐
   │  Review & Save Transaction    │
   │  → edit extracted fields      │
   │  → store in database          │
   │  → use in reports / exports   │
   └──────────────────────────────┘
```

The entire user flow reduces to four words: **Upload → Analyze → Review → Save.** Every design decision in LedgerSetu exists to keep that loop as tight as possible.

---

## Features

LedgerSetu does one job and goes deep on it — turning messy financial documents into clean, structured business data.

**`AI Document Extraction`** — Upload a receipt, invoice, or bill in any common format. The AI reads it and pulls out vendor name, amount, date, currency, tax breakdowns, and transaction type — no manual field-filling required.

**`Unsorted Review Queue`** — New uploads land in a staging area first. You analyze, verify, and correct before anything hits the ledger. This keeps your records clean instead of dumping unverified data straight into the system.

**`Transaction Structuring`** — Every extracted document becomes a proper transaction record — filterable, sortable, exportable, and ready for bookkeeping workflows.

**`Multi-Currency Handling`** — Built for businesses that spend across borders. Each transaction carries its own currency, with base reporting support for reconciliation.

**`Tax-Aware Capture`** — Supports GST-friendly field extraction and invoice-style data patterns, so the records are useful come tax season — not just pretty in a dashboard.

**`Custom Categories & Projects`** — Tag expenses by department, client, campaign, or any label that matches how your business actually organizes spend.

**`CSV Import / Export`** — Move structured data in and out of the system for reporting, reconciliation, or handoff to downstream accounting tools.

**`Server-Managed AI`** — End users never touch API keys. AI providers are configured and secured on the backend. Users just upload and review — the infrastructure stays invisible.

---

## Tech Stack

```text
┌──────────────────────────────────────────────┐
│              LedgerSetu Stack                │
├──────────────┬───────────────────────────────┤
│  Frontend    │  Next.js, React, TypeScript   │
│  Backend     │  Next.js Server Actions / API │
│  Database    │  PostgreSQL, Prisma ORM       │
│  AI Layer    │  Google Gemini, Mistral       │
│  Auth        │  Better Auth                  │
│  Styling     │  Tailwind CSS                 │
│  Deployment  │  Render                       │
└──────────────┴───────────────────────────────┘
```

LedgerSetu isn't a decoupled frontend-backend split — it's a unified full-stack Next.js application. The UI, server logic, AI integration, authentication, and database layer all live in one codebase. Prisma handles schema management and migrations against PostgreSQL. Gemini and Mistral power the document extraction pipeline on the server side. Better Auth manages user sessions. Tailwind keeps the styling layer fast and consistent. The whole thing deploys as a single service on Render.

---

## Local Setup

Get LedgerSetu running locally:

```bash
# Clone the repository
git clone https://github.com/tony19053000/LedgerSetu.git
cd LedgerSetu

# Install dependencies
npm install

# Copy the example environment file
cp .env.example .env.local
```

Open `.env.local` and fill in your configuration:

```env
DATABASE_URL=your_postgres_connection_string
BETTER_AUTH_SECRET=your_auth_secret
SELF_HOSTED_MODE=true
DISABLE_SIGNUP=false
UPLOAD_PATH=./uploads
GOOGLE_API_KEY=your_gemini_key
MISTRAL_API_KEY=your_mistral_key
# OPENAI_API_KEY=optional
```

Set up the database:

```bash
npx prisma generate
npx prisma migrate deploy
```

Start the dev server:

```bash
npm run dev
```

Or build and run in production mode:

```bash
npm run build
npm start
```

Open [http://localhost:7331](http://localhost:7331) and upload your first document.

---

## Who It's For

LedgerSetu fits anywhere the gap between "documents pile up" and "records exist in a system" is costing someone time. That includes **freelancers** tracking receipts and vendor bills, **small businesses** trying to organize expense records without a full accounting team, **startups** managing a mix of software subscriptions, cloud bills, travel costs, and vendor invoices, **agencies** tagging expenses by client or project, and **founders or operators** who want a clean review-and-approve flow before handing records off to finance.

---

## Why This Project Matters

Most expense tools start at the dashboard layer and work backwards — assuming that by the time data reaches the system, it's already clean and structured. That assumption is almost never true.

In practice, financial data starts as a photo of a receipt, a forwarded email attachment, or a PDF that someone downloaded three weeks ago. The entire value of an expense system depends on how well it handles that messy first step: reading the document, extracting the right fields, and getting it into a structured format without requiring the user to do the hard part manually.

LedgerSetu is built around solving that exact problem. It combines document ingestion, AI-powered field extraction, a human-in-the-loop review stage, and structured database storage into one cohesive flow. That makes it meaningful both as a real product that people can use and as a full-stack portfolio project that demonstrates end-to-end system design — from file upload to AI pipeline to persistent storage to user-facing workflows.

---

## Product Direction

LedgerSetu runs as a web application with server-managed AI. Users upload through the browser, AI processes on the backend, API keys never leave the server, and the interface is focused entirely on review and decision-making — not infrastructure management. The long-term direction is straightforward: make business document handling faster, cleaner, and less manual with every iteration.

---

## License & Attribution

This project is distributed under the **MIT License**. See the [`LICENSE`](LICENSE) file for details.

LedgerSetu is a customized adaptation of an earlier MIT-licensed open-source project. Required license and attribution terms have been preserved in this repository.

---

<div align="center">

**Stop typing receipt data by hand.**

[Try LedgerSetu →](https://ledgersetu.onrender.com)

</div>
