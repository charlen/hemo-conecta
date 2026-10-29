# AGENTS.md - hemo-conecta

Este repositório segue os princípios do Titan Ecosystem e é a landing page de admissão de usuários possíveis doadores de sangue.

Ver `PRINCIPLES.md` para modo de trabalho, qualidade e governança.

## Convenções
- TypeScript strict
- Atomic Design: atoms/molecules/organisms/templates/pages
- Mensagens UI em português, código em inglês
- TailwindCSS 4 com `@import "tailwindcss"` e configuração em `tailwind.config.js`
- Cor primária registrada no tema: `primary: '#2563eb'`
- Acessibilidade universal: tamanhos mínimos text-xl, botões min-h-[56px], contraste alto, espaçamento generoso
- Tokens legados em `src/styles/tokens.css` mantidos para referência

## Estrutura atual
```
src/
  components/
    atoms/        Button, Input, Textarea, Label, Container, Heading, Pill, Text
    molecules/    ButtonRow, Card, ChipButton, ChipGroup, FormField, StepHeader
    organisms/    EligibilityForm, ScreeningStep, WelcomeSection
    templates/    PageTemplate, StepTemplate, HeroStepTemplate, HeroPageTemplate
  contexts/      FlowContext
  hooks/         useFlow
  mocks/         eligibility.ts
  pages/         WelcomePage, EligibilityPage, ScreeningPage, ResultPage
  services/      mockApi.ts
  styles/        tokens.css
  index.css      Tailwind entry
  App.tsx
  main.tsx
```

## Scripts
- `npm run dev`   → Vite dev server
- `npm run build` → produção
- `npm run lint`  → ESLint

## Fluxo de trabalho
- Fluxo guiado por `FlowContext` e `useFlow` para admissão de doadores
- Jornada: `WelcomePage` → `ScreeningPage` → `ResultPage`
- `WelcomePage` landing de captação com layout duas colunas
- Triagem em funil de descarte rápido, uma pergunta por vez, com interrupção imediata em caso de inelegibilidade
- **Filtro inicial biológico**: sexo biológico define intervalo regulatório de doação
- **Ordem de triagem**:
  1. Idade entre 16 e 69 anos
  2. Peso > 50 kg
  3. Intervalo da última doação condicional por sexo: Feminino < 90 dias inelegível, Masculino < 60 dias inelegível
  4. Janela de 12 meses: tatuagem, piercing, cirurgia grande ou transfusão recente
  5. Janela de 15 dias: sintomas de gripe, febre ou Covid-19
- **Regra de interrupção**: resposta inelegível em qualquer etapa interrompe fluxo imediatamente com explicação empática e pedagógica, sem prosseguir
- **Coleta de dados apenas após aprovação total**: Nome completo, CEP/Bairro/Cidade, Telefone com DDD
- Páginas seguem `StepTemplate` ou `HeroStepTemplate` com layout fluido duas colunas
- Formulários de admissão com validação acessível para todos os doadores

## Governança de artefatos
- Após cada pedido/entrega, atualizar `AGENTS.md`, `CHANGELOG.md` e `AI_USAGE.md`
- `AGENTS.md` deve refletir convenções, estrutura atual e padrões de nomenclatura
- `CHANGELOG.md` deve registrar alterações em [Unreleased] e versões concluídas
- `AI_USAGE.md` deve registrar: o que foi pedido, como foi pedido e o que foi entregue
- Código em inglês, textos de UI em português
- Validação obrigatória: `npm run build` e `npm run lint` sem erros

