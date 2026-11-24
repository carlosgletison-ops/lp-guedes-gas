"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";
import { mapaCeara } from "@/data/mapa-ceara";
import { enderecoCompleto, linkCentral, unidades, type CidadeSlug } from "@/data/unidades";

// Posição do rótulo de cada cidade em relação ao pino (evita sobreposição)
const rotulo: Record<CidadeSlug, { dx: number; dy: number; anchor: "start" | "end" }> = {
  jaguaribe: { dx: 12, dy: -6, anchor: "start" },
  ico: { dx: 12, dy: 8, anchor: "start" },
  iguatu: { dx: -12, dy: -4, anchor: "end" },
  "varzea-alegre": { dx: -12, dy: 6, anchor: "end" },
  crato: { dx: 12, dy: 6, anchor: "start" },
};

export function Presenca() {
  const [ativo, setAtivo] = useState<CidadeSlug | null>(null);
  const fortaleza = mapaCeara.pontos.fortaleza;

  return (
    <section id="unidades" aria-labelledby="unidades-titulo" className="py-20 md:py-24 lg:py-28">
      <div className="container-site">
        <SectionTitle id="unidades-titulo">A Guedes Gás está perto de você!</SectionTitle>
        <p className="revelar mx-auto mt-5 max-w-[46ch] text-center text-texto-2">
          Escolha sua cidade e encontre a unidade mais próxima para fazer seu pedido.
        </p>

        <div className="mt-12 grid gap-5 md:mt-14 lg:grid-cols-12 lg:gap-6">
          {/* Lista — vem primeiro no mobile */}
          <div className="revelar superficie p-2 sm:p-3 lg:order-2 lg:col-span-6">
            <ul>
              {unidades.map((u) => (
                <li key={u.slug} className="border-b border-linha last:border-b-0">
                  <TrackedLink
                    href={linkCentral(u.slug)}
                    evento="city_select"
                    params={{ cidade: u.cidade, unidade: u.nome, secao_origem: "mapa_unidades" }}
                    onMouseEnter={() => setAtivo(u.slug)}
                    onMouseLeave={() => setAtivo(null)}
                    onFocus={() => setAtivo(u.slug)}
                    onBlur={() => setAtivo(null)}
                    className={`group flex items-center gap-4 rounded-[14px] px-4 py-4 transition-colors duration-200 sm:px-5 sm:py-5 ${
                      ativo === u.slug ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <span className="w-6 shrink-0 font-display text-sm tabular-nums text-texto-3">{u.ordem}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg font-semibold leading-tight">{u.cidade}</span>
                      <span className="mt-1 block text-sm leading-snug text-texto-3">{enderecoCompleto(u)}</span>
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-linha-forte text-texto-2 transition-colors duration-300 group-hover:border-verde group-hover:bg-verde group-hover:text-white">
                      <ArrowUpRight aria-hidden size={18} />
                    </span>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Mapa */}
          <figure className="revelar superficie relative flex flex-col items-center justify-center overflow-hidden px-6 py-8 lg:order-1 lg:col-span-6 lg:py-10">
            <div className="relative mt-2 flex w-full max-w-[320px] sm:max-w-[420px] items-center justify-center">
              {/* Modelo 3D PNG abaixo como mapa base */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none">
                <Image
                  src="/images/mapa-ceara-3d.png"
                  alt="Mapa 3D do Ceará estilizado"
                  width={1283}
                  height={1226}
                  unoptimized
                  priority
                  className="h-full w-full object-contain scale-[1.42] translate-y-3 drop-shadow-[0_20px_40px_rgba(0,100,255,0.3)]"
                />
              </div>

              {/* Camada SVG com os pontos e nomes das cidades por cima */}
              <svg
                viewBox={mapaCeara.viewBox}
                role="img"
                aria-labelledby="mapa-titulo"
                className="relative z-10 h-auto w-full overflow-visible"
              >
                <title id="mapa-titulo">
                  Mapa do Ceará com as cinco unidades da Guedes Gás: Icó, Iguatu, Crato, Jaguaribe e Várzea Alegre
                </title>

                {/* Referência: capital */}
                <circle cx={fortaleza.x} cy={fortaleza.y} r="3" fill="#8392ad" />
                <text x={fortaleza.x + 8} y={fortaleza.y + 4} fontSize="12" fill="#8392ad" className="font-sans font-medium">
                  Fortaleza
                </text>

                {unidades.map((u) => {
                  const p = mapaCeara.pontos[u.slug];
                  const r = rotulo[u.slug];
                  const on = ativo === u.slug;
                  return (
                    <g key={u.slug} className="transition-opacity duration-300" opacity={ativo && !on ? 0.45 : 1}>
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={on ? 14 : 10}
                        fill="rgb(110 162 255 / 0.25)"
                        className="transition-all duration-300"
                      />
                      <circle
                        cx={p.x}
                        cy={p.y}
                        r={on ? 6 : 5}
                        fill={on ? "#00843a" : "#6ea2ff"}
                        className="transition-all duration-300"
                      />
                      <text
                        x={p.x + r.dx}
                        y={p.y + r.dy}
                        textAnchor={r.anchor}
                        fontSize="13"
                        fontWeight={700}
                        fill="#ffffff"
                        className="font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
                      >
                        {u.cidade}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            <figcaption className="relative z-10 mt-4 text-center text-xs text-texto-3">
              Posições pelo centro de cada município · Fonte: IBGE
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 flex justify-center">
          <TrackedLink
            href="/atendimento"
            className="inline-flex h-14 items-center gap-2.5 rounded-md bg-verde px-7 text-base font-semibold text-white transition-colors duration-200 hover:bg-verde-escuro"
          >
            <WhatsAppIcon className="size-5" />
            Escolher minha unidade
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
