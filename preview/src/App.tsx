import React, { useMemo, useState } from "react";
import { DentistaModelo1 } from "../../DentistaModelo1";
import { DentistaModelo2 } from "../../DentistaModelo2";
import { DentistaModelo3 } from "../../DentistaModelo3";

type ModelId = 1 | 2 | 3;

function svgPlaceholder(label: string, bg: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${bg}" stop-opacity="0.95" />
      <stop offset="1" stop-color="#0f172a" stop-opacity="0.15" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="url(#g)" />
  <circle cx="160" cy="150" r="70" fill="#ffffff" opacity="0.18" />
  <circle cx="650" cy="320" r="110" fill="#ffffff" opacity="0.12" />
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="700">
    ${label}
  </text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export default function App() {
  const [model, setModel] = useState<ModelId>(1);

  const common = useMemo(
    () => ({
      clinicaNome: "Clinica Sorriso",
      enderecoCidade: "São Paulo - SP",
      telefoneE164: "+5511999999999",
      whatsAppE164: "+5511999999999",
      emailClinica: "contato@clinicasorriso.com.br",
      primaryColor: "#16a34a",
      secondaryColor: "#0284c7",
      imagensClinica: [
        { src: svgPlaceholder("Clínica", "#0284c7"), alt: "Foto placeholder da clínica" },
        { src: svgPlaceholder("Recepção", "#16a34a"), alt: "Foto placeholder da recepção" },
        { src: svgPlaceholder("Consultório", "#0284c7"), alt: "Foto placeholder do consultório" },
        { src: svgPlaceholder("Estrutura", "#16a34a"), alt: "Foto placeholder da estrutura" },
      ],
      imagensPacientesSorrindo: [
        { src: svgPlaceholder("Sorriso 1", "#16a34a"), alt: "Paciente sorrindo - placeholder" },
        { src: svgPlaceholder("Sorriso 2", "#0284c7"), alt: "Paciente sorrindo - placeholder" },
        { src: svgPlaceholder("Sorriso 3", "#16a34a"), alt: "Paciente sorrindo - placeholder" },
        { src: svgPlaceholder("Sorriso 4", "#0284c7"), alt: "Paciente sorrindo - placeholder" },
      ],
      antesDepois: [
        {
          titulo: "Caso ilustrativo",
          antesSrc: svgPlaceholder("Antes", "#0ea5e9"),
          depoisSrc: svgPlaceholder("Depois", "#22c55e"),
          altAntes: "Foto antes - placeholder",
          altDepois: "Foto depois - placeholder",
        },
        {
          titulo: "Caso ilustrativo 2",
          antesSrc: svgPlaceholder("Antes", "#0ea5e9"),
          depoisSrc: svgPlaceholder("Depois", "#22c55e"),
          altAntes: "Foto antes - placeholder",
          altDepois: "Foto depois - placeholder",
        },
      ],
      googleMapsUrl: "https://www.google.com/maps",
      logoClinicaSrc: svgPlaceholder("Logo", "#111827"),
      footerSlogan: "Cuidado humanizado, resultados com segurança e acolhimento todos os dias.",
      instagramUrl: "https://instagram.com/",
      facebookUrl: "https://facebook.com/",
      doutores: [
        { nome: "Dra. Ana Ribeiro", bio: "Clareamento, estética e diagnóstico com foco em conforto." },
        { nome: "Dr. Bruno Martins", bio: "Periodontia e saúde gengival com abordagem tranquila." },
        { nome: "Dra. Carla Souza", bio: "Reabilitação oral com planejamento seguro e previsível." },
      ],
      ambienteCards: [
        { titulo: "Atendimento acolhedor", descricao: "Recepção calma, explicações claras e sem pressa." },
        { titulo: "Biossegurança e cuidado", descricao: "Consultório preparado com rotina de cuidado." },
      ],
      servicos: [
        { titulo: "Avaliação e Diagnóstico", descricao: "Triagem que define o melhor caminho com clareza." },
        { titulo: "Limpeza e Profilaxia", descricao: "Remoção de placa e tártaro com orientação personalizada." },
        { titulo: "Clareamento Dental", descricao: "Planos seguros para um sorriso mais claro." },
        { titulo: "Restaurações", descricao: "Tratamentos estéticos e funcionais para dentes danificados." },
        { titulo: "Tratamento de Gengiva", descricao: "Foco em segurança e saúde periodontal." },
        { titulo: "Odontologia Preventiva", descricao: "Acompanhamento para reduzir riscos e manter qualidade." },
        { titulo: "Urgências Odontológicas", descricao: "Alívio da dor e orientação dos próximos passos." },
        { titulo: "Reabilitação Oral", descricao: "Planejamento de longo prazo com etapas bem explicadas." },
      ],
    }),
    [],
  );

  const props1 = common;
  const props2 = {
    ...common,
    depoimento: {
      texto: "Atendimento excelente. Me explicaram tudo com calma e eu me senti segura.",
      autor: "Mariana S.",
    },
    faq: [
      {
        pergunta: "Como funciona a triagem antes do atendimento?",
        resposta: "Você conversa com a equipe e passa por avaliação para definir o plano ideal.",
      },
      {
        pergunta: "Vocês explicam custos e etapas?",
        resposta: "Sim. Transparência faz parte do atendimento: explicamos etapas e possibilidades antes de começar.",
      },
      {
        pergunta: "O tratamento tem acompanhamento?",
        resposta: "Sim, a ideia é orientar continuamente para reduzir riscos e manter o resultado ao longo do tempo.",
      },
    ],
  };

  const props3 = {
    ...common,
    servicosSelect: ["Avaliação geral", "Clareamento", "Restauração", "Gengiva", "Prevenção", "Dor/urgência"],
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-11/12 max-w-5xl items-center justify-between py-3">
          <div className="text-sm font-semibold text-slate-700">Preview Dentista (React + Tailwind)</div>
          <div className="flex items-center gap-2">
            {([1, 2, 3] as ModelId[]).map((id) => {
              const active = id === model;
              const bg = active ? common.primaryColor : "transparent";
              const color = active ? "#ffffff" : common.secondaryColor;
              return (
                <button
                  key={id}
                  onClick={() => setModel(id)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold transition"
                  style={{
                    backgroundColor: bg,
                    color,
                    border: active ? "1px solid transparent" : `1px solid ${common.secondaryColor}`,
                  }}
                >
                  Modelo {id}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <main className="mx-auto w-11/12 max-w-5xl py-6">
        <div className="rounded-3xl border bg-white shadow-sm">
          {model === 1 ? (
            <DentistaModelo1 {...props1} />
          ) : model === 2 ? (
            <DentistaModelo2 {...props2} />
          ) : (
            <DentistaModelo3 {...props3} />
          )}
        </div>
      </main>

      {/* Switcher adicional (fixo) para facilitar trocar o modelo */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="rounded-2xl border bg-white/95 px-3 py-2 shadow-sm backdrop-blur">
          <div className="mb-2 text-center text-xs font-semibold text-slate-600">Trocar modelo</div>
          <div className="flex gap-2">
            {([1, 2, 3] as ModelId[]).map((id) => {
              const active = id === model;
              const bg = active ? common.primaryColor : "transparent";
              const color = active ? "#ffffff" : common.secondaryColor;
              return (
                <button
                  key={`switch-${id}`}
                  onClick={() => setModel(id)}
                  className="rounded-xl px-3 py-2 text-xs font-semibold transition hover:opacity-95"
                  style={{
                    backgroundColor: bg,
                    color,
                    border: active ? "1px solid transparent" : `1px solid ${common.secondaryColor}`,
                  }}
                  aria-pressed={active}
                >
                  {id}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

