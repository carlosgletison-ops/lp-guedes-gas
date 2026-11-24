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
    <section id="inicio" aria-labelledby="hero-titulo" className="relative overflow-hidden bg-noite">
      {/* Fundo oficial da Hero Desktop (horizontal 4K) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        <Image
          src="/images/banner-hero-4k.png"
          alt=""
          fill
          priority
          unoptimized
          className="hidden object-cover lg:block lg:object-right xl:object-center"
        />

        {/* Gradiente para leitura impecável no Desktop */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-noite via-noite/85 to-transparent lg:w-3/5 lg:via-noite/75" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noite to-transparent" />
      </div>

      <div className="container-site relative grid items-center gap-10 pb-14 pt-8 md:pb-20 md:pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-14">
        {/* Conteúdo: Título, Descrição e CTAs */}
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

        {/* Lado visual: No mobile fica abaixo do texto com o entregador menorzinho */}
        <div className="relative flex justify-center lg:col-span-6 lg:min-h-[540px] xl:col-span-7 xl:min-h-[620px] xl:pl-6">
          {/* No Mobile / Tablet (< lg): Apenas a imagem do entregador direta, sem card nem borda */}
          <div className="relative mx-auto mt-2 w-full max-w-[360px] sm:max-w-[420px] aspect-[4/4.8] lg:hidden">
            <Image
              src="/images/hero-mobile.jpg"
              alt="Entregador Ultragaz da Guedes Gás com botijão"
              fill
              priority
              unoptimized
              className="object-cover object-bottom pointer-events-none select-none"
            />
          </div>

          {/* No Desktop (lg+): Cards flutuantes sobre o banner lateral */}
          {/* Card flutuante — unidades */}
          <div
            className="anim-card superficie-foto hidden lg:block absolute right-4 top-4 xl:right-0 xl:top-8 z-20 w-[240px] sm:w-[260px] p-5"
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
            className="anim-card superficie-foto hidden lg:flex absolute bottom-4 left-4 xl:-left-6 xl:bottom-10 z-20 items-start gap-3.5 p-4 sm:w-[300px]"
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
