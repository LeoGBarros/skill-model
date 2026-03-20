---
name: dentista-modelo-3
description: "Gera landing page CRO-otimizada com agendamento online para clínica dentária nos EUA (Modelo 3) em React + Tailwind. Todas as diretrizes de conversão + formulário curto (Name, Phone, Message) e botão Book Online. Use quando o usuário pedir 'modelo 3', 'agendamento online dentista' ou 'landing com formulário de contato'."
---

# Dentista - Modelo 3 (Landing CRO + Agendamento Online)

## Objetivo
Construir um componente `DentistaModelo3.tsx` com **agendamento integrado ao site** e todas as diretrizes CRO. Formulário curto para maximizar conversão; foco em ligações e bookings.

## Princípio central
**Meta:** maximizar ligações, agendamentos online e novos pacientes. Mobile-first com formulário enxuto.

---

## AGENDAMENTO ONLINE (obrigatório)

### Fluxo sem servidor
- Ao enviar: montar texto com dados do paciente e abrir `mailto:` com subject e body
- Fallback opcional: abrir WhatsApp com mensagem pronta

### Formulário CURTO (otimização mobile + conversão)
- **Name** (required)
- **Phone** (required) – click-to-call disponível
- **Message** (opcional, textarea curta)
- **NÃO** incluir: data preferida, período, motivo/serviço em select longo
- Manter mínimo para reduzir abandono

Se o usuário exigir mais campos, aceitar apenas:
- `dataPreferida` (date, opcional)
- `motivo` (select com 3–5 opções: Emergency, Implants, Whitening, Checkup, Other)

---

## Conteúdos obrigatórios (não omitir)

### 1. HERO SECTION
- Headline: "Get Seen Today by a Top-Rated Dentist in [Cidade]"
- Subheadline: "Same-day appointments available. Most insurance accepted."
- CTAs: "Call Now – Book Your Appointment Today" | "Book Online" (scroll para formulário)
- Trust indicators: "⭐ 4.8 Rating | 1,000+ Happy Patients"

### 2. OFERTA IRRESSISTÍVEL
- "New Patient Special" / "Exam + X-Rays + Cleaning" / "Only $99"
- CTA: "Claim This Offer"
- Visualmente proeminente

### 3. SERVIÇOS (apenas 3)
- Emergency Dentistry, Dental Implants, Teeth Whitening
- Descrição benefit-focused + "Learn More"

### 4. PROVA SOCIAL
- Depoimentos + star ratings
- "Over 10,000 patients treated" (opcional)

### 5. SEÇÃO DE URGÊNCIA
- "Tooth pain? Don't wait." / "Same-day emergency appointments available."
- CTA: "Call Now"

### 6. AUTORIDADE / DOUTORES
- Nome, anos de experiência, credenciais

### 7. FORMULÁRIO DE AGENDAMENTO
- Posicionamento visível (acima da dobra ou ancoragem no Hero)
- Campos: Name, Phone, Message (obrigatório manter curto)
- CTA do form: "Request Appointment" ou "Book My Appointment"

### 8. CTA FINAL
- "Ready to book your appointment?"
- Botões: "Call Now" | "Book Online" (scroll para form)

### 9. CONTATO
- Email, WhatsApp, Telefone
- CTAs repetidos (≥2)
- **Botão sticky mobile:** "Call Now"
- Click-to-call em todos os números

---

## MOBILE CONVERSION
- Botão sticky "Call Now" (sempre visível no mobile)
- Telefones como `tel:` (click-to-call)
- Formulário curto (Name, Phone, Message)
- CTAs grandes e fáceis de tocar

---

## LOCAL SEO
- "Dentist in [Cidade], [Estado]"
- Áreas próximas (Green Hills, East Nashville, Downtown)

---

## DESIGN GUIDELINES
- Limpo, moderno, profissional
- Hierarquia visual clara
- Sem poluição; foco em conversão

---

## Variáveis e props esperadas
- `clinicaNome: string`
- `enderecoCidade?: string`
- `telefoneE164: string`
- `whatsAppE164?: string`
- `emailClinica: string`
- `primaryColor: string` / `secondaryColor: string`
- `doutores: Array<{ nome: string; anosExperiencia: number; credenciais?: string }>`
- `servicos: Array<{ titulo: string; descricao: string }>` (3: Emergency, Implants, Whitening)
- `ofertaEspecial?: { titulo: string; itens: string; preco: string }`
- `trustIndicators?: { rating: string; pacientes: string }`
- `depoimentos?: Array<{ texto: string; autor: string; estrelas?: number }>`
- `motivosAgendamento?: string[]` (opcional, para select: Emergency, Implants, etc.)

---

## Navegação e redirecionamento

### Hash scroll (âncoras do menu)
O React Router **não faz scroll automático para hashes**. Criar um componente `ScrollToHash` e renderizá-lo no nível do `App`:

```tsx
// src/components/ScrollToHash.tsx
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const el = document.getElementById(hash.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [hash, pathname])
  return null
}
```

- Cada `<section>` deve ter `id` correspondente ao hash do menu (ex.: `id="services"`, `id="contact"`)
- Links do menu usam `<Link to="/#services">`, `<Link to="/#contact">` etc.
- O botão "Book Online" no hero e no CTA final usa scroll: `<Link to="/#schedule">` apontando para `id="schedule"` no formulário
- Logo/nome da clínica usa `<Link to="/">` — o `ScrollToHash` garante scroll ao topo automaticamente
- `<ScrollToHash />` fica fora do `<Routes>`, dentro do `App`

### Links externos
- Google Maps: usar `href={data.googleMapsUrl}` com `target="_blank" rel="noreferrer"`
- Telefone: `href={`tel:${data.telefoneE164}`}` (click-to-call)

---

## Requisitos técnicos (React + Tailwind)
1. TypeScript (.tsx)
2. Formulário com submit via `mailto:` (subject + body com dados)
3. Validação: campos required; feedback visual no submit
4. Links: `tel:`, `mailto:`, `wa.me/`
5. Acessibilidade: labels em inputs, `required` corretos
6. Botão sticky "Call Now" no mobile
7. Formulário responsivo e curto

---

## Checklist final
- [ ] Hero benefit-driven + "Book Online" apontando para form
- [ ] Oferta "New Patient Special"
- [ ] Apenas 3 serviços
- [ ] Formulário curto (Name, Phone, Message)
- [ ] Submit abre `mailto:` com dados
- [ ] Seção Urgência
- [ ] Seção Doutores
- [ ] Prova social
- [ ] CTA final com "Call Now" e "Book Online"
- [ ] Botão sticky mobile "Call Now"
- [ ] Click-to-call em todos os números
