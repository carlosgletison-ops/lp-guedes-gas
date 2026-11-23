<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Projeto: Landing page Guedes Gás (Ultragaz)

Leia `docs/` antes de alterar qualquer coisa. Em especial: `03-DESIGN-SYSTEM.md` e `05-CONTINUIDADE-ANTIGRAVITY.md`.

- Fonte única dos dados das unidades: `data/unidades.ts`. Nunca escreva endereço, telefone ou horário direto num componente.
- Conteúdo: use somente a copy oficial. Não invente preços, horários, depoimentos, contadores, selos, CNPJ ou redes sociais.
- Pendências abertas (Jaguaribe, disponibilidade P20/P45, Gás do Povo, logos, fotos): `docs/02-PENDENCIAS.md`.
- Cores via tokens do Tailwind (`bg-azul`, `bg-verde`, `text-tinta`…). O verde é exclusivo de CTAs de conversão.
- Direção visual v2 "Noite azul" (ver docs/03): fundo `noite`, cards `superficie`; desfoque (`superficie-foto`) só sobre fotografia.
- Proibido: pílulas/badges arredondados, navbar em cápsula, glow/neon, gradientes decorativos, blobs, cards dentro de cards, ícones em círculos coloridos.
- Links de pedido e de cidade usam `<TrackedLink>` com o evento correspondente (`city_select`, `whatsapp_click`, `directions_click`).
- Antes de concluir: `npx tsc --noEmit`, `npx eslint .` e `npm run build` sem erros.
