import Link from "next/link";
import { MapPin } from "lucide-react";
import { unidades } from "@/data/unidades";

export function TopBar() {
  return (
    <div className="sobre-escuro bg-azul-profundo text-[13px] text-white">
      <div className="container-site flex h-9 items-center justify-between gap-4">
        <p className="flex min-w-0 items-center gap-2">
          <MapPin aria-hidden size={14} strokeWidth={2} className="shrink-0 text-white/70" />
          <span className="truncate">
            <span className="sm:hidden">Cinco unidades no Ceará</span>
            <span className="hidden sm:inline">Atendimento em cinco cidades do Ceará</span>
            <span className="hidden text-white/65 lg:inline">
              {" — "}
              {unidades.map((u) => u.cidade).join(" · ")}
            </span>
          </span>
        </p>
        <Link
          href="/atendimento"
          className="shrink-0 font-medium underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
        >
          <span className="sm:hidden">Ver unidades</span>
          <span className="hidden sm:inline">Central de atendimento</span>
        </Link>
      </div>
    </div>
  );
}
