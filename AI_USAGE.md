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
