import Image from "next/image";

export function BrandMark() {
  return (
    <span className="flex flex-col">
      <span className="flex items-center gap-3 sm:gap-4">
        <span className="font-display text-[20px] font-extrabold leading-none tracking-[-0.03em] text-texto whitespace-nowrap sm:text-[24px]">
          Guedes<span className="text-celeste"> Gás</span>
        </span>
        <span className="flex items-center border-l border-linha-forte pl-3 sm:pl-4">
          <Image
            src="/images/logo-ultragaz.png"
            alt="Ultragaz"
            width={2172}
            height={724}
            priority
            unoptimized
            className="h-[28px] w-auto object-contain brightness-105 sm:h-[36px] lg:h-[40px]"
          />
        </span>
      </span>
      <span className="mt-1 text-[10px] font-medium leading-none tracking-normal text-texto-3 sm:mt-1.5 sm:text-[11.5px]">
        Revendedor oficial Ultragaz
      </span>
    </span>
  );
}
