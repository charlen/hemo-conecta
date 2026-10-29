# Changelog

## [Unreleased]

### Added
- Documentação de fluxo de triagem com árvore de decisão, filtro biológico e coleta de dados apenas após aprovação
- src/mocks/eligibility.ts com perguntas, validadores e mensagens de interrupção
- Páginas ScreeningPage e ResultPage implementadas com funil de descarte rápido
- FlowContext reestruturado para TriagemState e updateTriagem
- App.tsx com roteamento Welcome → Screening → Result

### Changed
- AGENTS.md atualizado com regras de funil de descarte rápido, interrupção imediata e coleta de dados pós-triagem
- Remoção de todas as menções a 60+ e reposicionamento para público geral e humanidade
- ButtonRow responsivo: layout em coluna reversa no mobile com botões em largura total, continuar acima e voltar abaixo; desktop mantém linha com justify-between

### Fixed
- Correção de erro de tipagem em ScreeningPage.tsx: cast de contexto para RespostasTriagem e tipagem de sexo para SexoBiologico, resolvendo incompatibilidade de tipos no validador de triagem
