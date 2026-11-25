import { ArrowUpRight } from "lucide-react";
import { UltragazAmbientGlow } from "@/components/brand-shapes";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { linkCentral, unidades } from "@/data/unidades";

/**
 * Seletor rápido de cidade — leva à central com a unidade já destacada
 * (/atendimento?cidade=slug). Cards numerados 01–05, sem chips/pílulas.
 */
export function CitySelector() {
  return (
    <section id="cidades" aria-labelledby="cidades-titulo" className="relative overflow-hidden py-20 md:py-24 lg:py-28">
      {/* Halo de luz sutil da marca Ultragaz */}
      <UltragazAmbientGlow color="blue" className="-bottom-20 left-1/4 h-80 w-80 opacity-15" />

      <div className="container-site relative z-10">
        <SectionTitle id="cidades-titulo">Onde você precisa de gás?</SectionTitle>
        <p className="mx-auto mt-5 max-w-[46ch] text-center text-texto-2">
          Escolha sua cidade e encontre a unidade mais próxima para fazer seu pedido.
        </p>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-14 md:gap-4 lg:grid-cols-5">
          {unidades.map((u) => (
            <li key={u.slug} className="sm:last:col-span-2 lg:last:col-span-1">
              <TrackedLink
                href={linkCentral(u.slug)}
                evento="city_select"
                params={{ cidade: u.cidade, unidade: u.nome, secao_origem: "seletor_cidades" }}
                className="superficie group relative flex h-full items-center justify-between gap-4 p-5 transition-[transform,border-color,background-color] duration-300 ease-[var(--ease-suave)] hover:-translate-y-1 hover:border-celeste/40 hover:bg-white/[0.06] lg:min-h-[200px] lg:flex-col lg:items-stretch lg:p-6"
              >
                <span className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  <span className="font-display text-sm font-medium tabular-nums text-texto-3 group-hover:text-celeste transition-colors">
                    {u.ordem}
                  </span>
                  <span className="lg:mt-10">
                    <span className="block font-display text-xl font-semibold leading-tight tracking-[-0.015em] lg:text-[22px]">
                      {u.cidade}
                    </span>
                    <span className="mt-1 block text-sm text-texto-3">{u.endereco.bairro}</span>
                  </span>
                </span>
                <span className="grid size-10 shrink-0 place-items-center self-center rounded-lg border border-linha-forte text-texto-2 transition-colors duration-300 group-hover:border-verde group-hover:bg-verde group-hover:text-white lg:absolute lg:right-6 lg:top-6 lg:self-auto">
                  <ArrowUpRight aria-hidden size={18} />
                  <span className="sr-only">Ver unidade de {u.cidade}</span>
                </span>
              </TrackedLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
