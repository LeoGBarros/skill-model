import React, { useMemo, useState } from "react";

export type DentistaModelo3Props = {
  clinicaNome?: string;
  telefoneE164?: string;
  whatsAppE164?: string;
  emailClinica?: string;
  primaryColor?: string; // HEX
  secondaryColor?: string; // HEX
  doutores?: Array<{ nome: string; bio: string }>; // 3 itens
  servicos?: Array<{ titulo: string; descricao: string }>; // >= 6 itens
  ambienteCards?: Array<{ titulo: string; descricao: string }>; // >= 2 itens
  servicosSelect?: string[]; // >= 5 motivos
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

export function DentistaModelo3(props: DentistaModelo3Props) {
  const {
    clinicaNome = "Clinica Sorriso",
    telefoneE164 = "+5511999999999",
    whatsAppE164 = "+5511999999999",
    emailClinica = "contato@clinicasorriso.com.br",
    primaryColor = "#16a34a",
    secondaryColor = "#0284c7",
    doutores = [
      { nome: "Dra. Ana Ribeiro", bio: "Avaliação cuidadosa e orientação clara para reduzir ansiedade." },
      { nome: "Dr. Bruno Martins", bio: "Acompanhamento por etapas com foco em segurança e previsibilidade." },
      { nome: "Dra. Carla Souza", bio: "Tratamentos com explicações objetivas e cuidado humanizado." },
    ],
    servicos = [
      { titulo: "Avaliação e Diagnóstico", descricao: "Triagem que define o melhor caminho com clareza." },
      { titulo: "Limpeza e Profilaxia", descricao: "Remoção de placa e tártaro com orientação personalizada." },
      { titulo: "Clareamento Dental", descricao: "Planos seguros para deixar o sorriso mais claro." },
      { titulo: "Restaurações", descricao: "Tratamentos estéticos e funcionais para dentes danificados." },
      { titulo: "Tratamento de Gengiva", descricao: "Atendimento focado em segurança e saúde periodontal." },
      { titulo: "Odontologia Preventiva", descricao: "Acompanhamento para reduzir riscos e manter qualidade." },
      { titulo: "Reabilitação Oral", descricao: "Planejamento de longo prazo com etapas bem explicadas." },
      { titulo: "Urgências Odontológicas", descricao: "Alívio da dor e orientação dos próximos passos." },
    ],
    ambienteCards = [
      { titulo: "Recepção acolhedora", descricao: "Ambiente para reduzir ansiedade e tornar a consulta confortável." },
      { titulo: "Estrutura preparada", descricao: "Rotina de biossegurança e organização para atender com confiança." },
    ],
    servicosSelect = [
      "Avaliação geral",
      "Clareamento",
      "Restauração",
      "Tratamento de gengiva",
      "Odontologia preventiva",
      "Urgência/dor",
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

  const telLink = buildTelLink(telefoneE164);
  const whatsappText = `Olá! Quero agendar pelo site na ${clinicaNome}.`;
  const whatsappLink = buildWaLink(whatsAppE164, whatsappText);

  const pacienteImg0 = imagensPacientesSorrindo[0];
  const pacienteImg1 = imagensPacientesSorrindo[1];
  const pacienteImg2 = imagensPacientesSorrindo[2];

  const clinicaImg0 = imagensClinica[0];
  const clinicaImg1 = imagensClinica[1];
  const clinicaImg2 = imagensClinica[2];

  const [feedback, setFeedback] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [motivo, setMotivo] = useState<string>(servicosSelect[0] ?? "");
  const [dataPreferida, setDataPreferida] = useState<string>("");
  const [periodo, setPeriodo] = useState<string>("Manhã");
  const [mensagem, setMensagem] = useState<string>("");

  const periodOptions = useMemo<string[]>(() => ["Manhã", "Tarde", "Noite"], []);

  function formatDateBR(dateISO: string) {
    if (!dateISO) return "";
    // input type="date" costuma vir como YYYY-MM-DD
    const [y, m, d] = dateISO.split("-");
    if (!y || !m || !d) return dateISO;
    return `${d}/${m}/${y}`;
  }

  const canSubmit = nome.trim().length > 0 && telefone.trim().length > 0 && motivo.trim().length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      setFeedback("Por favor, preencha nome, telefone e motivo.");
      return;
    }

    setFeedback("Abrindo seu email com os dados do agendamento...");

    const subject = `Agendamento - ${clinicaNome} (${motivo})`;
    const body =
      `Olá! Gostaria de agendar um atendimento na ${clinicaNome}.\n\n` +
      `Nome: ${nome}\n` +
      `Telefone: ${telefone}\n` +
      (email.trim() ? `Email: ${email}\n` : "") +
      `Motivo/Serviço: ${motivo}\n` +
      (dataPreferida ? `Data preferida: ${formatDateBR(dataPreferida)}\n` : "") +
      `Período: ${periodo}\n` +
      (mensagem.trim() ? `Observações: ${mensagem}\n` : "");

    const mailtoLink = buildMailtoLink(emailClinica, subject, body);

    // Comportamento principal: abrir `mailto:` com subject/body preenchidos.
    window.location.href = mailtoLink;
  }

  return (
    <div className="bg-white">
      <main>
        <section className="relative overflow-hidden pt-16 sm:pt-20">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-slate-50" />
          <div className="mx-auto w-11/12 max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5 pt-10">
                <div className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: secondaryColor }} />
                  <span className="text-slate-600">Agendamento online no site</span>
                </div>
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                  Menos ansiedade, mais clareza no seu{" "}
                  <span style={{ color: primaryColor }}>próximo passo</span>
                </h1>
                <p className="text-base leading-relaxed text-slate-700">
                  A triagem e a avaliação definem o melhor caminho para você. Assim, você entende as etapas e
                  reduz incertezas.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#agendamento"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Agendar pelo site
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center rounded-2xl border px-6 py-3 text-base font-semibold"
                    style={{ borderColor: primaryColor, color: primaryColor }}
                  >
                    Ligar e marcar consulta
                  </a>
                </div>

                <div className="text-sm text-slate-500">
                  Ao enviar, abrimos seu email com os dados do agendamento.
                </div>
              </div>

              <div className="rounded-3xl border bg-white p-6 shadow-sm">
                {/* Collage de pacientes sorrindo (header principal) */}
                <div className="relative overflow-hidden rounded-2xl border bg-slate-50 p-3">
                  {pacienteImg0 ? (
                    <div className="relative h-52 w-full">
                      <div className="absolute left-2 top-2 h-44 w-[70%] overflow-hidden rounded-2xl border bg-white">
                        <img
                          src={pacienteImg0.src}
                          alt={pacienteImg0.alt}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {pacienteImg1 ? (
                        <div className="absolute right-1 top-10 h-28 w-[52%] overflow-hidden rounded-2xl border bg-white">
                          <img
                            src={pacienteImg1.src}
                            alt={pacienteImg1.alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ) : null}
                      {pacienteImg2 ? (
                        <div className="absolute right-0 bottom-2 h-20 w-[44%] overflow-hidden rounded-2xl border bg-white">
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

                <div className="mt-5 text-sm font-semibold" style={{ color: secondaryColor }}>
                  O que acontece depois do envio
                </div>
                <div className="mt-3 grid gap-3">
                  {[
                    { title: "1) Você preenche", desc: "Escolha o motivo e o período que prefere." },
                    { title: "2) Enviamos por email", desc: "Montamos subject e body prontos para resposta." },
                    { title: "3) Atendimento guiado", desc: "Triagem e avaliação para definir as etapas." },
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
                    Preferiu ligar?
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: secondaryColor }}
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ambiente" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">Ambiente preparado</h2>
          <p className="mt-2 text-slate-600">Conforto e biossegurança para você se sentir bem do início ao fim.</p>
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
                  <h2 className="text-2xl font-bold text-white">Tour da clínica em fotos</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-200">
                    Um carrossel horizontal com imagens do consultório para criar confiança antes de agendar.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="#agendamento"
                    className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white"
                    style={{ backgroundColor: secondaryColor }}
                  >
                    Agendar pelo site
                  </a>
                </div>
              </div>

              <div className="mt-10 overflow-x-auto pb-4">
                {imagensClinica.length > 0 ? (
                  <div className="flex gap-4">
                    {imagensClinica.slice(0, 8).map((img) => (
                      <figure
                        key={img.src}
                        className="min-w-[280px] sm:min-w-[340px] overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-sm"
                      >
                        <div className="relative h-56">
                          <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
                          <div className="absolute inset-x-0 bottom-0 bg-black/40 px-4 py-2 text-xs font-semibold text-white">
                            {img.alt}
                          </div>
                        </div>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-3xl border border-white/25 bg-white/10 p-6 text-white/90">
                    Adicione `imagensClinica` para aparecer no carrossel.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="doutores" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">Doutores</h2>
          <p className="mt-2 text-slate-600">Equipe com atendimento humanizado e explicações claras.</p>
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
            <h2 className="text-2xl font-bold text-slate-900">Serviços</h2>
            <p className="text-slate-600">
              Triagem e avaliação orientam o melhor caminho, reduzindo ansiedade.
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
            <h3 className="text-xl font-bold text-slate-900">Quer falar com alguém?</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Se preferir, você pode ligar ou chamar no WhatsApp. Também está tudo bem agendar pelo site.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={telLink}
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Ligar agora
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold text-white"
                style={{ backgroundColor: secondaryColor }}
              >
                WhatsApp para dúvidas
              </a>
            </div>
          </div>
        </section>

        <section id="resultados" className="mx-auto w-11/12 max-w-5xl py-14">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-slate-900">Antes e Depois</h2>
            <p className="text-slate-600">
              Adicione fotos de resultados para o paciente entender o impacto do tratamento.
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

        <section id="agendamento" className="mx-auto w-11/12 max-w-5xl py-14">
          <h2 className="text-2xl font-bold text-slate-900">Agendamento online</h2>
          <p className="mt-2 text-slate-600">Preencha os dados e enviamos seu email com o pedido pronto.</p>

          <form onSubmit={handleSubmit} className="mt-8 rounded-3xl border bg-white p-7 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-slate-800">
                  Nome
                </label>
                <input
                  id="nome"
                  value={nome}
                  onChange={(ev) => setNome(ev.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: primaryColor }}
                  required
                  autoComplete="name"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-semibold text-slate-800">
                  Telefone
                </label>
                <input
                  id="telefone"
                  value={telefone}
                  onChange={(ev) => setTelefone(ev.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: primaryColor }}
                  required
                  autoComplete="tel"
                  placeholder="(xx) xxxxx-xxxx"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-800">
                  Email (opcional)
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: secondaryColor }}
                  autoComplete="email"
                  placeholder="voce@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="motivo" className="block text-sm font-semibold text-slate-800">
                  Motivo / Serviço
                </label>
                <select
                  id="motivo"
                  value={motivo}
                  onChange={(ev) => setMotivo(ev.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: primaryColor }}
                  required
                >
                  {servicosSelect.slice(0, 10).map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="dataPreferida" className="block text-sm font-semibold text-slate-800">
                  Data preferida (opcional)
                </label>
                <input
                  id="dataPreferida"
                  type="date"
                  value={dataPreferida}
                  onChange={(ev) => setDataPreferida(ev.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: secondaryColor }}
                />
              </div>

              <div>
                <label htmlFor="periodo" className="block text-sm font-semibold text-slate-800">
                  Período
                </label>
                <select
                  id="periodo"
                  value={periodo}
                  onChange={(ev) => setPeriodo(ev.target.value)}
                  className="mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: secondaryColor }}
                  required
                >
                  {periodOptions.map((opt: string) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <label htmlFor="mensagem" className="block text-sm font-semibold text-slate-800">
                  Mensagem / Observações (opcional)
                </label>
                <textarea
                  id="mensagem"
                  value={mensagem}
                  onChange={(ev) => setMensagem(ev.target.value)}
                  className="mt-2 min-h-[120px] w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none focus:border-transparent focus:ring-2"
                  style={{ borderColor: primaryColor }}
                  placeholder="Conte rapidamente o que você precisa..."
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-600">
                {feedback ? (
                  <span style={{ color: primaryColor }}>{feedback}</span>
                ) : (
                  <span>Ao enviar, abrimos seu email com os dados preenchidos.</span>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="rounded-2xl px-6 py-3 text-base font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: primaryColor }}
                >
                  Enviar e agendar
                </button>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border px-6 py-3 text-base font-semibold hover:bg-slate-50"
                  style={{ borderColor: secondaryColor, color: secondaryColor }}
                >
                  Fallback: WhatsApp
                </a>
              </div>
            </div>
          </form>
        </section>

        <section id="contato" className="mx-auto w-11/12 max-w-5xl pb-24">
          <h2 className="text-2xl font-bold text-slate-900">Contato</h2>
          <p className="mt-2 text-slate-600">Escolha o canal mais confortável.</p>

          <div className="mt-8 rounded-3xl border bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <div className="text-sm font-semibold" style={{ color: primaryColor }}>
                  {clinicaNome}
                </div>
                <div className="text-sm text-slate-600">Email, WhatsApp e Telefone em um só lugar.</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={buildMailtoLink(
                    emailClinica,
                    `Contato - ${clinicaNome}`,
                    `Olá! Gostaria de falar com a equipe.\n\nNome: \nMensagem: `
                  )}
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
          </div>
        </section>

        {/* Toolbar fixa no fim */}
        <div className="fixed inset-x-0 bottom-4 z-50 pointer-events-none">
          <div className="mx-auto w-11/12 max-w-5xl">
            <div
              className="flex items-center justify-between gap-3 rounded-3xl border bg-white/95 px-4 py-3 shadow-sm backdrop-blur pointer-events-auto"
              style={{ borderColor: "rgba(148, 163, 184, 0.4)" }}
            >
              <div className="text-sm text-slate-600">
                <span className="font-semibold" style={{ color: primaryColor }}>
                  Agendamento rápido:
                </span>{" "}
                WhatsApp ou telefone
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={telLink}
                  className="rounded-2xl px-4 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: primaryColor }}
                >
                  Ligar
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-4 py-2 text-sm font-semibold text-white"
                  style={{ backgroundColor: secondaryColor }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

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
                  <a className="text-sm text-slate-300 hover:text-white" href="#servicos">
                    Serviços
                  </a>
                </li>
                <li>
                  <a className="text-sm text-slate-300 hover:text-white" href="#agendamento">
                    Agendamento online
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
      </main>
    </div>
  );
}

