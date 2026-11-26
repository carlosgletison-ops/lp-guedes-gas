import Link from "next/link";
import { BrandMark } from "./brand";
import { PatternU } from "./brand-shapes";
import { linkCentral, unidades } from "@/data/unidades";
import { navegacao } from "@/lib/site";

/**
 * Rodapé. Informações legais (razão social, CNPJ) e redes sociais só entram
 * quando forem fornecidas — ver docs/02-PENDENCIAS.md. Não inventar.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Pattern Ultragaz (Manual págs. 36–38) como faixa de assinatura */}
      <PatternU className="-mt-[3%] h-auto w-full px-[1.6%] opacity-100" />
      <div className="container-site grid gap-12 pb-14 pt-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-12">
        <div className="lg:col-span-4">
          <BrandMark />
          <p className="mt-5 max-w-[34ch] text-texto-2">
            Qualidade Ultragaz, atendimento próximo e entrega para facilitar seu dia.
          </p>
          <p className="mt-3 font-display font-semibold text-celeste">Guedes Gás — Sempre perto de você!</p>
        </div>

        <nav aria-label="Navegação do rodapé" className="lg:col-span-2">
          <p className="font-display text-sm font-semibold text-texto">Navegação</p>
          <ul className="mt-4 space-y-1">
            {navegacao.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-block py-1.5 text-texto-2 transition-colors hover:text-texto">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Cidades atendidas" className="lg:col-span-3">
          <p className="font-display text-sm font-semibold text-texto">Cidades atendidas</p>
          <ul className="mt-4 space-y-1">
            {unidades.map((u) => (
              <li key={u.slug}>
                <Link
                  href={linkCentral(u.slug)}
                  className="inline-flex items-baseline gap-3 py-1.5 text-texto-2 transition-colors hover:text-texto"
                >
                  <span className="font-display text-xs tabular-nums text-texto-3">{u.ordem}</span>
                  {u.cidade} – CE
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <p className="font-display text-sm font-semibold text-texto">Atendimento</p>
          <p className="mt-4 text-texto-2">
            Pedidos pelo WhatsApp da unidade da sua cidade, com entrega ou retirada presencial.
          </p>
          <Link
            href="/atendimento"
            className="mt-5 inline-flex h-12 items-center rounded-md border border-linha-forte px-5 text-[15px] font-semibold transition-colors duration-200 hover:border-texto hover:bg-white/5"
          >
            Central de atendimento
          </Link>
        </div>
      </div>

      <div className="border-t border-linha">
        <div className="container-site flex flex-col gap-3 py-6 text-sm text-texto-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Guedes Gás · Produtos Ultragaz · Ceará</p>
          <Link href="/politica-de-privacidade" className="underline-offset-4 hover:text-texto hover:underline">
            Política de privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
