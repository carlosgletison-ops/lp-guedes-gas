import { ArrowRight } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { linkCentral, unidades } from "@/data/unidades";

/**
 * Seletor rápido de cidade — leva à central com a unidade já destacada
 * (/atendimento?cidade=slug). Lista numerada, sem chips/pílulas.
 */
export function CitySelector() {
  return (
    <section id="cidades" aria-labelledby="cidades-titulo" className="sobre-escuro bg-azul-profundo text-white">
      <div className="container-site grid gap-6 py-12 md:gap-8 md:py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-3 lg:pt-1">
          <h2 id="cidades-titulo" className="font-display text-[26px] font-extrabold leading-[1.1] tracking-[-0.025em] md:text-[30px]">
            Onde você precisa de gás?
          </h2>
          <p className="mt-3 max-w-[38ch] text-[15px] leading-relaxed text-white/75">
            Escolha sua cidade e encontre a unidade mais próxima para fazer seu pedido.
          </p>
        </div>

        <ul className="border-t border-white/15 md:grid md:grid-cols-5 md:border-t-0 lg:col-span-9">
          {unidades.map((u) => (
            <li key={u.slug} className="border-b border-white/15 md:border-b-0 md:border-l md:last:border-r">
              <TrackedLink
                href={linkCentral(u.slug)}
                evento="city_select"
                params={{ cidade: u.cidade, unidade: u.nome, secao_origem: "seletor_cidades" }}
                className="group flex min-h-16 items-center justify-between gap-4 py-4 transition-colors duration-200 md:h-full md:min-h-[148px] md:flex-col md:items-start md:px-5 md:py-5 md:hover:bg-azul-noite"
              >
                <span className="flex items-baseline gap-4 md:flex-col md:gap-2">
                  <span className="font-display text-sm font-semibold tabular-nums text-white/50">{u.ordem}</span>
                  <span className="font-display text-xl font-bold leading-tight tracking-[-0.015em] lg:text-[22px]">
                    {u.cidade}
                  </span>
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  <span className="hidden lg:inline">Ver unidade</span>
                  <span className="sr-only lg:hidden">Ver unidade de {u.cidade}</span>
                  <ArrowRight
                    aria-hidden
                    size={18}
                    className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1"
                  />
                </span>
              </TrackedLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
