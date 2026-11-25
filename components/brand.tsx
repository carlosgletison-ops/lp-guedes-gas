import Image from "next/image";

export function BrandMark() {
  return (
    <span className="flex items-center gap-2.5 sm:gap-3.5">
      <span className="font-display text-[20px] font-extrabold leading-none tracking-[-0.03em] text-texto whitespace-nowrap sm:text-[22px]">
        Guedes<span className="text-celeste"> Gás</span>
      </span>
      <span className="flex items-center border-l border-linha-forte pl-2.5 sm:pl-3.5">
        <Image
          src="/images/logo-ultragaz.png"
          alt="Ultragaz"
          width={2172}
          height={724}
          priority
          unoptimized
          className="h-4 sm:h-5 w-auto object-contain brightness-105"
        />
      </span>
    </span>
  );
}
