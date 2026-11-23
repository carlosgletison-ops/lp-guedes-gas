/**
 * Camada de mensuração independente de ferramenta.
 * Os eventos vão para `window.dataLayer` (padrão GTM). Quando o GTM/GA4/Pixel
 * forem configurados, basta criar as tags a partir destes eventos.
 *
 * Eventos: page_view | city_select | whatsapp_click | directions_click
 *
 * PRIVACIDADE: nunca enviar telefone, mensagem ou dado pessoal do consumidor.
 * Parâmetros permitidos: cidade, unidade, seção de origem, página e UTMs.
 */
import { getUtmParams } from "./utm";

export type EventoNome = "page_view" | "city_select" | "whatsapp_click" | "directions_click";

export type EventoParams = {
  cidade?: string;
  unidade?: string;
  secao_origem?: string;
};

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function track(evento: EventoNome, params: EventoParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    event: evento,
    ...params,
    pagina_origem: window.location.pathname,
    ...getUtmParams(),
  });
}
