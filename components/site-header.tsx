"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { BrandMark } from "./brand";
import { WhatsAppIcon } from "./icons";
import { TrackedLink } from "./tracked-link";
import { navegacao } from "@/lib/site";

export function SiteHeader() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const botaoRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8);
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
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-[border-color,box-shadow] duration-300 ${
        rolou || aberto ? "border-linha shadow-[0_1px_0_rgba(16,33,53,0.04)]" : "border-transparent"
      }`}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Link href="/" aria-label="Guedes Gás — página inicial" onClick={fechar} className="-my-2 py-2">
          <BrandMark />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {navegacao.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 text-[15px] font-medium text-tinta transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-azul after:transition-transform after:duration-300 after:ease-[var(--ease-suave)] hover:text-azul hover:after:scale-x-100"
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
            className="group hidden h-12 items-center gap-2 rounded-md bg-verde px-5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-verde-escuro md:inline-flex"
          >
            Pedir pelo WhatsApp
            <ArrowRight
              aria-hidden
              size={18}
              className="transition-transform duration-300 ease-[var(--ease-suave)] group-hover:translate-x-0.5"
            />
          </TrackedLink>

          <button
            ref={botaoRef}
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="-mr-3 inline-flex size-12 items-center justify-center rounded-md text-tinta transition-colors hover:bg-nevoa lg:hidden"
          >
            {aberto ? <X aria-hidden size={24} /> : <Menu aria-hidden size={24} />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!aberto}
        className="absolute inset-x-0 top-full border-b border-linha bg-white lg:hidden"
      >
        <nav aria-label="Menu" className="container-site pb-6">
          <ul>
            {navegacao.map((item) => (
              <li key={item.href} className="border-b border-linha">
                <Link
                  href={item.href}
                  onClick={fechar}
                  className="flex h-14 items-center justify-between font-display text-lg font-semibold text-tinta"
                >
                  {item.label}
                  <ArrowRight aria-hidden size={18} className="text-tinta-2" />
                </Link>
              </li>
            ))}
          </ul>
          <TrackedLink
            href="/atendimento"
            onClick={fechar}
            className="mt-6 flex h-14 items-center justify-center gap-2.5 rounded-md bg-verde text-base font-semibold text-white"
          >
            <WhatsAppIcon className="size-5" />
            Pedir meu gás pelo WhatsApp
          </TrackedLink>
        </nav>
      </div>
    </header>
  );
}
