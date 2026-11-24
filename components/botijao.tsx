import Image from "next/image";
import type { ProdutoId } from "@/data/produtos";
import { produtos } from "@/data/produtos";

/**
 * Imagem do botijão.
 * - Se houver foto oficial recortada em `data/produtos.ts` (campo `foto`), usa a foto.
 * - Senão, usa uma ILUSTRAÇÃO PROVISÓRIA em vetor (silhueta plana, sem logotipo),
 *   identificada como "Imagem ilustrativa". Substituir pelas fotos oficiais.
 */
export function Botijao({
  id,
  className = "",
  sizes = "300px",
  priority = false,
}: {
  id: ProdutoId;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const p = produtos.find((x) => x.id === id)!;

  if (p.foto) {
    return (
      <Image
        src={p.foto}
        alt={`Botijão ${p.nomeCurto} Ultragaz`}
        width={p.fotoLargura ?? 600}
        height={p.fotoAltura ?? 800}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        className={`h-full w-auto object-contain ${className}`}
      />
    );
  }

  return <BotijaoVetor id={id} className={className} />;
}

const formas: Record<ProdutoId, { vb: [number, number]; corpo: number; colar: number }> = {
  // Proporções relativas aproximadas (largura × altura) de cada modelo.
  p13: { vb: [120, 152], corpo: 104, colar: 24 },
  p20: { vb: [104, 210], corpo: 166, colar: 22 },
  p45: { vb: [116, 300], corpo: 254, colar: 24 },
};

function BotijaoVetor({ id, className }: { id: ProdutoId; className: string }) {
  const { vb, corpo, colar } = formas[id];
  const [w, h] = vb;
  const m = 8; // margem lateral do corpo
  const topoCorpo = colar + 6;
  const baseY = topoCorpo + corpo;
  const cx = w / 2;
  const colarL = w * 0.26;
  const colarR = w * 0.74;
  const g = `grad-${id}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={`Ilustração do botijão ${id.toUpperCase()}`}
      className={`h-full w-auto overflow-visible ${className}`}
    >
      <defs>
        <linearGradient id={g} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#0a3c9e" />
          <stop offset="0.35" stopColor="#1d6cf0" />
          <stop offset="0.6" stopColor="#0054d9" />
          <stop offset="1" stopColor="#002f6e" />
        </linearGradient>
      </defs>

      {/* Sombra no chão */}
      <ellipse cx={cx} cy={h - 3} rx={w * 0.38} ry={3} fill="#000" opacity="0.35" />

      {/* Colar (alça) */}
      <path
        d={`M${colarL} ${topoCorpo + 8} V${8} Q${colarL} 2 ${colarL + 6} 2 H${colarR - 6} Q${colarR} 2 ${colarR} 8 V${topoCorpo + 8} Z`}
        fill={`url(#${g})`}
      />
      <rect x={cx - w * 0.17} y={8} width={w * 0.13} height={8} rx={4} fill="#061430" />
      <rect x={cx + w * 0.04} y={8} width={w * 0.13} height={8} rx={4} fill="#061430" />
      {/* Válvula */}
      <rect x={cx - 5} y={colar - 4} width={10} height={10} rx={2} fill="#c9d3e3" />

      {/* Corpo */}
      <path
        d={`M${m} ${topoCorpo + 22} C${m} ${topoCorpo + 4} ${w * 0.3} ${topoCorpo} ${cx} ${topoCorpo} C${w * 0.7} ${topoCorpo} ${w - m} ${topoCorpo + 4} ${w - m} ${topoCorpo + 22} V${baseY - 18} C${w - m} ${baseY - 4} ${w * 0.7} ${baseY} ${cx} ${baseY} C${w * 0.3} ${baseY} ${m} ${baseY - 4} ${m} ${baseY - 18} Z`}
        fill={`url(#${g})`}
      />
      {/* Brilho vertical */}
      <rect x={w * 0.2} y={topoCorpo + 18} width={w * 0.06} height={corpo - 44} rx={w * 0.03} fill="#fff" opacity="0.16" />
      {/* Solda central */}
      <path d={`M${m} ${topoCorpo + corpo * 0.5} H${w - m}`} stroke="#fff" strokeOpacity="0.14" strokeWidth="1.5" />

      {/* Base */}
      <path
        d={`M${w * 0.2} ${baseY - 6} H${w * 0.8} L${w * 0.82} ${h - 4} H${w * 0.18} Z`}
        fill="#002f6e"
      />
    </svg>
  );
}
