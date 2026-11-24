import Image from "next/image";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";

export function CtaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="pb-20 pt-16 md:pb-24 md:pt-24 lg:pb-28">
      <div className="container-site">
        <div className="revelar relative overflow-visible rounded-[var(--radius-foto)] px-6 py-12 shadow-2xl sm:px-10 md:py-14 lg:px-16 lg:py-16">
          {/* Fundo com o gradiente oficial celeste-para-verde */}
          <div
            aria-hidden
            className="absolute inset-0 overflow-hidden rounded-[var(--radius-foto)] bg-[url('/images/gradiente-cta.jpg')] bg-cover bg-center shadow-inner"
          />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="cta-titulo" className="text-h2 font-extrabold tracking-tight text-noite">
                Não fique sem gás!
              </h2>
              <p className="mt-4 max-w-[46ch] text-lead font-medium text-noite/85">
                Precisou, lembrou da Guedes Gás! Conte com a qualidade Ultragaz, atendimento de confiança e
                praticidade para pedir seu gás.
              </p>
              <TrackedLink
                href="/atendimento"
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-md bg-noite px-6 text-base font-semibold text-white shadow-xl transition-all duration-200 hover:bg-azul-profundo hover:shadow-2xl sm:w-auto"
              >
                <WhatsAppIcon className="size-5 text-verde" />
                Pedir meu gás pelo WhatsApp
              </TrackedLink>
              <p className="mt-4 text-sm font-medium text-noite/75">
                Escolha sua cidade e fale diretamente com nossa equipe.
              </p>
            </div>

            {/* P13 real "saindo" do bloco */}
            <div className="pointer-events-none hidden justify-center lg:col-span-5 lg:flex">
              <div className="relative -mb-20 -mt-36 h-[430px] w-full max-w-[360px]">
                <Image
                  src="/images/botijao-p13.png"
                  alt="Botijão de gás P13 Ultragaz oficial"
                  fill
                  unoptimized
                  className="object-contain object-bottom drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
                  sizes="360px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
