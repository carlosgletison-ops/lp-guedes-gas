/**
 * Produtos — textos da copy oficial.
 * `foto`: caminho da foto oficial recortada (PNG/WebP transparente) em /public.
 * Enquanto for `null`, o site mostra uma ilustração provisória ("Imagem ilustrativa").
 * Disponibilidade por unidade fica em data/unidades.ts.
 */
export type ProdutoId = "p13" | "p20" | "p45";

export type Produto = {
  id: ProdutoId;
  nomeCurto: string;
  foto: string | null;
  fotoLargura?: number;
  fotoAltura?: number;
};

export const produtos: Produto[] = [
  { id: "p13", nomeCurto: "P13", foto: null },
  { id: "p20", nomeCurto: "P20", foto: null },
  { id: "p45", nomeCurto: "P45", foto: null },
];

export const textosProdutos = {
  titulo: "O gás que você precisa, com a confiança que você merece!",
  intro:
    "Seja para sua casa ou seu estabelecimento, a Guedes Gás oferece soluções em gás GLP para atender às suas necessidades. Trabalhamos com produtos Ultragaz, oferecendo praticidade, confiança e atendimento de qualidade.",
  p13: {
    titulo: "Gás de cozinha P13",
    texto: "A opção ideal para o dia a dia da sua casa, com praticidade para preparar suas refeições.",
  },
  p20p45: {
    titulo: "Gás P20 e P45",
    texto:
      "Soluções para aplicações específicas e necessidades de maior consumo, conforme disponibilidade de cada unidade.",
  },
  cta: "Quero pedir meu gás",
} as const;
