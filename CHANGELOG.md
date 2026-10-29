# Changelog

## [Unreleased]

### Added
- Documentação de fluxo de triagem com árvore de decisão, filtro biológico e coleta de dados apenas após aprovação
- src/mocks/eligibility.ts com perguntas, validadores e mensagens de interrupção
- Páginas EligibilityPage, ScreeningPage e ResultPage implementadas com funil de descarte rápido
- FlowContext reestruturado para TriagemState e updateTriagem
- App.tsx com roteamento Welcome → Eligibility → Screening → Result

### Changed
- AGENTS.md atualizado com regras de funil de descarte rápido, interrupção imediata e coleta de dados pós-triagem
- Remoção de todas as menções a 60+ e reposicionamento para público geral e humanidade

### Fixed
