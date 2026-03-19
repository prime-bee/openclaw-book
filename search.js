const SEARCH_INDEX = [
  { title: 'Início', path: 'index.html', text: 'openclaw book livro didático html guia portugues gateway cli memória canais modelos multi-agent automação sandbox browser troubleshooting referências trilhas leitura' },
  { title: 'Glossário', path: 'glossario.html', text: 'glossário termos conceitos definições gateway sessão workspace agente provedor canal sandbox' },
  { title: 'Sobre', path: 'about.html', text: 'sobre projeto filosofia editorial objetivo escopo didática documentação oficial' },
  { title: 'Contribuindo', path: 'contributing.html', text: 'contribuição contribuir issues melhorias revisão editorial links consistência pull request' },
  { title: '1. Visão geral', path: 'chapters/01-visao-geral.html', text: 'o que é openclaw gateway self-hosted agentes ia canais workspace modelo sessão' },
  { title: '2. Arquitetura', path: 'chapters/02-arquitetura.html', text: 'arquitetura gateway clientes nodes sessões websocket connect request response event' },
  { title: '3. Gateway', path: 'chapters/03-gateway.html', text: 'gateway status logs service auth bind porta restart doctor' },
  { title: '4. CLI', path: 'chapters/04-cli.html', text: 'cli comandos status health logs gateway channels models sessions agent memory' },
  { title: '5. Memória e workspace', path: 'chapters/05-memoria-e-workspace.html', text: 'memory workspace markdown MEMORY md diário long term search get arquivos bootstrap' },
  { title: '6. Canais e operação', path: 'chapters/06-canais-e-rotina.html', text: 'telegram whatsapp discord slack signal channels groups rotina uso mention allowlist' },
  { title: '7. Modelos e provedores', path: 'chapters/07-modelos-e-provedores.html', text: 'models providers fallbacks image model allowlist model status selection auth' },
  { title: '8. Multi-agent e roteamento', path: 'chapters/08-multi-agent-e-roteamento.html', text: 'multi-agent bindings routing workspace agentdir auth sessions isolation' },
  { title: '9. Automação', path: 'chapters/09-automacoes-cron-e-heartbeat.html', text: 'cron heartbeat scheduler reminder isolated session wake delivery' },
  { title: '10. Sandbox e segurança', path: 'chapters/10-sandbox-e-seguranca-pratica.html', text: 'sandbox docker workspace access ro rw exec elevated security blast radius' },
  { title: '11. Browser e controle remoto', path: 'chapters/11-browser-e-controle-remoto.html', text: 'browser cdp chrome relay snapshot screenshot click type profile remote' },
  { title: '12. Receitas passo a passo', path: 'chapters/12-receitas-passo-a-passo.html', text: 'receitas setup telegram heartbeat cron agents passo a passo' },
  { title: '13. Troubleshooting', path: 'chapters/13-troubleshooting-e-diagnostico.html', text: 'diagnóstico troubleshooting status logs doctor probe errors symptoms fixes' },
  { title: '14. Referências oficiais', path: 'chapters/14-referencias-oficiais.html', text: 'referências oficiais docs openclaw bibliografia links tópicos' },
  { title: '15. Roadmap', path: 'chapters/15-roadmap-e-proximos-passos.html', text: 'roadmap editorial próximos passos melhorias projeto openclaw book' }
];

function scoreEntry(query, entry) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const hay = (entry.title + ' ' + entry.text).toLowerCase();
  if (entry.title.toLowerCase() === q) return 100;
  let score = 0;
  q.split(/\s+/).forEach(token => {
    if (entry.title.toLowerCase().includes(token)) score += 12;
    if (hay.includes(token)) score += 5;
  });
  return score;
}

function excerpt(entry) {
  return entry.text.split(/\s+/).slice(0, 18).join(' ') + '…';
}

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
}

function escapeRegex(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, query) {
  const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (!tokens.length) return escapeHtml(text);
  const pattern = new RegExp(`(${tokens.map(escapeRegex).join('|')})`, 'ig');
  return escapeHtml(text).replace(pattern, '<mark>$1</mark>');
}

function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const status = document.getElementById('search-status');
  const clear = document.getElementById('search-clear');
  if (!input || !results) return;

  function render() {
    const q = input.value.trim();
    if (!q) {
      results.innerHTML = '';
      if (status) status.textContent = 'Digite um termo para ver resultados.';
      return;
    }

    const ranked = SEARCH_INDEX.map(e => ({ ...e, score: scoreEntry(q, e) }))
      .filter(e => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    if (!ranked.length) {
      results.innerHTML = '<div class="card"><strong>Nada encontrado.</strong><p class="muted">Tente termos como gateway, cron, telegram, sandbox, browser, memória ou multi-agent.</p></div>';
      if (status) status.textContent = `Nenhum resultado para “${q}”.`;
      return;
    }

    if (status) status.textContent = `${ranked.length} resultado(s) para “${q}”.`;
    results.innerHTML = ranked.map(e => `
      <a class="card" href="${e.path}">
        <strong>${highlight(e.title, q)}</strong>
        <p class="muted">${e.path}</p>
        <p>${highlight(excerpt(e), q)}</p>
      </a>
    `).join('');
  }

  input.addEventListener('input', render);
  clear?.addEventListener('click', () => {
    input.value = '';
    render();
    input.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === '/' && document.activeElement !== input && !event.metaKey && !event.ctrlKey && !event.altKey) {
      event.preventDefault();
      input.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', initSearch);
