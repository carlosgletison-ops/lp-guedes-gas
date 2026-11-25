import Image from "next/image";

export function BrandMark() {
  return (
    <span className="flex items-center gap-3 sm:gap-4">
      <span className="font-display text-[20px] font-extrabold leading-none tracking-[-0.03em] text-texto whitespace-nowrap sm:text-[23px]">
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
          className="h-[22px] w-auto object-contain brightness-105 sm:h-[28px] lg:h-[30px]"
        />
      </span>
    </span>
  );
}
