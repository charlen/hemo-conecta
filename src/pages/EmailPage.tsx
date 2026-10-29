import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { useFlow } from '../hooks/useFlow'
import { Button } from '../components/atoms/Button'
import { Input } from '../components/atoms/Input'

export function EmailPage() {
  const { state, updateEmail, nextStep } = useFlow()
  const email = state.email || ''
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  return (
    <HeroPageTemplate
      step={1}
      total={8}
      title="Seja bem vindo"
      subtitle="Informe seu melhor e-mail para continuarmos. Futuramente você poderá fazer login com senha."
    >
      <div className="space-y-8">
        <div className="max-w-xl">
          <label className="block text-lg font-semibold text-slate-900 mb-3">Informe o seu melhor email, ele é muito importante para receber alertas de vagas</label>
          <Input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
            className="text-xl"
          />
          <p className="text-slate-600 mt-3 text-lg">
            Mock: neste momento aceitamos qualquer e-mail. Em breve verificaremos cadastro e pediremos senha.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" onClick={nextStep} className="w-full sm:flex-1 text-xl py-5" disabled={!isValid}>
            Continuar
          </Button>
        </div>
      </div>
    </HeroPageTemplate>
  )
}
