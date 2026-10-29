import { Card } from '../molecules/Card'
import { Text } from '../atoms/Text'
import { Textarea } from '../atoms/Textarea'
import { Button } from '../atoms/Button'
import { ButtonRow } from '../molecules/ButtonRow'

type InterviewStepProps = {
  question: string
  answer: string
  onAnswerChange: (v: string) => void
  onBack: () => void
  onNext: () => void
  current: number
  total: number
}

export function InterviewStep({ question, answer, onAnswerChange, onBack, onNext, current, total }: InterviewStepProps) {
  return (
    <Card>
      <Text>{question}</Text>
      <Textarea value={answer} onChange={e => onAnswerChange(e.target.value)} />
      <ButtonRow>
        <Button onClick={onBack}>Voltar</Button>
        <Button variant="primary" onClick={onNext}>Próxima</Button>
      </ButtonRow>
      <Text>Pergunta {current + 1} de {total}</Text>
    </Card>
  )
}
