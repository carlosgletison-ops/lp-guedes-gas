"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { TrackedLink } from "@/components/tracked-link";
import { faq } from "@/data/faq";

export function Faq() {
  const [aberto, setAberto] = useState<number | null>(0);
  const base = useId();

  return (
    <section aria-labelledby="faq-titulo" className="py-20 md:py-24 lg:py-28">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionTitle id="faq-titulo" align="left">
            Perguntas frequentes
          </SectionTitle>
          <TrackedLink
            href="/atendimento"
            className="mt-8 inline-flex h-12 items-center rounded-md border border-linha-forte px-5 text-[15px] font-semibold transition-colors duration-200 hover:border-texto hover:bg-white/5"
          >
            Ir para a central de atendimento
          </TrackedLink>
        </div>

        <div className="border-t border-linha lg:col-span-8">
          {faq.map((item, i) => {
            const on = aberto === i;
            const idBotao = `${base}-q${i}`;
            const idPainel = `${base}-a${i}`;
            return (
              <div key={item.pergunta} className="border-b border-linha">
                <h3>
                  <button
                    id={idBotao}
                    type="button"
                    aria-expanded={on}
                    aria-controls={idPainel}
                    onClick={() => setAberto(on ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold leading-snug tracking-[-0.01em] transition-colors hover:text-celeste md:text-xl"
                  >
                    {item.pergunta}
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-lg border transition-[transform,border-color,color] duration-300 ease-[var(--ease-suave)] ${
                        on ? "rotate-45 border-celeste text-celeste" : "border-linha-forte text-texto-2"
                      }`}
                    >
                      <Plus aria-hidden size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  id={idPainel}
                  role="region"
                  aria-labelledby={idBotao}
                  inert={!on}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[var(--ease-suave)] ${
                    on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-6 pr-14 text-texto-2">{item.resposta}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
