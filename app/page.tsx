import { CitySelector } from "@/components/home/city-selector";
import { ComoFunciona } from "@/components/home/como-funciona";
import { CtaFinal } from "@/components/home/cta-final";
import { Diferenciais } from "@/components/home/diferenciais";
import { Faq } from "@/components/home/faq";
import { GasDoPovo } from "@/components/home/gas-do-povo";
import { Hero } from "@/components/home/hero";
import { Presenca } from "@/components/home/presenca";
import { Produtos } from "@/components/home/produtos";
import { JsonLd } from "@/components/json-ld";
import { schemaFaq, schemaOrganizacao } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <Hero />
      <CitySelector />
      <Produtos />
      <GasDoPovo />
      <Diferenciais />
      <Presenca />
      <ComoFunciona />
      <Faq />
      <CtaFinal />
      <JsonLd data={schemaOrganizacao()} />
      <JsonLd data={schemaFaq()} />
    </>
  );
}
