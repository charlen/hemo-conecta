import { FormField } from '../molecules/FormField'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Label } from '../atoms/Label'

type RegistrationFormProps = {
  nome: string
  idade: string
  onNomeChange: (v: string) => void
  onIdadeChange: (v: string) => void
  onContinue: () => void
}

export function RegistrationForm({ nome, idade, onNomeChange, onIdadeChange, onContinue }: RegistrationFormProps) {
  const isValid = nome.trim().length > 0 && idade.trim().length > 0 && Number(idade) > 0
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <FormField label="Seu nome completo" id="n" value={nome} onChange={onNomeChange} />
        <div>
          <Label htmlFor="i">Sua idade</Label>
          <Input id="i" type="number" min="18" max="120" value={idade} onChange={e => onIdadeChange(e.target.value)} />
        </div>
      </div>
      <div className="pt-4">
        <Button variant="primary" onClick={onContinue} disabled={!isValid} className="w-full text-xl md:text-2xl py-5 shadow-lg shadow-blue-100">
          Continuar
        </Button>
        <p className="mt-4 text-slate-500 text-lg text-center">
          Suas informações são confidenciais e usadas apenas para personalizar sua jornada.
        </p>
      </div>
    </div>
  )
}
