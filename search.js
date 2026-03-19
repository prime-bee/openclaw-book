const SEARCH_INDEX = [
  { title: 'Início', path: 'index.html', text: 'openclaw book livro didático html gateway cli memória canais modelos multi-agent automação sandbox browser troubleshooting referências' },
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
  { title: '14. Referências oficiais', path: 'chapters/14-referencias-oficiais.html', text: 'referências oficiais docs openclaw bibliografia links tópicos' }
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
function initSearch() {
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;
  function render() {
    const q = input.value.trim();
    if (!q) { results.innerHTML = ''; return; }
    const ranked = SEARCH_INDEX.map(e => ({...e, score: scoreEntry(q,e)}))
      .filter(e => e.score > 0)
      .sort((a,b)=>b.score-a.score)
      .slice(0,8);
    if (!ranked.length) {
      results.innerHTML = '<div class="card"><strong>Nada encontrado.</strong><p class="muted">Tente termos como gateway, cron, telegram, sandbox ou browser.</p></div>';
      return;
    }
    results.innerHTML = ranked.map(e => `<a class="card" href="${e.path}"><strong>${e.title}</strong><p class="muted">${e.path}</p></a>`).join('');
  }
  input.addEventListener('input', render);
}
document.addEventListener('DOMContentLoaded', initSearch);
