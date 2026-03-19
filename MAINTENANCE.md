# MAINTENANCE.md

## Quick validation

Run before merging content or publishing updates:

```bash
python3 scripts/validate-site.py
node --check app.js
node --check search.js
```

## What the validation covers

- core metadata on every HTML page
- presence of JSON-LD structured data
- title/description/canonical/h1 sanity checks
- robots/sitemap consistency
- existence of core CSS/JS assets

## Editorial rule of thumb

Prefer small focused edits, keep explicit references to official docs when relevant, and preserve the book's didactic flow.
