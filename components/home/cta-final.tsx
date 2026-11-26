import Image from "next/image";
import { OndaUltragaz } from "@/components/brand-shapes";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";

/**
 * CTA final — composição da peça "vamos energizar" do Manual (pág. 55):
 * azul chapado + DUAS ondas em degradê horizontal (máximo permitido),
 * respeitando a distância mínima entre elas, e o P13 em primeiro plano.
 */
export function CtaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="relative overflow-hidden py-24 md:py-28 lg:py-36">
      <OndaUltragaz degrade="azul-ciano" className="absolute right-0 top-[4%] h-[48%] w-[180%] max-w-none sm:w-full" />
      <OndaUltragaz degrade="azul-verde" className="absolute bottom-[2%] right-0 h-[48%] w-[180%] max-w-none sm:w-full" />

      <div className="container-site relative z-10 grid items-center gap-10 lg:grid-cols-12">
        <div className="revelar lg:col-span-7">
          <h2 id="cta-titulo" className="text-display text-texto">
            Não fique sem gás!
          </h2>
          <p className="mt-5 max-w-[46ch] text-lead text-texto-2">
            Precisou, lembrou da Guedes Gás! Conte com a qualidade Ultragaz, atendimento de confiança e
            praticidade para pedir seu gás.
          </p>
          <TrackedLink
            href="/atendimento"
            className="mt-9 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-verde px-7 text-base font-bold text-azul transition-colors duration-200 hover:bg-verde-escuro sm:w-auto"
          >
            <WhatsAppIcon className="size-5" />
            Pedir meu gás pelo WhatsApp
          </TrackedLink>
          <p className="mt-4 text-sm text-texto-3">Escolha sua cidade e fale diretamente com nossa equipe.</p>
        </div>

        <div className="pointer-events-none relative mx-auto h-[300px] w-full max-w-[300px] sm:h-[360px] sm:max-w-[360px] lg:col-span-5 lg:h-[440px] lg:max-w-[420px]">
          <Image
            src="/images/botijao-p13.png"
            alt="Botijão de gás P13 Ultragaz"
            fill
            sizes="(min-width: 1024px) 420px, 360px"
            className="object-contain object-center drop-shadow-[0_22px_28px_rgba(0,6,110,0.4)]"
          />
        </div>
      </div>
    </section>
  );
}
