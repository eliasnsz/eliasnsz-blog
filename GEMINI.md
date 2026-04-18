# GEMINI.md - eliasnsz-blog

Este arquivo serve como guia e contexto para o desenvolvimento do blog pessoal **eliasnsz-blog**.

## 🚀 Visão Geral do Projeto

O **eliasnsz-blog** é um blog moderno e performático construído com as tecnologias mais recentes do ecossistema web. Ele foca em uma experiência de leitura limpa e na facilidade de escrita de conteúdo via Markdown.

- **Framework:** [Astro v6](https://astro.build/)
- **Linguagem:** TypeScript
- **UI & Componentes:** React + [shadcn/ui](https://ui.shadcn.com/)
- **Estilização:** Tailwind CSS v4 (usando `@tailwindcss/vite`)
- **Conteúdo:** Gerenciado via Astro Content Layer (Markdown/MDX) em `src/blog/`.

## 🏗️ Arquitetura e Estrutura

- `src/blog/`: Contém os arquivos de conteúdo (.md ou .mdx).
- `src/pages/`:
  - `index.astro`: Página inicial que lista os posts agrupados por mês e ano.
  - `blog/[...slug].astro`: Rota dinâmica para renderização de posts individuais.
  - `search.json.js`: Endpoint para dados de busca.
- `src/layouts/`:
  - `main.astro`: Layout base para todas as páginas.
  - `post.astro`: Layout específico para artigos do blog, incluindo metadados e sumário lateral.
- `src/components/`:
  - `ui/`: Componentes do shadcn/ui.
  - Outros componentes Astro e React para funcionalidades específicas.
- `src/content.config.ts`: Define o esquema de dados para a coleção `blog`.

## 🛠️ Comandos de Desenvolvimento

O projeto utiliza `pnpm` como gerenciador de pacotes (inferido pelo `pnpm-lock.yaml`).

| Comando | Descrição |
| :--- | :--- |
| `pnpm dev` | Inicia o servidor de desenvolvimento. |
| `pnpm build` | Gera o build de produção em `dist/`. |
| `pnpm preview` | Visualiza o build de produção localmente. |
| `pnpm lint` | Executa o ESLint para verificar erros de código. |
| `pnpm format` | Formata o código usando Prettier. |
| `pnpm typecheck` | Executa a verificação de tipos do Astro. |
| `npx shadcn@latest add <componente>` | Adiciona novos componentes do shadcn/ui. |

## 📝 Convenções de Desenvolvimento

1.  **Conteúdo:** Novos posts devem ser adicionados em `src/blog/` e seguir o frontmatter definido em `src/content.config.ts`:
    ```yaml
    title: string
    description: string
    pubDate: Date
    updatedDate?: Date (opcional)
    heroImage?: string (opcional)
    tags?: string[] (opcional)
    draft: boolean (default: false)
    ```
2.  **Idioma:** A interface do usuário e o conteúdo estão em Português do Brasil (`pt-BR`). Certifique-se de manter essa consistência em novas funcionalidades.
3.  **Estilização:** Utilize as classes utilitárias do Tailwind CSS v4. Evite CSS customizado a menos que seja estritamente necessário (estilos globais em `src/styles/global.css`).
4.  **Componentes:** Prefira componentes do shadcn/ui para manter a consistência visual. Use React apenas onde a interatividade for necessária; caso contrário, prefira componentes Astro.
