import { ArrowRight, Info } from "lucide-react";
import { Botijao } from "@/components/botijao";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";
import { produtos, textosProdutos as t } from "@/data/produtos";

const temFotoOficial = produtos.every((p) => p.foto);

export function Produtos() {
  return (
    <section id="produtos" aria-labelledby="produtos-titulo" className="py-20 md:py-24 lg:py-28">
      <div className="container-site">
        <SectionTitle id="produtos-titulo">{t.titulo}</SectionTitle>
        <p className="revelar mx-auto mt-5 max-w-[60ch] text-center text-texto-2">{t.intro}</p>

        {/* Os botijões "saem" dos cards (padrão da referência) */}
        <div className="mt-24 grid gap-x-5 gap-y-24 md:mt-28 lg:grid-cols-12">
          {/* P13 — destaque comercial */}
          <article className="revelar superficie relative flex flex-col gap-8 p-6 pt-0 sm:min-h-[340px] sm:justify-end sm:p-8 sm:pr-[46%] lg:col-span-7 lg:p-10 lg:pr-[46%]">
            <div className="-mt-16 flex h-[230px] justify-center sm:absolute sm:bottom-8 sm:right-6 sm:mt-0 sm:h-[330px] sm:w-[40%] sm:items-end lg:h-[370px]">
              <Botijao id="p13" sizes="(min-width: 640px) 300px, 220px" />
            </div>
            <div>
              <p className="font-display text-sm font-medium text-celeste">Para sua casa</p>
              <h3 className="mt-2 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] lg:text-[34px]">
                {t.p13.titulo}
              </h3>
              <p className="mt-3 max-w-[38ch] text-texto-2">{t.p13.texto}</p>
              <TrackedLink
                href="/atendimento"
                className="mt-7 inline-flex h-12 items-center gap-2.5 rounded-md bg-verde px-5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-verde-escuro"
              >
                <WhatsAppIcon className="size-[18px]" />
                {t.cta}
              </TrackedLink>
            </div>
          </article>

          {/* P20 e P45 — secundário */}
          <article className="revelar superficie relative flex flex-col p-6 pt-0 sm:p-8 sm:pt-0 lg:col-span-5 lg:p-10 lg:pt-0">
            <div className="-mt-16 flex h-[230px] items-end justify-center gap-8 sm:-mt-20 sm:h-[300px] lg:h-[340px]">
              <div className="h-[62%]">
                <Botijao id="p20" sizes="160px" />
              </div>
              <div className="h-full">
                <Botijao id="p45" sizes="160px" />
              </div>
            </div>
            <div className="mt-8">
              <p className="font-display text-sm font-medium text-celeste">Maior consumo</p>
              <h3 className="mt-2 font-display text-[26px] font-bold leading-tight tracking-[-0.02em] lg:text-[28px]">
                {t.p20p45.titulo}
              </h3>
              <p className="mt-3 text-texto-2">{t.p20p45.texto}</p>
              <TrackedLink
                href="/atendimento"
                className="group mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-texto underline decoration-linha-forte underline-offset-[6px] transition-colors hover:decoration-celeste"
              >
                Consultar disponibilidade na unidade
                <ArrowRight
                  aria-hidden
                  size={17}
                  className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1"
                />
              </TrackedLink>
            </div>
          </article>
        </div>

        <p className="mt-8 flex items-start justify-center gap-2 text-center text-sm text-texto-3">
          <Info aria-hidden size={16} className="mt-0.5 shrink-0" />
          <span>
            P20 e P45 sujeitos à disponibilidade de cada unidade.
            {!temFotoOficial && " Imagens ilustrativas."}
          </span>
        </p>
      </div>
    </section>
  );
}
