import type { Metadata } from "next";
import { Info } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Política de privacidade",
  // Não indexar até o texto definitivo ser validado.
  robots: { index: false, follow: true },
  alternates: { canonical: "/politica-de-privacidade" },
};

/**
 * RASCUNHO — o texto definitivo deve ser fornecido/validado pela empresa
 * (dados do controlador, contato do encarregado, ferramentas de mensuração
 * efetivamente usadas). Ver docs/02-PENDENCIAS.md.
 */
export default function PoliticaPage() {
  return (
    <section className="pb-20 pt-12 md:pb-24 md:pt-16">
      <div className="container-site max-w-[760px]">
        <SectionTitle as="h1">Política de privacidade</SectionTitle>

        <p className="mt-10 flex items-start gap-2 rounded-lg border border-linha-forte p-4 text-sm text-texto-2">
          <Info aria-hidden size={16} className="mt-0.5 shrink-0 text-celeste" />
          Texto em elaboração. A versão definitiva será publicada após validação da Guedes Gás.
        </p>

        <div className="mt-10 space-y-8 text-texto-2">
          <div>
            <h2 className="font-display text-xl font-semibold text-texto">Dados coletados neste site</h2>
            <p className="mt-3">
              Este site não possui formulários nem cadastro. Os pedidos são feitos diretamente pelo WhatsApp da
              unidade escolhida.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-texto">Mensuração de acessos</h2>
            <p className="mt-3">
              Quando ativadas, ferramentas de análise registram informações de navegação, como páginas
              visitadas, cidade escolhida e origem da campanha. Não registramos números de telefone nem o
              conteúdo das conversas.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-texto">Conversas pelo WhatsApp</h2>
            <p className="mt-3">
              Ao clicar em um botão de pedido, você é direcionado ao WhatsApp, serviço de terceiros com política
              de privacidade própria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
