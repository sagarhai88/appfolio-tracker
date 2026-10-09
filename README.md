# AppFolio Accounting Tracker

A simple shared checklist + calendar for the monthly and yearly AppFolio accounting work.
Static site, no backend — runs on GitHub Pages and saves checkmarks to `data/status.json` in this repo.

## Setup (one time, ~5 minutes)

1. **Create the repo on GitHub** (e.g. `appfolio-tracker`) and push this folder to it.
2. **Turn on GitHub Pages:** repo → Settings → Pages → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
   The site will be at `https://sagarhai88.github.io/appfolio-tracker/`.
3. **Point the site at the repo:** in `config.js`, set `sync.repo` to `"sagarhai88/appfolio-tracker"` and push.
4. **Give each user a token** so their checkmarks save for everyone:
   - GitHub → Settings → Developer settings → Personal access tokens → *Fine-grained tokens* → Generate.
   - Repository access: *Only select repositories* → this repo.
   - Permissions: *Contents → Read and write*. Nothing else.
   - On the site, click **Settings**, enter a name and paste the token. It is stored only in that browser.

   Without a token the page still works, but checkmarks stay in that browser only.

> Note: GitHub Pages on a **private** repo needs a paid GitHub plan. On a free account the repo must be public.
> The page only contains bank/entity *names* and property addresses — no account numbers.

## Editing the task list

Everything lives in `config.js`:

- `banks` — the bank accounts to reconcile each month (from the AppFolio *Bank Account Association* export).
- `monthly` — monthly tasks. `dueDay` is the day the task is due; `followingMonth: true` means it's due in the month *after* the period (September's reconciliations due October 15).
- `yearly` — yearly tasks with a `dueDate` of `MM-DD`.

Commit the change and the live page updates in about a minute.

## How checkmarks are stored

`data/status.json`, keyed by period:

```json
{
  "2026-09": {
    "recon:trinity": { "done": true, "by": "Sagar", "at": "2026-10-09T15:00:00Z" },
    "rent-receipts": { "done": true, "by": "…", "at": "…" }
  },
  "yearly-2026": { "1099s": { "done": true, "by": "…", "at": "…" } }
}
```

Each save is a commit, so the repo history is the audit trail of who checked what and when.
