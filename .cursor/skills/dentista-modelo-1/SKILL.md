---
name: dentista-modelo-1
description: "Gera um template landing page moderno para clínica dentária (Modelo 1) em React + Tailwind, com seções de ambiente, doutores, serviços, contexto para atrair clientes e CTAs estratégicos para ligar, agendar e contatar via WhatsApp e email. Use quando o usuário pedir 'modelo 1', 'landing dentista 1', ou solicitar 'criar modelo 1' com opções de contato por WhatsApp/telefone/email."
---

# Dentista - Modelo 1 (Landing One-Page)

## Objetivo
Construir um componente `DentistaModelo1.tsx` (ou arquivo equivalente) com UI moderna e responsiva para atração e conversão.

## Conteudos obrigatorios (não omitir)
1. Sessão inicial (hero) com proposta de valor e pelo menos 2 CTAs:
   - CTA para `WhatsApp`
   - CTA para `Ligar e marcar consulta`
2. Seção `Ambiente` (com cards/benefícios do consultório)
3. Seção `Doutores` (3 doutores com nome e mini bio)
4. Seção `Serviços` (grade com pelo menos 6 serviços)
5. Contexto geral para atrair clientes:
   - explicação de como funciona (triagem/diagnóstico/explicação)
   - linguagem acolhedora e foco em segurança/clareza
6. Final com `Contato` contendo opções:
   - `Email` (link `mailto:` e também botão)
   - `WhatsApp` (link `wa.me/` com mensagem opcional)
   - `Telefone` (link `tel:`)
7. Pontos estratégicos ao longo da página:
   - CTA repetido para ligar/marcar consulta
   - CTA repetido para WhatsApp
   - (Opcional, mas recomendado) botão/toolbar fixa no rodapé superior com os CTAs

## Branding e cores (ajustável)
O template deve ser parametrizável por paleta de cores.

### Entrada para cores
Solicitar ao usuário pelo menos 2 cores em HEX:
- `primaryColor` (ex.: #16a34a)
- `secondaryColor` (ex.: #0284c7)

Se o usuário enviar a `logo` (ou indicar que existe uma logo no projeto):
- Extrair uma paleta aproximada (3 cores: primary/secondary/accent)
- Se não for possível extrair com precisão, perguntar por HEX ao usuário

### Como aplicar
- Usar Tailwind para layout e tipografia
- Usar `style={{ backgroundColor: primaryColor }}` / `style={{ color: primaryColor }}` para aplicar as cores dinamicamente em botões, destaques e gradientes

## Variáveis e props esperadas
Gerar um componente com props tipadas. Campos mínimos:
- `clinicaNome: string`
- `enderecoCidade?: string`
- `telefoneE164: string` (ex.: +5511999999999)
- `whatsAppE164: string` (ex.: +5511999999999)
- `emailClinica: string`
- `primaryColor: string`
- `secondaryColor: string`
- `doutores: Array<{ nome: string; bio: string }>` (3 itens)
- `servicos: Array<{ titulo: string; descricao: string }>` (>= 6 itens)
- `ambienteCards: Array<{ titulo: string; descricao: string }>` (>= 2 itens)

## Requisitos de implementação (React + Tailwind)
1. Linguagem: TypeScript (.tsx)
2. Deve funcionar como SPA: links `tel:`, `mailto:`, `https://wa.me/<numero>?text=...`
3. Sem dependências externas além do React e Tailwind (assumir que o usuário já tem Tailwind configurado)
4. Acessibilidade:
   - usar `main`, `section`, `nav`
   - manter headings (`h1/h2/h3`) coerentes
5. Responsividade:
   - grids que colapsam em telas menores

## Estrutura sugerida do arquivo gerado
- `DentistaModelo1.tsx`
  - `export type DentistaModelo1Props = ...`
  - `export function DentistaModelo1(props: DentistaModelo1Props) { ... }`

## Conteudo padrão (se o usuário não fornecer dados)
Se campos não forem informados, use placeholders consistentes:
- clinicaNome: "Clinica Sorriso"
- primaryColor: "#16a34a"
- secondaryColor: "#0284c7"
- e CTAs com telefone/WhatsApp/email fictícios (mas claramente marcados para troca)

## Output esperado
Quando o usuário solicitar o Modelo 1:
1. Gerar o componente React TSX completo.
2. Incluir comentários curtos apenas onde houver lógica não-trivial (ex.: montagem de links `wa.me` e `mailto`).
3. Garantir que as seções obrigatórias existam no DOM.

## Checklist final (verificar antes de responder)
- [ ] Existe seção `Ambiente`
- [ ] Existem 3 cards em `Doutores`
- [ ] Existe grid de `Serviços` com >= 6 itens
- [ ] Existe bloco final de `Contato` com Email/WhatsApp/Telefone
- [ ] Existem CTAs repetidos para ligar e WhatsApp
- [ ] Cores aplicadas via props e `style` nos elementos-chave

