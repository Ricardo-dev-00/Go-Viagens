# Go Viagens

Landing page em React + Vite para a Go Viagens.

## Scripts

- `npm run dev`: inicia o ambiente local
- `npm run build`: gera a versão de produção em `dist`
- `npm run preview`: sobe uma prévia local do build
- `npm run lint`: executa o ESLint

## Deploy no GitHub Pages

O projeto já está preparado para deploy automático com GitHub Actions.

### Requisitos

1. Suba o projeto para um repositório no GitHub.
2. Use a branch `main` como branch principal.
3. Em `Settings > Pages`, configure a origem como `GitHub Actions`.

### Workflow

O workflow está em `.github/workflows/deploy-pages.yml`.

Ao fazer push na branch `main`, a action:

1. instala as dependências com `npm ci`
2. gera o build com `npm run build`
3. publica o conteúdo de `dist` no GitHub Pages

### Base path

O `vite.config.js` detecta automaticamente quando o build está rodando no GitHub Actions.

- repositório do tipo `usuario.github.io`: publica em `/`
- repositório de projeto: publica em `/<nome-do-repositorio>/`
