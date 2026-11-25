# Belê — Modelos de negócio, "horário vago agora", go-to-market e regras (pesquisa)

Pesquisa feita em 25/11/2026 via busca web. Lojas de apps, Reclame Aqui e vários sites oficiais (stripe.com, fresha.com, 99app.com) estavam **bloqueados para leitura direta**; os números vêm de notícias, páginas de ajuda indexadas e blogs de terceiros.
Legenda: **[oficial]** = página da própria empresa/lei; **[imprensa]** = veículo jornalístico; **[3º]** = blog/concorrente/agregador; **[NÃO VERIFICADO]** = não confirmado em fonte primária. Nenhum número foi inventado: onde não achei, está escrito "não encontrado".

---

## 1. Modelos de comissão / taxa (com números)

### 1.1 Mobilidade e delivery (referência de "uberização")

| Plataforma | Modelo | Número | Status da fonte |
|---|---|---|---|
| Uber Brasil | % por corrida (variável) | Empresa diz ~25% média semanal; motoristas relatam 40–70% em corridas específicas. Não há estudo brasileiro independente. | [imprensa] Brasil de Fato 2025 |
| Uber (Reino Unido, ref.) | % por corrida | Oxford: média 25%, mediana 29% | [imprensa] |
| Uber/99 2026 | **Troca de % por assinatura**: "Passe para Motoristas" (Uber) e "pacote taxa zero" (99, 20 cidades): motorista paga antes, fica com 100% da corrida; pacotes "de até R$ 50" | [imprensa] Diário de Pernambuco ago/2026; Diário do Nordeste 2026 — preços exatos do passe **não encontrados** |
| 99 | Teto "Taxa Garantida": média semanal ≤ 19,99% (≥10 corridas/semana), reembolsa excedente; dias de taxa zero | [imprensa] Garagem360/Canaltech (mecanismo existe desde ~2023) |
| iFood — Plano Básico (loja entrega) | 12% comissão + 3,2% pagamento online + mensalidade ~R$ 110 se faturar > R$ 1.800/mês | [3º] Saipos/Serasa; há divergência (R$ 100–150; 3,2–3,5%) |
| iFood — Plano Entrega (entregador iFood) | 23% + 3,2% + mensalidade ~R$ 150 (>R$ 1.800/mês) | [3º] idem — confirmar no Portal do Parceiro |
| Rappi | Antes: 20–30%; 2025: **taxa zero** p/ restaurantes (plano R$ 1,4 bi; meta 30 mil→60 mil lojas); fim de 2025 isenção "por tempo indeterminado" após 99Food isentar comissão+mensalidade por 2 anos | [imprensa] Times Brasil, InfoMoney, Bloomberg Línea |

**Lição para a Belê:** em 2025–26 o mercado brasileiro está em guerra de "taxa zero" e migração para **assinatura fixa** em vez de %. Profissional de beleza vai comparar.

### 1.2 Serviços locais / casa

| Plataforma | Modelo | Número | Fonte |
|---|---|---|---|
| GetNinjas | Lead pago em "moedas" (profissional paga para ver contato; até 4 profissionais por pedido, 48h) | Pacotes 2022: 1.000 moedas R$ 149,90; 2.000 R$ 299; 4.000 R$ 599 (validade 1 ano). Termos: preço varia por local/serviço, sem aviso | [3º] Tecnoblog 2022; [oficial] termos de uso |
| GetNinjas "Preço Fechado" | Comissão sobre pedido concluído (profissional não paga lead) | % **não encontrado** | [oficial] termos Preço Fechado |
| Parafuzo | Preço tabelado ao cliente; repasse à diarista | 2020: faxina anunciada a R$ 19,90 gerou polêmica; empresa disse que diarista recebia R$ 39 por ~1h30. % atual **não encontrado** | [imprensa] CUT 2020 |
| Mary Help (comparável) | idem | Ex.: cliente pagou R$ 152 (4h), diarista ficou com R$ 55 (~36%) | [imprensa] Intercept 2022 |
| Donamaid | — | **não encontrado** | — |
| Urban Company (Índia) | Comissão por serviço; full-stack (treina, verifica, padroniza) | Beleza: teto caiu de 30% → 25% (out/2021) após greve de profissionais mulheres; mínimo 8,5% (pediram 5%, negado). 2024: "até 25%" | [imprensa] Free Press Journal, Al Jazeera 2024 |

### 1.3 Beleza a domicílio no Brasil

| Plataforma | Modelo | Número | Fonte |
|---|---|---|---|
| Singu (2016–) | Preço tabelado, pagto online por cartão; profissional treinada | Comissão 30% (profissional 70%); reportagem de 2019 fala em 35% | [imprensa] Mobile Time, Gazeta do Povo, Baguete |
| Bluma (Natura, set/2024) | Mesmo app da Singu na App Store (id1060352606) → indica rebrand Singu→Bluma **[inferência, não confirmada por imprensa]**. Natura investiu em 2020 com opção de compra de 100%; CB Insights registra aquisição em mai/2023 [3º]. Atende SP, RJ, BH, DF; >35 cidades em expansão; "Casa Bluma" (espaço de apoio/treino) | Comissão atual **não encontrada**; empresa diz profissional "ganha até 3x mais que no salão" (alegação da marca) | [imprensa] Meio & Mensagem, Gironews |
| Avec (ex-Beauty Date) | Software de gestão + app cliente; Avec+ assinatura do consumidor com até 40% de desconto | Preço p/ salão não publicado (G2: "consulte") | [3º] CB Insights (rebrand), G2 |
| Beauty Date (histórico) | Assinatura do salão | R$ 69,90/mês (2016) | [imprensa] Mercado & Consumo 2016 |
| Trinks | Software de gestão para salão (agenda, comissões, estoque) | "A partir de ~R$ 81/mês" | [3º] Software Advice/GetApp — **NÃO VERIFICADO** no site |

### 1.4 Marketplaces de beleza internacionais (padrão "SaaS + taxa só em cliente novo")

| Plataforma | Assinatura | Taxa do marketplace | Pagamento |
|---|---|---|---|
| Fresha | Era grátis; **plano grátis removido em 2025** [3º] | 20% sobre 1º agendamento de cliente **novo** vindo do marketplace (mín. US$ 6 / £4); cliente recorrente = 0% | ~2,29% + 20¢ presencial / 2,79% + 20¢ online (EUA, [3º]) |
| Booksy | US$ 29,99/mês + US$ 20 por profissional extra (EUA); £40/mês (UK) | **Boost** opt-in: 30% da 1ª visita do cliente novo (mín. US$ 10; teto US$ 100 segundo GlossGenius — conflitante); UK cita 40% | — |
| Treatwell (Europa) | Assinatura + comissão | 35% + IVA no 1º agendamento de cliente novo (sem serviço via Treatwell nos últimos 365 dias); recorrente 0% | — |
| StyleSeat (EUA) | Plano Premium | 30% na 1ª consulta de cliente novo do marketplace, teto US$ 50; Premium pode ligar/desligar | 2,2–2,75% (+US$ 0,30) conflitante |

**Padrão do setor:** cobra-se caro (20–35%) apenas pela *aquisição* do cliente novo; o recorrente fica com o profissional (0%) para reduzir "desintermediação" (vazamento para o WhatsApp).

---

## 2. "Last-minute" / horário disponível agora

| Quem | Recurso | Como o horário chega ao marketplace |
|---|---|---|
| Fresha | "Last-minute offers" (desconto automático para reservas feitas X horas antes; escolhe serviços e profissionais) + "Off-peak pricing" (desconto em horários vazios); cliente pode criar alerta de ofertas na região | A agenda do salão **já está no software Fresha** (agenda = vitrine) [oficial, help center] |
| Booksy (inclusive BR, biz.booksy.com/pt-br) | "Descontos de Última Hora", Happy Hours, Vendas Rápidas, lista de espera automática que avisa clientes quando abre vaga | Agenda nativa do Booksy [oficial] |
| Treatwell | Filtro "off peak & last minute discounts", tipicamente 20–50% de desconto | Agenda via software próprio/integrações (ex.: Salonized integra com Treatwell) [3º] |
| ClassPass (beleza/spa) | Parceiros listam horários vagos grátis; membros pagam em créditos (preço varia por horário/popularidade) | Sync 1-clique com Mindbody, Booker, Acuity; "CalendarSync" para os demais [oficial] |
| Salonized (EU) | Last-minute discounts | Software de gestão [oficial help] |
| Brasil | **Nenhum app dedicado a "horário vago agora" encontrado.** Booksy BR tem o recurso; Avec/Beauty Date tem descontos para favoritos; L'Oréal Sal(ON) piloto 2024 em 100 salões RJ/SP com cashback (status atual não verificado) | — |

**Mecanismo comum:** ninguém pede ao salão para "publicar vagas" manualmente — o slot aparece porque **a agenda do salão vive no software da plataforma** (Fresha/Booksy) ou é **sincronizada** (ClassPass). Para a Belê: (a) agenda grátis/simples para o salão, ou (b) integração com Trinks/Avec/Google Calendar, ou (c) MVP manual: botão "tenho vaga agora" via WhatsApp/painel com expiração em 2–4h.

---

## 3. Go-to-market: táticas concretas (quem fez)

1. **Software grátis para criar oferta antes da demanda — Fresha (ex-Shedul, 2015).** Deu agenda gratuita a salões; só depois ligou o marketplace e cobrou por agendamento/cliente novo. [imprensa] TechCrunch 2018/2021.
2. **Concierge manual numa cidade — Urban Company (UrbanClap, 2014, Delhi NCR, começou por beleza em casa).** Onboarding e match feitos à mão; um sócio só cuidava da oferta, outro da demanda. Depois virou "full-stack": treinamento de 3 a 45 dias, verificação de antecedentes, kits padronizados. [imprensa] YourStory; [oficial] blog UC.
3. **Treinar e padronizar a profissional — Singu (2016, RJ/SP).** Profissionais passavam por treinamento; preço tabelado; pagamento só por cartão no app. Crescimento "orgânico, CAC baixo" segundo o fundador. [imprensa] Exame, Forbes.
4. **Celebridade sócia — Singu + Deborah Secco (2019), "sócia estratégica".** [imprensa] Baguete.
5. **Parceria com marca/rede de revendedoras — Singu + Natura:** consultoras Natura entraram como profissionais; pedidos +250%. [imprensa] Startups.com.br (data não clara).
6. **Antecipação de recebíveis para a profissional — Singu** virou "praticamente uma fintech", adiantando recebíveis. Retém oferta. [imprensa] Mobile Time.
7. **Fazer o trabalho do fornecedor — Airbnb:** fundadores fotografaram anúncios em Nova York (depois programa com milhares de fotógrafos freelancers; Fortune: US$ 60/job). [imprensa] Fortune 2012; números de reservas variam entre fontes.
8. **Pegar oferta de onde ela já está — Airbnb x Craigslist:** ferramenta para republicar anúncios no Craigslist (violava termos; foi bloqueada depois). Análogo legal: importar perfis do Instagram com consentimento. [3º]
9. **Corridas grátis em eventos de tech + crédito de indicação — Uber (São Francisco, ~2010–11);** expansão cidade a cidade com time local. Crédito para quem indica e para o indicado. [3º] + [oficial] Uber newsroom.
10. **Mídia impressa/telefone antes do app — iFood (Disk Cook, guia de cardápios + central telefônica).** Validou demanda e base de restaurantes offline antes do digital. [imprensa] StartSe, B3 Bora Investir (datas 1997 vs 2011 divergem).
11. **Mídia paga de performance dos dois lados — GetNinjas:** muito Google/Facebook Ads para atrair profissionais; projeto FAPESP para otimizar lance no AdWords. [imprensa] Forbes 2021, Agência FAPESP.
12. **Global-first por nicho — Booksy (2014):** começou focado em barbearias e lançou nos EUA antes da Polônia. [oficial blog Booksy] — detalhes táticos dos primeiros clientes **não encontrados**.
13. **Subsídio massivo de taxa — Rappi/99Food 2025:** taxa zero para restaurantes para roubar oferta do líder. [imprensa]

---

## 4. Brasil — jurídico/operacional

### 4.1 Lei do Salão-Parceiro (Lei 13.352/2016, altera Lei 12.592/2012)
- Salão-parceiro e profissional-parceiro (cabeleireiro, barbeiro, esteticista, manicure, pedicure, depilador, maquiador) podem ter **contrato de parceria civil**, sem vínculo CLT.
- Contrato **escrito e homologado pelo sindicato** da categoria (na falta, órgão local do Ministério do Trabalho), conforme base territorial do salão.
- O salão **centraliza o pagamento** do cliente e **retém sua cota-parte** (% fixado no contrato) + tributos do profissional; repassa o resto.
- Vínculo empregatício se configura se não houver contrato formal ou se o profissional fizer funções fora do contrato.
- STF: parceria é constitucional, mas nula se usada para mascarar emprego.
- Prática: há relatos de sindicatos que não homologam [fórum — NÃO VERIFICADO].
- **Relevância para a Belê:** o "aluguel de maca/estúdio" e "salões com vaga" se aproximam desse regime. A plataforma não é o salão-parceiro; se ela intermediar o pagamento e dividir valores com o salão, convém contrato próprio de intermediação e checagem com advogado/contador (ponto de atenção, não conclusão jurídica).
- Fontes: [oficial] planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13352.htm ; [3º] Agência Sebrae.

### 4.2 Split de pagamento (taxas públicas encontradas)

| Gateway | Pix | Cartão de crédito | Split / observações | Fonte |
|---|---|---|---|---|
| Asaas | R$ 1,99 por Pix recebido (promo R$ 0,99 por 3 meses) | 2,99% à vista; 3,49% 2–12x | Split disponível; taxa específica do split **não encontrada** | [oficial] asaas.com/precos-e-taxas |
| Mercado Pago (link de pagamento) | 0,99% na hora | 4,98% na hora / 4,48% em 14 dias / 3,99% em 30 dias | Split para marketplace existe; tarifa específica **não encontrada**; "na hora" pode exigir histórico | [oficial] mercadopago.com.br |
| Iugu (plano Essencial) | 0,99% | 3,34% + R$ 0,40 | Subcontas/saques com valor na página "Essencial + Split"; Motor iugu sob consulta | [3º] Quasa — NÃO VERIFICADO |
| Pagar.me (Stone) | ~1,19% | 3,79%–4,39% (fontes divergem) | Taxas negociadas por cliente; split cartão, boleto e Pix | [3º] iDinheiro/Mobills — NÃO VERIFICADO |
| Stripe Brasil | 1,19% (convite) | 3,99% + R$ 0,39; repasse cartão em 30 dias | Connect: preço BR **não encontrado** (site bloqueado) | [3º] Quasa — NÃO VERIFICADO |

Regra prática: com ticket de R$ 150 e take rate de 15–20%, pagar 3–5% de cartão consome 1/4 a 1/3 da receita da plataforma. Incentivar Pix muda a conta.

### 4.3 MEI
- Teto **2026: R$ 81.000/ano** (inalterado; Ministério confirmou que não muda em 2026). [imprensa] meutudo.com.br mai/2026.
- PLP 186/2026 (governo): R$ 110 mil em 2027 e R$ 140 mil em 2028; LegisWeb (15/10/2026) diz que a Câmara aprovou; **sanção não confirmada**. PLP 108/2021 (Senado) previa R$ 130 mil. [imprensa]
- Para a Belê: profissional que fatura > ~R$ 6.750/mês estoura o MEI; no modelo salão-parceiro, só a cota-parte do profissional conta como receita dele (verificar com contador).

### 4.4 Publicidade identificada
- **CDC art. 36:** a publicidade deve ser veiculada de forma que o consumidor a identifique fácil e imediatamente como tal. Art. 37 proíbe enganosa/abusiva. STJ: responsabilidade solidária de quem veicula e de quem se beneficia.
- **Guia CONAR de Publicidade por Influenciadores:** identificar com "publicidade", "publi", "publipost" ou ferramenta da plataforma; "recebidos" também devem ser sinalizados; versão recente diz que uso de IA não afasta responsabilidade. Data da versão atual **não confirmada**.
- Implicação: toda parceria com influenciadora (permuta de serviço incluída) precisa de #publi; o mesmo vale para profissionais promovidas no app ("Destaque"/patrocinado deve ser rotulado).

---

## 5. Métricas típicas de marketplaces de serviço local

| Métrica | Faixa encontrada | Fonte |
|---|---|---|
| Take rate — geração de lead | 2–3% | [3º] knowledgelib (fonte fraca) |
| Take rate — serviços gerenciados | 25–30% | [3º] idem |
| Take rate — mediana serviços | ~18–23% | [3º] idem |
| Take rate — home services | 5–20% | [3º] Startupik |
| Take rate — beleza & bem-estar | 27,5% média (inclui receitas extras, ex. SaaS/pagto); caiu 130 bps | William Blair, estudo de 300+ empresas (2025) |
| Referências reais de beleza | Singu 30%; Urban Company ≤25% (teto após protestos); Fresha 20% / Booksy 30% / StyleSeat 30% / Treatwell 35% só em cliente novo | seções acima |
| Liquidez | Definida por fill rate (match), profundidade de mercado e tempo até match; não há meta universal — comparar com a própria série | [oficial] a16z Marketplace Glossary / "13 metrics"; Lenny's Newsletter |
| CAC / recompra | **Nenhum benchmark confiável encontrado** para beleza local no Brasil | — |

Nota a16z: take rate "cabeça" ≠ margem; medir receita líquida por transação (take − pagamento − reembolsos − cupons).

---

## 6. Implicações rápidas para a Belê (síntese, não dado)
- Modelo híbrido mais defensável: **comissão alta só no 1º atendimento de cliente novo** + 0–10% em recorrentes ou assinatura fixa; evita protesto (Urban Company) e vazamento.
- Pagamento in-app via split (Pix barato) é o que protege a comissão.
- Oferta antes da demanda: agenda/vitrine grátis para profissionais e salões + botão "vaga agora".
- Começar em um bairro/cidade, concierge manual, alunas da própria educadora como primeira oferta treinada (paralelo Singu/Urban Company).

---

## Fontes
- Uber/99: https://www.brasildefato.com.br/2025/06/25/tarifa-dinamica-da-uber-cobra-mais-de-cliente-e-paga-menos-a-motorista-aponta-estudo-britanico/ · https://garagem360.com.br/?p=184118 · https://canaltech.com.br/apps/99-vai-reembolsar-motoristas-taxados-em-mais-de-1999-227656/ · https://www.diariodepernambuco.com.br/economia/2026/08/11721270-aplicativos-trocam-percentual-por-assinatura-e-motoristas-passam-a-pagar-antes-para-rodar.html · https://diariodonordeste.verdesmares.com.br/ultima-hora/automovel/passe-para-motoristas-da-uber-assinatura-e-automatica-ao-aceitar-corrida-sem-plano-ativo-1.3766587
- iFood: https://saipos.com/integracoes/ifood/planos-ifood · https://www.serasa.com.br/renda-extra/abrir-loja-no-ifood/
- Rappi/99Food: https://timesbrasil.com.br/empresas-e-negocios/80-dos-novos-usuarios-vem-pelos-restaurantes-diz-ceo-da-rappi-empresa-vai-investir-r-14-bi-no-pais/ · https://www.infomoney.com.br/?p=3161711 · https://www.bloomberglinea.com.br/negocios/guerra-do-delivery-rappi-aposta-em-taxa-zero-e-novo-app-para-ganhar-mercado/
- GetNinjas: https://tecnoblog.net/responde/como-funciona-o-getninjas/ · https://www.getninjas.com.br/termos-de-uso · https://www.getninjas.com.br/precofechado/termos · https://forbes.com.br/forbes-tech/2021/08/inspirado-no-magalu-e-mercado-livre-getninjas-quer-oferecer-portfolio-completo-de-servicos-ao-brasil-inteiro/ · https://agencia.fapesp.br/app-optimizes-digital-marketing-results/27949
- Parafuzo/Mary Help: https://www.cut.org.br/noticias/aplicativo-que-oferece-faxinas-a-precos-baixos-pode-ser-acionado-pelo-mpt-7ccf/ · https://intercept.com.br/2022/05/12/faxineira-deixa-ate-74-do-valor-pago-pelo-cliente-com-o-aplicativo/
- Singu/Bluma: https://www.mobiletime.com.br/noticias/05/04/2016/singu-app-de-servicos-de-beleza-e-a-nova-aposta-do-criador-do-easy-taxi/ · https://www.baguete.com.br/noticias/natura-aposta-na-singu · https://www.gazetadopovo.com.br/economia/livre-iniciativa/empreender/singu-startup-de-tallis-gomes-recebe-r-10-milhoes-em-primeira-rodada-de-investimento-7lhmmpt5wbvrjpvxyx0044h2y · https://exame.com/pme/criador-do-easy-taxi-agora-aposta-em-app-para-manicures · https://www.baguete.com.br/noticias/deborah-secco-e-socia-da-singu · https://startups.com.br/negocios/com-natura-singu-aumenta-pedidos-em-250-e-promove-diretora-financeira/ · https://startups.com.br/negocios/natura-investe-na-singu-de-tallis-gomes-com-opcao-de-compra-de-100-do-negocio/ · https://www.meioemensagem.com.br/marketing/natura-ingressa-na-area-de-servicos-de-beleza-e-bem-estar · https://gironews.com/farma-cosmeticos/natura-expande-operacao-da-bluma-para-mais-de-35-cidades-brasileiras/ · https://apps.apple.com/br/app/bluma/id1060352606 · https://www.cbinsights.com/company/singu
- Urban Company: https://www.freepressjournal.in/business/urban-company-cuts-commission-to-25-from-30-after-workers-protest · https://www.aljazeera.com/economy/2024/3/1/how-indias-urban-company-has-soured-gig-work-for-women · https://yourstory.com/2021/03/product-roadmap-urban-company-home-services-startup-survived-test-time · https://www.urbancompany.com/blog/how-our-inr-72-crores-investment-in-training-skilling-transformed-service-partners-into-professionals
- Fresha: https://fresha.com/help-center/knowledge-base/billing-and-fees/188-marketplace-new-client-fees · https://glossgenius.com/blog/fresha-pricing · https://www.fresha.com/help-center/knowledge-base/marketing/101318-create-last-minute-offers-on-appointments · https://techcrunch.com/2018/08/02/shedul/amp/ · https://techcrunch.com/2021/06/11/fresha-raises-100m-for-its-beauty-and-wellness-booking-platform-and-marketplace
- Booksy: https://biz.booksy.com/en-us/pricing · https://support.booksy.com/hc/en-us/articles/16486248108946-How-does-Boost-pricing-work · https://glossgenius.com/blog/booksy-price · https://biz.booksy.com/en-us/features/marketing-tools · https://biz.booksy.com/pt-br/por-que-o-booksy · https://biz.booksy.com/blog/larry-the-barberman-interviews-booksy-ceo-stefan-batory
- Treatwell: https://www.treatwell.co.uk/partners?p=45 · https://whito.co.uk/tools/treatwell-cost-salons-uk/ · https://www.treatwell.co.uk/places/discount-dynamic/in-uk/ · https://help.salonized.com/en/articles/5669294-what-do-i-need-to-know-about-last-minute-discounts
- StyleSeat: https://www.styleseat.com/join/new-client-connections · https://glossgenius.com/blog/styleseat-pricing
- ClassPass: https://classpass.com/partners/salon-business · https://classpass.com/partners/wellness
- Trinks/Avec/Beauty Date: https://www.softwareadvice.com/salon/trinks-profile · https://www.g2.com/products/avec-avec/pricing · https://www.softwareadvice.com/salon/beauty-date-profile/ · https://mercadoeconsumo.com.br/13/05/2016/noticias/aplicativo-facilita-agendamento-em-saloes-de-beleza · https://www.cbinsights.com/company/beauty-date · https://www.mobiletime.com.br/noticias/29/08/2024/loreal-app-saloes/
- Airbnb/Uber/iFood GTM: https://fortune.com/2012/05/03/airbnb-more-than-a-place-to-crash/ · https://www.alexanderjarvis.com/airbnb-doing-things-that-dont-scale · https://growthhackers.com/growth-studies/uber · https://www.uber.com/us/en/newsroom/ubers-founding · https://www.startse.com/artigos/historia-ifood · https://borainvestir.b3.com.br/podcasts-b3/de-onde-vem-o-ticker/ifood-do-cardapio-impresso-a-um-gigante-de-tecnologia-da-america-latina/
- Lei 13.352: https://planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13352.htm · https://agenciasebrae.com.br/economia-e-politica/lei-salao-parceiro-tudo-o-que-donos-e-profissionais-da-beleza-precisam-saber/
- Pagamentos: https://www.asaas.com/precos-e-taxas · https://www.mercadopago.com.br/ferramentas-para-vender/link-de-pagamento · https://quasa.io/pt/media/asaas-ou-iugu-tarifa-publicada-vence-ate-o-volume-pedir-proposta · https://quasa.io/pt/media/stripe-ou-mercado-pago-o-prazo-de-recebimento-vira-parte-da-taxa · https://www.idinheiro.com.br/negocios/plataformas-pagamento-online/ · https://www.nuvemshop.com.br/blog/o-que-e-pagar-me/
- MEI: https://meutudo.com.br/blog/noticias/2026/05/12/ministerio-confirma-que-limite-de-faturamento-do-mei-nao-muda-em-2026/ · https://www.legisweb.com.br/noticia/?id=34560 · https://diariodonordeste.verdesmares.com.br/opiniao/colunistas/inacio-aguiar/qual-o-novo-limite-do-mei-entenda-a-proposta-que-muda-regra-para-empreendedores-1.3774153
- Publicidade: https://www.meioemensagem.com.br/comunicacao/o-codigo-de-etica-publicitaria-do-conar-para-influenciadores · https://propmark.com.br/?p=125124 · https://www.conjur.com.br/2023-abr-05/responsabilidade-influencers-indicam-produtos-otica-cdc
- Métricas: https://a16z.com/13-metrics-for-marketplace-companies/ · https://a16z.com/the-marketplace-glossary/ · https://www.lennysnewsletter.com/p/the-most-important-marketplace-metrics · https://williamblair.com/Insights/Proprietary-Study-of-300-Plus-Private-and-Public-Company-Take-Rates · https://knowledgelib.io/business/industry-benchmarks/marketplace-industry-benchmarks-2026/2026 · https://startupik.com/marketplace-take-rates-how-much-should-you-charge/?amp=1
