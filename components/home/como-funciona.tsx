import { SectionTitle } from "@/components/section-title";

const passos = [
  { n: "01", titulo: "Escolha sua unidade", texto: "Identifique a unidade que atende sua cidade." },
  { n: "02", titulo: "Chame pelo WhatsApp", texto: "Entre em contato diretamente com nossa equipe." },
  { n: "03", titulo: "Informe seu pedido", texto: "Diga qual botijão precisa e informe seu endereço." },
  { n: "04", titulo: "Receba seu gás", texto: "Consulte as condições de entrega e aguarde seu pedido." },
];

export function ComoFunciona() {
  return (
    <section aria-labelledby="como-titulo" className="border-y border-linha py-20 md:py-24 lg:py-28">
      <div className="container-site">
        <SectionTitle id="como-titulo">Pedir seu gás é simples e rápido!</SectionTitle>

        <ol className="relative mt-14 grid gap-0 md:mt-16 lg:grid-cols-4 lg:gap-8">
          {/* Conexão discreta entre os passos */}
          <span
            aria-hidden
            className="absolute bottom-7 left-7 top-7 w-px bg-linha lg:bottom-auto lg:left-7 lg:right-[calc(25%-1.75rem)] lg:top-7 lg:h-px lg:w-auto"
          />
          {passos.map((p) => (
            <li key={p.n} className="revelar relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-[14px] border border-linha-forte bg-noite font-display text-lg font-bold text-celeste">
                {p.n}
              </span>
              <span className="pt-2 lg:pt-7">
                <span className="block font-display text-xl font-semibold tracking-[-0.015em]">{p.titulo}</span>
                <span className="mt-2 block max-w-[28ch] text-texto-2">{p.texto}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
