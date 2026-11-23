"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TrackedLink } from "./tracked-link";
import { WhatsAppIcon } from "./icons";

/**
 * Barra inferior fixa (somente mobile). Aparece depois que o CTA da hero
 * sai da tela, respeita a área segura e não aparece na central de atendimento.
 * O layout reserva espaço no fim da página para ela não cobrir conteúdo.
 */
export function MobileOrderBar() {
  const pathname = usePathname();
  const [passouHero, setPassouHero] = useState(false);

  useEffect(() => {
    const alvo = document.getElementById("hero-cta");
    if (!alvo) return;
    const obs = new IntersectionObserver(([e]) => {
      setPassouHero(!e.isIntersecting && e.boundingClientRect.top < 0);
    });
    obs.observe(alvo);
    return () => obs.disconnect();
  }, [pathname]);

  const visivel = pathname === "/" && passouHero;

  return (
    <div
      inert={!visivel}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-linha bg-white px-4 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 ease-[var(--ease-suave)] md:hidden ${
        visivel ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <TrackedLink
        href="/atendimento"
        className="flex h-12 w-full items-center justify-center gap-2.5 rounded-md bg-verde text-base font-semibold text-white active:bg-verde-escuro"
      >
        <WhatsAppIcon className="size-5" />
        Pedir meu gás pelo WhatsApp
      </TrackedLink>
    </div>
  );
}
