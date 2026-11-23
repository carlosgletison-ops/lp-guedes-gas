import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { AnalyticsListener } from "@/components/analytics-listener";
import { MobileOrderBar } from "@/components/mobile-order-bar";
import { SiteHeader } from "@/components/site-header";
import { TopBar } from "@/components/top-bar";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Guedes Gás | Gás Ultragaz em Icó, Iguatu, Crato, Jaguaribe e Várzea Alegre",
    template: "%s | Guedes Gás",
  },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: "Guedes Gás — Precisou de gás? A Guedes Gás leva até você!",
    description: site.descricao,
  },
};

export const viewport: Viewport = {
  themeColor: "#003579",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable} antialiased`}>
      <body className="min-h-svh">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-azul-profundo focus:px-4 focus:py-3 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <TopBar />
        <SiteHeader />
        <main id="conteudo">{children}</main>
        {/* Espaço reservado para a barra fixa do mobile não cobrir conteúdo */}
        <div aria-hidden className="h-[76px] md:hidden" />
        <MobileOrderBar />
        <AnalyticsListener />
      </body>
    </html>
  );
}
