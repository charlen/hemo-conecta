# AI_USAGE.md - hemo-conecta

Este documento registra o histórico de instruções naturais recebidas, interpretações técnicas e entregas realizadas pelo agente de IA durante a evolução do projeto hemo-conecta.

## Fase 1 - Definição de fluxo de triagem e árvore de decisão

**O que foi pedido**
Construir fluxo de admissão com árvore de decisão para elegibilidade de doação de sangue, com filtro biológico inicial, funil de descarte rápido, interrupção imediata em caso de inelegibilidade e coleta de dados pessoais apenas após aprovação total.

**Como foi pedido**
Especificação detalhada de regras de triagem: sexo biológico, idade 16-69, peso >50kg, intervalo de doação por sexo, janela 12 meses e 15 dias, mensagens empáticas de interrupção, coleta final de nome, CEP/Bairro/Cidade e telefone.

**O que foi entregue**
- AGENTS.md atualizado com regras de funil, interrupção imediata e coleta pós-aprovação
- FLOW.md criado documentando árvore de decisão completa
- src/mocks/eligibility.ts com perguntas, validadores e mensagens de interrupção
- EligibilityPage, ScreeningPage e ResultPage implementadas com funil de descarte rápido e interrupção empática
- FlowContext reestruturado para TriagemState com updateTriagem
- App.tsx atualizado para roteamento Welcome → Eligibility → Screening → Result
- Build e lint validados sem erros
- Remoção de todas as menções a 60+ e reposicionamento para público geral e humanidade
- CHANGELOG e AI_USAGE atualizados conforme governança

---

**Resumo geral**

---

## Fase 2 - Correção de tipagem em ScreeningPage

**O que foi pedido**
Corrigir erro TypeScript em src/pages/ScreeningPage.tsx linha 28: Argument of type '{ sexo: {} | undefined; }' is not assignable to parameter of type 'RespostasTriagem'.

**Como foi pedido**
Report de erro de compilação com mensagem de incompatibilidade de tipos entre sexo derivado de respostas Record<string, unknown> e tipo SexoBiologico | undefined esperado pelo validador de triagem.

**O que foi entregue**
- Import de RespostasTriagem e SexoBiologico em ScreeningPage.tsx
- Cast seguro do contexto para RespostasTriagem nas duas construções de ctx (useEffect de validação e handleContinuar)
- Tipagem explícita de respostas.sexo como SexoBiologico | undefined antes do fallback para state.sexo
- Build e lint validados sem erros
- CHANGELOG.md e AI_USAGE.md atualizados conforme governança

---

## Fase 3 - Responsividade de botões em mobile

**O que foi pedido**
Em mobile fazer os botões avançar e voltar ocuparem a largura toda, manter o continuar em cima e o voltar embaixo.

**Como foi pedido**
Solicitação de ajuste de UI para mobile: botões full width em pilha vertical com ordem continuar → voltar.

**O que foi entregue**
- ButtonRow.tsx alterado para `flex flex-col-reverse sm:flex-row sm:justify-between gap-4 ...`
- Em mobile, layout coluna reversa garante continuar no topo e voltar embaixo; itens esticam para largura total por flex stretch
- Desktop mantém linha com justify-between
- Build e lint validados sem erros
- CHANGELOG.md e AI_USAGE.md atualizados conforme governança
