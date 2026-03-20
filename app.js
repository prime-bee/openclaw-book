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

function addBackToTopLinks() {
  const chapter = document.querySelector('.content.chapter');
  if (!chapter) return;
  chapter.querySelectorAll('h2').forEach((heading) => {
    if (heading.querySelector('.back-to-top')) return;
    const link = document.createElement('a');
    link.className = 'back-to-top';
    link.href = '#conteudo';
    link.textContent = 'Topo';
    link.setAttribute('aria-label', `Voltar ao topo a partir de ${heading.textContent.trim()}`);
    heading.append(' ', link);
  });
}

function addReadingProgress() {
  const chapter = document.querySelector('.content.chapter');
  if (!chapter) return;
  const bar = document.createElement('div');
  bar.id = 'reading-progress';
  bar.setAttribute('role', 'progressbar');
  bar.setAttribute('aria-label', 'Progresso de leitura');
  bar.setAttribute('aria-valuenow', '0');
  bar.setAttribute('aria-valuemin', '0');
  bar.setAttribute('aria-valuemax', '100');
  document.body.prepend(bar);
  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;
    bar.style.width = pct + '%';
    bar.setAttribute('aria-valuenow', pct);
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

function ensureGlobalSearch() {
  const main = document.querySelector('#conteudo') || document.querySelector('.content');
  if (!main || main.querySelector('.global-search-shell')) return;

  const legacyInput = document.getElementById('search-input');
  if (legacyInput) {
    const legacyCard = legacyInput.closest('.card');
    if (legacyCard) {
      legacyCard.classList.add('global-search-shell', 'search-widget');
      legacyCard.setAttribute('aria-labelledby', 'global-search-title');
      const label = legacyCard.querySelector('label strong');
      if (label) label.id = 'global-search-title';
      legacyInput.classList.add('js-search-input');
      legacyCard.querySelector('#search-clear')?.classList.add('js-search-clear');
      legacyCard.querySelector('#search-status')?.classList.add('js-search-status');
      legacyCard.querySelector('#search-results')?.classList.add('js-search-results');
      const breadcrumbs = main.querySelector('.breadcrumbs');
      if (breadcrumbs) {
        breadcrumbs.insertAdjacentElement('afterend', legacyCard);
      } else {
        main.prepend(legacyCard);
      }
      return;
    }
  }

  const shell = document.createElement('section');
  shell.className = 'global-search-shell card search-widget';
  shell.setAttribute('aria-labelledby', 'global-search-title');
  shell.innerHTML = `
    <h2 id="global-search-title">Busca no livro</h2>
    <p class="muted">Procure por tema, comando, capítulo ou palavra-chave. Dica: pressione <code>/</code> para focar na busca.</p>
    <div class="search-toolbar">
      <input type="text" placeholder="Buscar no livro..." class="search-input js-search-input" autocomplete="off" aria-label="Buscar no livro">
      <button type="button" class="button-link js-search-clear">Limpar</button>
    </div>
    <p class="meta js-search-status" aria-live="polite">Digite um termo para ver resultados.</p>
    <div class="grid search-results js-search-results"></div>
  `;
  const breadcrumbs = main.querySelector('.breadcrumbs');
  if (breadcrumbs) {
    breadcrumbs.insertAdjacentElement('afterend', shell);
  } else {
    main.prepend(shell);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceExternalLinks();
  ensureGlobalSearch();
  addHeadingAnchors();
  buildChapterToc();
  markCurrentNav();
  addBackToTopLinks();
  addReadingProgress();
});
