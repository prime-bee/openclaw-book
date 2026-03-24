#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
HTML_FILES = sorted(ROOT.glob('*.html')) + sorted((ROOT / 'chapters').glob('*.html'))
CHAPTER_FILES = sorted((ROOT / 'chapters').glob('*.html'))
JS_FILES = [ROOT / 'app.js', ROOT / 'search.js']
CSS_FILES = [ROOT / 'styles.css']

errors = []


def require(text, needle, file):
    if needle not in text:
        errors.append(f'{file}: missing {needle}')


def normalize_label(text):
    text = re.sub(r'^\s*\d+[.:]?\s*', '', text.strip())
    text = text.replace('—', ' ')
    text = re.sub(r'\s+', ' ', text)
    return text.casefold()


def extract_title(text, file):
    m = re.search(r'<title>(.*?)</title>', text, re.S)
    if not m:
        errors.append(f'{file}: missing <title> content')
        return ''
    return re.sub(r'\s+', ' ', m.group(1)).strip()


def extract_h1(text, file):
    m = re.search(r'<h1>(.*?)</h1>', text, re.S)
    if not m:
        errors.append(f'{file}: missing <h1> content')
        return ''
    return re.sub(r'<[^>]+>', '', m.group(1)).strip()


def extract_sidebar_nav(text):
    m = re.search(r'<aside class="sidebar">.*?<nav class="nav">(.*?)</nav>', text, re.S)
    return m.group(1) if m else ''


def extract_active_sidebar_label(text, file):
    nav = extract_sidebar_nav(text)
    active = re.search(r'<a class="active" href="([^"]+)">([^<]+)</a>', nav)
    if not active:
        errors.append(f'{file}: missing active sidebar link')
        return None
    return active.group(2).strip()


def extract_sidebar_links(text):
    nav = extract_sidebar_nav(text)
    return re.findall(r'<a(?: class="active")? href="([^"]+\.html)">([^<]+)</a>', nav)


def extract_search_index_paths(search_js):
    return set(re.findall(r"path:\s*'([^']+)'", search_js))


def has_meaningful_overlap(a, b):
    a_tokens = [t for t in re.split(r'[^\wÀ-ÿ]+', a) if len(t) >= 4]
    b_tokens = [t for t in re.split(r'[^\wÀ-ÿ]+', b) if len(t) >= 4]
    if set(a_tokens) & set(b_tokens):
        return True
    for ta in a_tokens:
        for tb in b_tokens:
            if ta[:6] == tb[:6]:
                return True
    return False


for file in HTML_FILES:
    text = file.read_text(encoding='utf-8')
    require(text, '<title>', file)
    require(text, 'lang="pt-BR"', file)
    require(text, '<meta name="description"', file)
    require(text, '<meta name="theme-color"', file)
    require(text, 'class="skip-link"', file)
    require(text, '<link rel="canonical"', file)
    require(text, 'aria-label="Breadcrumb"', file)
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

chapter_numbers = []
for chapter in CHAPTER_FILES:
    m = re.match(r'(\d+)-', chapter.name)
    if m:
        chapter_numbers.append((int(m.group(1)), chapter))
chapter_by_num = {num: file for num, file in chapter_numbers}

for index, (num, file) in enumerate(chapter_numbers):
    text = file.read_text(encoding='utf-8')
    pager = re.search(r'<nav class="chapter-pager"[^>]*>(.*?)</nav>', text, re.S)
    if not pager:
        errors.append(f'{file}: missing chapter pager')
        continue
    pager_html = pager.group(1)
    links = re.findall(r'<a class="pager-link(?: [^"]*)?" href="([^"]+)">([^<]+)</a>', pager_html)
    hrefs = [href for href, _ in links if href.endswith('.html')]
    if index > 0:
        prev_expected = chapter_by_num[num - 1].name
        if prev_expected not in hrefs:
            errors.append(f'{file}: pager missing previous chapter link to {prev_expected}')
    if index < len(chapter_numbers) - 1:
        next_expected = chapter_by_num[num + 1].name
        if next_expected not in hrefs:
            errors.append(f'{file}: pager missing next chapter link to {next_expected}')

search_js_text = (ROOT / 'search.js').read_text(encoding='utf-8')
indexed_paths = extract_search_index_paths(search_js_text)
for chapter in CHAPTER_FILES:
    rel = 'chapters/' + chapter.name
    if rel not in indexed_paths:
        errors.append(f'search.js: capítulo não indexado: {rel}')

sidebar_labels_by_target = {}
for file in CHAPTER_FILES:
    text = file.read_text(encoding='utf-8')
    title = normalize_label(extract_title(text, file).replace('Capítulo', '').replace('— openclaw-book', ''))
    h1 = normalize_label(extract_h1(text, file))
    active_label = extract_active_sidebar_label(text, file)
    if active_label:
        normalized_label = normalize_label(active_label)
        if not (normalized_label in title or title in normalized_label or normalized_label in h1 or h1 in normalized_label or has_meaningful_overlap(normalized_label, title) or has_meaningful_overlap(normalized_label, h1)):
            errors.append(f'{file}: active sidebar label "{active_label}" diverge de title/h1')
    for href, label in extract_sidebar_links(text):
        if href.startswith('../') or href in ('../index.html', '../reading-paths.html', '../glossario.html', '../about.html'):
            continue
        sidebar_labels_by_target.setdefault(href, set()).add(label.strip())

for href, labels in sorted(sidebar_labels_by_target.items()):
    if len(labels) > 1:
        errors.append(f'sidebar labels for {href} are inconsistent: {sorted(labels)}')

if errors:
    print('VALIDATION FAILED')
    for err in errors:
        print('-', err)
    sys.exit(1)

print(f'Validation OK: {len(HTML_FILES)} HTML files checked.')
