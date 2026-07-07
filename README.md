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
