# Castro & Almeida Advocacia — Landing Page

Landing page premium para escritório de advocacia, construída com foco em **conversão, autoridade, SEO técnico e performance**.

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19
- TypeScript (strict)
- TailwindCSS
- Framer Motion (animações e microinterações)
- Lucide Icons

## Destaques

- **Conversão**: CTAs para WhatsApp em todos os pontos de decisão, formulário inteligente com validação e máscara de telefone que encaminha o lead qualificado para o WhatsApp, botão flutuante de WhatsApp e CTA fixo na navbar.
- **SEO**: metadata completa (Open Graph, Twitter Cards, canonical, robots), JSON-LD com `Organization`, `LegalService`, `LocalBusiness`, `Attorney`, `FAQPage` e `BreadcrumbList`, `sitemap.xml`, `robots.txt`, `manifest` e imagem OG gerada em build.
- **Acessibilidade**: WCAG AA — navegação por teclado, focus states visíveis, ARIA, skip link, `prefers-reduced-motion` respeitado, contraste verificado.
- **Performance**: página estática (SSG), fontes com `next/font` (self-hosted, `display: swap`), sem imagens externas (composições em SVG/CSS), mapa com lazy loading.
- **Extras**: dark mode com persistência e sem FOUC, contadores animados, timeline, FAQ acordeão com schema, botão voltar ao topo, footer premium com mapa e horários.

## Desenvolvimento

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # build de produção
```

## Estrutura

```
src/
├── app/            # layout (SEO/JSON-LD), página, robots, sitemap, manifest, OG image
├── components/
│   ├── layout/     # Navbar, Footer, WhatsAppButton, BackToTop
│   ├── sections/   # Hero, About, PracticeAreas, Stats, Differentials, Process,
│   │               # Testimonials, Faq, FinalCta, Contact
│   └── ui/         # Reveal, AnimatedCounter, SectionHeading, Stars
├── hooks/          # useScrolled, useTheme
└── lib/            # constants (conteúdo), schema (JSON-LD), utils (máscaras/validação)
```

## Personalização

Todo o conteúdo (nome do escritório, telefone/WhatsApp, endereço, áreas de atuação, depoimentos, FAQ, estatísticas) está centralizado em `src/lib/constants.ts`.

## CI/CD

### CI (`.github/workflows/ci.yml`)

Roda em toda PR e push para `main`: instala dependências, `lint`, `typecheck` (`tsc --noEmit`) e `build`. Nada é implantado se o build quebrar.

### CD (`.github/workflows/deploy-railway.yml`)

Implanta automaticamente no [Railway](https://railway.app) assim que o CI terminar com sucesso na `main` (via `workflow_run`), ou manualmente pela aba **Actions** (`workflow_dispatch`).

Para ativar:

1. Crie um projeto no Railway e conecte-o (ou gere um **Project Token** em Project Settings → Tokens).
2. No GitHub, em **Settings → Secrets and variables → Actions**, adicione:
   - Secret `RAILWAY_TOKEN` — o token do projeto/serviço no Railway.
   - Variable `RAILWAY_SERVICE_NAME` (opcional) — necessária apenas se o projeto tiver mais de um serviço.
3. Sem o secret `RAILWAY_TOKEN` configurado, o job de deploy é pulado automaticamente (o CI continua funcionando normalmente).

O arquivo `railway.json` define o build (Nixpacks, detecta Next.js automaticamente) e o comando de start (`npm run start`, respeitando a variável `PORT` do Railway).
