import Image from "next/image";
import { ArrowRight, Check, Info } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

/**
 * ATENÇÃO — VALIDAR ANTES DE PUBLICAR (docs/02-PENDENCIAS.md):
 * o texto abaixo é o da copy oficial e precisa ser confirmado com a empresa
 * e com as regras vigentes do programa. Não acrescentar regras, valores,
 * critérios de elegibilidade ou garantias.
 */
const pontos = [
  "Atendimento nas cinco unidades.",
  "Mais facilidade para utilizar seu benefício.",
  "Orientação diretamente com nossa equipe.",
];

export function GasDoPovo() {
  return (
    <section id="gas-do-povo" aria-labelledby="gdp-titulo" className="py-20 md:py-24 lg:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Card com a Tag 3D oficial do Programa Gás do Povo */}
        <div className="revelar relative lg:col-span-6">
          <div className="superficie relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-[var(--radius-foto)] border border-linha p-6 sm:p-10 lg:aspect-[4/4.4]">
            {/* Brilho radial suave de fundo no card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(110_162_255/0.12),transparent_70%)]"
            />
            <div className="relative h-full w-full max-w-[340px] sm:max-w-[400px]">
              <Image
                src="/images/tag-gas-do-povo.png"
                alt="Tag 3D oficial do Programa Gás do Povo"
                fill
                priority
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain object-center drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-[var(--ease-suave)] hover:scale-105"
              />
            </div>
          </div>
          <div className="superficie-foto absolute bottom-5 left-5 right-5 p-5 sm:right-auto sm:w-[290px]">
            <p className="font-display text-[15px] font-semibold">A Guedes Gás também participa do programa Gás do Povo!</p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="lg:col-span-6">
          <SectionTitle id="gdp-titulo" align="left">
            Você tem direito ao Gás do Povo?
          </SectionTitle>
          <p className="revelar mt-6 text-lead text-texto-2">
            Todas as nossas cinco unidades oferecem atendimento pelo programa Gás do Povo, facilitando o
            acesso ao benefício para as famílias contempladas. Se você é beneficiário, entre em contato com a
            unidade mais próxima e consulte as orientações para realizar a retirada do seu botijão.
          </p>

          <ul className="revelar mt-8 divide-y divide-white/10 border-y border-linha">
            {pontos.map((p) => (
              <li key={p} className="flex items-center gap-4 py-4 text-[17px] font-medium">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-linha-forte text-celeste">
                  <Check aria-hidden size={18} strokeWidth={2} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#unidades"
            className="group mt-8 inline-flex h-14 items-center gap-2 rounded-md border border-linha-forte px-6 text-[15px] font-semibold text-texto transition-colors duration-200 hover:border-texto hover:bg-white/5"
          >
            Encontre uma unidade
            <ArrowRight
              aria-hidden
              size={17}
              className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1"
            />
          </a>

          <p className="mt-6 flex items-start gap-2 text-sm text-texto-3">
            <Info aria-hidden size={16} className="mt-0.5 shrink-0" />
            Utilização do benefício sujeita aos critérios de elegibilidade e às regras vigentes do programa.
          </p>
        </div>
      </div>
    </section>
  );
}
