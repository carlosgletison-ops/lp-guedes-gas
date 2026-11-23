import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, HandHeart, MapPin, MapPinned, Store, Truck } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";
import { unidades } from "@/data/unidades";

const atraso = (ms: number) => ({ "--atraso": `${ms}ms` }) as CSSProperties;

// "Selos de destaque" da copy oficial
const destaques = [
  { icone: Truck, texto: "Entrega de gás" },
  { icone: Store, texto: "Atendimento presencial" },
  { icone: HandHeart, texto: "Programa Gás do Povo" },
  { icone: MapPinned, texto: "Cinco unidades no Ceará" },
];

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative overflow-hidden bg-white">
      <div className="container-site grid lg:min-h-[clamp(620px,calc(100svh-108px),780px)] lg:grid-cols-12">
        {/* Conteúdo — ~45% */}
        <div className="flex flex-col justify-center pb-10 pt-10 md:pb-14 md:pt-14 lg:col-span-6 lg:py-20 lg:pr-8 xl:col-span-5 xl:pr-0">
          <p className="anim-surgir flex items-center gap-2 text-[15px] font-semibold text-azul">
            <MapPin aria-hidden size={17} strokeWidth={2.25} />
            Sempre perto de você
          </p>

          <h1 id="hero-titulo" className="text-display mt-5 text-tinta">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="anim-linha" style={atraso(60)}>
                Precisou de gás?
              </span>
            </span>
            <span className="-mt-[0.08em] block overflow-hidden pb-[0.08em]">
              <span className="anim-linha" style={atraso(140)}>
                A Guedes Gás
              </span>
            </span>
            <span className="-mt-[0.08em] block overflow-hidden pb-[0.08em]">
              <span className="anim-linha text-azul" style={atraso(220)}>
                leva até você!
              </span>
            </span>
          </h1>

          <p className="anim-surgir text-lead mt-6 max-w-[44ch] text-tinta-2" style={atraso(380)}>
            Conte com a qualidade Ultragaz, entrega rápida e atendimento de confiança. Estamos presentes
            em cinco cidades para deixar seu dia a dia mais prático e garantir que o gás chegue até você.
          </p>

          <div className="anim-surgir mt-8" style={atraso(480)}>
            <TrackedLink
              id="hero-cta"
              href="/atendimento"
              className="group inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-md bg-verde px-4 text-[15px] font-semibold min-[360px]:text-base sm:gap-3 sm:px-7 sm:text-[17px] text-white transition-[background-color,transform] duration-200 hover:bg-verde-escuro active:scale-[0.985] sm:w-auto sm:whitespace-nowrap"
            >
              <WhatsAppIcon className="size-5" />
              Pedir meu gás pelo WhatsApp
              <ArrowRight
                aria-hidden
                size={18}
                className="hidden transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1 sm:block"
              />
            </TrackedLink>
            <p className="mt-3 text-sm text-tinta-2">Escolha sua cidade e fale diretamente com nossa equipe.</p>
          </div>

          <ul
            className="anim-surgir mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-linha pt-6"
            style={atraso(600)}
          >
            {destaques.map(({ icone: Icone, texto }) => (
              <li key={texto} className="flex items-start gap-2.5 text-[15px] font-medium leading-snug text-tinta">
                <Icone aria-hidden size={20} strokeWidth={1.75} className="mt-px shrink-0 text-azul" />
                {texto}
              </li>
            ))}
          </ul>
        </div>

        {/* Fotografia — ~55%, sangrando até a borda direita no desktop */}
        <div className="relative -mx-4 aspect-[4/3.6] md:-mx-6 md:aspect-[16/10] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:aspect-auto lg:w-[47%] xl:w-[55%]">
          <div className="absolute inset-0 overflow-hidden bg-nevoa">
            {/* PROVISÓRIA: foto de campanha Ultragaz. Substituir por foto real da Guedes Gás. */}
            <Image
              src="/images/hero-entregador-ultragaz.jpg"
              alt="Entregador com uniforme Ultragaz sorrindo ao lado de um botijão de gás azul"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="anim-foto object-cover object-[35%_22%]"
            />
          </div>

          <div
            className="anim-painel sobre-escuro absolute bottom-0 left-0 hidden w-[min(400px,88%)] md:block bg-azul-profundo px-5 py-5 text-white md:px-7 md:py-6"
            style={atraso(760)}
          >
            <p className="font-display text-[17px] font-bold leading-tight md:text-lg">
              Cinco unidades no Ceará
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/80">
              {unidades.map((u) => u.cidade).join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
