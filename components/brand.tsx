/**
 * PROVISÓRIO: marca tipográfica até recebermos os arquivos oficiais
 * (logotipo Guedes Gás + selo Ultragaz autorizado). Substituir por <Image>
 * quando os arquivos chegarem — ver docs/02-PENDENCIAS.md.
 */
export function BrandMark({ tone = "escuro" }: { tone?: "escuro" | "claro" }) {
  const claro = tone === "claro";
  return (
    <span className="flex items-center gap-3">
      <span
        className={`font-display text-[21px] font-extrabold leading-none tracking-[-0.03em] ${
          claro ? "text-white" : "text-azul-profundo"
        }`}
      >
        Guedes<span className={claro ? "text-white/75" : "text-azul"}> Gás</span>
      </span>
      <span
        className={`hidden border-l pl-3 text-[12px] font-medium leading-tight sm:block ${
          claro ? "border-white/25 text-white/70" : "border-linha text-tinta-2"
        }`}
      >
        Produtos
        <br />
        Ultragaz
      </span>
    </span>
  );
}
