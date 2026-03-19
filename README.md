# openclaw-book

Um livro didático em HTML sobre o **OpenClaw**, pensado para transformar a documentação oficial em uma experiência de estudo mais fluida, navegável e pedagógica.

## Leitura online

- **GitHub Pages:** https://prime-bee.github.io/openclaw-book/
- **Repositório:** https://github.com/prime-bee/openclaw-book

## Objetivo

O `openclaw-book` reorganiza a documentação oficial em formato de **livro técnico estático**, com foco em:

- progressão de leitura mais natural
- linguagem mais didática em português
- ponte entre conceito, operação e troubleshooting
- navegação simples, sem build complexo
- referência explícita às fontes oficiais

## Público-alvo

Este material é útil para:

- pessoas começando a usar OpenClaw
- operadores que querem uma visão mais estruturada do sistema
- quem prefere aprender por capítulos em vez de navegar apenas por páginas de referência
- quem precisa de contexto antes de mergulhar na documentação oficial

## O que o livro cobre

- visão geral do OpenClaw
- arquitetura
- gateway
- CLI
- memória e workspace
- canais e rotina operacional
- modelos e provedores
- multi-agent e roteamento
- automação com cron e heartbeat
- sandbox e segurança
- browser automation
- receitas passo a passo
- troubleshooting
- referências oficiais
- roadmap editorial

## Estrutura do projeto

```text
openclaw-book/
  index.html
  404.html
  styles.css
  app.js
  search.js
  assets/
  chapters/
  .github/workflows/
```

## Principais recursos do site

- HTML estático, fácil de hospedar
- breadcrumbs e paginação entre capítulos
- sumário automático dentro dos capítulos
- busca local em JavaScript
- metadados básicos para SEO e compartilhamento social
- sitemap e robots para publicação em Pages

## Como rodar localmente

Você pode abrir `index.html` diretamente no navegador.

Se preferir servir localmente com um servidor simples:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Filosofia editorial

Este projeto **não substitui a documentação oficial**.

Ele funciona como uma camada didática acima da fonte oficial, priorizando:

1. clareza
2. continuidade de leitura
3. contexto operacional
4. organização mental do sistema

Sempre que possível, os capítulos apontam para a documentação oficial correspondente.

## Fontes

As principais referências são:

- https://docs.openclaw.ai
- https://github.com/openclaw/openclaw

## Publicação

O projeto usa **GitHub Pages** com deploy via GitHub Actions no branch `master`.

## Contribuição

Contribuições são bem-vindas, especialmente para:

- enriquecer capítulos
- corrigir links ou explicações ambíguas
- melhorar a navegação
- ampliar troubleshooting e exemplos práticos
- revisar consistência editorial

Veja também:

- `contributing.html`
- `PULL_REQUEST_TEMPLATE.md`

## Licença

MIT. Veja `LICENSE`.

## Autor

Projeto organizado por **Prime**.
