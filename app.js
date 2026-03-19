function slugify(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function enhanceExternalLinks() {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    if (!link.rel.includes('noopener')) link.rel = (link.rel + ' noopener noreferrer').trim();
    const currentLabel = link.getAttribute('aria-label');
    if (!currentLabel) {
      link.setAttribute('aria-label', `${link.textContent.trim()} (abre em nova guia)`);
    }
  });
}

function addHeadingAnchors() {
  const headings = document.querySelectorAll('.content.chapter h2, .content.chapter h3');
  headings.forEach((heading, idx) => {
    if (!heading.id) heading.id = `${slugify(heading.textContent) || 'secao'}-${idx + 1}`;
    if (heading.querySelector('.heading-anchor')) return;
    const anchor = document.createElement('a');
    anchor.className = 'heading-anchor';
    anchor.href = `#${heading.id}`;
    anchor.setAttribute('aria-label', `Link direto para ${heading.textContent.trim()}`);
    anchor.textContent = '#';
    heading.append(' ', anchor);
  });
}

function buildChapterToc() {
  const chapter = document.querySelector('.content.chapter');
  if (!chapter) return;
  const headings = [...chapter.querySelectorAll('h2, h3')].filter(h => !h.closest('.refs') && !h.closest('.diagram'));
  if (headings.length < 3) return;
  headings.forEach((heading, idx) => {
    if (!heading.id) heading.id = `${slugify(heading.textContent) || 'secao'}-${idx + 1}`;
  });
  const toc = document.createElement('section');
  toc.className = 'toc';
  toc.setAttribute('aria-labelledby', 'toc-title');
  toc.innerHTML = `<h2 id="toc-title">Neste capítulo</h2><ol>${headings.map(h => `<li class="toc-${h.tagName.toLowerCase()}"><a href="#${h.id}">${h.textContent.replace(/ #$/, '')}</a></li>`).join('')}</ol>`;
  const intro = chapter.querySelector('.chapter-intro');
  if (intro) intro.insertAdjacentElement('afterend', toc);
}

function markCurrentNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.endsWith(path)) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceExternalLinks();
  addHeadingAnchors();
  buildChapterToc();
  markCurrentNav();
});
