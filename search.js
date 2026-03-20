const SEARCH_INDEX = [
  { title: 'Início', path: 'index.html', text: 'openclaw book livro didático html guia portugues gateway cli memória canais modelos multi-agent automação sandbox browser troubleshooting referências trilhas leitura' },
  { title: 'Glossário', path: 'glossario.html', text: 'glossário termos conceitos definições gateway sessão workspace agente provedor canal sandbox' },
  { title: 'Trilhas de leitura', path: 'reading-paths.html', text: 'trilhas de leitura perfis iniciante operador builder mantenedor ordem de capítulos roteiro estudo onboarding operação automação segurança troubleshooting governança' },
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
  { title: '15. Roadmap', path: 'chapters/15-roadmap-e-proximos-passos.html', text: 'roadmap editorial próximos passos melhorias projeto openclaw book' },
  { title: '16. Agentes IA: fluxos e delegação', path: 'chapters/16-agentes-ia-fluxos-e-delegacao.html', text: 'agentes ia fluxos delegação avaliação prompt strategy human-in-the-loop memória contexto injection prompt injection riscos anti-padrões system prompt escopo confirmação ferramentas' },
  { title: '17. Missões e desafios', path: 'chapters/17-missoes-e-desafios.html', text: 'missões desafios gamificado níveis recruta operador especialista mestre scorecard drills exercícios boss fight aprender operando prática' },
  { title: '18. Engenharia de prompts', path: 'chapters/18-engenharia-de-prompts.html', text: 'engenharia prompts system prompt few-shot chain-of-thought CoT saídas estruturadas JSON markdown anti-padrões instruções vagas escopo iteração template agente operações' },
  { title: '19. Observabilidade e monitoramento', path: 'chapters/19-observabilidade-e-monitoramento.html', text: 'observabilidade monitoramento logs estruturados métricas traces alertas dashboard operadores agentes IA latência P50 P95 tokens trace_id OpenTelemetry auditoria rate limits escalada heartbeat relatório operacional' },
  { title: '20. HITL e Governança', path: 'chapters/20-hitl-e-governanca.html', text: 'human-in-the-loop hitl governança aprovação gates auditoria EU AI Act NIST AI RMF override conformidade políticas revisão humana' },
  { title: '21. Skills e capacidades', path: 'chapters/21-skills-e-composicao-de-capacidades.html', text: 'skills capacidades tools playbooks agentskills clawhub workspace skills local skills gating env bins config sandbox skill design skill security' },
  { title: '22. LLMs, plataformas e orquestração', path: 'chapters/22-llms-plataformas-orquestracao-e-openclaw-para-openclaw.html', text: 'llms plataformas orquestração openclaw para openclaw multi-agent modelos provedores brokers openrouter coordenação agentes arquitetura loops custos' },
  { title: '23. Personalidade de agentes', path: 'chapters/23-personalidade-de-agentes-como-projetar-e-o-que-melhora.html', text: 'personalidade persona identidade tom limites estilo operacional sycophancy antropomorfismo system prompt comportamento consistência agente' },
  { title: '24. RAG e retrieval', path: 'chapters/24-rag-e-retrieval-para-agentes.html', text: 'rag retrieval grounding memória contexto chunking ranking embeddings busca semântica keyword híbrida vector database prompt injection documentos snippets evidência' },
  { title: '25. Design de ferramentas para agentes', path: 'chapters/25-design-de-ferramentas-para-agentes.html', text: 'design de ferramentas tools contratos schema entrada saída ergonomia idempotência observabilidade blast radius sandbox tool policy approvals interface tool design agentes openclaw' },
  { title: '26. Múltiplos OpenClaw no host', path: 'chapters/26-multiplos-openclaw-na-mesma-maquina.html', text: 'múltiplos openclaw mesma máquina multiple gateways same host perfis profiles rescue bot state dir config path workspace port mapping cdp browser control derived ports isolation' },
  { title: '27. Migrando com segurança', path: 'chapters/27-migrando-de-um-para-multiplos-gateways-com-seguranca.html', text: 'migração migration multiple gateways rollback parallel run phased rollout cutover rescue lab portas profiles state dir health doctor' },
  { title: '28. Arquiteturas de produção', path: 'chapters/28-arquiteturas-de-producao-para-openclaw.html', text: 'produção production architecture single host home server tailnet main rescue lab control plane remote ssh tailscale health patterns' }
];

function normalizeText(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function scoreEntry(query, entry) {
  const q = normalizeText(query.trim());
  if (!q) return 0;
  const hay = normalizeText(entry.title + ' ' + entry.text + ' ' + entry.path);
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
