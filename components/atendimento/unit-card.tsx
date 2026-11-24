import { CircleCheck, Clock, Info, MapPin, Navigation } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppIcon } from "@/components/icons";
import { enderecoCompleto, linkComoChegar, type Unidade } from "@/data/unidades";

export function UnitCard({ u, selecionada }: { u: Unidade; selecionada: boolean }) {
  const params = { cidade: u.cidade, unidade: u.nome, secao_origem: "central_atendimento" };

  return (
    <article
      id={`unidade-${u.slug}`}
      aria-labelledby={`titulo-${u.slug}`}
      className={`superficie scroll-mt-28 p-6 transition-[border-color,background-color] duration-500 sm:p-8 ${
        selecionada ? "border-celeste/70 bg-white/[0.07]" : ""
      }`}
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-6">
        {/* Informações */}
        <div className="md:col-span-7">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <span className="font-display text-sm tabular-nums text-texto-3">{u.ordem}</span>
            <h2 id={`titulo-${u.slug}`} className="font-display text-2xl font-bold tracking-[-0.02em] md:text-[28px]">
              {u.nome}
            </h2>
            {selecionada && (
              <span className="flex items-center gap-1.5 text-sm font-medium text-celeste">
                <CircleCheck aria-hidden size={16} />
                Sua cidade
              </span>
            )}
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex gap-3">
              <dt className="mt-0.5 shrink-0 text-celeste">
                <MapPin aria-hidden size={18} />
                <span className="sr-only">Endereço</span>
              </dt>
              <dd className="text-texto-2">{enderecoCompleto(u)}.</dd>
            </div>
            <div className="flex gap-3">
              <dt className="mt-0.5 shrink-0 text-celeste">
                <Clock aria-hidden size={18} />
                <span className="sr-only">Horário de funcionamento</span>
              </dt>
              <dd className="text-texto-2">
                <ul className="space-y-1">
                  {u.horarios.map((h) => (
                    <li key={`${h.dias}-${h.horas}`}>
                      {h.dias ? <span className="text-texto">{h.dias}:</span> : null} {h.horas}
                    </li>
                  ))}
                </ul>
                {u.avisoHorario && (
                  <p className="mt-2 flex items-start gap-2 text-sm text-texto-3">
                    <Info aria-hidden size={15} className="mt-0.5 shrink-0" />
                    {u.avisoHorario}
                  </p>
                )}
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="mt-0.5 shrink-0 text-celeste">
                <WhatsAppIcon className="size-[18px]" />
                <span className="sr-only">WhatsApp</span>
              </dt>
              <dd className="text-texto-2">{u.whatsapp.exibicao}</dd>
            </div>
          </dl>
        </div>

        {/* Ações */}
        <div className="flex flex-col justify-end gap-3 md:col-span-5">
          <TrackedLink
            href={u.whatsapp.url}
            evento="whatsapp_click"
            params={params}
            className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-verde px-5 py-3 text-center text-base font-semibold text-white transition-colors duration-200 hover:bg-verde-escuro"
          >
            <WhatsAppIcon className="size-5" />
            Pedir pelo WhatsApp — {u.cidade}
          </TrackedLink>
          <TrackedLink
            href={linkComoChegar(u)}
            evento="directions_click"
            params={params}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-linha-forte px-5 text-[15px] font-medium text-texto transition-colors duration-200 hover:border-texto hover:bg-white/5"
          >
            <Navigation aria-hidden size={16} />
            Como chegar
          </TrackedLink>
        </div>
      </div>
    </article>
  );
}
