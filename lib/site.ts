/**
 * Configuração central do site.
 * IDs de mensuração vêm de variáveis de ambiente (.env.local) — nunca inventar valores.
 */
export const site = {
  nome: "Guedes Gás",
  assinatura: "Sempre perto de você",
  /** Defina NEXT_PUBLIC_SITE_URL com o domínio oficial antes de publicar. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  descricao:
    "Gás de cozinha Ultragaz com entrega e retirada em Icó, Iguatu, Crato, Jaguaribe e Várzea Alegre. Escolha sua unidade e peça pelo WhatsApp.",
} as const;

export const mensuracao = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;

export const navegacao = [
  { label: "Início", href: "/#inicio" },
  { label: "Gás do Povo", href: "/#gas-do-povo" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Unidades", href: "/#unidades" },
] as const;
