import { CitySelector } from "@/components/home/city-selector";
import { Hero } from "@/components/home/hero";

/**
 * Página principal.
 * ETAPA ATUAL: proposta visual da hero (header + hero + seletor de cidade).
 * As demais seções serão implementadas após aprovação da direção visual
 * (ver docs/04-ESTRUTURA.md).
 */
export default function Home() {
  return (
    <>
      <Hero />
      <CitySelector />
    </>
  );
}
