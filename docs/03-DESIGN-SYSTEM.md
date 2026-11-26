# 03 — Design system · v3 "Azul Ultragaz" (Manual de Marca)

> **v3 (26/11/2026):** o projeto segue o **Manual de Marca Ultragaz**. O fundo passou a ser o **azul oficial chapado (#000FFF)**, no lugar do azul-marinho da v2. Foram adicionados os grafismos oficiais (Onda, Forma U e Pattern), o header virou flutuante e o vidro líquido está em teste.
> Fonte: `UG_MANUAL_DE_MARCA_ULTRAGAZ.pdf` (66 páginas). As páginas citadas abaixo são as do manual.

## Paleta oficial (pág. 7)

| Cor | Pantone | Hex | Proporção | Uso no site |
|---|---|---|---|---|
| Azul | 2728 C | **#000FFF** | ~50% | Fundo de todas as páginas (`bg-noite` = `bg-azul`) |
| Ciano | 3533 C | **#00FFFF** | ~20% | Destaques de texto, ícones, Forma U, números dos passos |
| Branco | — | #FFFFFF | ~10% | Texto, Forma U branca (Gás do Povo), pattern |
| Verde | 3561 C | **#00FF00** | ~10% | Botões de conversão, pattern, degradês |
| Cinza | Cool Gray 4 C | #BBBCBC | ~5% | Reserva |
| Preto | — | #000000 | ~5% | Reserva |

**Degradês oficiais:** azul→ciano e verde→ciano, sempre na **horizontal** (pág. 7).

### Contraste (WCAG AA)
| Par | Contraste |
|---|---|
| Branco sobre azul #000FFF | 8,3:1 ✅ |
| Ciano sobre azul | 6,6:1 ✅ |
| `texto-2` #E0E2FF sobre azul | 6,9:1 ✅ |
| `texto-3` #C2C6FF sobre azul | 5,1:1 ✅ |
| **Azul sobre verde #00FF00 (botões)** | 6,1:1 ✅ |
| ~~Branco sobre verde~~ | 1,4:1 ❌, por isso os botões verdes usam **texto azul** |

> Os nomes de token `noite`, `noite-2` e `celeste` foram mantidos para não quebrar componentes. Hoje `noite` = azul #000FFF e `celeste` = ciano #00FFFF.

## Tipografia (págs. 20–21)
- O manual define **Mangueira** (títulos e textos) e **Roboto** (tipografia de sistema).
- No site: **Roboto** (oficial) no texto e **Outfit** nos títulos, como substituta da Mangueira. A Mangueira é uma fonte comercial e não está no Google Fonts. Para usar a oficial, coloque os arquivos licenciados (`.woff2`) em `app/fonts/` e troque o `Outfit` por `next/font/local` em `app/layout.tsx`.

## Marca Ultragaz (págs. 9–18)
- Use a versão **negativa (branca)** sobre o azul: `public/images/logo-ultragaz.png`.
- **Sem sombras, filtros ou efeitos** sobre a marca (pág. 18). O filtro `brightness` que existia foi removido.
- Largura mínima no digital: **100px** (pág. 17). No site, o logo tem 34px de altura no celular, o que dá cerca de 102px de largura.
- **Arejamento** (pág. 15): o espaço livre em volta da marca é a largura da letra "u". O divisor fica a 16–20px do logo.

## Grafismos oficiais (`components/brand-shapes.tsx`)

### Forma Onda — `<OndaUltragaz degrade="azul-ciano" | "azul-verde" | ...>` (págs. 24–29)
- Sempre em degradê horizontal. **Nunca sólida** em peças digitais.
- **No máximo 2 ondas por peça**, com distância mínima entre elas igual à espessura da onda.
- Nunca na vertical e nunca em proporção pequena.
- **Onde está:** CTA final ("Não fique sem gás!"), na composição da peça "vamos energizar" (pág. 55). O banner da hero já tem a onda própria.

### Forma U (págs. 31–35)
- `<ArcoU cor="ciano" | "verde" | "branco" | "ciano-verde">`: **uso acolhimento**, um arco atrás de um elemento. Fica próximo do objeto e nunca tem sombra.
  - P13: degradê ciano→verde.
  - P20/P45: ciano.
  - Mapa do Ceará: ciano.
  - Selo Gás do Povo: branco.
- `<BoxU>`: **uso box**, base para títulos curtos e grandes. Nada de texto pequeno ou longo dentro dele (pág. 35).
- Classes CSS disponíveis: `forma-u-arco`, `forma-u-box`, `degrade-ciano-verde`, `degrade-azul-ciano`.

### Pattern (págs. 36–38) — `<PatternU>`
- U em cores sólidas alternadas (ciano, branco, verde) sobre o azul.
- **Onde está:** faixa de assinatura no topo do rodapé.

### Iconografia (págs. 39–40)
- Sempre **outline** (Lucide, traço de 1,5–2), em branco, ciano ou verde sobre o azul. Os ícones são elementos de apoio, nunca protagonistas.

## Vidro líquido (TESTE)
- Classe `vidro`: desfoque + saturação + reflexo especular nas bordas. Funciona em todos os navegadores.
- **Refração real** (Chrome, Edge e Samsung Internet): o `components/liquid-glass.tsx` injeta um filtro SVG e liga `html[data-vidro="liquido"]`. Safari e Firefox ficam só com a versão em CSS.
- Variante `vidro vidro-azul`: tem mais azul, para cards sobre a foto e a onda colorida (garante a leitura do texto branco).
- **Onde está:** header flutuante, menu mobile, cards da hero e barra inferior do celular.
- **Para desligar a refração:** remova `<LiquidGlass />` de `app/layout.tsx`.
- **Para voltar a superfícies sólidas:** troque `vidro` por `bg-azul` com borda `border-linha`.

## Header
- **Flutuante** (`fixed`, com 12–16px de distância do topo), em vidro, sem barra de ponta a ponta. A antiga barra superior (`top-bar.tsx`) foi removida.
- Ao rolar a página, o vidro ganha mais azul para manter a leitura.
- As páginas internas têm `pt-32` ou mais para o conteúdo não ficar embaixo do header.

## Seções claras (fundo branco)
- Classe `secao-clara` na `<section>`: fundo branco, e os tokens são reescritos só dentro dela (texto e destaques em azul; linhas e cards em tom azulado). Os componentes não precisam de alteração.
- Hoje é usada em **Unidades (mapa)** e **Perguntas frequentes**. O ritmo da home alterna azul e branco no fim: Unidades (branca), Como funciona (azul), FAQ (branca), CTA (azul).
- Ao passar sobre uma seção branca, o header ganha 80% de azul para manter o menu legível.

## Componentes
- **Botão de conversão:** `bg-verde text-azul font-bold rounded-xl`, com altura de 56px (hero/CTA) ou 44–48px.
- **Botão secundário:** contornado em `border-linha-forte`, texto branco.
- **Cards** (`superficie`): tinta branca de 11%→5% sobre o azul, borda branca de 20% e raio de 22px.
- **Números dos passos:** quadrado ciano com número azul.

## Imagens
| Arquivo | Uso |
|---|---|
| `hero-banner-azul.webp` | Hero desktop. Gerado a partir de `hero-banner-azul.png` (versão em alta qualidade enviada pelo cliente em 26/11), com o fundo ajustado para o #000FFF exato. Carregado como fundo CSS só em telas ≥1024px |
| `hero-mobile-azul.webp` | Hero mobile (mesma recoloração do `hero-mobile.jpg`) |
| `botijao-p13.png`, `botijao-p20-p45.png` | Produtos, sobre a Forma U |
| `mapa-ceara-3d.png` | Mapa, sobre a Forma U ciano |
| `tag-gas-do-povo.png` | Selo, sobre a Forma U branca |

Os originais com fundo marinho continuam na pasta, caso seja preciso refazer a recoloração.
