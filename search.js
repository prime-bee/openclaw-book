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
  { title: '6. Canais e rotina', path: 'chapters/06-canais-e-rotina.html', text: 'telegram whatsapp discord slack signal channels groups rotina uso mention allowlist' },
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
  { title: '19. Observabilidade e monitoramento', path: 'chapters/19-observabilidade-e-monitoramento.html', text: 'observabilidade monitoramento logs estruturados métricas traces alertas dashboard operadores agentes IA latência P50 P95 tokens trace_id OpenTelemetry auditoria rate limits escalada heartbeat relatório operacional slo error budget' },
  { title: '20. HITL e Governança', path: 'chapters/20-hitl-e-governanca.html', text: 'human-in-the-loop hitl governança aprovação gates auditoria EU AI Act NIST AI RMF override conformidade políticas revisão humana' },
  { title: '21. Skills e capacidades', path: 'chapters/21-skills-e-composicao-de-capacidades.html', text: 'skills capacidades tools playbooks agentskills clawhub workspace skills local skills gating env bins config sandbox skill design skill security' },
  { title: '22. LLMs, plataformas e orquestração', path: 'chapters/22-llms-plataformas-orquestracao-e-openclaw-para-openclaw.html', text: 'llms plataformas orquestração openclaw para openclaw multi-agent modelos provedores brokers openrouter coordenação agentes arquitetura loops custos' },
  { title: '23. Personalidade de agentes', path: 'chapters/23-personalidade-de-agentes-como-projetar-e-o-que-melhora.html', text: 'personalidade persona identidade tom limites estilo operacional sycophancy antropomorfismo system prompt comportamento consistência agente' },
  { title: '24. RAG e retrieval', path: 'chapters/24-rag-e-retrieval-para-agentes.html', text: 'rag retrieval grounding memória contexto chunking ranking embeddings busca semântica keyword híbrida vector database prompt injection documentos snippets evidência' },
  { title: '25. Design de ferramentas para agentes', path: 'chapters/25-design-de-ferramentas-para-agentes.html', text: 'design de ferramentas tools contratos schema entrada saída ergonomia idempotência observabilidade blast radius sandbox tool policy approvals interface tool design agentes openclaw' },
  { title: '26. Múltiplos OpenClaw no host', path: 'chapters/26-multiplos-openclaw-na-mesma-maquina.html', text: 'múltiplos openclaw mesma máquina multiple gateways same host perfis profiles rescue bot state dir config path workspace port mapping cdp browser control derived ports isolation' },
  { title: '27. Migrando com segurança', path: 'chapters/27-migrando-de-um-para-multiplos-gateways-com-seguranca.html', text: 'migração migration multiple gateways rollback parallel run phased rollout cutover rescue lab portas profiles state dir health doctor' },
  { title: '28. Arquiteturas de produção', path: 'chapters/28-arquiteturas-de-producao-para-openclaw.html', text: 'produção production architecture single host home server tailnet main rescue lab control plane remote ssh tailscale health patterns' },
  { title: '29. Evals e benchmarking', path: 'chapters/29-evals-e-benchmarking-de-agentes.html', text: 'evals benchmarking golden set regressão benchmark scorecard task success rollout canary shadow traffic observabilidade latência custo handoff rollback qualidade agente' },
  { title: '30. UX para conversar com agentes', path: 'chapters/30-ux-para-conversar-com-agentes.html', text: 'ux conversa agentes updates aprovações confiança expectativa confirmações mensagens status progressos handoff humano interface conversacional' },
  { title: '31. OpenClaw para times', path: 'chapters/31-openclaw-para-times-e-colaboracao.html', text: 'times colaboração squads canais políticas handoff escalonamento privacidade onboarding RACI operating model runbook incidentes documentação compartilhada' },
  { title: '32. Voz e multimodalidade', path: 'chapters/32-agentes-com-voz-e-multimodalidade.html', text: 'voz multimodalidade tts stt asr áudio imagem câmera interface multimodal latência barge-in interrupção fallback texto voz privacidade áudio observabilidade streaming player vad produção' },
  { title: '33. Custos em produção', path: 'chapters/33-custos-em-producao-e-planejamento.html', text: 'custos produção orçamento budget tiering modelos planejamento finops custo por tarefa limites alertas kill switch contexto retries guardrails capacidade squads showback chargeback portfolio dominios ownership financeiro agentes por dominio' },
  { title: '34. Frameworks e stacks', path: 'chapters/34-comparando-frameworks-e-stacks-agenticas.html', text: 'frameworks stacks agenticas comparação openclaw langgraph autogen crewai rag retrieval governança ownership custo previsivel times operação composição em camadas escolha de stack' },
  { title: '35. Estudos de caso corporativos', path: 'chapters/35-estudos-de-caso-corporativos-multiagente.html', text: 'estudos de caso corporativos multiagente dominios suporte sre incidentes people ops finanças handoff ownership filas follow-up governance custo por dominio topologia corporativa agentes especializados' }
];

function normalizeText(text) {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const SEARCH_ALIASES = {
  eval: ['evals', 'benchmark', 'golden', 'regressao'],
  benchmark: ['evals', 'latencia', 'custo'],
  custo: ['custos', 'budget', 'finops', 'tiering'],
  custos: ['custo', 'budget', 'finops', 'tiering'],
  time: ['times', 'squad', 'colaboracao', 'raci'],
  times: ['time', 'squads', 'colaboracao', 'ownership'],
  incidente: ['troubleshooting', 'diagnostico', 'observabilidade'],
  observabilidade: ['metricas', 'traces', 'alertas', 'slo']
};

function expandQueryTokens(query) {
  const base = normalizeText(query.trim()).split(/\s+/).filter(Boolean);
  const expanded = new Set(base);
  base.forEach(token => (SEARCH_ALIASES[token] || []).forEach(alias => expanded.add(alias)));
  return [...expanded];
}

function scoreEntry(query, entry) {
  const q = normalizeText(query.trim());
  if (!q) return 0;
  const title = normalizeText(entry.title);
  const hay = normalizeText(entry.title + ' ' + entry.text + ' ' + entry.path);
  if (title === q) return 100;
  let score = 0;
  expandQueryTokens(query).forEach(token => {
    if (title.includes(token)) score += 12;
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

function initSearchWidget(root) {
  const input = root.querySelector('.js-search-input') || root.querySelector('#search-input');
  const results = root.querySelector('.js-search-results') || root.querySelector('#search-results');
  const status = root.querySelector('.js-search-status') || root.querySelector('#search-status');
  const clear = root.querySelector('.js-search-clear') || root.querySelector('#search-clear');
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
      results.innerHTML = '<div class="card"><strong>Nada encontrado.</strong><p class="muted">Tente termos como gateway, cron, sandbox, observabilidade, evals, custos, times ou multi-agent.</p></div>';
      if (status) status.textContent = `Nenhum resultado para “${q}”.`;
      return;
    }

    if (status) status.textContent = `${ranked.length} resultado(s) para “${q}”.`;
    const isChapter = location.pathname.includes('/chapters/');
    function resolvePath(p) {
      if (/^(https?:|\/)/.test(p)) return p;
      if (!isChapter) return p;
      return p.startsWith('chapters/') ? p.replace('chapters/', '') : '../' + p;
    }
    results.innerHTML = ranked.map(e => `
      <a class="card" href="${resolvePath(e.path)}">
        <strong>${highlight(e.title, q)}</strong>
        <p class="muted">${resolvePath(e.path)}</p>
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
      // On mobile, open the mobile search panel if it exists
      const mobilePanel = document.querySelector('.mobile-search-panel');
      if (mobilePanel && window.innerWidth <= 900) {
        mobilePanel.classList.add('open');
        const mobileInput = mobilePanel.querySelector('.js-search-input');
        if (mobileInput) { mobileInput.focus(); return; }
      }
      input.focus();
    }
  });
}

function initSearch() {
  document.querySelectorAll('.search-widget, .global-search-shell, .mobile-search-panel').forEach(initSearchWidget);
}

document.addEventListener('DOMContentLoaded', initSearch);
