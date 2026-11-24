import type { ReactNode } from "react";

/**
 * Título de seção com "colchetes" nos cantos — motivo recorrente do sistema
 * (adaptado da referência). Centralizado por padrão; `align="left"` para
 * seções editoriais em duas colunas.
 */
export function SectionTitle({
  id,
  children,
  as: Tag = "h2",
  align = "center",
}: {
  id?: string;
  children: ReactNode;
  as?: "h1" | "h2";
  align?: "center" | "left";
}) {
  const centro = align === "center";
  return (
    <div className={`revelar flex ${centro ? "justify-center" : "justify-start"}`}>
      <span className={`relative inline-block py-2.5 ${centro ? "px-5" : "-ml-5 px-5"}`}>
        <span aria-hidden className="absolute left-0 top-0 h-3.5 w-6 border-l-2 border-t-2 border-celeste/70" />
        <span aria-hidden className="absolute bottom-0 right-0 h-3.5 w-6 border-b-2 border-r-2 border-celeste/70" />
        <Tag id={id} className={`text-h2 text-texto ${centro ? "text-center" : "text-left"}`}>
          {children}
        </Tag>
      </span>
    </div>
  );
}
