"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMark } from "./brand";
import { WhatsAppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";
import { navegacao } from "@/lib/site";

/**
 * Header FLUTUANTE em vidro líquido — paira sobre a hero, sem barra de
 * ponta a ponta. Ao rolar, o vidro ganha um pouco mais de azul para manter
 * a leitura sobre qualquer conteúdo.
 */
export function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botaoRef.current?.focus();
      }
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto]);

  const fechar = () => setAberto(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 lg:pt-4">
      <div className="container-site">
        <div className="vidro pointer-events-auto relative">
          {/* Reforço de azul ao rolar (mantém contraste do texto do menu) */}
          <span
            aria-hidden
            className={`absolute inset-0 rounded-[inherit] bg-azul transition-opacity duration-300 ${
              rolou || aberto ? "opacity-45" : "opacity-0"
            }`}
          />

          <div className="relative flex h-16 items-center justify-between gap-4 px-4 sm:px-5 lg:h-[76px] lg:px-6">
            <Link href="/" aria-label="Guedes Gás — página inicial" onClick={fechar} className="-my-2 py-2">
              <BrandMark />
            </Link>

            <nav aria-label="Principal" className="hidden lg:block">
              <ul className="flex items-center gap-9">
                {navegacao.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative py-2 text-[15px] font-medium text-texto transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-ciano after:transition-transform after:duration-300 after:ease-[var(--ease-suave)] hover:text-ciano hover:after:scale-x-100"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <TrackedLink
                href="/atendimento"
                className="hidden h-11 items-center gap-2 rounded-xl bg-verde px-5 text-[15px] font-bold text-azul transition-colors duration-200 hover:bg-verde-escuro md:inline-flex"
              >
                <WhatsAppIcon className="size-[18px]" />
                Pedir pelo WhatsApp
              </TrackedLink>

              <button
                ref={botaoRef}
                type="button"
                onClick={() => setAberto((v) => !v)}
                aria-expanded={aberto}
                aria-controls="menu-mobile"
                aria-label={aberto ? "Fechar menu" : "Abrir menu"}
                className="-mr-2 inline-flex size-12 items-center justify-center rounded-xl text-texto transition-colors hover:bg-white/10 lg:hidden"
              >
                {aberto ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile: painel de vidro logo abaixo do header */}
        <div id="menu-mobile" hidden={!aberto} className="vidro pointer-events-auto relative mt-2 lg:hidden">
          <span aria-hidden className="absolute inset-0 rounded-[inherit] bg-azul opacity-60" />
          <nav aria-label="Menu" className="relative px-5 pb-5 pt-2">
            <ul>
              {navegacao.map((item) => (
                <li key={item.href} className="border-b border-linha">
                  <Link
                    href={item.href}
                    onClick={fechar}
                    className="flex h-14 items-center justify-between font-display text-lg font-semibold text-texto"
                  >
                    {item.label}
                    <ArrowRight aria-hidden size={18} className="text-ciano" />
                  </Link>
                </li>
              ))}
            </ul>
            <TrackedLink
              href="/atendimento"
              onClick={fechar}
              className="mt-5 flex h-14 items-center justify-center gap-2.5 rounded-xl bg-verde text-base font-bold text-azul"
            >
              <WhatsAppIcon className="size-5" />
              Pedir meu gás pelo WhatsApp
            </TrackedLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
