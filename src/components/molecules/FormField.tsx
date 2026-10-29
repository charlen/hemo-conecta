import { Label } from '../atoms/Label'
import { Input } from '../atoms/Input'
import { Textarea } from '../atoms/Textarea'
import { Container } from '../atoms/Container'

type FormFieldProps = {
  label: string
  id: string
  value: string
  onChange: (v: string) => void
  as?: 'input' | 'textarea'
}

export function FormField({ label, id, value, onChange, as = 'input' }: FormFieldProps) {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      {as === 'textarea' ? (
        <Textarea id={id} value={value} onChange={e => onChange(e.target.value)} />
      ) : (
        <Input id={id} value={value} onChange={e => onChange(e.target.value)} />
      )}
    </Container>
  )
}
