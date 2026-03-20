---
name: dentista-modelo-3
description: "Gera um template landing page moderno para clínica dentária (Modelo 3) em React + Tailwind com agendamento pelo próprio site, além de seções de ambiente, doutores, serviços, contexto para atrair clientes e CTAs estratégicos para ligar, WhatsApp e contato por email. Use quando o usuário pedir 'modelo 3', 'agendamento online dentista', 'landing com formulário', ou solicitar 'criar modelo 3' com options de contato por WhatsApp/telefone/email e agendamento via web."
---

# Dentista - Modelo 3 (Landing + Agendamento Online no Site)

## Objetivo
Construir um componente `DentistaModelo3.tsx` (ou arquivo equivalente) com um formulário de agendamento integrado ao site.

## Agendamento online (obrigatorio)
Como não há backend garantido, a skill deve implementar um fluxo “sem servidor”:
- Ao enviar o formulário, montar um texto com os dados do paciente e:
  - abrir `mailto:` para o email da clinica, com subject e body preenchidos
  - ou abrir WhatsApp com mensagem pronta (fallback opcional)
Preferir `mailto:` como comportamento principal.

O formulário deve incluir:
- `nome` (required)
- `telefone` (required)
- `email` (opcional)
- `motivo/servico` (select com >= 5 opcoes)
- `data preferida` (date, opcional)
- `periodo` (select: Manha/Tarde/Noite)
- `mensagem/observacoes` (textarea, opcional)

## Conteudos obrigatorios (não omitir)
1. Hero com:
   - CTA para `Agendar pelo site` (scroll/ancoragem para o formulário)
   - CTA para `WhatsApp`
   - CTA para `Ligar e marcar consulta`
2. Seção `Ambiente` (2 cards)
3. Seção `Doutores` (3 cards)
4. Seção `Serviços` (grid com >= 6 serviços)
5. Contexto geral para atrair clientes:
   - explicar que triagem/avaliação define melhor caminho e reduz ansiedade
6. Final com `Contato` contendo opções:
   - `Email` via `mailto:` e botão
   - `WhatsApp` via `wa.me/` (link com texto opcional)
   - `Telefone` via `tel:`
7. Pontos estratégicos:
   - CTAs repetidos ao longo da pagina (pelo menos 2 para WhatsApp e 2 para ligar)
   - Preferencialmente uma toolbar/box fixa no fim (pode ser no footer) com os CTAs

## Branding e cores (ajustável)
Mesma lógica dos modelos 1 e 2:
- Solicitar `primaryColor` e `secondaryColor` em HEX.
- Se existir logo, sugerir paleta aproximada.
- Aplicar cores dinamicamente com `style` (principalmente nos botões e destaques).

## Variáveis e props esperadas
Campos mínimos:
- `clinicaNome: string`
- `telefoneE164: string`
- `whatsAppE164: string`
- `emailClinica: string`
- `primaryColor: string`
- `secondaryColor: string`
- `doutores: Array<{ nome: string; bio: string }>` (3 itens)
- `servicos: Array<{ titulo: string; descricao: string }>` (>= 6 itens)
- `ambienteCards: Array<{ titulo: string; descricao: string }>` (>= 2 itens)
- `servicosSelect: string[]` (>= 5 motivos para o select do formulário)

## Requisitos de implementação (React + Tailwind)
1. TypeScript (.tsx)
2. Sem dependências além de React e Tailwind
3. Acessibilidade:
   - labels associadas a inputs (id/`htmlFor`)
   - `required` nos campos obrigatorios
4. Validações simples:
   - impedir submit vazio
   - mostrar feedback visual (ex.: mensagem “Abrindo seu email...”)
5. Links:
   - converter telefoneE164 para o `wa.me` removendo o `+` (ex.: +55... -> 55...)

## Output esperado
Quando o usuário solicitar o Modelo 3:
1. Gerar o componente React TSX completo com o formulário e comportamento `mailto`.
2. Incluir comentários curtos só na parte do submit (montagem do `mailto`).
3. Garantir que as seções obrigatórias existam no DOM.

## Checklist final (verificar antes de responder)
- [ ] Existe seção `Agendamento online` com formulário
- [ ] Ao enviar, abre `mailto:` com dados preenchidos
- [ ] Existe `Contato` com Email/WhatsApp/Telefone
- [ ] Existe grid de `Serviços` com >= 6 itens
- [ ] Existem CTAs repetidos para ligar e WhatsApp
- [ ] Cores aplicadas por `primaryColor`/`secondaryColor`

