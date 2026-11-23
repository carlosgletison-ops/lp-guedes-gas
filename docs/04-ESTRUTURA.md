# 04 — Estrutura das páginas

Status: ✅ implementado · ⏳ aguardando aprovação da direção visual

## Página 01 — `/` (principal)

| # | Seção | Âncora | Status | Notas |
|---|---|---|---|---|
| 01 | Barra superior + header fixo | — | ✅ | Menu compacto no mobile (abre abaixo do header, fecha com Esc) |
| 02 | Hero | `#inicio` | ✅ | 45/55, foto sangrando, CTA leva para `/atendimento` |
| 03 | Seletor rápido de cidade | `#cidades` | ✅ | Lista 01–05 que leva para `/atendimento?cidade=slug` |
| 04 | Produtos | `#produtos` | ⏳ | P13 em destaque e P20/P45 "conforme disponibilidade de cada unidade". Depende das fotos |
| 05 | Gás do Povo | `#gas-do-povo` | ⏳ | Editorial dividido, observação de elegibilidade e aviso de validação |
| 06 | Diferenciais | — | ⏳ | Duas colunas abertas, 4 itens com divisórias |
| 07 | Presença regional | `#unidades` | ⏳ | Mapa SVG do Ceará (dados reais, leve) + lista de unidades + "Escolher minha unidade" |
| 08 | Como funciona | — | ⏳ | 4 passos, horizontal no desktop e vertical no mobile |
| 09 | Perguntas frequentes | — | ⏳ | Accordion acessível com `<details>`/botões e divisórias |
| 10 | CTA final | — | ⏳ | Azul sólido + botijão P13 recortado |
| 11 | Rodapé | — | ⏳ | Marca, navegação, cidades, central, política de privacidade |
| — | Barra fixa mobile | — | ✅ | Aparece depois que o CTA da hero sai da tela e respeita a área segura |

## Página 02 — `/atendimento` (central)

⏳ Plano:
- H1 "Qual unidade atende você?" e o texto de apoio da copy.
- Lista vertical com as 5 unidades, cada uma com: número, cidade, endereço completo, horários, WhatsApp, botão **Pedir pelo WhatsApp — Cidade** e link secundário **Como chegar**.
- `?cidade=slug`: a unidade escolhida aparece destacada e é rolada até a tela (as demais continuam visíveis abaixo).
- Jaguaribe mostra o aviso de dias a confirmar. Não há indicador "Aberto agora".
- Eventos `whatsapp_click` e `directions_click` com cidade, unidade e seção.

## Fluxo de conversão

```
Qualquer CTA "Pedir meu gás"  ──►  /atendimento  ──►  wa.me/<unidade>
Seletor de cidade (01–05)     ──►  /atendimento?cidade=slug (unidade destacada)  ──►  wa.me/<unidade>
```
As UTMs da URL de entrada são preservadas nos links internos (`lib/utm.ts`).

## Mensuração (`lib/analytics.ts`)

Os eventos vão para `window.dataLayer`, prontos para o GTM:

| Evento | Quando | Parâmetros |
|---|---|---|
| `page_view` | Troca de rota | `pagina_origem` + UTMs |
| `city_select` | Clique em uma cidade | `cidade`, `unidade`, `secao_origem` |
| `whatsapp_click` | Clique em wa.me (central) | `cidade`, `unidade`, `secao_origem` |
| `directions_click` | Clique em "Como chegar" | `cidade`, `unidade`, `secao_origem` |

Telefones e mensagens nunca são enviados. Os IDs de GTM/GA4/Pixel ficam em `.env.local` (ver `lib/site.ts`). Antes de ativar tags de terceiros, implementar o consentimento de cookies.

## SEO (planejado para a fase de implementação)
Metadata por página, Open Graph, `app/sitemap.ts`, `app/robots.ts` e JSON-LD `LocalBusiness` por unidade (só com os dados confirmados), com SEO local para as cinco cidades.
