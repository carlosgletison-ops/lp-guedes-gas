# 02 — Pendências e validações antes de publicar

Marque cada item quando estiver resolvido. Nada aqui foi inventado no site. Onde falta informação, a interface mostra um aviso ou um conteúdo provisório identificado.

## Conteúdo e operação
- [ ] **Jaguaribe: dias de funcionamento.** A copy informa "07h às 13h / 15h às 18h", mas não os dias. Hoje o site exibe "Dias de atendimento a confirmar". Atualizar em `data/unidades.ts`.
- [ ] **Disponibilidade de P13, P20 e P45 por unidade.** Todos estão como `"consultar"` em `data/unidades.ts`. A copy pede para não apresentar P20/P45 como disponíveis em todas as unidades sem confirmação.
- [ ] **Gás do Povo.** Validar o texto com a empresa e com as regras oficiais vigentes (elegibilidade, forma de uso, operação de cada unidade). Usar material oficial apenas se houver autorização.
- [ ] **Entrega x retirada.** A FAQ afirma que todas as unidades entregam e oferecem retirada presencial. Confirmar a cobertura de entrega por unidade.
- [ ] **Horários "Aberto agora".** O indicador não será exibido até os horários estarem validados (incluindo feriados).

## Marca e imagens
- [ ] **Logotipo da Guedes Gás** (SVG ou PNG em alta). Hoje há uma marca tipográfica provisória em `components/brand.tsx`.
- [ ] **Uso da marca Ultragaz.** Selo ou logotipo autorizado e manual de identidade, se houver. Se o manual trouxer outras cores, ajustar os tokens em `app/globals.css`.
- [ ] **Foto da hero.** A atual é de campanha da Ultragaz (`public/images/hero-entregador-ultragaz.jpg`). Confirmar a autorização ou substituir por uma foto real da equipe ou de uma unidade da Guedes Gás.
- [ ] **Fotos dos botijões P13, P20 e P45** recortadas (PNG/WebP com transparência), oficiais ou fotografadas. Hoje há **ilustrações vetoriais provisórias** (`components/botijao.tsx`), sinalizadas como "Imagens ilustrativas". Para trocar: salvar em `public/images/produtos/` e preencher `foto` em `data/produtos.ts`. A legenda some sozinha.
- [ ] **Foto humanizada para a seção Gás do Povo** (atendimento real em unidade, de preferência). Hoje é um recorte da foto da hero (luva e botijão).
- [ ] **Imagem de compartilhamento (Open Graph)** em 1200×630. Hoje usa a foto da hero.

- [ ] **Fonte Mangueira** (tipografia principal do Manual Ultragaz) é comercial: hoje os títulos usam **Outfit** como substituta. Se a Ultragaz/revenda fornecer os arquivos licenciados, trocar em `app/layout.tsx` (ver docs/03).
- [ ] **Autorização de uso dos grafismos Ultragaz** (onda, Forma U, pattern, logo): o próprio manual restringe o uso dos materiais a terceiros autorizados — confirmar com a Ultragaz que a revenda pode aplicá-los no site.

## Jurídico e técnico
- [ ] Razão social, CNPJ e endereço legal para o rodapé (não serão inventados).
- [ ] Texto da Política de Privacidade (e da política de cookies, se houver pixel ou GA). Hoje `/politica-de-privacidade` é um **rascunho** com `noindex`.
- [ ] Banner de consentimento de cookies, se forem ativados GA4 ou Meta Pixel.
- [ ] Domínio oficial: definir `NEXT_PUBLIC_SITE_URL`.
- [ ] IDs de mensuração (GTM, GA4, Meta Pixel), configurados via `.env.local`.
- [ ] Redes sociais oficiais (só entram se forem fornecidas).
- [x] Coordenadas do mapa: centróides oficiais dos municípios (IBGE). Se quiser pinos nos endereços exatos, informe as coordenadas de cada loja.
