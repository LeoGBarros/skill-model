import React from "react";

export type DentistaModelo1Props = {
  clinicaNome?: string;
  enderecoCidade?: string;
  telefoneE164?: string; // ex.: +5511999999999
  whatsAppE164?: string; // ex.: +5511999999999
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
  googleMapsEmbedUrl?: string; // URL de embed do Google Maps (de preferencia "Share > Embed a map")
  googleMapsUrl?: string; // Link para abrir no Google Maps
  logoClinicaSrc?: string;
  footerSlogan?: string;
  instagramUrl?: string;
  facebookUrl?: string;
};

function stripPlus(e164: string) {
  return e164.replace(/^\+/, "");
}

function buildWaLink(whatsAppE164: string, text: string) {
  return `https://wa.me/${stripPlus(whatsAppE164)}?text=${encodeURIComponent(text)}`;
}

function buildTelLink(telefoneE164: string) {
  return `tel:${telefoneE164}`;
}

function buildMailtoLink(emailClinica: string, subject: string, body: string) {
  return `mailto:${emailClinica}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function DentistaModelo1(props: DentistaModelo1Props) {
  const {
    clinicaNome = "Clinica Sorriso",
    enderecoCidade,
    telefoneE164 = "+5511999999999",
    whatsAppE164 = "+5511999999999",
    emailClinica = "contato@clinicasorriso.com.br",
    primaryColor = "#16a34a",
    secondaryColor = "#0284c7",
    doutores = [
      { nome: "Dra. Ana Ribeiro", bio: "Clareamento, estética e diagnóstico com foco em conforto." },
      { nome: "Dr. Bruno Martins", bio: "Periodontia e saúde gengival com abordagem tranquila e objetiva." },
      { nome: "Dra. Carla Souza", bio: "Reabilitação oral e planejamento de longo prazo para resultados seguros." },
    ],
    servicos = [
      { titulo: "Limpeza e Profilaxia", descricao: "Remoção de placa e tártaro com orientação personalizada." },
      { titulo: "Clareamento Dental", descricao: "Planos seguros para deixar o sorriso mais claro." },
      { titulo: "Restaurações", descricao: "Tratamentos estéticos e funcionais para dentes danificados." },
      { titulo: "Avaliação e Diagnóstico", descricao: "Triagem que define o melhor caminho com clareza." },
      { titulo: "Tratamento de Gengiva", descricao: "Atendimento focado em segurança e saúde periodontal." },
      { titulo: "Odontologia Preventiva", descricao: "Acompanhamento para reduzir riscos e manter qualidade." },
    ],
    ambienteCards = [
      { titulo: "Atendimento acolhedor", descricao: "Você é recebido com calma, explicações claras e sem pressa." },
      { titulo: "Estrutura preparada", descricao: "Consultório organizado e rotina com biossegurança e cuidado." },
      { titulo: "Tecnologia a favor do paciente", descricao: "Triagem e acompanhamento para uma decisão mais segura." },
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
  } = props;

  const waText = `Olá! Gostaria de agendar uma consulta na ${clinicaNome}.`;
  const whatsappLink = buildWaLink(whatsAppE164, waText);
  const telLink = buildTelLink(telefoneE164);

  const contatoSubject = `Contato - ${clinicaNome}`;
  const contatoBody = `Olá! Eu gostaria de mais informações/agenda.\n\nNome: \nPreferência: `;
  const mailtoLink = buildMailtoLink(emailClinica, contatoSubject, contatoBody);

  const pacienteImg0 = imagensPacientesSorrindo[0];
  const pacienteImg1 = imagensPacientesSorrindo[1];
  const pacienteImg2 = imagensPacientesSorrindo[2];

  const clinicaImg0 = imagensClinica[0];
  const clinicaImg1 = imagensClinica[1];
  const clinicaImg2 = imagensClinica[2];

  return (
    <div>
      {/* Toolbar fixa com CTAs estratégicos */}
      <div
        className="fixed inset-x-0 top-3 z-50"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      >
        <div className="mx-auto w-11/12 max-w-5xl">
          <div
            className="flex items-center justify-between gap-3 rounded-2xl border bg-white/90 px-3 py-2 shadow-sm backdrop-blur"
            style={{ pointerEvents: "auto" }}
          >
            <div className="text-sm text-slate-600">
              <span className="font-semibold" style={{ color: primaryColor }}>
                {clinicaNome}
              </span>{" "}
              <span className="hidden sm:inline">- atendimento rápido</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={telLink}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
                aria-label="Ligar e marcar consulta"
              >
                Ligar
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: secondaryColor }}
                aria-label="Falar no WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="relative bg-white">
        <section className="relative overflow-hidden pt-24 sm:pt-28">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-slate-50" />
          <div className="mx-auto w-11/12 max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: primaryColor }} />
                  <span className="text-slate-600">Triagem clara, cuidado e segurança</span>
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  Seu sorriso com{" "}
                  <span style={{ color: primaryColor }}>acolhimento</span> e{" "}
                  <span style={{ color: secondaryColor }}>resultado</span>
                </h1>
                <p className="text-base leading-relaxed text-slate-700">
                  {enderecoCidade ? (
                    <>
                      Atendimento em <span className="font-semibold">{enderecoCidade}</span>.{" "}
                    </>
                  ) : null}
                  Explicamos cada etapa: triagem, avaliação e plano de tratamento com linguagem humana.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-base font-semibold text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    WhatsApp para agendar
                  </a>
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Ligar e marcar consulta
                  </a>
                </div>
                <div className="text-sm text-slate-500">
                  *Substitua pelos seus contatos reais (telefone, WhatsApp e email).*
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl border bg-white p-6 shadow-sm">
                  {/* Collage com fotos de pacientes sorrindo (variação no header principal) */}
                  <div className="relative overflow-hidden rounded-2xl border bg-slate-50 p-3">
                    {pacienteImg0 ? (
                      <div className="relative h-56 w-full">
                        <div className="absolute left-2 top-2 h-44 w-[72%] overflow-hidden rounded-2xl border bg-white">
                          <img
                            src={pacienteImg0.src}
                            alt={pacienteImg0.alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {pacienteImg1 ? (
                          <div className="absolute right-1 bottom-2 h-28 w-[56%] overflow-hidden rounded-2xl border bg-white">
                            <img
                              src={pacienteImg1.src}
                              alt={pacienteImg1.alt}
                              loading="lazy"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        ) : null}
                        {pacienteImg2 ? (
                          <div className="absolute right-6 top-28 h-16 w-20 overflow-hidden rounded-2xl border bg-white">
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
                      <div className="flex h-56 flex-col items-center justify-center gap-2">
                        <div className="text-sm font-semibold text-slate-700">Espaço para fotos de pacientes</div>
                        <div className="text-xs text-slate-500">Envie `imagensPacientesSorrindo` (src/alt).</div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <span className="text-xl font-bold text-white">✓</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">O que você recebe</h2>
                      <p className="mt-1 text-sm text-slate-600">Explicações objetivas e segurança em cada decisão.</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3">
                    {[
                      { title: "1. Triagem", desc: "Entendemos sua necessidade com calma." },
                      { title: "2. Avaliação", desc: "Diagnóstico com clareza e transparência." },
                      { title: "3. Plano", desc: "Etapas e custos explicados antes de iniciar." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl bg-slate-50 p-4">
                        <div className="font-semibold" style={{ color: primaryColor }}>
                          {item.title}
                        </div>
                        <div className="mt-1 text-sm text-slate-600">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <a
                      href={telLink}
                      className="rounded-2xl px-4 py-2 text-sm font-semibold text-white"
                      style={{ backgroundColor: primaryColor }}
                    >
                      Agendar agora
                    </a>
                    <a
                      href="#contato"
                      className="text-sm font-semibold text-slate-700 hover:underline"
                      style={{ color: secondaryColor }}
                    >
                      Falar com a equipe
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ambiente" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Ambiente preparado para você</h2>
            <p className="text-slate-600">
              Um espaço pensado para reduzir ansiedade e tornar a consulta mais confortável.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ambienteCards.slice(0, 3).map((c) => (
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
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-white">Tour da clínica</h2>
                <p className="max-w-2xl text-slate-200">
                  Fotos do consultório e momentos reais ajudam você a se sentir seguro antes da primeira consulta.
                </p>
              </div>

              <div className="mt-12 space-y-14">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="order-2 lg:order-1">
                    {clinicaImg0 ? (
                      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                        <img
                          src={clinicaImg0.src}
                          alt={clinicaImg0.alt}
                          loading="lazy"
                          className="h-64 w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="rounded-3xl border border-white/30 bg-white/10 p-6 text-white/90">
                        Adicione `imagensClinica[0]`
                      </div>
                    )}
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: secondaryColor }} />
                      Ambiente acolhedor
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">Conforto desde a recepção</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      Um espaço organizado para você entender cada etapa do atendimento com calma e clareza.
                    </p>
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-white">Biossegurança no dia a dia</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      Rotina de cuidado, limpeza e preparação para que você chegue e se sinta seguro.
                    </p>
                    <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                      <a
                        href={telLink}
                        className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white"
                        style={{ backgroundColor: secondaryColor }}
                      >
                        Ligar e marcar
                      </a>
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div>
                    {clinicaImg1 ? (
                      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                        <img
                          src={clinicaImg1.src}
                          alt={clinicaImg1.alt}
                          loading="lazy"
                          className="h-64 w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="rounded-3xl border border-white/30 bg-white/10 p-6 text-white/90">
                        Adicione `imagensClinica[1]`
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div className="order-2 lg:order-2">
                    {clinicaImg2 ? (
                      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
                        <img
                          src={clinicaImg2.src}
                          alt={clinicaImg2.alt}
                          loading="lazy"
                          className="h-64 w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="rounded-3xl border border-white/30 bg-white/10 p-6 text-white/90">
                        Adicione `imagensClinica[2]`
                      </div>
                    )}
                  </div>
                  <div className="order-1 lg:order-1">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm text-white">
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: secondaryColor }} />
                      Atendimento humanizado
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">Explicamos tudo antes</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      Você entende as opções e decide com segurança. Transparência é parte do cuidado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="doutores" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Doutores que cuidam do seu sorriso</h2>
            <p className="text-slate-600">
              Profissionais com experiência e atendimento humanizado.
            </p>
          </div>
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
                    <div className="text-xs text-slate-500">CRO • Especialista</div>
                  </div>
                </div>
                <div className="mt-4 text-sm leading-relaxed text-slate-600">{d.bio}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Serviços para todas as etapas</h2>
            <p className="text-slate-600">
              Da prevenção ao tratamento estético e funcional, com acompanhamento e segurança.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {servicos.slice(0, 9).map((s) => (
              <div key={s.titulo} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-base font-bold text-slate-900">{s.titulo}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{s.descricao}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-7">
            <h3 className="text-xl font-bold text-slate-900">
              Como funciona o atendimento
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Você passa por triagem e avaliação para entender sua necessidade com segurança.
              Nós explicamos opções e etapas com clareza, para você tomar uma decisão com confiança.
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
                Tirar dúvidas no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section id="resultados" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Antes e Depois</h2>
            <p className="text-slate-600">
              Mostre resultados reais (sempre respeitando consentimento). Isso ajuda o paciente a visualizar o caminho.
            </p>
          </div>

          {antesDepois.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {antesDepois.slice(0, 6).map((item, idx) => (
                <div key={`${item.antesSrc}-${idx}`} className="rounded-3xl border bg-white p-5 shadow-sm">
                  {item.titulo ? (
                    <div className="mb-3 text-sm font-semibold text-slate-900">{item.titulo}</div>
                  ) : null}
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
            <p className="text-slate-600">Mostre avaliações reais do local e comentários para reduzir objeções.</p>
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
                  Para ver avaliações reais, envie `googleMapsEmbedUrl` (URL de embed do Google Maps).
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
                <p className="text-slate-600">
                  Escolha o canal que for mais confortável para você.
                </p>
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
                  Atendemos com explicações claras e planejamento seguro.
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
                  Ao clicar, você será direcionado ao seu aplicativo padrão.
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
                  <a className="text-sm text-slate-300 hover:text-white" href="#doutores">
                    Doutores
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#servicos">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#resultados">
                    Antes e Depois
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

