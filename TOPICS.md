# TOPICS.md

Inventário vivo dos temas já abordados no **openclaw-book**.

## Objetivo

Este arquivo existe para ajudar a manter visão global do conteúdo do livro.
Ele serve como referência editorial para:

- evitar duplicação desnecessária
- encontrar lacunas de conteúdo
- planejar novos capítulos
- manter coerência entre capítulos
- facilitar revisões e expansão do projeto

## Regra de manutenção

Sempre que um capítulo novo for criado, renomeado ou expandido de forma relevante:

1. atualizar este arquivo
2. registrar o novo tema na seção apropriada
3. marcar relações com capítulos já existentes
4. usar este arquivo para decidir se um tema merece capítulo novo ou só expansão de capítulo existente

---

## Capítulos atuais

### 1. Visão geral
- o que é OpenClaw
- gateway self-hosted para agentes
- canais, agentes, workspace e modelo mental geral

### 2. Arquitetura
- gateway
- clientes
- nodes
- sessões
- fluxo connect/request/response/event

### 3. Gateway
- operação do gateway
- comandos principais
- serviço persistente
- porta, bind, auth e troubleshooting inicial
- padrões de deploy (local, serviço, VPS/home server)
- playbooks de diagnóstico por sintoma
- checklists de restart seguro e validação pós-incidente
- exemplos concretos de operação diária

### 4. CLI
- comandos principais do OpenClaw
- grupos de comandos
- operações de rotina
- modelos mentais de uso da CLI

### 5. Memória e workspace
- memória curta vs longa
- `MEMORY.md`
- `memory/YYYY-MM-DD.md`
- workspace como território operacional
- contexto persistente
- gestão de contexto e compressão
- convenções de organização de workspace por função (`docs/`, `runbooks/`, `projects/`, `scratch/`)
- política prática de escrita e curadoria de memória
- workflow de recuperação com `memory_search` + `memory_get`
- padrões de RAG leve usando apenas o workspace
- troubleshooting de workspaces caóticos e bases de memória degradadas

### 6. Canais e operação
- Telegram
- WhatsApp
- Discord
- canais em geral
- políticas de grupo
- operação por canal

### 7. Modelos e provedores
- modelos primários e fallbacks
- seleção de modelo
- custo e tokens
- otimização de uso
- critérios de escolha por tarefa
- famílias de modelos (generativos, embedding, rerank, multimodais)
- infraestrutura de inferência e serving
- vLLM, PagedAttention e continuous batching

### 8. Multi-agent e roteamento
- bindings
- isolamento por agente
- coordenação entre agentes
- delegação
- padrões de orquestração
- falhas e confiança entre agentes

### 9. Automação
- cron
- heartbeat
- quando automatizar
- quando ainda não automatizar
- critérios de escolha entre cron e heartbeat

### 10. Sandbox e segurança
- sandboxing
- blast radius
- segurança prática
- segredos
- prompt injection
- OWASP LLM Top 10
- NIST AI RMF
- endurecimento mínimo

### 11. Browser e controle remoto
- browser automation
- snapshots
- screenshots
- CDP
- perfis de browser
- padrões de uso em produção
- waits, retries e resiliência de seletores

### 12. Receitas passo a passo
- setup prático
- Telegram
- heartbeat
- cron
- segundo agente
- GitHub Pages
- monitoramento
- triagem de inbox
- reporting semanal
- fluxo de code review

### 13. Troubleshooting e diagnóstico
- escada universal de diagnóstico
- sintomas e hipóteses
- troubleshooting de canal/gateway/browser
- diagnóstico de qualidade, latência, rate limit, tool failure

### 14. Referências oficiais
- bibliografia operacional
- mapa de referências da documentação oficial
- agrupamento por objetivo
- trilhas de consulta por tarefa operacional
- trilhas de leitura por perfil
- heurísticas para decidir quando usar livro vs doc oficial
- erros comuns ao consultar referências oficiais

### 15. Roadmap
- roadmap editorial
- próximos passos do livro
- critérios para aceitar melhorias
- matriz de priorização editorial
- horizontes de evolução (curto, médio e longo prazo)
- anti-padrões de manutenção
- checklist para decidir a próxima rodada

### 16. Agentes IA, fluxos e delegação
- workflows vs agents
- delegação
- human-in-the-loop
- avaliação de agentes
- golden sets
- regressão
- métricas operacionais
- prompt injection defenses

### 17. Missões e desafios
- gamificação do aprendizado
- missões
- drills
- scorecard do operador
- boss fights / desafios progressivos

### 18. Engenharia de prompts
- system prompts
- few-shot prompting
- chain-of-thought
- saídas estruturadas
- anti-padrões
- templates de prompt

### 19. Observabilidade e monitoramento
- logs estruturados
- métricas
- traces
- OpenTelemetry
- alertas
- dashboards
- observabilidade multi-agent
- blueprint prático de instrumentação OTel para agentes
- taxonomia de spans e atributos críticos para incidentes
- scorecards operacionais diários e reviews semanais
- integração entre telemetria de produção e loop de evals

### 20. HITL e governança
- human-in-the-loop
- approval gates
- override controls
- governança
- audit logging
- NIST AI RMF
- EU AI Act
- scorecard operacional de governança
- matriz prática de approval gates por tier de risco
- playbook de auditoria semanal
- reason codes para aprovações/rejeições
- integração entre observabilidade, auditoria e evals

### 21. Skills e composição de capacidades
- skills
- AgentSkills
- ClawHub
- gating
- distribuição de skills
- composição de capacidades
- skills como playbooks operacionais

### 22. LLMs, plataformas, orquestração e OpenClaw ↔ OpenClaw
- melhores LLMs por perfil de uso
- plataformas e ecossistemas
- orquestração multi-agent
- contratos entre agentes
- dinâmica de dois OpenClaw conversando
- riscos de loop e acoplamento

### 23. Personalidade de agentes
- identidade e papel do agente
- tom e limites
- personalidade operacional
- como persona melhora consistência e UX
- riscos de teatralidade, sycophancy e excesso de antropomorfismo

### 24. RAG e retrieval para agentes
- retrieval-augmented generation
- grounding e contexto recuperado
- memória como base de retrieval
- chunking, ranking e filtros
- RAG híbrido (keyword + semântico)
- riscos de prompt injection via documentos
- troubleshooting de retrieval

### 25. Design de ferramentas para agentes
- design de tools e interfaces para LLMs
- contratos de entrada e saída
- ergonomia para modelos
- idempotência e reexecução segura
- observabilidade e erros acionáveis
- sandbox, tool policy e blast radius

### 26. Múltiplos OpenClaw na mesma máquina
- múltiplos gateways no mesmo host
- profiles
- isolamento de config/state/workspace
- portas derivadas
- rescue bot
- plano de implantação e checklist operacional

### 27. Migrando de um para múltiplos gateways com segurança
- estratégia de migração em fases
- parallel run
- rollback
- validação e cutover
- anti-padrões de migração

### 28. Arquiteturas de produção para OpenClaw
- padrões de produção
- single host
- home server + tailnet
- main + rescue
- stable + lab
- critérios de escolha arquitetural

### 29. Evals e benchmarking de agentes
- golden sets
- regressão
- métricas de qualidade
- latência e custo por tarefa
- benchmark antes de trocar modelo
- scorecard operacional
- integração entre evals, observabilidade e custo
- loop pós-deploy e casos de regressão vindos de produção
- playbook de evals contínuos (pré-merge, pré-deploy, canary, revisão semanal e mensal)
- desenho de golden set por tipo de tarefa
- critérios explícitos de aprovação, promoção parcial e rollback
- vanity metrics e como evitá-las
- estrutura simples de workspace para suites de eval
- troubleshooting de benchmarks

### 30. UX para conversar com agentes
- clareza de intenção
- atualizações orientadas por marcos
- aprovações legíveis
- confiança operacional
- anti-padrões de conversa

### 31. OpenClaw para times e colaboração
- assistente de squad
- triagem e escalonamento
- políticas de canal
- privacidade em contexto de equipe
- agentes estáveis vs lab
- ownership entre times
- handoff e fronteiras entre squads
- playbooks corporativos de intake, escalonamento e pós-incidente
- RACI mínimo para adoção saudável

### 32. Agentes com voz e multimodalidade
- TTS e ASR
- UX falada
- imagens e screenshots como contexto
- latência ponta a ponta e orçamento de resposta
- barge-in, interrupções e chunking de fala
- fallback texto↔voz e canal híbrido
- privacidade de áudio, retenção e minimização
- observabilidade por estágio e troubleshooting de ASR/TTS
- confirmações para ações sensíveis

### 33. Custos em produção e planejamento
- tiering de modelos
- custo por tarefa útil
- otimização de contexto
- revisão mensal de custo
- tradeoffs entre economia e qualidade
- showback e chargeback por squad
- portfólio de agentes por domínio
- ownership financeiro e budget por fluxo
- SLOs de custo e review quinzenal

### 34. Comparando frameworks e stacks agentic
- comparação por forma de operação
- OpenClaw vs stacks centradas em código
- OpenClaw vs stacks centradas em RAG
- encaixe por perfil de time
- governança, ownership e custo de coordenação
- custo previsível por domínio ao comparar stacks
- scorecard pragmático de decisão
- composição em camadas

### 35. Estudos de caso corporativos multiagente
- topologias por domínio em empresas
- front-door agent e triagem operacional
- handoffs estruturados entre agentes
- separação entre investigador, executor e comunicador em incidentes
- finanças, showback e ownership por domínio
- people ops, fluxos sensíveis e retenção mínima
- métricas para validar a topologia multiagente
- critérios para não fragmentar demais

---

## Índice temático transversal

### Fundamentos do OpenClaw
- visão geral
- arquitetura
- gateway
- CLI
- memória/workspace
- profiles e múltiplos gateways

Capítulos:
- 1, 2, 3, 4, 5, 26

### Operação diária
- rotina de uso
- canais
- comandos frequentes
- troubleshooting inicial
- múltiplas instâncias no mesmo host
- migração operacional segura

Capítulos:
- 3, 4, 6, 12, 13, 26, 27

### Modelos, custo e provedores
- escolha de modelo
- fallbacks
- otimização de tokens
- plataformas/model providers

Capítulos:
- 7, 22, 33

### Conhecimento, memória e retrieval
- memória operacional
- retrieval semântico
- grounding
- RAG
- gestão de contexto

Capítulos:
- 5, 14, 24

### Multi-agent e coordenação
- bindings
- isolamento
- delegação
- coordinator-worker patterns
- OpenClaw ↔ OpenClaw
- colaboração em times
- estudos de caso por domínio

Capítulos:
- 8, 16, 22, 31, 35

### Segurança e risco
- sandbox
- prompt injection
- OWASP LLM Top 10
- governança
- approval gates
- risco operacional

Capítulos:
- 10, 16, 20, 23

### Prompting e comportamento
- system prompt
- few-shot
- personalidade
- papel e identidade
- estilo operacional
- UX conversacional

Capítulos:
- 16, 18, 23, 30

### Automação
- cron
- heartbeat
- recipes operacionais
- monitoramento automatizado

Capítulos:
- 9, 12, 19

### Browser / UI / controle remoto
- browser automation
- CDP
- pages
- controle remoto

Capítulos:
- 11, 12

### Observabilidade e manutenção
- logs
- métricas
- traces
- dashboards
- manutenção editorial e publicação
- padrões de produção
- evals e regressão

Capítulos:
- 14, 15, 19, 28, 29

### Skills e extensibilidade
- skills
- AgentSkills
- ClawHub
- composição de capacidades
- comparação com outras stacks agentic

Capítulos:
- 21, 34

### Ferramentas e interfaces de ação
- design de tools
- contratos de entrada/saída
- ergonomia para agentes
- idempotência
- approvals, sandbox e blast radius

Capítulos:
- 10, 21, 25

### Aprendizado guiado
- trilhas didáticas
- missões
- exercícios
- gamificação
- percursos por perfil de leitor

Capítulos:
- 17

Páginas auxiliares:
- `reading-paths.html`

---

## Temas já cobertos de forma forte

Esses temas já têm cobertura robusta e, em geral, devem ser expandidos antes de virar capítulos redundantes:

- gateway e operação
- multi-agent
- memória e contexto
- engenharia de prompts
- segurança prática
- observabilidade
- skills
- escolha de LLM/plataforma
- governança / HITL
- personalidade de agentes

---

## Lacunas / temas que ainda podem crescer

Temas que ainda podem render capítulos novos ou expansões fortes:

- aprofundar estudos de caso de operação corporativa avançada com múltiplos agentes por domínio
- ampliar exemplos quantitativos de chargeback/showback, ownership financeiro e governança de custo por squad

---

## Uso editorial recomendado

Antes de criar novo conteúdo:

1. consultar `TOPICS.md`
2. decidir se o assunto já existe
3. escolher entre:
   - expandir capítulo existente
   - criar capítulo novo
   - criar receita / glossário / apêndice
4. atualizar este arquivo ao concluir a mudança

---

## Status atual

- capítulos totais: **35**
- livro já cobre fundamentos, operação, segurança, agentes, prompting, governança, observabilidade, skills, plataformas, personalidade, retrieval, design de ferramentas, múltiplos gateways no mesmo host, migração segura, arquiteturas de produção e evals/benchmarking, além de UX de interação com agentes
- este arquivo deve continuar sendo tratado como **índice editorial vivo**
- lacuna de estudos de caso corporativos avançados agora tem um capítulo dedicado, abrindo espaço para futuras expansões orientadas a setores específicos
