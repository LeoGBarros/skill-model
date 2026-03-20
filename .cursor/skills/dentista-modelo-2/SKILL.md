---
name: dentista-modelo-2
description: "Gera um template landing page premium para clínica dentária (Modelo 2) em React + Tailwind, com seções de ambiente, doutores, serviços, prova social e FAQ, além de CTAs estratégicos para ligar, agendar e contatar via WhatsApp e email. Use quando o usuário pedir 'modelo 2', 'landing dentista 2', ou solicitar 'criar modelo 2' com opções de contato por WhatsApp/telefone/email."
---

# Dentista - Modelo 2 (Premium + Prova Social + FAQ)

## Objetivo
Construir um componente `DentistaModelo2.tsx` (ou arquivo equivalente) com aparência mais “premium”, adicionando prova social e FAQ para reduzir objeções e aumentar conversões.

## Conteudos obrigatorios (não omitir)
1. Sessão inicial (hero) com proposta de valor e CTAs:
   - CTA para `Ligar e marcar consulta`
   - CTA para `WhatsApp`
   - CTA para “Falar com a equipe” (pode scroll/ancoragem para `Contato`)
2. Seção `Ambiente` com 2 cards (ex.: recepção + biossegurança)
3. Seção `Doutores` com 3 doutores (nome + mini bio)
4. Seção `Serviços` (grade com pelo menos 6 serviços)
5. Contexto geral para atrair clientes:
   - “transparência”: explicar triagem, avaliação e plano de etapas
   - “segurança/clareza”: linguagem acolhedora e objetiva
6. Adicionar pelo menos:
   - Prova social (ex.: 1 depoimento curto + assinatura)
   - FAQ (pelo menos 3 perguntas e respostas)
7. Final com `Contato` contendo opções:
   - `Email` via `mailto:` e botão
   - `WhatsApp` via `wa.me/` (link com texto opcional)
   - `Telefone` via `tel:`
8. Pontos estratégicos:
   - CTA repetido para ligar/marcar consulta em pelo menos 2 pontos
   - CTA repetido para WhatsApp em pelo menos 2 pontos

## Branding e cores (ajustável)
Como no Modelo 1:
- Solicitar ao usuário `primaryColor` e `secondaryColor` em HEX (mínimo 2).
- Se houver `logo`, sugerir paleta aproximada (primary/secondary/accent) e aplicar.
- Usar `style={{ backgroundColor: primaryColor }}` / `style={{ color: primaryColor }}` em botões e destaques.

## Variáveis e props esperadas
Gerar um componente com props tipadas. Campos mínimos:
- `clinicaNome: string`
- `telefoneE164: string`
- `whatsAppE164: string`
- `emailClinica: string`
- `primaryColor: string`
- `secondaryColor: string`
- `doutores: Array<{ nome: string; bio: string }>` (3 itens)
- `servicos: Array<{ titulo: string; descricao: string }>` (>= 6 itens)
- `ambienteCards: Array<{ titulo: string; descricao: string }>` (>= 2 itens)
- `depoimento?: { texto: string; autor: string }`
- `faq: Array<{ pergunta: string; resposta: string }>` (>= 3 itens)

## Requisitos de implementação (React + Tailwind)
1. TypeScript (.tsx)
2. Links corretos:
   - `tel:<telefoneE164>`
   - `mailto:<emailClinica>?subject=...`
   - `https://wa.me/<numeroE164SemPlus>?text=...`
3. Layout responsivo com grid e cards
4. FAQ pode ser implementado com `<details>` ou um accordion simples

## Conteudo padrão (se o usuário não fornecer dados)
Usar placeholders consistentes e textos com tom “premium”, mas ainda claros e humanos.

## Output esperado
Quando o usuário solicitar o Modelo 2:
1. Gerar o componente React TSX completo.
2. Incluir comentários curtos apenas na lógica de montagem de links e (se usado) do accordion.
3. Garantir que as seções obrigatórias existam no DOM.

## Checklist final (verificar antes de responder)
- [ ] Existem seções `Ambiente`, `Doutores`, `Serviços`, `FAQ`, `Contato`
- [ ] Existe prova social visível
- [ ] Existe grid de `Serviços` com >= 6 itens
- [ ] Existem pelo menos 3 perguntas no `FAQ`
- [ ] Existem CTAs repetidos para ligar e WhatsApp
- [ ] Botões/acentos respeitam `primaryColor`/`secondaryColor`

