# Landing page — Guedes Gás | Ultragaz

Landing page comercial com duas páginas:
- `/`: página principal (institucional e comercial)
- `/atendimento`: central com as cinco unidades (Icó, Iguatu, Crato, Jaguaribe e Várzea Alegre)

Objetivo: gerar pedidos pelo WhatsApp da unidade certa.

## Rodar

```
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Stack
Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS 4 · Lucide · next/font (Manrope + Inter). Sem banco de dados e sem dependências pesadas.

## Estrutura
```
app/                  rotas, layout e tokens (globals.css)
components/           header, barra mobile, link com mensuração
components/home/      seções da página principal
data/unidades.ts      FONTE ÚNICA: endereços, horários, WhatsApp, disponibilidade
lib/                  site.ts (config), analytics.ts (eventos), utm.ts
docs/                 análise, pendências, design system, estrutura, continuidade
public/images/        fotografias
```

## Documentação
1. `docs/01-ANALISE-E-DIRECAO.md`: referências, copy e direção criativa
2. `docs/02-PENDENCIAS.md`: o que confirmar antes de publicar
3. `docs/03-DESIGN-SYSTEM.md`: cores, tipografia, grid, componentes e movimento
4. `docs/04-ESTRUTURA.md`: seções, fluxo, eventos e SEO
5. `docs/05-CONTINUIDADE-ANTIGRAVITY.md`: como continuar e ajustar no Antigravity

## Status
Proposta visual da hero implementada (header, hero, seletor de cidades e barra mobile). As demais seções e a central aguardam a aprovação da direção visual.
