import { Botijao } from "@/components/botijao";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";

export function CtaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="pb-20 pt-16 md:pb-24 md:pt-24 lg:pb-28">
      <div className="container-site">
        <div className="revelar relative overflow-visible rounded-[var(--radius-foto)] bg-azul-profundo bg-[radial-gradient(70%_120%_at_85%_50%,rgb(0_84_217/0.55),transparent_70%)] px-6 py-12 sm:px-10 md:py-14 lg:px-16 lg:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 id="cta-titulo" className="text-h2 text-white">
                Não fique sem gás!
              </h2>
              <p className="mt-4 max-w-[46ch] text-lead text-white/90">
                Precisou, lembrou da Guedes Gás! Conte com a qualidade Ultragaz, atendimento de confiança e
                praticidade para pedir seu gás.
              </p>
              <TrackedLink
                href="/atendimento"
                className="mt-8 inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-md bg-verde px-6 text-base font-semibold text-white ring-1 ring-white/25 transition-colors duration-200 hover:bg-verde-escuro sm:w-auto"
              >
                <WhatsAppIcon className="size-5" />
                Pedir meu gás pelo WhatsApp
              </TrackedLink>
              <p className="mt-4 text-sm text-white/85">Escolha sua cidade e fale diretamente com nossa equipe.</p>
            </div>

            {/* P13 "saindo" do bloco */}
            <div className="pointer-events-none hidden justify-center lg:col-span-5 lg:flex">
              <div className="-mb-16 -mt-40 h-[380px]">
                <Botijao id="p13" sizes="320px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
