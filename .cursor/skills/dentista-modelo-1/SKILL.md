---
name: dentista-modelo-1
description: "Gera landing page CRO-otimizada para clínica dentária nos EUA (Modelo 1) em React + Tailwind. Foco em conversão: headlines benefit-driven, oferta irresistível, prova social, apenas 3 serviços de alto impacto, urgência e CTAs estratégicos. Use quando o usuário pedir 'modelo 1', 'landing dentista 1' ou 'CRO dental landing'."
---

# Dentista - Modelo 1 (Landing CRO - Conversão)

## Objetivo
Construir um componente `DentistaModelo1.tsx` otimizado para **conversão** (ligações e agendamentos), não apenas estética. Especialista em CRO para clínicas dentárias nos EUA.

## Princípio central
**Meta:** maximizar ligações, agendamentos e novos pacientes. Cada seção deve servir a esse objetivo.

---

## Conteúdos obrigatórios (não omitir)

### 1. HERO SECTION (above the fold)
- **Headline benefit-driven** (evitar genéricos como "Your smile is our passion"):
  - Exemplo: "Get Seen Today by a Top-Rated Dentist in [Cidade]"
- **Subheadline de apoio:**
  - Exemplo: "Same-day appointments available. Most insurance accepted."
- **CTA primário forte:**
  - Botão: "Call Now – Book Your Appointment Today"
  - Link: `tel:<telefoneE164>`
- **Trust indicators** logo abaixo do CTA:
  - Exemplo: "⭐ 4.8 Rating | 1,000+ Happy Patients"
- CTAs secundários: WhatsApp, Book Online (scroll para formulário ou link)

### 2. OFERTA IRRESSISTÍVEL (seção em destaque, próximo ao topo)
- Bloco visualmente proeminente:
  - Título: "New Patient Special"
  - Conteúdo: "Exam + X-Rays + Cleaning" / "Only $99"
  - CTA: "Claim This Offer"
- Deve chamar atenção; usar contraste e hierarquia visual.

### 3. SERVIÇOS (simplificar – NÃO listar muitos)
- **Apenas 3 serviços de alto impacto:**
  1. Emergency Dentistry
  2. Dental Implants
  3. Teeth Whitening
- Cada serviço:
  - Descrição curta e benefit-focused
  - CTA: "Learn More" (scroll ou modal)
- Evitar lista longa de serviços; foco em conversão.

### 4. SEÇÃO DE URGÊNCIA
- Headline: "Tooth pain? Don't wait."
- Subheadline: "Same-day emergency appointments available."
- CTA: "Call Now" (link `tel:`)

### 5. AUTORIDADE / DOUTORES
- Perfis curtos e profissionais:
  - Nome do doutor
  - Anos de experiência
  - Credenciais (ex.: ADA member)
- Manter conciso para construir confiança.

### 6. PROVA SOCIAL
- Depoimentos estilo testimonial (curtos e críveis)
- Star ratings (ex.: ⭐⭐⭐⭐⭐)
- Opcional: "Over 10,000 patients treated"
- Opcional: antes/depois (se aplicável)

### 7. CTA FINAL FORTE
- Headline: "Ready to book your appointment?"
- Botões:
  - "Call Now" (`tel:`)
  - "Book Online" (link ou scroll)

### 8. CONTATO E CTAs REPETIDOS
- Contato com: Email, WhatsApp, Telefone
- CTAs repetidos em pelo menos 2 pontos da página
- **Botão fixo mobile:** "Call Now" (sticky no mobile)
- Telefones devem ser **click-to-call** (`tel:`)

---

## LOCAL SEO
- Incluir naturalmente:
  - "Dentist in [Cidade], [Estado]" (ex.: Nashville, TN)
  - Áreas próximas (ex.: Green Hills, East Nashville, Downtown)
- Integrar em headings e textos.

---

## DESIGN GUIDELINES
- Limpo, moderno e profissional
- Hierarquia visual clara
- Evitar poluição e parágrafos longos
- Foco em conversão, não decoração

---

## Variáveis e props esperadas
- `clinicaNome: string`
- `enderecoCidade?: string` (ex.: "Nashville, TN")
- `telefoneE164: string` (ex.: +16155551234)
- `whatsAppE164?: string` (opcional para EUA)
- `emailClinica: string`
- `primaryColor: string` / `secondaryColor: string`
- `doutores: Array<{ nome: string; anosExperiencia: number; credenciais?: string }>` (1–3 itens)
- `servicos: Array<{ titulo: string; descricao: string }>` (3 itens fixos: Emergency, Implants, Whitening)
- `ofertaEspecial?: { titulo: string; itens: string; preco: string }` (default: Exam + X-Rays + Cleaning, $99)
- `trustIndicators?: { rating: string; pacientes: string }`
- `depoimentos?: Array<{ texto: string; autor: string; estrelas?: number }>`

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

- Cada `<section>` deve ter `id` correspondente ao hash do menu (ex.: `id="services"`, `id="testimonials"`)
- Links do menu usam `<Link to="/#services">` etc.
- Logo/nome da clínica usa `<Link to="/">` — o `ScrollToHash` garante scroll ao topo automaticamente
- `<ScrollToHash />` fica fora do `<Routes>`, dentro do `App`, para funcionar em qualquer rota

### Links externos
- Google Maps: usar sempre `href={data.googleMapsUrl}` com `target="_blank" rel="noreferrer"`
- Telefone: `href={`tel:${data.telefoneE164}`}` (click-to-call)

---

## Requisitos técnicos (React + Tailwind)
1. TypeScript (.tsx)
2. Links: `tel:`, `mailto:`, `https://wa.me/`
3. Acessibilidade: `main`, `section`, headings coerentes
4. Responsivo; botão sticky "Call Now" visível no mobile
5. Formulários curtos (se houver): Name, Phone, Message

---

## Checklist final
- [ ] Hero com headline benefit-driven + trust indicators
- [ ] Seção "New Patient Special" em destaque
- [ ] Apenas 3 serviços (Emergency, Implants, Whitening)
- [ ] Seção de urgência ("Tooth pain? Don't wait")
- [ ] Seção Doutores/Autoridade
- [ ] Prova social (depoimentos + ratings)
- [ ] CTA final ("Ready to book?")
- [ ] Botão sticky "Call Now" no mobile
- [ ] Local SEO (cidade + áreas próximas)
