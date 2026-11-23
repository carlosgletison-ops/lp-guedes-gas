"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import { capturarUtm } from "@/lib/utm";

/** Guarda as UTMs de entrada e registra page_view a cada troca de rota. */
export function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    capturarUtm();
  }, []);

  useEffect(() => {
    track("page_view");
  }, [pathname]);

  return null;
}
