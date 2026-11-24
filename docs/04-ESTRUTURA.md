# 04 — Estrutura das páginas

Status: ✅ implementado · 🟡 implementado com conteúdo/imagem provisória (ver `02-PENDENCIAS.md`)

## Página 01 — `/` (principal)

| # | Seção | Âncora | Arquivo | Status |
|---|---|---|---|---|
| 01 | Barra superior + header fixo | — | `components/top-bar.tsx`, `site-header.tsx` | ✅ |
| 02 | Hero | `#inicio` | `components/home/hero.tsx` | 🟡 foto de campanha |
| 03 | Seletor rápido de cidade | `#cidades` | `components/home/city-selector.tsx` | ✅ |
| 04 | Produtos (P13 em destaque, P20/P45) | `#produtos` | `components/home/produtos.tsx` | 🟡 ilustrações no lugar das fotos |
| 05 | Gás do Povo | `#gas-do-povo` | `components/home/gas-do-povo.tsx` | 🟡 texto a validar, foto recortada da hero |
| 06 | Diferenciais | — | `components/home/diferenciais.tsx` | ✅ |
| 07 | Presença regional (mapa IBGE + lista) | `#unidades` | `components/home/presenca.tsx` | ✅ |
| 08 | Como funciona | — | `components/home/como-funciona.tsx` | ✅ |
| 09 | Perguntas frequentes | — | `components/home/faq.tsx` + `data/faq.ts` | ✅ |
| 10 | CTA final | — | `components/home/cta-final.tsx` | 🟡 ilustração do P13 |
| 11 | Rodapé | — | `components/site-footer.tsx` | 🟡 sem dados legais (não fornecidos) |
| — | Barra fixa mobile | — | `components/mobile-order-bar.tsx` | ✅ |

## Página 02 — `/atendimento` (central)
`app/atendimento/page.tsx` + `components/atendimento/`
- H1 "Qual unidade atende você?" e o texto da copy.
- Navegação rápida pelas 5 cidades: atualiza `?cidade=` sem recarregar a página e dispara `city_select`.
- 5 cards com endereço, horários, WhatsApp, o botão **Pedir pelo WhatsApp — Cidade** (`whatsapp_click`) e o link **Como chegar** (`directions_click`, que abre o Google Maps com o endereço oficial).
- Com `?cidade=slug`, o card da cidade ganha borda destacada e a marcação "Sua cidade", e é rolado até o topo da tela.
- Jaguaribe mostra o aviso de dias a confirmar. Não há indicador "Aberto agora".

## Página 03 — `/politica-de-privacidade`
🟡 Rascunho, com `noindex` até o texto definitivo ser fornecido.

## Fluxo de conversão
```
Qualquer CTA "Pedir meu gás"  ──►  /atendimento  ──►  wa.me/<unidade>
Seletor / mapa / rodapé        ──►  /atendimento?cidade=slug (unidade destacada)  ──►  wa.me/<unidade>
```
As UTMs da URL de entrada são preservadas nos links internos (`lib/utm.ts`) e enviadas junto com cada evento.

## Mensuração (`lib/analytics.ts`)

| Evento | Onde | Parâmetros |
|---|---|---|
| `page_view` | Toda troca de rota | `pagina_origem` + UTMs |
| `city_select` | Seletor de cidades, mapa e navegação da central | `cidade`, `unidade`, `secao_origem` |
| `whatsapp_click` | Botões wa.me da central | `cidade`, `unidade`, `secao_origem` |
| `directions_click` | "Como chegar" | `cidade`, `unidade`, `secao_origem` |

Os eventos vão para `window.dataLayer`. Telefones e mensagens nunca são enviados. Os IDs de GTM/GA4/Pixel não estão configurados: defina-os em `.env.local` (ver `lib/site.ts`) e implemente o consentimento de cookies antes de ativar tags de terceiros.

## SEO
- Metadata por página, canonical e Open Graph (imagem provisória).
- `app/sitemap.ts` → `/sitemap.xml` e `app/robots.ts` → `/robots.txt`.
- JSON-LD:
  - Na home: `Organization` + `FAQPage`.
  - Na central: um `Store` por unidade, com endereço, telefone e horários. Os horários de Jaguaribe ficam de fora porque os dias não foram confirmados.
- Mapa: contorno do Ceará e centróides dos municípios da API de malhas do IBGE (`data/mapa-ceara.ts`, gerado, não editar à mão).

## Medições (Lighthouse 12, build de produção local, 23/11/2026)

| Página | Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|---|
| `/` (mobile) | 92 | 100 | 100 | 100 |
| `/atendimento?cidade=ico` (mobile) | 97 | 100 | 100 | 100 |
| `/` (desktop, antes do último ajuste) | 84 | 100 | 100 | 100 |

LCP mobile da home: cerca de 3,2s (simulado em 4G). Os números variam entre execuções e precisam ser medidos de novo no servidor de produção real.
