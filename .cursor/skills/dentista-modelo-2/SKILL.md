---
name: dentista-modelo-2
description: "Gera landing page premium CRO-otimizada para clínica dentária nos EUA (Modelo 2) em React + Tailwind, seguindo o exemplo Advanced Dental Health Center (Lovable). Inclui Hero com card (imagem, endereço, valores), oferta irresistível, 3 serviços, prova social robusta, FAQ, horários, formulário de contato, mapa e todas as diretrizes de conversão. Use quando o usuário pedir 'modelo 2', 'landing dentista premium' ou 'CRO dental com FAQ'."
---

# Dentista - Modelo 2 (Premium CRO + Prova Social + FAQ)

## Referência visual
Seguir a estrutura e design do site **Advanced Dental Health Center** (https://dentalhealthcenter.lovable.app): layout limpo, cards arredondados, gradientes suaves em tons de azul (slate + sky), tipografia Plus Jakarta Sans, hierarquia visual clara e foco total em conversão.

## Objetivo
Construir um componente `DentistaModelo2.tsx` com aparência **premium** e foco total em **conversão**. Inclui prova social expandida, FAQ para reduzir objeções, seção de horários, formulário de contato e mapa.

## Princípio central
**Meta:** maximizar ligações, agendamentos e novos pacientes. Design premium + CRO.

---

## Estrutura da página (ordem obrigatória)

### 1. HERO SECTION (above the fold)

**Coluna esquerda (hero-copy):**
- **Eyebrow:** "Dentist in [Cidade], [Estado]"
- **Headline benefit-driven:** "Get Seen Today by a Top-Rated Dentist in [Cidade]"
- **Subheadline:** "Same-day appointments available. Most insurance accepted."
- **CTA primário:** "Call Now – Book Your Appointment Today" (`tel:`)
- **Trust indicators:** "⭐ 4.8 Rating | 1,000+ Happy Patients"
- **Hero highlights** (lista com bullets):
  - "Serving [área 1], [área 2] & [área 3]"
  - "Same-day emergency appointments"
  - "Most insurance plans accepted"

**Coluna direita (hero-card):**
- **Imagem:** foto de paciente em clínica (aspecto profissional)
- **Panel:** "Visit Our Office"
  - Nome da clínica
  - Endereço completo
  - Links: "Open in Google Maps" | "Follow on Facebook"
- **Hero-stats** (2 blocos):
  - "Patient-first" — "Care focused on comfort, clarity, and long-term oral health."
  - "Comprehensive" — "Preventive, restorative, cosmetic, and specialty services in one place."

### 2. OFERTA IRRESSISTÍVEL
- Seção com fundo gradiente (primary-dark → primary)
- Card central com badge: "New Patient Special"
- "Exam + X-Rays + Cleaning"
- "Only **$99**"
- CTA: "Claim This Offer" (`tel:`)
- Visualmente proeminente; card branco sobre gradiente

### 3. SEÇÃO DE URGÊNCIA
- Fundo amarelo suave (#fffbeb)
- "Tooth pain? Don't wait."
- "Same-day emergency appointments available."
- CTA: "Call Now" (`tel:`) — botão em destaque (ex.: coral/vermelho suave)

### 4. SERVIÇOS (apenas 3)
- **Emergency Dentistry** — ícone de alerta; "Toothache, broken tooth, or dental trauma? Get same-day relief."
- **Dental Implants** — ícone de dente; "Permanent tooth replacement that looks and feels natural."
- **Teeth Whitening** — ícone de sorriso; "Professional in-office whitening for a brighter smile."
- Cada um: ícone, título, descrição benefit-focused, CTA "Learn More" (`tel:`)
- Grid 3 colunas em desktop; 1 coluna em mobile

### 5. AUTORIDADE / DOUTORES
- Eyebrow: "Meet Your Dentist"
- Headline: "Trusted dental care in [Cidade], [Estado]"
- **Doctor preview cards** (grid 2 colunas):
  - Foto do doutor
  - Nome + credencial (ex.: "Lana Bubalo, DDS")
  - "15+ years experience"
  - Credenciais: "ADA Member • Cosmetic Dentistry • Implant Certified"
- CTA: "Meet the Doctors" (link para página de equipe ou scroll)
- Mínimo 1–2 doutores; máximo 3

### 6. HORÁRIOS (Our Hours)
- Eyebrow: "Our Hours"
- Headline: "Convenient hours for [cidade]-area patients."
- Texto curto: "Plan your visit with our regular office hours below."
- **Card de horários:** Mon–Sun com horários (ex.: "8:00 AM - 5:00 PM"; "Closed")
- Design: linhas separadas; dia em negrito, horário alinhado à direita

### 7. PROVA SOCIAL (Patient Reviews)
- Eyebrow: "Patient Reviews"
- Headline: "What [cidade] patients are saying"
- **Declaração de volume:** "Over 10,000 patients treated in [áreas]."
- **Testimonials grid** (3 cards):
  - Estrelas (5/5)
  - Data relativa ("2 weeks ago", "1 month ago")
  - Citação curta e crível
  - Autor com avatar (inicial) + nome (ex.: "Michael R.")
- CTA: "Read More Google Reviews" (link para Google Maps/reviews)

### 8. FAQ (reduzir objeções)
- Accordion ou `<details>`
- Mínimo 3 perguntas, ex.:
  - "Do you accept my insurance?"
  - "How soon can I get an appointment?"
  - "What if I have a dental emergency?"
- Respostas curtas e diretas

### 9. CTA FINAL
- "Ready to book your appointment?"
- "Call now or book online. Same-day appointments available for new patients in [Cidade]."
- Botões: "Call Now" (`tel:`) | "Book Online" (link para schedule/form)

### 10. CONTATO
- **Coluna 1:** eyebrow "Contact", headline, texto, botões (Book Online, Call), lista com endereço, telefone, Maps
- **Formulário "Quick Message":**
  - Name (required)
  - Phone (required)
  - Message (textarea)
  - Submit: "Send Message"
- **Mapa:** iframe Google Maps com endereço da clínica
- CTAs repetidos (≥2 pontos)
- **Botão sticky mobile:** "Call Now" — fixo no rodapé em mobile

### 11. FOOTER
- Logo da clínica
- Texto curto: "Trusted, modern dental care for patients and families in [Cidade], [Estado]."
- Links: New Patient Special, Schedule Appointment, Meet the Doctors, Facebook, Instagram, Google Maps

---

## LOCAL SEO
- "Dentist in [Cidade], [Estado]" (ex.: Nashville, TN)
- Áreas próximas (Green Hills, East Nashville, Downtown)
- Integrar em headings e textos
- Meta description com keywords e oferta

---

## DESIGN GUIDELINES (estilo Lovable)
- **Font:** Plus Jakarta Sans
- **Cores:** slate + sky (ex.: primary #0ea5e9, primary-dark #0284c7)
- **Cards:** border-radius 1.25rem, borda sutil, sombra leve
- **Gradientes:** hero com radial-gradient suave; offer com gradiente azul; section-accent com gradiente claro
- **Eyebrows:** uppercase, letter-spacing, cor primary-dark
- **Hierarquia visual clara;** parágrafos curtos
- **Responsivo:** mobile-first; sticky CTA apenas em mobile

---

## Variáveis e props esperadas
- `clinicaNome: string`
- `enderecoCompleto: string` (ex.: "2405 Crestmoor Rd, Nashville, TN 37215")
- `enderecoCidade?: string`
- `telefoneE164: string`
- `whatsAppE164?: string`
- `emailClinica: string`
- `primaryColor: string` / `secondaryColor: string`
- `doutores: Array<{ nome: string; imagem?: string; anosExperiencia: string; credenciais?: string }>` (1–3)
- `servicos: Array<{ titulo: string; descricao: string }>` (3: Emergency, Implants, Whitening)
- `ofertaEspecial?: { titulo: string; itens: string; preco: string }`
- `trustIndicators?: { rating: string; pacientes: string }`
- `depoimentos: Array<{ texto: string; autor: string; estrelas?: number; tempoRelativo?: string }>` (≥2)
- `totalPacientes?: string` (ex.: "Over 10,000 patients treated")
- `faq: Array<{ pergunta: string; resposta: string }>` (≥3)
- `horarios: Array<{ dia: string; horario: string }>` (Mon–Sun)
- `areasServidas?: string[]` (ex.: ["Green Hills", "East Nashville", "Downtown"])
- `googleMapsUrl?: string` / `googleMapsEmbedUrl?: string`
- `facebookUrl?: string` / `instagramUrl?: string`

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

- `<ScrollToHash />` fica fora do `<Routes>`, dentro do `App`, para funcionar em qualquer rota
- Quando não há hash (ex.: navegar para `/doctors` ou clicar no logo), o componente rola automaticamente ao topo

### IDs obrigatórios nas seções da home
Cada `<section>` deve ter `id` correspondente ao hash do menu:

| Seção        | `id`           | Link no menu          |
|--------------|----------------|-----------------------|
| Services     | `services`     | `<Link to="/#services">` |
| Doctors      | `doctors`      | `<Link to="/#doctors">` |
| Reviews      | `testimonials` | `<Link to="/#testimonials">` |
| FAQ          | `faq`          | `<Link to="/#faq">` |
| Contact      | `contact`      | `<Link to="/#contact">` |

### Distinção: seção vs. página de doutores
- **"Doctors" no menu (header):** `<Link to="/#doctors">` → rola até a seção na home
- **"Learn more about the doctors" (botão na seção Doctors):** `<Link to="/doctors">` → navega para página dedicada `/doctors`
- Ao navegar para `/doctors`, o `ScrollToHash` garante que o usuário inicie no topo da página

### Logo / nome da clínica
- `<Link to="/">` — o `ScrollToHash` detecta ausência de hash e rola ao topo automaticamente

### Links externos
- Google Maps: sempre `href={data.googleMapsUrl}` com `target="_blank" rel="noreferrer"`; nunca hardcodar URL de Maps

---

## Requisitos técnicos (React + Tailwind)
1. TypeScript (.tsx)
2. Links: `tel:`, `mailto:`, `wa.me/`
3. FAQ com accordion ou `<details>`
4. Botão sticky "Call Now" no mobile (ocultar em desktop)
5. Formulário de contato: submit para FormSubmit, Formspree ou mailto
6. Mapa: iframe Google Maps (embed URL)
7. Responsivo e acessível (skip-link, aria-labels, headings coerentes)

---

## Checklist final
- [ ] Hero com headline benefit-driven + trust indicators
- [ ] Hero-card com imagem, endereço, stats (Patient-first, Comprehensive)
- [ ] Oferta "New Patient Special" em destaque (gradiente + card)
- [ ] Seção Urgência ("Tooth pain? Don't wait")
- [ ] Apenas 3 serviços (Emergency, Implants, Whitening)
- [ ] Seção Doutores com preview cards
- [ ] Seção Horários
- [ ] Prova Social robusta (depoimentos + ratings + "10,000 patients")
- [ ] FAQ com ≥3 perguntas (accordion/details)
- [ ] CTA final forte
- [ ] Contato com formulário + mapa
- [ ] Botão sticky mobile "Call Now"
- [ ] Footer com links
- [ ] Local SEO (cidade + áreas próximas)
