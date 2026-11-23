/**
 * PROVISÓRIO: marca tipográfica até recebermos os arquivos oficiais
 * (logotipo Guedes Gás + selo Ultragaz autorizado). Substituir por <Image>
 * quando os arquivos chegarem — ver docs/02-PENDENCIAS.md.
 */
export function BrandMark() {
  return (
    <span className="flex items-center gap-3">
      <span className="font-display text-[21px] font-extrabold leading-none tracking-[-0.03em] text-texto">
        Guedes<span className="text-celeste"> Gás</span>
      </span>
      <span className="hidden border-l border-linha-forte pl-3 text-[12px] font-medium leading-tight text-texto-3 sm:block">
        Produtos
        <br />
        Ultragaz
      </span>
    </span>
  );
}
