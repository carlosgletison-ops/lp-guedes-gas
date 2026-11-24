/**
 * FONTE ÚNICA DE DADOS DAS UNIDADES — Guedes Gás
 *
 * Origem: "Copy_Landing_Page_Ultragaz_Guedes_Gas.docx" (copy oficial).
 * Qualquer alteração de endereço, horário, telefone ou disponibilidade
 * deve ser feita SOMENTE aqui. Todas as páginas (e o SEO) leem deste arquivo.
 *
 * Regras:
 * - Não inventar dias/horários. Quando a copy não informa, usar `dias: null`,
 *   `diasSchema: []` e preencher `avisoHorario`.
 * - Disponibilidade de produtos fica "consultar" até confirmação por unidade.
 */

export type Disponibilidade = "confirmado" | "consultar";

export type DiaSemana =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type Horario = {
  /** Texto exibido, ex.: "Segunda a sexta". `null` quando os dias não foram confirmados. */
  dias: string | null;
  /** Texto exibido, ex.: "06h30 às 17h" */
  horas: string;
  /** Para dados estruturados (schema.org). Vazio = não publicar no SEO. */
  diasSchema: DiaSemana[];
  abre: string;
  fecha: string;
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
    /** Telefone em formato internacional (schema.org). */
    e164: string;
    /** Link oficial wa.me — não alterar sem autorização. */
    url: string;
  };
  produtos: {
    p13: Disponibilidade;
    p20: Disponibilidade;
    p45: Disponibilidade;
  };
  /** Centróide oficial do município (IBGE, API de malhas v3). Usado no mapa e no SEO. */
  geo: { lat: number; lng: number };
};

const SEG_SEX: DiaSemana[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const SEG_SAB: DiaSemana[] = [...SEG_SEX, "Saturday"];

export const unidades: Unidade[] = [
  {
    slug: "ico",
    ordem: "01",
    cidade: "Icó",
    nome: "Guedes Gás — Icó",
    endereco: { logradouro: "Rua Benjamin Constant, 865", bairro: "Cidade Nova", cidade: "Icó", uf: "CE" },
    horarios: [
      { dias: "Segunda a sexta", horas: "06h30 às 17h", diasSchema: SEG_SEX, abre: "06:30", fecha: "17:00" },
      { dias: "Sábado", horas: "06h30 às 13h", diasSchema: ["Saturday"], abre: "06:30", fecha: "13:00" },
    ],
    whatsapp: { exibicao: "(88) 99707-6491", e164: "+5588997076491", url: "https://wa.me/5588997076491" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -6.389, lng: -38.7834 },
  },
  {
    slug: "iguatu",
    ordem: "02",
    cidade: "Iguatu",
    nome: "Guedes Gás — Iguatu",
    endereco: { logradouro: "Rua Maria Soares Alcanfor, 15", bairro: "COHAB", cidade: "Iguatu", uf: "CE" },
    horarios: [
      { dias: "Segunda a sábado", horas: "06h às 18h30", diasSchema: SEG_SAB, abre: "06:00", fecha: "18:30" },
      // "feriados" não é representável no schema — publicamos só o domingo.
      { dias: "Domingos e feriados", horas: "07h às 12h", diasSchema: ["Sunday"], abre: "07:00", fecha: "12:00" },
    ],
    whatsapp: { exibicao: "(88) 99653-1909", e164: "+5588996531909", url: "https://wa.me/5588996531909" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -6.3585, lng: -39.2819 },
  },
  {
    slug: "crato",
    ordem: "03",
    cidade: "Crato",
    nome: "Guedes Gás — Crato",
    endereco: { logradouro: "Rua Dr. Maurício Teles, 170", bairro: "Novo Crato", cidade: "Crato", uf: "CE" },
    horarios: [
      { dias: "Segunda a sexta", horas: "07h às 18h", diasSchema: SEG_SEX, abre: "07:00", fecha: "18:00" },
      { dias: "Sábado", horas: "07h às 17h", diasSchema: ["Saturday"], abre: "07:00", fecha: "17:00" },
    ],
    whatsapp: { exibicao: "(88) 98892-4338", e164: "+5588988924338", url: "https://wa.me/5588988924338" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -7.2356, lng: -39.4899 },
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
      { dias: null, horas: "07h às 13h", diasSchema: [], abre: "07:00", fecha: "13:00" },
      { dias: null, horas: "15h às 18h", diasSchema: [], abre: "15:00", fecha: "18:00" },
    ],
    avisoHorario: "Dias de atendimento a confirmar. Consulte a unidade pelo WhatsApp.",
    whatsapp: { exibicao: "(88) 98114-8823", e164: "+5588981148823", url: "https://wa.me/5588981148823" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -5.9613, lng: -38.705 },
  },
  {
    slug: "varzea-alegre",
    ordem: "05",
    cidade: "Várzea Alegre",
    nome: "Guedes Gás — Várzea Alegre",
    endereco: { logradouro: "Rua Neném Marinheiro, 612", bairro: "Centro", cidade: "Várzea Alegre", uf: "CE" },
    horarios: [
      { dias: "Segunda a sábado", horas: "05h30 às 18h", diasSchema: SEG_SAB, abre: "05:30", fecha: "18:00" },
      { dias: "Domingo", horas: "06h às 13h", diasSchema: ["Sunday"], abre: "06:00", fecha: "13:00" },
    ],
    whatsapp: { exibicao: "(88) 99995-0404", e164: "+5588999950404", url: "https://wa.me/5588999950404" },
    produtos: { p13: "consultar", p20: "consultar", p45: "consultar" },
    geo: { lat: -6.7718, lng: -39.2979 },
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
