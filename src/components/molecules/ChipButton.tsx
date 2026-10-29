import { Button } from '../atoms/Button'
import { Container } from '../atoms/Container'

type ChipButtonProps = {
  active?: boolean
  label: string
  onClick: () => void
}

export function ChipButton({ active, label, onClick }: ChipButtonProps) {
  return (
    <Container>
      <Button onClick={onClick} variant={active ? 'primary' : 'secondary'}>
        {label}
      </Button>
    </Container>
  )
}
