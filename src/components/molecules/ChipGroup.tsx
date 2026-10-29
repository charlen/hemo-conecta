import { ChipButton } from './ChipButton'
import { Container } from '../atoms/Container'

type ChipGroupProps = {
  options: string[]
  selected?: string
  onSelect: (v: string) => void
}

export function ChipGroup({ options, selected, onSelect }: ChipGroupProps) {
  return (
    <Container>
      {options.map(opt => (
        <ChipButton
          key={opt}
          label={opt}
          active={selected === opt}
          onClick={() => onSelect(selected === opt ? '' : opt)}
        />
      ))}
    </Container>
  )
}
