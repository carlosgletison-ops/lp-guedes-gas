import Image from "next/image";

/**
 * Assinatura Guedes Gás + marca Ultragaz (versão negativa, sobre o azul).
 * Manual Ultragaz: sem sombras/efeitos na marca (pág. 18), largura mínima
 * de 100px no digital (pág. 17) e área de arejamento livre (pág. 15).
 */
export function BrandMark() {
  return (
    <span className="flex flex-col">
      <span className="flex items-center gap-4 sm:gap-5">
        <span className="whitespace-nowrap font-display text-[20px] font-extrabold leading-none tracking-[-0.03em] text-texto sm:text-[24px]">
          Guedes<span className="text-ciano"> Gás</span>
        </span>
        <span className="flex items-center border-l border-linha-forte pl-4 sm:pl-5">
          <Image
            src="/images/logo-ultragaz.png"
            alt="Ultragaz"
            width={2172}
            height={724}
            priority
            sizes="130px"
            className="h-[34px] w-auto object-contain sm:h-[38px] lg:h-[42px]"
          />
        </span>
      </span>
      <span className="mt-1 text-[10px] font-medium leading-none tracking-normal text-texto-3 sm:mt-1.5 sm:text-[11.5px]">
        Revendedor oficial Ultragaz
      </span>
    </span>
  );
}
