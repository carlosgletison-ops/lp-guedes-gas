import type { ReactNode } from "react";

/**
 * Título de seção com "colchetes" nos cantos — motivo recorrente do sistema
 * (adaptado da referência). Usar em todas as seções com título centralizado.
 */
export function SectionTitle({
  id,
  children,
  as: Tag = "h2",
}: {
  id?: string;
  children: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex justify-center">
      <span className="relative inline-block px-5 py-2.5">
        <span aria-hidden className="absolute left-0 top-0 h-3.5 w-6 border-l-2 border-t-2 border-celeste/70" />
        <span aria-hidden className="absolute bottom-0 right-0 h-3.5 w-6 border-b-2 border-r-2 border-celeste/70" />
        <Tag id={id} className="text-h2 text-center text-texto">
          {children}
        </Tag>
      </span>
    </div>
  );
}
