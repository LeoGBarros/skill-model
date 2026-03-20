# skill-model

Templates de landing page para clínicas dentárias em React + Tailwind CSS.

## Conteúdo

- **DentistaModelo1** – Landing one-page com seções de ambiente, doutores, serviços, antes/depois e Google Maps
- **DentistaModelo2** – Versão premium com prova social, FAQ e layout em mosaico
- **DentistaModelo3** – Landing com formulário de agendamento online e carrossel de imagens

## Estrutura

```
modelos_skills/
├── DentistaModelo1.tsx   # Componente Modelo 1
├── DentistaModelo2.tsx   # Componente Modelo 2
├── DentistaModelo3.tsx   # Componente Modelo 3
├── preview/              # App de preview local (Vite + React)
└── .cursor/skills/       # Skills do Cursor (SKILL.md por modelo)
```

## Preview local

```bash
cd preview
npm install
npm run dev
```

Acesse http://localhost:5173 e use o seletor no canto inferior direito para alternar entre os modelos.

## Props principais

Todos os modelos aceitam:

- `clinicaNome`, `telefoneE164`, `whatsAppE164`, `emailClinica`
- `primaryColor`, `secondaryColor` (HEX)
- `doutores`, `servicos`, `ambienteCards`
- `imagensClinica`, `imagensPacientesSorrindo`, `antesDepois`
- `googleMapsEmbedUrl`, `googleMapsUrl`
- `logoClinicaSrc`, `footerSlogan`, `instagramUrl`, `facebookUrl`

Consulte os tipos em cada componente para a lista completa.
