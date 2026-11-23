/**
 * Preserva a origem da campanha (UTMs) durante a navegação
 * entre a landing page e a central de atendimento.
 */
const CHAVES = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
const STORAGE_KEY = "gg_utm";

function lerDaUrl(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const out: Record<string, string> = {};
  for (const k of CHAVES) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}

/** Chamado uma vez ao carregar o site: guarda as UTMs da URL de entrada. */
export function capturarUtm(): void {
  if (typeof window === "undefined") return;
  const daUrl = lerDaUrl();
  if (Object.keys(daUrl).length === 0) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(daUrl));
  } catch {
    /* armazenamento indisponível — segue sem persistir */
  }
}

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const daUrl = lerDaUrl();
  if (Object.keys(daUrl).length > 0) return daUrl;
  try {
    const salvo = sessionStorage.getItem(STORAGE_KEY);
    return salvo ? (JSON.parse(salvo) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/** Query string das UTMs (string estável, usada como snapshot no React). */
export function getUtmQuery(): string {
  return new URLSearchParams(getUtmParams()).toString();
}

/** Acrescenta as UTMs a um link interno, preservando o hash. */
export function comUtm(href: string, query: string): string {
  if (!query || !href.startsWith("/")) return href;
  const [semHash, hash] = href.split("#");
  const sep = semHash.includes("?") ? "&" : "?";
  return `${semHash}${sep}${query}${hash ? `#${hash}` : ""}`;
}
