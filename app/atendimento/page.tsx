import type { Metadata } from "next";
import { Suspense } from "react";
import { CentralComParametros, CentralLista } from "@/components/atendimento/central";
import { JsonLd } from "@/components/json-ld";
import { SectionTitle } from "@/components/section-title";
import { schemaUnidades } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Central de atendimento — escolha sua unidade",
  description:
    "Endereços, horários e WhatsApp das unidades Guedes Gás em Icó, Iguatu, Crato, Jaguaribe e Várzea Alegre. Escolha sua cidade e peça seu gás.",
  alternates: { canonical: "/atendimento" },
};

export default function AtendimentoPage() {
  return (
    <section aria-labelledby="central-titulo" className="relative pb-20 pt-32 md:pb-24 md:pt-36 lg:pb-28 lg:pt-40">
      <div className="container-site relative max-w-[1120px]">
        <SectionTitle as="h1" id="central-titulo">
          Qual unidade atende você?
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-[52ch] text-center text-lead text-texto-2">
          Estamos presentes em cinco cidades do Ceará! Escolha a unidade mais próxima e faça seu pedido
          diretamente pelo WhatsApp.
        </p>

        <div className="mt-12">
          <Suspense fallback={<CentralLista selecionada={null} />}>
            <CentralComParametros />
          </Suspense>
        </div>
      </div>
      <JsonLd data={schemaUnidades()} />
    </section>
  );
}
