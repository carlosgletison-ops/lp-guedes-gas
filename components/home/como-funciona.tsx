import { UltragazAmbientGlow, UltragazWave } from "@/components/brand-shapes";
import { SectionTitle } from "@/components/section-title";

const passos = [
  { n: "01", titulo: "Escolha sua unidade", texto: "Identifique a unidade que atende sua cidade." },
  { n: "02", titulo: "Chame pelo WhatsApp", texto: "Entre em contato diretamente com nossa equipe." },
  { n: "03", titulo: "Informe seu pedido", texto: "Diga qual botijão precisa e informe seu endereço." },
  { n: "04", titulo: "Receba seu gás", texto: "Consulte as condições de entrega e aguarde seu pedido." },
];

export function ComoFunciona() {
  return (
    <section aria-labelledby="como-titulo" className="relative overflow-hidden border-y border-linha bg-noite py-20 md:py-24 lg:py-28">
      {/* Elementos gráficos de fundo oficiais Ultragaz */}
      <UltragazWave
        variant="azul-ciano"
        opacity={0.16}
        className="absolute -bottom-10 left-0 right-0 h-48 w-full"
      />
      <UltragazAmbientGlow color="cyan" className="-top-24 left-1/3 h-80 w-80 opacity-15" />
      <UltragazAmbientGlow color="blue" className="-bottom-20 right-10 h-72 w-72 opacity-20" />

      <div className="container-site relative z-10">
        <SectionTitle id="como-titulo">Pedir seu gás é simples e rápido!</SectionTitle>

        <ol className="relative mt-14 grid gap-0 md:mt-16 lg:grid-cols-4 lg:gap-8">
          {/* Linha com gradiente horizontal Ultragaz conectando os passos */}
          <span
            aria-hidden
            className="absolute bottom-7 left-7 top-7 w-[2px] bg-gradient-to-b from-azul via-celeste to-verde-marca opacity-40 lg:bottom-auto lg:left-7 lg:right-[calc(25%-1.75rem)] lg:top-7 lg:h-[2px] lg:w-auto lg:bg-gradient-to-r"
          />
          {passos.map((p) => (
            <li key={p.n} className="revelar relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
              <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-[16px] border border-celeste/30 bg-noite-2 font-display text-lg font-bold text-celeste shadow-[0_0_24px_rgba(0,229,255,0.12)] transition-transform duration-300 hover:scale-105">
                {p.n}
              </span>
              <span className="pt-2 lg:pt-7">
                <span className="block font-display text-xl font-semibold tracking-[-0.015em] text-texto">{p.titulo}</span>
                <span className="mt-2 block max-w-[28ch] text-texto-2">{p.texto}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
