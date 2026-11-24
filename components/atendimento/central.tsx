"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { getUnidade, unidades, type CidadeSlug } from "@/data/unidades";
import { UnitCard } from "./unit-card";

/** Lista de unidades + navegação rápida. `selecionada` vem da URL (?cidade=slug). */
export function CentralLista({ selecionada }: { selecionada: CidadeSlug | null }) {
  return (
    <>
      <CidadeNav selecionada={selecionada} />
      <div className="mt-10 space-y-5">
        {unidades.map((u) => (
          <UnitCard key={u.slug} u={u} selecionada={u.slug === selecionada} />
        ))}
      </div>
    </>
  );
}

/** Lê ?cidade= da URL, destaca a unidade e a posiciona na tela. */
export function CentralComParametros() {
  const params = useSearchParams();
  const slug = getUnidade(params.get("cidade"))?.slug ?? null;

  useEffect(() => {
    if (!slug) return;
    const el = document.getElementById(`unidade-${slug}`);
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el?.scrollIntoView({ behavior: reduzir ? "auto" : "smooth", block: "start" });
  }, [slug]);

  return <CentralLista selecionada={slug} />;
}

function CidadeNav({ selecionada }: { selecionada: CidadeSlug | null }) {
  const router = useRouter();
  const pathname = usePathname();

  const escolher = (slug: CidadeSlug) => {
    const u = getUnidade(slug)!;
    track("city_select", { cidade: u.cidade, unidade: u.nome, secao_origem: "central_navegacao" });
    const q = new URLSearchParams(window.location.search);
    q.set("cidade", slug);
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  return (
    <nav aria-label="Escolha sua cidade" className="revelar">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {unidades.map((u) => {
          const on = u.slug === selecionada;
          return (
            <li key={u.slug} className={u.slug === "varzea-alegre" ? "col-span-2 sm:col-span-1" : ""}>
              <button
                type="button"
                onClick={() => escolher(u.slug)}
                aria-current={on ? "true" : undefined}
                className={`flex h-14 w-full items-center gap-3 rounded-lg border px-4 text-left transition-colors duration-200 ${
                  on
                    ? "border-celeste bg-white/[0.08] text-texto"
                    : "border-linha bg-white/[0.03] text-texto-2 hover:border-linha-forte hover:text-texto"
                }`}
              >
                <span className="font-display text-xs tabular-nums text-texto-3">{u.ordem}</span>
                <span className="font-display font-semibold">{u.cidade}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
