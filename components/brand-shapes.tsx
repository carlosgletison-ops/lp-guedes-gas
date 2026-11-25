import type { SVGProps } from "react";

interface WaveProps extends SVGProps<SVGSVGElement> {
  variant?: "azul-ciano" | "ciano-verde";
  opacity?: number;
}

/**
 * Forma Onda — Elemento gráfico proprietário da Ultragaz derivado do 'g'.
 * Aplicação com degradê horizontal conforme diretrizes do Manual de Marca (págs. 24–32).
 */
export function UltragazWave({
  variant = "azul-ciano",
  className = "",
  opacity = 0.2,
  ...props
}: WaveProps) {
  const isCyanGreen = variant === "ciano-verde";
  const gradId = `ug-wave-grad-${variant}`;

  return (
    <svg
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
          {isCyanGreen ? (
            <>
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#00E84B" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#0015FF" />
              <stop offset="50%" stopColor="#0080FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </>
          )}
        </linearGradient>
      </defs>
      {/* Faixa orgânica contínua da onda Ultragaz */}
      <path
        d="M-40,160 C240,60 480,260 760,180 C1040,100 1280,240 1480,140 L1480,320 L-40,320 Z"
        fill={`url(#${gradId})`}
        fillOpacity="0.4"
      />
      {/* Linha de energia acentuada com traço mais brilhante */}
      <path
        d="M-40,160 C240,60 480,260 760,180 C1040,100 1280,240 1480,140"
        stroke={`url(#${gradId})`}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Forma U — Portal / Moldura de acolhimento e energia (Manual de Marca págs. 33–38).
 * Geometria de topo aberto com base em semicírculo perfeitamente arredondado.
 */
export function UltragazUShape({
  className = "",
  strokeOnly = false,
  ...props
}: SVGProps<SVGSVGElement> & { strokeOnly?: boolean }) {
  return (
    <svg
      viewBox="0 0 240 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="ug-u-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#0015FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0015FF" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="ug-u-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0015FF" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {!strokeOnly && (
        <path
          d="M20,10 L20,190 C20,250 65,295 120,295 C175,295 220,250 220,190 L220,10 Z"
          fill="url(#ug-u-grad)"
        />
      )}
      <path
        d="M20,10 L20,190 C20,250 65,295 120,295 C175,295 220,250 220,190 L220,10"
        stroke="url(#ug-u-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Halo de Luz Ambiente Ultragaz — Projeta radiação suave de cor sem ofuscar textos.
 */
export function UltragazAmbientGlow({
  color = "blue",
  className = "",
}: {
  color?: "blue" | "cyan" | "green";
  className?: string;
}) {
  const bg =
    color === "blue"
      ? "bg-[#0015FF]"
      : color === "cyan"
      ? "bg-[#00E5FF]"
      : "bg-[#00E84B]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[110px] select-none opacity-20 ${bg} ${className}`}
    />
  );
}
