import type { CSSProperties, ReactNode } from "react";

/**
 * GRAFISMOS OFICIAIS ULTRAGAZ — Manual de Marca
 *
 * FORMA ONDA (págs. 24–29)
 *  - Sempre em DEGRADÊ horizontal (nunca sólida em peças digitais).
 *  - Combinações oficiais: azul→ciano, ciano→verde (ou o inverso).
 *  - Faixa de espessura constante; no máximo DUAS ondas por peça.
 *  - Distância mínima entre ondas = espessura da onda.
 *  - Nunca na vertical, nunca em proporção pequena.
 *
 * FORMA U (págs. 31–35) e PATTERN (págs. 36–38)
 *  - Cores sólidas ou degradê oficial; sem sombra; sem distorcer.
 */

type DegradeOnda = "azul-ciano" | "azul-verde" | "ciano-verde" | "verde-ciano";

const paradas: Record<DegradeOnda, [string, string]> = {
  "azul-ciano": ["#000FFF", "#00FFFF"],
  "azul-verde": ["#000FFF", "#00FF00"],
  "ciano-verde": ["#00FFFF", "#00FF00"],
  "verde-ciano": ["#00FF00", "#00FFFF"],
};

/**
 * Onda Ultragaz — faixa com espessura constante que atravessa a composição
 * da esquerda para a direita e sobe à direita (mesma direção do "g" da marca).
 * O SVG estica na horizontal (preserveAspectRatio="none") mantendo a curva.
 */
export function OndaUltragaz({
  degrade = "azul-ciano",
  className = "",
  style,
}: {
  degrade?: DegradeOnda;
  className?: string;
  style?: CSSProperties;
}) {
  const id = `onda-${degrade}`;
  const [de, para] = paradas[degrade];
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={style}
    >
      <defs>
        <linearGradient id={id} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={de} />
          <stop offset="0.35" stopColor={de} />
          <stop offset="1" stopColor={para} />
        </linearGradient>
      </defs>
      {/* Borda superior e inferior paralelas (espessura ≈ 140) */}
      <path
        d="M0 260 C 360 260 560 120 860 110 C 1110 102 1290 150 1440 150 L 1440 290 C 1290 290 1110 242 860 250 C 560 260 360 400 0 400 Z"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

/**
 * Forma U em "uso acolhimento": arco (topo em semicírculo) que serve de base
 * de cor para um elemento à frente (produto, mapa, selo). Deve ficar próxima
 * do elemento — o manual proíbe o grafismo "muito distante".
 */
export function ArcoU({
  cor = "ciano",
  className = "",
}: {
  cor?: "ciano" | "verde" | "branco" | "ciano-verde";
  className?: string;
}) {
  const fundo = {
    ciano: "bg-ciano",
    verde: "bg-verde-marca",
    branco: "bg-white",
    "ciano-verde": "degrade-ciano-verde",
  }[cor];
  return <div aria-hidden="true" className={`forma-u-arco ${fundo} ${className}`} />;
}

/**
 * Forma U em "uso box": base para títulos curtos e grandes
 * (o manual proíbe textos pequenos e longos dentro do U box).
 */
export function BoxU({
  cor = "ciano",
  className = "",
  children,
}: {
  cor?: "ciano" | "verde" | "branco";
  className?: string;
  children?: ReactNode;
}) {
  const fundo = { ciano: "bg-ciano text-azul", verde: "bg-verde-marca text-azul", branco: "bg-white text-azul" }[cor];
  return <div className={`forma-u-box ${fundo} ${className}`}>{children}</div>;
}

/**
 * Pattern Ultragaz — repetição do U (topo reto, base arredondada) em cores
 * sólidas alternadas (ciano, branco, verde) sobre o azul. Usado como faixa
 * de assinatura, em segundo plano.
 */
export function PatternU({ className = "" }: { className?: string }) {
  const cores = ["bg-ciano", "bg-white", "bg-verde-marca", "bg-ciano", "bg-white", "bg-ciano", "bg-verde-marca", "bg-white"];
  return (
    <div aria-hidden="true" className={`pointer-events-none flex select-none gap-[3.2%] overflow-hidden ${className}`}>
      {Array.from({ length: 16 }, (_, i) => (
        <span
          key={i}
          className={`forma-u-box block aspect-[4/5] w-[9.2%] shrink-0 ${cores[i % cores.length]} ${
            i % 2 === 1 ? "translate-y-[-38%]" : ""
          }`}
        />
      ))}
    </div>
  );
}
