# 03 — Design system

Os tokens ficam em `app/globals.css` (bloco `@theme` do Tailwind v4) e viram classes do Tailwind automaticamente: `bg-azul`, `text-tinta-2`, `border-linha` etc.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `azul` | #0054D9 | Marca: destaques tipográficos, ícones, links, foco |
| `azul-escuro` | #0046B5 | Hover do azul |
| `azul-profundo` | #003579 | Barra superior, faixa de cidades, CTA final, rodapé |
| `azul-noite` | #00285C | Hover sobre o azul profundo |
| `verde` | **#00843A** | **Botões de conversão** (texto branco) |
| `verde-escuro` | #006F31 | Hover do botão |
| `verde-marca` | #009B40 | Acentos e ícones. **Não usar com texto branco pequeno** |
| `tinta` | #102135 | Texto principal |
| `tinta-2` | #526174 | Texto secundário |
| `nevoa` | #F3F6FA | Fundo de seções alternadas |
| `linha` | #DCE3EC | Divisórias e bordas |

**Por que o botão usa #00843A e não #009B40:** o texto branco sobre #009B40 tem contraste de 3,6:1 e reprova no WCAG AA para texto normal (o mínimo é 4,5:1). O #00843A dá 4,8:1 e é visualmente o mesmo verde. O #009B40 continua disponível como cor de marca.

**Proporção de uso:** cerca de 70% branco/névoa, 20% azul (texto e faixas) e menos de 5% verde (só CTAs).

## Tipografia

Duas famílias, carregadas via `next/font` (auto-hospedadas, sem layout shift):

- **Manrope**: títulos (`font-display`). Pesos 700 e 800, tracking negativo.
- **Inter**: texto, navegação e componentes (`font-sans`). Pesos 400, 500 e 600.

| Utilitário | Tamanho (fluido) | Uso |
|---|---|---|
| `text-display` | 34 → 56px, peso 800, entrelinha 1.04 | H1 da hero |
| `text-h2` | 28 → 40px, peso 800 | Títulos de seção |
| `text-h3` | 20 → 24px, peso 700 | Subtítulos e itens |
| `text-lead` | 17 → 19px, entrelinha 1.6 | Texto de apoio |
| base | 16px, entrelinha 1.6 | Corpo |

## Grid e espaçamento

- Container `container-site`: conteúdo de até 1280px, gutter de 16 / 24 / 40px (mobile / tablet / desktop).
- Grid de 12 colunas no desktop (`lg:grid-cols-12`). Hero: texto em 5 colunas (≈45%) e foto em 55% sangrando à direita. Entre 1024 e 1279px, 6 colunas / 47%.
- Espaçamento em múltiplos de 8px (classes do Tailwind: `2`=8, `4`=16, `6`=24, `8`=32, `10`=40, `12`=48, `16`=64, `20`=80, `24`=96).
- Respiro entre seções: 96–128px no desktop e 64–80px no mobile.

## Componentes base

- **Botão de conversão:** sólido verde, raio de 6px, altura de 56px (hero) ou 48px (header e barra mobile), ícone do WhatsApp à esquerda e seta à direita que avança no hover.
- **Link de texto:** sublinhado que cresce da esquerda (300ms).
- **Lista numerada de cidades:** número 01–05 em Manrope semibold a 50% de opacidade, nome da cidade em bold, divisórias de 1px. É o padrão para qualquer lista de unidades.
- **Divisórias:** 1px na cor `linha` (sobre o claro) ou `white/15` (sobre o azul).
- **Raios:** 4px (`rounded-sm`), 6px (`rounded-md`, padrão) e 8px (`rounded-lg`, imagens). Nada de pílulas.
- **Sombras:** só quando funcionais (por exemplo, o header ao rolar a página).
- **Ícones:** Lucide, traço de 1,75 a 2, 18–20px, sempre com `aria-hidden` e sem fundo.

## Movimento

- Curva padrão `--ease-suave`: cubic-bezier(0.22, 1, 0.36, 1).
- Na hero, cada grupo entra de um jeito: as linhas do H1 sobem por máscara (640ms, escalonadas), o texto e o CTA surgem com fade + 12px, a foto aparece com escala de 1.04 → 1, e o painel azul abre com clip-path.
- Hover: 200–300ms. Não há animações contínuas, parallax ou scroll hijacking.
- `prefers-reduced-motion`: tudo é reduzido a 1ms, e o layout final é idêntico.

## Acessibilidade

- Foco visível com contorno azul de 3px (branco sobre fundos escuros, via a classe `sobre-escuro`).
- Link "Pular para o conteúdo".
- Alvos de toque de pelo menos 48px no mobile.
- Contraste AA verificado para todos os pares de texto da paleta.
