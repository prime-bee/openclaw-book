# openclaw-book

Um livro técnico estático em HTML sobre o **OpenClaw**, escrito em português para transformar a documentação oficial em uma experiência de estudo mais clara, navegável e útil no dia a dia.

## Leitura online

- **GitHub Pages:** https://prime-bee.github.io/openclaw-book/
- **Repositório:** https://github.com/prime-bee/openclaw-book

## O que este projeto entrega

O `openclaw-book` reorganiza a documentação oficial em formato de **livro técnico estático**, com foco em:

- progressão de leitura mais natural
- linguagem mais didática em português
- ponte entre conceito, operação e troubleshooting
- navegação simples, sem build complexo
- referência explícita às fontes oficiais

## Trilhas de leitura sugeridas

### 1. Entender o sistema
Leia os capítulos **1 a 5** para construir base mental sobre arquitetura, gateway, CLI, memória e workspace.

### 2. Operar com confiança
Passe por **3, 4, 6, 9 e 13** para cobrir rotina operacional, automação e diagnóstico.

### 3. Escalar com segurança
Use **7, 8, 10 e 11** para estudar modelos, multi-agent, sandbox e browser/control plane.

## Público-alvo

Este material é útil para:

- pessoas começando a usar OpenClaw
- operadores que querem uma visão mais estruturada do sistema
- equipes que precisam de um material de onboarding mais didático
- quem prefere aprender por capítulos em vez de navegar apenas por páginas de referência

## Estrutura do projeto

```text
openclaw-book/
  index.html
  404.html
  about.html
  contributing.html
  glossario.html
  TOPICS.md
  MAINTENANCE.md
  styles.css
  app.js
  search.js
  assets/
  chapters/
```

Arquivos editoriais importantes:

- `TOPICS.md` — inventário vivo dos temas já cobertos e das lacunas do livro
- `MAINTENANCE.md` — checklist de validação, regras do template e rotina pré-publicação

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

## Validação e revisão antes de publicar

Execute pelo menos:

```bash
python3 scripts/validate-site.py
node --check app.js
node --check search.js
```

Checklist rápido:

- abrir `index.html` e 1 ou 2 capítulos no navegador
- confirmar busca, breadcrumbs e links externos
- revisar se a mudança manteve referências oficiais quando relevante

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

Antes de abrir capítulo novo ou expandir um tema de forma relevante:

1. consulte `TOPICS.md`
2. decida se a mudança cabe melhor como expansão, capítulo novo ou ajuste localizado
3. revise `MAINTENANCE.md` para seguir o checklist de validação e template

Veja também:

- `contributing.html`
- `TOPICS.md`
- `MAINTENANCE.md`
- `PULL_REQUEST_TEMPLATE.md`

## Licença

MIT. Veja `LICENSE`.

## Autor

Projeto organizado por **Prime**.
