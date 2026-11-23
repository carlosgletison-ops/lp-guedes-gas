# 03 — Design system · direção "Noite azul" (v2)

> **v2 (23/11/2026):** a direção mudou de "editorial claro" para um **ambiente monocromático em azul profundo**, a pedido do cliente, com base na referência do Figma ("Interactive Website — Figma UI Design Tutorial", um site de plantas em verde-escuro). Mantivemos a lógica da referência e trocamos o verde-oliva pelo azul da marca.

## O que veio da referência
| Referência (plantas) | Guedes Gás |
|---|---|
| Um único ambiente escuro em todas as seções, o que traz harmonia | Fundo `noite` #061430 do topo ao rodapé |
| Cards translúcidos com borda fina clara e raio grande | Utilitários `superficie` e `superficie-foto`, com raio de 22px |
| Foto protagonista com cards flutuando sobre as bordas | Foto do entregador com cards de "Unidades" e "Gás do Povo" |
| Títulos de seção centralizados com colchetes nos cantos | Componente `<SectionTitle>` com colchetes em `celeste` |
| Botões contornados finos | Botão secundário contornado ("Ver unidades") |
| Ícone em quadradinho contornado nos cards | Seta em quadrado de 40px nos cards de cidade, que fica verde no hover |
| Produto recortado "saindo" do card | **Previsto para a seção Produtos**, assim que chegarem as fotos recortadas do P13/P20/P45 |

**Ajustes em relação ao briefing original:** o briefing vetava glassmorphism e cantos muito arredondados. A referência escolhida pelo cliente usa os dois. Adotei os dois de forma **contida**:
- O desfoque aparece só nos cards que ficam sobre a foto (`superficie-foto`), onde ajuda a leitura. Os demais cards são translúcidos, sem desfoque.
- Não há brilhos, glow, neon ou gradiente roxo. A única "luz" é um radial azul muito suave atrás da foto da hero.
- Continuam proibidos: pílulas, navbar em cápsula, botões ovais, blobs, partículas e ícones em círculos coloridos.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `noite` | #061430 | Fundo de toda a página |
| `noite-2` / `noite-3` | #0A1E44 / #10295A | Superfícies sólidas e hover |
| `azul` | #0054D9 | Azul Ultragaz em áreas sólidas (CTA final, luz ambiente) |
| `azul-profundo` | #003579 | Reserva (rodapé e faixas) |
| `celeste` | #6EA2FF | Destaques tipográficos, ícones, colchetes e foco. Contraste de 7,2:1 sobre `noite` |
| `verde` | #00843A | **Somente botões de conversão** (texto branco, 4,8:1) |
| `verde-escuro` | #006F31 | Hover do botão |
| `texto` | #FFFFFF | Texto principal |
| `texto-2` | #B4C0D6 | Texto secundário (9,9:1) |
| `texto-3` | #8392AD | Legendas e números (5,8:1) |
| `linha` / `linha-forte` | branco 12% / 24% | Bordas e divisórias |

Proporção de uso: cerca de 85% do ambiente é `noite`, cerca de 10% são superfícies e texto, e menos de 5% são destaques (`celeste` e `verde`).

## Tipografia
- **Manrope** (`font-display`) nos títulos, peso 700, tracking de −0,03em. Mais leve que na v1, mais próxima da referência.
- **Inter** (`font-sans`) no texto e na interface.

| Utilitário | Tamanho | Uso |
|---|---|---|
| `text-display` | 36 → 60px | H1 |
| `text-h2` | 28 → 40px | Títulos de seção (via `<SectionTitle>`) |
| `text-lead` | 17 → 19px | Texto de apoio |

## Superfícies e raios
- `superficie`: gradiente de branco 7,5% → 2,5%, borda `linha`, raio de 22px. Usada nos cards de conteúdo.
- `superficie-foto`: `noite` a 62%, desfoque de 14px, borda branca de 16%. Só para cards sobre fotografia.
- Raios: botões com 6–8px, cards com 22px, fotos com 28px, ícones em quadrado com 8px.

## Grid e espaçamento
- `container-site`: até 1280px de conteúdo, gutter de 16 / 24 / 40px.
- Hero: texto em 5 colunas e foto em 7 (≥1280px). Entre 1024 e 1279px, 6/6 (o card de unidades fica oculto para não cobrir o rosto).
- Espaçamento em múltiplos de 8px. Seções com 80–112px de respiro vertical.

## Componentes
- **Botão de conversão:** verde sólido, altura de 56px (hero) ou 44–48px (header e barra mobile), com ícone do WhatsApp.
- **Botão secundário:** contornado em `linha-forte`, com hover em `texto` e fundo branco 5%.
- **Card de cidade:** número 01–05, nome, bairro e seta em quadrado. No hover, sobe 4px, a borda fica mais forte e a seta fica verde.
- **Faixa de destaques:** quatro itens com divisórias verticais, logo abaixo da hero.
- **`<SectionTitle>`:** título centralizado com colchetes nos cantos superior esquerdo e inferior direito.

## Movimento
- Curva `--ease-suave`: cubic-bezier(0.22, 1, 0.36, 1).
- Na hero, as linhas do H1 sobem por máscara, o texto e os botões surgem com fade, a foto entra com escala de 1.05 → 1, e os cards flutuantes entram por último (fade + 18px).
- Hover em 200–300ms. Não há animação contínua.
- Com `prefers-reduced-motion`, as animações são desativadas e o layout final é idêntico.

## Acessibilidade
- Foco com contorno `celeste` de 2px.
- Todos os pares de texto passam no WCAG AA (os valores estão na tabela).
- Alvos de toque de pelo menos 48px no mobile.
