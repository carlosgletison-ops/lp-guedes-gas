/**
 * Dados estruturados (schema.org) gerados SOMENTE a partir de informações
 * confirmadas na copy. Sem CNPJ, avaliações, preços ou redes sociais.
 * Horários sem dias confirmados (Jaguaribe) não são publicados.
 */
import { faq } from "@/data/faq";
import { enderecoCompleto, unidades, type Unidade } from "@/data/unidades";
import { site } from "./site";

function lojaSchema(u: Unidade) {
  const horarios = u.horarios
    .filter((h) => h.diasSchema.length > 0)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.diasSchema,
      opens: h.abre,
      closes: h.fecha,
    }));

  return {
    "@type": "Store",
    "@id": `${site.url}/atendimento#${u.slug}`,
    name: u.nome,
    url: `${site.url}/atendimento?cidade=${u.slug}`,
    telephone: u.whatsapp.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${u.endereco.logradouro} – ${u.endereco.bairro}`,
      addressLocality: u.endereco.cidade,
      addressRegion: "CE",
      addressCountry: "BR",
    },
    description: `Gás de cozinha Ultragaz em ${u.endereco.cidade} – CE. ${enderecoCompleto(u)}.`,
    areaServed: { "@type": "City", name: `${u.endereco.cidade}, CE` },
    parentOrganization: { "@id": `${site.url}/#organizacao` },
    ...(horarios.length ? { openingHoursSpecification: horarios } : {}),
  };
}

export function schemaOrganizacao() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organizacao`,
    name: site.nome,
    url: site.url,
    slogan: "Sempre perto de você",
    areaServed: unidades.map((u) => ({ "@type": "City", name: `${u.endereco.cidade}, CE` })),
  };
}

export function schemaUnidades() {
  return {
    "@context": "https://schema.org",
    "@graph": unidades.map(lojaSchema),
  };
}

export function schemaFaq() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  };
}
