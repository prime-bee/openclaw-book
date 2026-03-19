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

## Pre-publish checklist

- validar HTML e JS localmente
- abrir a home, um capítulo intermediário e a página 404
- confirmar busca, breadcrumbs, navegação anterior/próximo e links externos
- revisar sitemap/robots se novas páginas foram adicionadas
- conferir se páginas novas têm descrição, canonical e JSON-LD

## Editorial rule of thumb

Prefer small focused edits, keep explicit references to official docs when relevant, and preserve the book's didactic flow.

## Official page template

Use `templates/PAGE_TEMPLATE.html` as the source template for new chapters/pages.

Rules:
- if you add a new recurring structural pattern, update `templates/PAGE_TEMPLATE.html` first
- chapter pages should usually keep:
  - breadcrumbs
  - chapter intro
  - references block
  - quick navigation / pager
- utility pages may omit some blocks when clarity improves
- validate after creating or reshaping pages
