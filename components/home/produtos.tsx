import Image from "next/image";
import { ArrowRight, Info } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";
import { textosProdutos as t } from "@/data/produtos";

export function Produtos() {
  return (
    <section id="produtos" aria-labelledby="produtos-titulo" className="py-20 md:py-24 lg:py-28">
      <div className="container-site">
        <SectionTitle id="produtos-titulo">{t.titulo}</SectionTitle>
        <p className="revelar mx-auto mt-5 max-w-[60ch] text-center text-texto-2">{t.intro}</p>

        {/* Os botijões em destaque nos cards */}
        <div className="mt-28 grid gap-x-6 gap-y-28 md:mt-32 lg:grid-cols-12">
          {/* P13 — destaque comercial */}
          <article className="revelar superficie relative flex flex-col gap-8 p-6 pt-0 sm:min-h-[400px] sm:justify-center sm:p-8 sm:pr-[48%] lg:col-span-7 lg:min-h-[420px] lg:p-10 lg:pr-[48%]">
            <div className="-mt-24 flex h-[280px] justify-center sm:absolute sm:right-2 sm:top-1/2 sm:mt-0 sm:h-[400px] sm:w-[48%] sm:-translate-y-1/2 sm:items-center lg:right-4 lg:h-[440px] lg:w-[48%]">
              <div className="relative h-full w-full max-w-[280px] sm:max-w-[360px]">
                <Image
                  src="/images/botijao-p13.png"
                  alt="Botijão de gás P13 Ultragaz"
                  fill
                  className="object-contain object-center drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 420px, (min-width: 640px) 360px, 280px"
                  priority
                />
              </div>
            </div>
            <div>
              <p className="font-display text-sm font-medium text-celeste">Para sua casa</p>
              <h3 className="mt-2 font-display text-[28px] font-bold leading-tight tracking-[-0.02em] lg:text-[34px]">
                {t.p13.titulo}
              </h3>
              <p className="mt-3 max-w-[38ch] text-texto-2">{t.p13.texto}</p>
              <TrackedLink
                href="/atendimento"
                className="mt-7 inline-flex h-12 items-center gap-2.5 rounded-md bg-verde px-5 text-[15px] font-semibold text-white shadow-lg shadow-verde/20 transition-colors duration-200 hover:bg-verde-escuro"
              >
                <WhatsAppIcon className="size-[18px]" />
                {t.cta}
              </TrackedLink>
            </div>
          </article>

          {/* P20 e P45 — secundário */}
          <article className="revelar superficie relative flex flex-col p-6 pt-0 sm:min-h-[400px] sm:p-8 sm:pt-0 lg:col-span-5 lg:min-h-[420px] lg:p-10 lg:pt-0">
            <div className="-mt-24 flex h-[280px] items-end justify-center sm:-mt-28 sm:h-[360px] lg:-mt-32 lg:h-[410px]">
              <div className="relative h-full w-full max-w-[290px] sm:max-w-[380px]">
                <Image
                  src="/images/botijao-p20-p45.png"
                  alt="Cilindros de gás P20 e P45 Ultragaz"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 340px, 280px"
                />
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
            P20 e P45 sujeitos à disponibilidade de cada unidade. Imagens ilustrativas.
          </span>
        </p>
      </div>
    </section>
  );
}
