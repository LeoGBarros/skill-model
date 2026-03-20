import React from "react";

export type DentistaModelo2Props = {
  clinicaNome?: string;
  telefoneE164?: string;
  whatsAppE164?: string;
  emailClinica?: string;
  primaryColor?: string; // HEX
  secondaryColor?: string; // HEX
  doutores?: Array<{ nome: string; bio: string }>; // 3 itens
  servicos?: Array<{ titulo: string; descricao: string }>; // >= 6 itens
  ambienteCards?: Array<{ titulo: string; descricao: string }>; // >= 2 itens
  imagensClinica?: Array<{ src: string; alt: string }>;
  imagensPacientesSorrindo?: Array<{ src: string; alt: string }>;
  antesDepois?: Array<{
    titulo?: string;
    antesSrc: string;
    depoisSrc: string;
    altAntes?: string;
    altDepois?: string;
  }>;
  googleMapsEmbedUrl?: string; // URL de embed do Google Maps
  googleMapsUrl?: string; // Link para abrir no Google Maps
  logoClinicaSrc?: string;
  footerSlogan?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  depoimento?: { texto: string; autor: string };
  faq?: Array<{ pergunta: string; resposta: string }>; // >= 3 itens
};

function stripPlus(e164: string) {
  return e164.replace(/^\+/, "");
}

function buildWaLink(whatsAppE164: string, text: string) {
  // Montagem do link wa.me
  return `https://wa.me/${stripPlus(whatsAppE164)}?text=${encodeURIComponent(text)}`;
}

function buildTelLink(telefoneE164: string) {
  return `tel:${telefoneE164}`;
}

function buildMailtoLink(emailClinica: string, subject: string, body: string) {
  return `mailto:${emailClinica}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function DentistaModelo2(props: DentistaModelo2Props) {
  const {
    clinicaNome = "Clinica Sorriso",
    telefoneE164 = "+5511999999999",
    whatsAppE164 = "+5511999999999",
    emailClinica = "contato@clinicasorriso.com.br",
    primaryColor = "#16a34a",
    secondaryColor = "#0284c7",
    doutores = [
      { nome: "Dra. Ana Ribeiro", bio: "Planejamento cuidadoso para tratamentos mais previsíveis." },
      { nome: "Dr. Bruno Martins", bio: "Acompanhamento com foco em segurança e clareza." },
      { nome: "Dra. Carla Souza", bio: "Estética com linguagem simples e decisões transparentes." },
    ],
    ambienteCards = [
      { titulo: "Recepção acolhedora", descricao: "Ambiente pensado para você se sentir à vontade desde a chegada." },
      { titulo: "Biossegurança em dia", descricao: "Rotina de cuidado e organização para atender com confiança." },
    ],
    imagensClinica = [],
    imagensPacientesSorrindo = [],
    antesDepois = [],
    googleMapsEmbedUrl,
    googleMapsUrl = "https://www.google.com/maps",
    logoClinicaSrc,
    footerSlogan = "Sorriso saudável com cuidado humanizado e segurança.",
    instagramUrl = "#",
    facebookUrl = "#",
    servicos = [
      { titulo: "Avaliação e Triagem", descricao: "Entendemos sua necessidade e definimos o melhor caminho." },
      { titulo: "Restaurações Estéticas", descricao: "Recuperação funcional e estética com planejamento." },
      { titulo: "Clareamento Dental", descricao: "Planos seguros e acompanhamento para resultados consistentes." },
      { titulo: "Tratamento de Gengiva", descricao: "Cuidado periodontal com orientação contínua." },
      { titulo: "Odontologia Preventiva", descricao: "Acompanhamento para reduzir riscos e manter saúde." },
      { titulo: "Reabilitação Oral", descricao: "Estratégia por etapas para maior previsibilidade." },
      { titulo: "Urgências Odontológicas", descricao: "Atendimento para aliviar dor e orientar próximos passos." },
      { titulo: "Higienização Profissional", descricao: "Limpeza completa com orientação personalizada." },
      { titulo: "Saúde do Sorriso", descricao: "Acompanhamento para manter o sorriso saudável no longo prazo." },
    ],
    depoimento = {
      texto: "Fui atendida com muita calma. Entenderam meu caso, explicaram tudo e me senti segura do começo ao fim.",
      autor: "Mariana S.",
    },
    faq = [
      {
        pergunta: "Como funciona a triagem antes do atendimento?",
        resposta:
          "Você conversa com a equipe para entender sua necessidade. Depois, fazemos a avaliação para definir o plano ideal com clareza.",
      },
      {
        pergunta: "Quanto tempo demora a primeira consulta?",
        resposta:
          "Depende do seu caso, mas buscamos ser objetivos: triagem, exame e explicação das etapas para você sair com direção.",
      },
      {
        pergunta: "Os tratamentos têm acompanhamento?",
        resposta:
          "Sim. A ideia é orientar continuamente para reduzir riscos e manter o resultado ao longo do tempo.",
      },
      {
        pergunta: "Vocês explicam custos e passos antes de iniciar?",
        resposta:
          "Sim. Transparência é parte do atendimento: explicamos etapas e possibilidades antes de qualquer decisão.",
      },
    ],
  } = props;

  const whatsappText = `Olá! Quero agendar uma consulta na ${clinicaNome}.`;
  const whatsappLink = buildWaLink(whatsAppE164, whatsappText);
  const telLink = buildTelLink(telefoneE164);

  const subject = `Agendamento - ${clinicaNome}`;
  const body = `Olá! Gostaria de agendar uma consulta.\n\nNome: \nPreferência de dia/horário: `;
  const mailtoLink = buildMailtoLink(emailClinica, subject, body);

  const pacienteImg0 = imagensPacientesSorrindo[0];
  const pacienteImg1 = imagensPacientesSorrindo[1];
  const pacienteImg2 = imagensPacientesSorrindo[2];

  const clinicaImg0 = imagensClinica[0];
  const clinicaImg1 = imagensClinica[1];
  const clinicaImg2 = imagensClinica[2];
  const clinicaImg3 = imagensClinica[3];

  return (
    <div className="bg-white">
      <main>
        <section className="relative overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-slate-50" />
          <div className="mx-auto w-11/12 max-w-5xl">
            <nav className="flex items-center justify-between py-4">
              <div className="text-sm font-semibold text-slate-700">
                <span style={{ color: primaryColor }}>{clinicaNome}</span>
              </div>
              <div className="hidden items-center gap-3 sm:flex">
                <a
                  href="#ambiente"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Ambiente
                </a>
                <a
                  href="#servicos"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Serviços
                </a>
                <a
                  href="#contato"
                  className="text-sm font-semibold text-slate-600 hover:text-slate-900"
                >
                  Contato
                </a>
              </div>
            </nav>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5 pt-10">
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: primaryColor }} />
                  <span className="text-slate-600">Premium, transparente e acolhedor</span>
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  Seu plano de tratamento com{" "}
                  <span style={{ color: secondaryColor }}>transparência</span>
                </h1>
                <p className="text-base leading-relaxed text-slate-700">
                  Da triagem ao diagnóstico: explicamos etapas com segurança e clareza para reduzir dúvidas e
                  aumentar sua confiança.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Ligar e marcar consulta
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    WhatsApp para agendar
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-base font-semibold"
                    style={{ borderColor: secondaryColor, color: secondaryColor }}
                  >
                    Falar com a equipe
                  </a>
                </div>

                <div className="text-sm text-slate-500">
                  Atendimento com foco em segurança, clareza e acompanhamento.
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                {/* Collage de pacientes sorrindo no header (sem sequência fixa) */}
                <div className="relative overflow-hidden rounded-2xl border bg-slate-50 p-3">
                  {pacienteImg0 ? (
                    <div className="relative h-52 w-full">
                      <div className="absolute left-2 top-2 h-36 w-[62%] overflow-hidden rounded-2xl border bg-white">
                        <img
                          src={pacienteImg0.src}
                          alt={pacienteImg0.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {pacienteImg1 ? (
                        <div className="absolute right-1 top-6 h-28 w-[48%] overflow-hidden rounded-2xl border bg-white">
                          <img
                            src={pacienteImg1.src}
                            alt={pacienteImg1.alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                      {pacienteImg2 ? (
                        <div className="absolute right-1 bottom-2 h-20 w-[42%] overflow-hidden rounded-2xl border bg-white">
                          <img
                            src={pacienteImg2.src}
                            alt={pacienteImg2.alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="flex h-52 flex-col items-center justify-center gap-2">
                      <div className="text-sm font-semibold text-slate-700">Espaço para fotos</div>
                      <div className="text-xs text-slate-500">Envie `imagensPacientesSorrindo`.</div>
                    </div>
                  )}
                </div>

                <div className="mt-5 text-sm font-semibold" style={{ color: primaryColor }}>
                  Você sabe o que vai acontecer
                </div>
                <div className="mt-3 grid gap-3">
                  {[
                    { title: "Triagem que orienta", desc: "Entendemos sua necessidade antes de decidir." },
                    { title: "Exame e diagnóstico", desc: "Explicamos com clareza e linguagem humana." },
                    { title: "Etapas e custos", desc: "Transparência antes de começar o tratamento." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href={telLink}
                    className="rounded-2xl px-4 py-2 text-sm font-semibold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Agendar por telefone
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: secondaryColor }}
                  >
                    Tirar dúvidas no WhatsApp
                  </a>
                </div>

                <div className="mt-3 text-xs text-slate-500">
                  *Substitua pelos seus contatos reais (telefone, WhatsApp e email).*
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ambiente" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">Ambiente e cuidado</h2>
          <p className="mt-2 text-slate-600">
            Dois pilares: conforto e biossegurança. Tudo pensado para a sua tranquilidade.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {ambienteCards.slice(0, 2).map((c) => (
              <div key={c.titulo} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold" style={{ color: primaryColor }}>
                  {c.titulo}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{c.descricao}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="clinica-imagens" className="mx-auto w-full py-16">
          <div className="relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative mx-auto w-11/12 max-w-5xl">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">Clínica em detalhes</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
                    Um layout em mosaico para mostrar ambientes e estrutura com impacto visual.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    Ligar e marcar
                  </a>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:gap-5 auto-rows-[110px]">
                {imagensClinica.length > 0 ? (
                  imagensClinica.slice(0, 6).map((img, idx) => {
                    const span =
                      idx === 0
                        ? "md:col-span-4 md:row-span-2"
                        : idx === 1
                          ? "md:col-span-2 md:row-span-1"
                          : idx === 2
                            ? "md:col-span-2 md:row-span-2"
                            : idx === 3
                              ? "md:col-span-2 md:row-span-1"
                              : idx === 4
                                ? "md:col-span-2 md:row-span-1"
                                : "md:col-span-2 md:row-span-1";

                    return (
                      <figure
                        key={img.src}
                        className={`overflow-hidden rounded-3xl border bg-white shadow-sm ${span}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </figure>
                    );
                  })
                ) : (
                  <div className="col-span-full rounded-3xl border border-white/25 bg-white/10 p-6 text-white/90">
                    Adicione `imagensClinica` para aparecer no mosaico.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="doutores" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">Doutores</h2>
          <p className="mt-2 text-slate-600">Profissionais com experiência e comunicação transparente.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {doutores.slice(0, 3).map((d) => (
              <div key={d.nome} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: secondaryColor }}
                    aria-hidden="true"
                  >
                    <span className="text-lg font-bold">{d.nome.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{d.nome}</div>
                    <div className="text-xs text-slate-500">CRO • Equipe</div>
                  </div>
                </div>
                <div className="mt-4 text-sm leading-relaxed text-slate-600">{d.bio}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Serviços</h2>
            <p className="text-slate-600">
              Grade completa com atendimento por etapas, sempre com segurança e clareza.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {servicos.slice(0, 12).map((s) => (
              <div key={s.titulo} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-base font-bold text-slate-900">{s.titulo}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{s.descricao}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">Transparência do começo ao fim</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Explicamos triagem, avaliação e etapas do plano. Você sabe o que será feito e por quê, com
              segurança/clareza para seguir com confiança.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={telLink}
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Marcar consulta
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                style={{ backgroundColor: secondaryColor }}
              >
                Agendar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="prova-social" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">Prova social</h2>
          <p className="mt-2 text-slate-600">O que nossos pacientes dizem</p>
          <div className="mt-8 rounded-3xl border bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold" style={{ color: secondaryColor }}>
              Depoimento
            </div>
            <div className="mt-2 text-base font-semibold text-slate-900">“{depoimento.texto}”</div>
            <div className="mt-3 text-sm text-slate-600">— {depoimento.autor}</div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={telLink}
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Falar por telefone
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl px-5 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: secondaryColor }}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
          <p className="mt-2 text-slate-600">Dúvidas comuns antes de agendar.</p>
          <div className="mt-8 grid gap-4">
            {faq.slice(0, 6).map((item) => (
              <details key={item.pergunta} className="group rounded-3xl border bg-white px-6 py-4 shadow-sm">
                <summary className="cursor-pointer list-none text-base font-bold text-slate-900">
                  <span
                    className="pr-2 inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  />
                  {item.pergunta}
                </summary>
                <div className="mt-3 text-sm leading-relaxed text-slate-600">{item.resposta}</div>
              </details>
            ))}
          </div>
        </section>

        <section id="resultados" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Antes e Depois</h2>
            <p className="text-slate-600">
              Resultados reais reduzem objeções. Use imagens com autorização de consentimento.
            </p>
          </div>

          {antesDepois.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {antesDepois.slice(0, 6).map((item, idx) => (
                <div key={`${item.antesSrc}-${idx}`} className="rounded-3xl border bg-white p-5 shadow-sm">
                  {item.titulo ? <div className="mb-3 text-sm font-semibold text-slate-900">{item.titulo}</div> : null}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <div className="text-xs font-semibold text-slate-600">Antes</div>
                      <img
                        src={item.antesSrc}
                        alt={item.altAntes ?? "Foto antes"}
                        loading="lazy"
                        className="mt-2 h-48 w-full rounded-2xl object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-600">Depois</div>
                      <img
                        src={item.depoisSrc}
                        alt={item.altDepois ?? "Foto depois"}
                        loading="lazy"
                        className="mt-2 h-48 w-full rounded-2xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border bg-slate-50 p-7">
              <div className="text-sm font-semibold text-slate-800">Espaço para imagens Antes/Depois</div>
              <div className="mt-1 text-sm text-slate-600">
                Envie `antesDepois` com `antesSrc` e `depoisSrc`.
              </div>
            </div>
          )}
        </section>

        <section id="google-maps" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Avaliações no Google</h2>
            <p className="text-slate-600">Embed do Google Maps para mostrar avaliações e comentários reais do local.</p>
          </div>

          <div className="mt-8 rounded-3xl border bg-white p-6 shadow-sm">
            {googleMapsEmbedUrl ? (
              <iframe
                title="Avaliações no Google Maps"
                src={googleMapsEmbedUrl}
                className="h-80 w-full rounded-2xl"
                style={{ border: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex flex-col gap-3">
                <div className="text-sm font-semibold text-slate-800">Sem embed configurado</div>
                <div className="text-sm text-slate-600">
                  Envie `googleMapsEmbedUrl` (URL de embed do Google Maps) para ver avaliações reais.
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white"
                  style={{ backgroundColor: secondaryColor }}
                >
                  Abrir Google Maps
                </a>
              </div>
            )}
          </div>
        </section>

        <section id="contato" className="mx-auto w-11/12 max-w-5xl pb-20">
          <div className="rounded-3xl border bg-white p-7 shadow-sm">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900">Contato</h2>
                <p className="text-slate-600">Escolha o canal que for mais confortável para você.</p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href={mailtoLink}
                    className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                    style={{ borderColor: secondaryColor, color: secondaryColor }}
                  >
                    Email
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                    style={{ borderColor: secondaryColor, color: secondaryColor }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={telLink}
                    className="rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                    style={{ borderColor: primaryColor, color: primaryColor }}
                  >
                    Telefone
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <div className="text-sm font-semibold" style={{ color: primaryColor }}>
                  Pronto para agendar?
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Envie sua mensagem e retornamos com orientação clara.
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Ligar e marcar
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    WhatsApp agora
                  </a>
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  Se preferir, você também pode enviar um email com o assunto de agendamento.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer aria-label="Rodapé" className="border-t bg-slate-900 text-slate-200">
        <div className="mx-auto w-11/12 max-w-5xl px-0 py-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              {logoClinicaSrc ? (
                <img
                  src={logoClinicaSrc}
                  alt={`Logo da ${clinicaNome}`}
                  className="h-12 w-auto"
                  loading="lazy"
                />
              ) : (
                <div
                  className="flex h-12 w-fit items-center rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white/90"
                  style={{ borderColor: "rgba(148, 163, 184, 0.35)" }}
                >
                  Logo da clínica
                </div>
              )}

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">{footerSlogan}</p>
            </div>

            <div>
              <div className="text-sm font-bold text-white">Links rápidos</div>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#ambiente">
                    Ambiente
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#servicos">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#resultados">
                    Antes e Depois
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#google-maps">
                    Avaliações
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#contato">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold text-white">Follow us</div>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
                >
                  Instagram
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
            © 2026 {clinicaNome}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

