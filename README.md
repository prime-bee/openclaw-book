# openclaw-book

Um livro didático em HTML sobre o **OpenClaw**, pensado para transformar a documentação oficial em uma experiência de estudo mais fluida, navegável e pedagógica.

## Leitura online

O projeto está publicado em GitHub Pages:

- **GitHub Pages:** https://prime-bee.github.io/openclaw-book/
- **Repositório:** https://github.com/prime-bee/openclaw-book

## O que é este projeto

O `openclaw-book` é um experimento editorial e técnico: pegar a documentação oficial do OpenClaw e reorganizá-la em formato de **livro navegável**, com uma progressão mais amigável para leitura contínua.

Em vez de apenas listar tópicos isolados, a proposta aqui é:

- introduzir conceitos em sequência
- conectar arquitetura com operação prática
- mostrar receitas passo a passo
- incluir troubleshooting e referências oficiais
- oferecer uma leitura mais próxima de um manual técnico vivo

## Para quem isso serve

Este material pode ser útil para:

- pessoas começando a usar OpenClaw
- usuários que já operam o sistema, mas querem uma visão mais estruturada
- quem prefere aprender por capítulos em vez de navegar só por páginas soltas de documentação
- quem quer uma ponte entre **conceito**, **configuração** e **diagnóstico**

## O que você encontra aqui

Atualmente o livro cobre temas como:

- visão geral do OpenClaw
- arquitetura
- gateway
- CLI
- memória e workspace
- canais
- modelos e provedores
- multi-agent
- automação com cron e heartbeat
- sandbox e segurança
- browser automation
- receitas passo a passo
- troubleshooting
- referências oficiais

## Filosofia do projeto

Este projeto **não tenta substituir a documentação oficial**.

A ideia é complementar.

A documentação oficial continua sendo a fonte principal de verdade para:

- comportamento exato
- flags e comandos
- configurações detalhadas
- mudanças entre versões

O `openclaw-book` entra como uma camada acima, com foco em:

1. didática
2. continuidade de leitura
3. contexto
4. organização mental do sistema

## Estrutura do projeto

```text
openclaw-book/
  index.html
  styles.css
  assets/
  chapters/
  README.md
  .github/workflows/
```

### Arquivos principais

- `index.html` — página inicial e sumário
- `styles.css` — identidade visual do livro
- `chapters/` — capítulos em HTML
- `assets/` — imagens, logos e recursos visuais
- `.github/workflows/pages.yml` — deploy para GitHub Pages

## Como ler

Você pode usar de duas formas:

### 1. Online

Abra no GitHub Pages:

- https://prime-bee.github.io/openclaw-book/

### 2. Localmente

Não precisa de build nem de servidor.

Basta abrir:

- `index.html`

em qualquer navegador moderno.

## Organização do conteúdo

O livro foi estruturado para permitir uma leitura progressiva:

- **capítulos iniciais**: conceitos centrais, arquitetura e gateway
- **capítulos intermediários**: CLI, memória, canais, modelos, multi-agent
- **capítulos avançados**: automação, sandbox, browser
- **capítulos operacionais**: receitas, troubleshooting e referências

## Referências e fontes

A principal base deste projeto é a documentação oficial do OpenClaw:

- https://docs.openclaw.ai
- https://github.com/openclaw/openclaw

Além disso, este projeto também foi desenvolvido usando a documentação local instalada no ambiente do autor.

Sempre que possível, os capítulos do livro apontam para os tópicos oficiais correspondentes.

## Publicação

Este projeto usa **GitHub Pages** para publicação estática.

O deploy é feito por GitHub Actions, sem necessidade de build complexo, já que o conteúdo é composto por HTML/CSS estático.

## Próximos passos desejáveis

Algumas evoluções naturais para o projeto:

- busca local em JavaScript
- glossário
- screenshots e diagramas próprios
- capítulos mais profundos por tópico
- exemplos de configuração mais completos
- apêndices por canal
- seção de erros comuns por tema
- navegação ainda mais rica entre capítulos

## Licença

A definir.

## Autor

Projeto organizado por **Prime**.