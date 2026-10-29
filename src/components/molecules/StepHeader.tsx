import { Heading } from '../atoms/Heading'
import { Text } from '../atoms/Text'
import { Container } from '../atoms/Container'

type StepHeaderProps = {
  step: number
  total: number
  title: string
}

export function StepHeader({ step, total, title }: StepHeaderProps) {
  return (
    <Container>
      <Text>Passo {step} de {total}</Text>
      <Text>Hemo Conecta</Text>
      <Heading>{title}</Heading>
    </Container>
  )
}
