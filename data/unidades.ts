/**
 * FONTE ÚNICA DE DADOS DAS UNIDADES — Guedes Gás
 *
 * Origem: "Copy_Landing_Page_Ultragaz_Guedes_Gas.docx" (copy oficial).
 * Qualquer alteração de endereço, horário, telefone ou disponibilidade
 * deve ser feita SOMENTE aqui. Todas as páginas leem deste arquivo.
 *
 * Regras:
 * - Não inventar dias/horários. Quando a copy não informa, usar `dias: null`
 *   e preencher `avisoHorario`.
 * - Disponibilidade de produtos fica "consultar" até confirmação por unidade.
 */

export type Disponibilidade = "confirmado" | "consultar";

export type Horario = {
  /** Ex.: "Segunda a sexta". `null` quando os dias não foram confirmados. */
  dias: string | null;
  /** Ex.: "06h30 às 17h" */
  horas: string;
};

export type CidadeSlug = "ico" | "iguatu" | "crato" | "jaguaribe" | "varzea-alegre";

export type Unidade = {
  slug: CidadeSlug;
  /** Número de ordem usado na interface (01–05), conforme a copy. */
  ordem: string;
  cidade: string;
  nome: string;
  endereco: {
    logradouro: string;
    bairro: string;
    cidade: string;
    uf: "CE";
  };
  horarios: Horario[];
  /** Aviso exibido junto ao horário quando há informação pendente. */
  avisoHorario?: string;
  whatsapp: {
    /** Formato de exibição, ex.: (88) 99707-6491 */
    exibicao: string;
    /** Link oficial wa.me — não alterar sem autorização. */
    url: string;
  };
  produtos: {
    p13: Disponibilidade;
    p20: Disponibilidade;
    p45: Disponibilidade;
  };
  /** Coordenadas aproximadas do centro urbano do município (para o mapa). */
  geo: { lat: number; lng: number };
};

export const unidades: Unidade[] = [
  {
    slug: "ico",
    ordem: "01",
    cidade: "Icó",
    nome: "Guedes Gás — Icó",
    endereco: {
      logradouro: "Rua Benjamin Constant, 865",
      bairro: "Cidade Nova",
      cidade: "Icó",
      uf: "CE",
    },
    horarios: [
      { dias: "Segunda a sexta", horas: "06h30 às 17h" },
      { dias: "Sábado", horas: "06h30 às 13h" },
    ],
    whatsapp: { exibicao: "(88) 99707-6491", url: "https://wa.me/5588997076491" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -6.4011, lng: -38.8622 },
  },
  {
    slug: "iguatu",
    ordem: "02",
    cidade: "Iguatu",
    nome: "Guedes Gás — Iguatu",
    endereco: {
      logradouro: "Rua Maria Soares Alcanfor, 15",
      bairro: "COHAB",
      cidade: "Iguatu",
      uf: "CE",
    },
    horarios: [
      { dias: "Segunda a sábado", horas: "06h às 18h30" },
      { dias: "Domingos e feriados", horas: "07h às 12h" },
    ],
    whatsapp: { exibicao: "(88) 99653-1909", url: "https://wa.me/5588996531909" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -6.3596, lng: -39.2982 },
  },
  {
    slug: "crato",
    ordem: "03",
    cidade: "Crato",
    nome: "Guedes Gás — Crato",
    endereco: {
      logradouro: "Rua Dr. Maurício Teles, 170",
      bairro: "Novo Crato",
      cidade: "Crato",
      uf: "CE",
    },
    horarios: [
      { dias: "Segunda a sexta", horas: "07h às 18h" },
      { dias: "Sábado", horas: "07h às 17h" },
    ],
    whatsapp: { exibicao: "(88) 98892-4338", url: "https://wa.me/5588988924338" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -7.2342, lng: -39.4094 },
  },
  {
    slug: "jaguaribe",
    ordem: "04",
    cidade: "Jaguaribe",
    nome: "Guedes Gás — Jaguaribe",
    endereco: {
      logradouro: "Avenida Aloísio Diógenes, 660",
      bairro: "Nelson Diógenes",
      cidade: "Jaguaribe",
      uf: "CE",
    },
    // PENDENTE: a copy informa os horários, mas não os dias da semana.
    horarios: [
      { dias: null, horas: "07h às 13h" },
      { dias: null, horas: "15h às 18h" },
    ],
    avisoHorario: "Dias de atendimento a confirmar. Consulte a unidade pelo WhatsApp.",
    whatsapp: { exibicao: "(88) 98114-8823", url: "https://wa.me/5588981148823" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -5.8906, lng: -38.6219 },
  },
  {
    slug: "varzea-alegre",
    ordem: "05",
    cidade: "Várzea Alegre",
    nome: "Guedes Gás — Várzea Alegre",
    endereco: {
      logradouro: "Rua Neném Marinheiro, 612",
      bairro: "Centro",
      cidade: "Várzea Alegre",
      uf: "CE",
    },
    horarios: [
      { dias: "Segunda a sábado", horas: "05h30 às 18h" },
      { dias: "Domingo", horas: "06h às 13h" },
    ],
    whatsapp: { exibicao: "(88) 99995-0404", url: "https://wa.me/5588999950404" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -6.7889, lng: -39.2956 },
  },
];

export function enderecoCompleto(u: Unidade): string {
  return `${u.endereco.logradouro} – ${u.endereco.bairro}, ${u.endereco.cidade} – ${u.endereco.uf}`;
}

/** Link "Como chegar" — busca o endereço oficial no Google Maps. */
export function linkComoChegar(u: Unidade): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoCompleto(u))}`;
}

export function linkCentral(slug?: CidadeSlug): string {
  return slug ? `/atendimento?cidade=${slug}` : "/atendimento";
}

export function getUnidade(slug: string | null | undefined): Unidade | undefined {
  return unidades.find((u) => u.slug === slug);
}
