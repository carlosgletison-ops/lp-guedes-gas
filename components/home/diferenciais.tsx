import { BadgeCheck, Headset, MapPinned, Truck } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const itens = [
  {
    icone: Truck,
    titulo: "Entrega rápida",
    texto: "Seu pedido recebe atenção e agilidade para chegar até você.",
  },
  {
    icone: Headset,
    titulo: "Atendimento de qualidade",
    texto: "Uma equipe preparada para atender você com atenção e cordialidade.",
  },
  {
    icone: BadgeCheck,
    titulo: "Confiança Ultragaz",
    texto: "Conte com a tradição e a qualidade de uma marca reconhecida no mercado de gás.",
  },
  {
    icone: MapPinned,
    titulo: "Presença perto de você",
    texto: "Cinco unidades no Ceará, facilitando seu atendimento e aproximando nossa empresa dos consumidores.",
  },
];

/** Composição aberta em duas colunas, ícones em outline (Manual pág. 39) */
export function Diferenciais() {
  return (
    <section aria-labelledby="dif-titulo" className="relative overflow-hidden border-y border-linha py-20 md:py-24 lg:py-28">
      <div className="container-site relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionTitle id="dif-titulo" align="left">
              Mais do que entregar gás, queremos facilitar seu dia!
            </SectionTitle>
            <p className="revelar mt-6 max-w-[44ch] text-lead text-texto-2">
              Na Guedes Gás, sabemos que agilidade e confiança fazem toda a diferença. Por isso, trabalhamos
              para oferecer uma experiência de atendimento prática e próxima de você.
            </p>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:col-span-7">
          {itens.map(({ icone: Icone, titulo, texto }, i) => (
            <li
              key={titulo}
              className={`revelar group border-t border-linha py-8 transition-colors duration-300 hover:bg-white/[0.02] sm:px-8 ${
                i % 2 === 0 ? "sm:pl-0" : "sm:border-l"
              } ${i > 1 ? "" : "sm:border-t-0 sm:pt-0"} ${i === 1 ? "border-t sm:border-t-0" : ""}`}
            >
              <Icone aria-hidden size={30} strokeWidth={1.5} className="text-celeste transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mt-5 font-display text-xl font-semibold tracking-[-0.015em] text-texto">{titulo}</h3>
              <p className="mt-2 text-texto-2">{texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
