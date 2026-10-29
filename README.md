# hemo-conecta v0.0.1

Landing page de admissão de usuários possíveis doadores de sangue. Frontend seguindo Atomic Design e princípios do Titan Ecosystem.

Fluxo principal: WelcomePage → EligibilityPage → ScreeningPage → ResultPage
Questionário de elegibilidade com perguntas sobre idade, peso, última doação, condições de saúde, viagens, tatuagens e uso de medicamentos, com acessibilidade universal.

## Contribuindo
Mais pessoas vão começar a contribuir. Por favor, siga o `AGENTS.md` e mantenha o código alinhado com o padrão do projeto.

## Estrutura
- `src/components/atoms/`
- `src/components/molecules/`
- `src/components/organisms/`
- `src/components/templates/`
- `src/pages/`

## Tecnologias
TypeScript strict, TailwindCSS 4, tokens via `@theme`

## Rede
`hemo-conecta-network`

## Como subir
```bash
docker compose up -d
```
