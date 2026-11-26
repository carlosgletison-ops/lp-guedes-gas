"use client";

import { useEffect } from "react";

/**
 * TESTE — Vidro líquido.
 * Injeta o filtro SVG de refração e o ativa apenas em navegadores Chromium
 * (Chrome, Edge, Samsung Internet), únicos que aplicam `backdrop-filter: url()`.
 * Nos demais (Safari, Firefox) o `.vidro` continua com o efeito em CSS puro.
 * Para desligar a refração, basta remover <LiquidGlass /> do layout.
 */
export function LiquidGlass() {
  useEffect(() => {
    const nav = navigator as Navigator & { userAgentData?: { brands?: { brand: string }[] } };
    const chromium = nav.userAgentData?.brands?.some((b) => /Chromium/i.test(b.brand)) ?? false;
    const reduzir = window.matchMedia("(prefers-reduced-transparency: reduce)").matches;
    if (chromium && !reduzir) document.documentElement.dataset.vidro = "liquido";
  }, []);

  return (
    <svg aria-hidden="true" width="0" height="0" className="pointer-events-none absolute">
      <filter id="vidro-liquido" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
        {/* Mapa de deslocamento suave = "lente" de vidro irregular */}
        <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="11" result="ruido" />
        <feGaussianBlur in="ruido" stdDeviation="3" result="lente" />
        <feDisplacementMap in="SourceGraphic" in2="lente" scale="34" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}
