import Image from "next/image";
import Link from "next/link";
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
    <section id="inicio" aria-labelledby="hero-titulo" className="relative overflow-hidden">
      {/* Luz ambiente da marca atrás da fotografia (estática, sutil) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_72%_42%,rgb(0_84_217/0.22),transparent_70%)]"
      />

      <div className="container-site relative grid items-center gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-14">
        {/* Conteúdo */}
        <div className="relative z-10 lg:col-span-6 xl:col-span-5">
          <p className="anim-surgir flex items-center gap-2 text-[15px] font-medium text-celeste">
            <MapPin aria-hidden size={17} strokeWidth={2} />
            Sempre perto de você
          </p>

          <h1 id="hero-titulo" className="text-display mt-5">
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
              <span className="anim-linha text-celeste" style={atraso(220)}>
                leva até você!
              </span>
            </span>
          </h1>

          <p className="anim-surgir text-lead mt-6 max-w-[46ch] text-texto-2" style={atraso(380)}>
            Conte com a qualidade Ultragaz, entrega rápida e atendimento de confiança. Estamos presentes
            em cinco cidades para deixar seu dia a dia mais prático e garantir que o gás chegue até você.
          </p>

          <div className="anim-surgir mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={atraso(480)}>
            <TrackedLink
              id="hero-cta"
              href="/atendimento"
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-md bg-verde px-4 text-[15px] font-semibold text-white transition-[background-color,transform] duration-200 hover:bg-verde-escuro active:scale-[0.985] min-[360px]:text-base sm:px-6 sm:whitespace-nowrap"
            >
              <WhatsAppIcon className="size-5" />
              Pedir meu gás pelo WhatsApp
            </TrackedLink>
            <Link
              href="#cidades"
              className="group inline-flex h-14 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-linha-forte px-6 text-[15px] font-medium text-texto transition-colors duration-200 hover:border-texto hover:bg-white/5"
            >
              Ver unidades
              <ArrowRight
                aria-hidden
                size={17}
                className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-1"
              />
            </Link>
          </div>
          <p className="anim-surgir mt-4 text-sm text-texto-3" style={atraso(540)}>
            Escolha sua cidade e fale diretamente com nossa equipe.
          </p>
        </div>

        {/* Fotografia com cards flutuantes */}
        <div className="relative lg:col-span-6 xl:col-span-7 xl:pl-6">
          <div className="relative aspect-[4/3.6] overflow-hidden rounded-[var(--radius-foto)] border border-linha sm:aspect-[16/11] lg:aspect-auto lg:h-[clamp(520px,calc(100svh-220px),640px)]">
            {/* PROVISÓRIA: foto de campanha Ultragaz. Substituir por foto real da Guedes Gás. */}
            <Image
              src="/images/hero-entregador-ultragaz.jpg"
              alt="Entregador com uniforme Ultragaz sorrindo ao lado de um botijão de gás azul"
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="anim-foto object-cover object-[45%_22%]"
            />
            {/* Assentamento da foto no ambiente azul: suaviza a onda gráfica à esquerda
                e a base, para leitura dos cards. Tom da marca, nunca preto. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-noite/45 via-noite/5 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-noite/70 to-transparent"
            />
          </div>

          {/* Card flutuante — unidades (desktop/tablet) */}
          <div
            className="anim-card superficie-foto absolute right-4 top-4 hidden w-[248px] p-5 md:block lg:hidden xl:-right-4 xl:block xl:top-10"
            style={atraso(760)}
          >
            <p className="font-display text-[15px] font-semibold">Cinco unidades no Ceará</p>
            <ul className="mt-3 divide-y divide-white/10 text-sm text-texto-2">
              {unidades.map((u) => (
                <li key={u.slug} className="flex items-baseline gap-3 py-1.5">
                  <span className="font-display text-xs tabular-nums text-texto-3">{u.ordem}</span>
                  {u.cidade}
                </li>
              ))}
            </ul>
          </div>

          {/* Card flutuante — Gás do Povo */}
          <div
            className="anim-card superficie-foto relative -mt-14 ml-4 mr-10 flex items-start gap-3.5 p-4 sm:absolute sm:bottom-5 sm:left-5 sm:m-0 sm:w-[300px] xl:-left-10 xl:bottom-10"
            style={atraso(880)}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-linha-forte text-celeste">
              <HandHeart aria-hidden size={20} strokeWidth={1.75} />
            </span>
            <span>
              <span className="block font-display text-[15px] font-semibold">Programa Gás do Povo</span>
              <span className="mt-0.5 block text-sm leading-snug text-texto-2">Atendimento nas cinco unidades.</span>
            </span>
          </div>
        </div>
      </div>

      {/* Faixa de destaques */}
      <div className="border-y border-linha">
        <ul className="container-site grid grid-cols-2 md:grid-cols-4">
          {destaques.map(({ icone: Icone, texto }, i) => (
            <li
              key={texto}
              className={`flex items-center gap-3 py-5 text-[15px] font-medium text-texto-2 md:justify-center md:py-6 ${
                i % 2 === 1 ? "pl-4 md:pl-0" : ""
              } ${i < 2 ? "border-b border-linha md:border-b-0" : ""} ${
                i > 0 ? "md:border-l md:border-linha" : ""
              } ${i % 2 === 1 ? "border-l border-linha" : ""}`}
            >
              <Icone aria-hidden size={20} strokeWidth={1.75} className="shrink-0 text-celeste" />
              {texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
