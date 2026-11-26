import type { Metadata, Viewport } from "next";
import { Outfit, Roboto } from "next/font/google";
import { AnalyticsListener } from "@/components/analytics-listener";
import { MobileOrderBar } from "@/components/mobile-order-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LiquidGlass } from "@/components/liquid-glass";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Guedes Gás | Gás Ultragaz em Icó, Iguatu, Crato, Jaguaribe e Várzea Alegre",
    template: "%s | Guedes Gás",
  },
  description: site.descricao,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: "Guedes Gás — Precisou de gás? A Guedes Gás leva até você!",
    description: site.descricao,
    images: [{ url: "/images/hero-entregador-ultragaz.jpg", width: 1080, height: 1080, alt: "Entregador Ultragaz" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#000fff",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${roboto.variable} antialiased`}>
      <body className="min-h-svh">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-azul-profundo focus:px-4 focus:py-3 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <LiquidGlass />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        {/* Espaço reservado para a barra fixa do mobile não cobrir conteúdo */}
        <div aria-hidden className="h-[76px] md:hidden" />
        <MobileOrderBar />
        <AnalyticsListener />
      </body>
    </html>
  );
}
