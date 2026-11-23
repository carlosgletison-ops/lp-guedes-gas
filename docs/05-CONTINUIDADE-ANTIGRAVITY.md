# 05 — Continuidade no Antigravity

## Abrir o projeto
1. No Antigravity: **File → Open Folder →** `Desktop\Meus projetos\lp-guedes-gas`.
2. No terminal integrado:
   ```
   npm install
   npm run dev
   ```
3. Acesse http://localhost:3000.

## Onde mexer

| Quero alterar… | Arquivo |
|---|---|
| Endereço, horário, WhatsApp ou disponibilidade de uma unidade | `data/unidades.ts` |
| Cores, fontes, raios, tipografia e animações | `app/globals.css` |
| Links do menu, URL do site e IDs de mensuração | `lib/site.ts` + `.env.local` |
| Header / barra superior | `components/site-header.tsx`, `components/top-bar.tsx` |
| Hero | `components/home/hero.tsx` |
| Seletor de cidades | `components/home/city-selector.tsx` |
| Logotipo | `components/brand.tsx` (trocar a marca tipográfica pelo arquivo oficial) |
| Foto da hero | Substituir `public/images/hero-entregador-ultragaz.jpg` (mesmo nome, ou ajustar o `src` em `hero.tsx`) |

## Regras para manter a qualidade
- Não editar o projeto no Antigravity e no Claude **ao mesmo tempo**. Faça um commit antes de trocar de ferramenta.
- Dados de unidade ficam **só** em `data/unidades.ts`. Nunca escreva endereço ou telefone direto num componente.
- O verde (`bg-verde`) é exclusivo de botões de conversão.
- Nada de pílulas, glassmorphism, gradientes decorativos, cards dentro de cards ou ícones em círculos coloridos.
- Não inventar preços, depoimentos, contadores, selos ou horários.
- Novos links de pedido devem usar `<TrackedLink>` com o `evento` correspondente.
- Antes de publicar: `npm run build` sem erros e a lista de `02-PENDENCIAS.md` resolvida.

## Versionamento
O projeto já tem Git. Sugestão de rotina:
```
git add -A
git commit -m "descrição do ajuste"
```
