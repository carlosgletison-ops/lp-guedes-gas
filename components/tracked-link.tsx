"use client";

import Link from "next/link";
import { useSyncExternalStore, type ComponentProps } from "react";
import { track, type EventoNome, type EventoParams } from "@/lib/analytics";
import { comUtm, getUtmQuery } from "@/lib/utm";

const semInscricao = () => () => {};

type Props = Omit<ComponentProps<"a">, "href"> & {
  href: string;
  evento?: EventoNome;
  params?: EventoParams;
};

/**
 * Link com mensuração.
 * - Links internos (/...) recebem as UTMs da sessão e usam next/link.
 * - Links externos (wa.me, Maps) abrem em nova aba, sem UTMs.
 */
export function TrackedLink({ href, evento, params, onClick, children, ...rest }: Props) {
  const utm = useSyncExternalStore(semInscricao, getUtmQuery, () => "");
  const externo = /^https?:\/\//.test(href);

  const handleClick: ComponentProps<"a">["onClick"] = (e) => {
    if (evento) track(evento, params);
    onClick?.(e);
  };

  if (externo) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={comUtm(href, utm)} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
