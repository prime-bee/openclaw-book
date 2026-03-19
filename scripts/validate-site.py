#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
HTML_FILES = sorted(ROOT.glob('*.html')) + sorted((ROOT / 'chapters').glob('*.html'))
JS_FILES = [ROOT / 'app.js', ROOT / 'search.js']
CSS_FILES = [ROOT / 'styles.css']

errors = []

def require(text, needle, file):
    if needle not in text:
        errors.append(f'{file}: missing {needle}')

for file in HTML_FILES:
    text = file.read_text(encoding='utf-8')
    require(text, '<title>', file)
    require(text, '<meta name="description"', file)
    require(text, '<link rel="canonical"', file)
    require(text, 'application/ld+json', file)
    require(text, '<h1>', file)
    for match in re.finditer(r"<a\b[^>]*target=[\"']_blank[\"'][^>]*>", text):
        tag = match.group(0)
        if 'rel=' not in tag or 'noopener' not in tag or 'noreferrer' not in tag:
            errors.append(f'{file}: external link missing rel noopener noreferrer: {tag}')

for file in JS_FILES + CSS_FILES:
    if not file.exists():
        errors.append(f'{file}: file missing')
    elif not file.read_text(encoding='utf-8').strip():
        errors.append(f'{file}: empty file')

robots = (ROOT / 'robots.txt').read_text(encoding='utf-8')
if 'Sitemap:' not in robots:
    errors.append('robots.txt: missing sitemap reference')

sitemap = (ROOT / 'sitemap.xml').read_text(encoding='utf-8')
for file in HTML_FILES:
    rel = file.relative_to(ROOT).as_posix()
    if rel == '404.html':
        continue
    url = 'https://prime-bee.github.io/openclaw-book/' + ('' if rel == 'index.html' else rel)
    if url not in sitemap:
        errors.append(f'sitemap.xml: missing {url}')

if errors:
    print('VALIDATION FAILED')
    for err in errors:
        print('-', err)
    sys.exit(1)

print(f'Validation OK: {len(HTML_FILES)} HTML files checked.')
