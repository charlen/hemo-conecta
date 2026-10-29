import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { RegistrationForm } from '../components/organisms/RegistrationForm'
import { useFlow } from '../hooks/useFlow'
import { useState } from 'react'

export function RegistrationPage() {
  const { state, updateCadastro, nextStep } = useFlow()
  const [nome, setNome] = useState(state.nome)
  const [idade, setIdade] = useState(state.idade)

  const handleContinue = () => {
    updateCadastro(nome, idade)
    nextStep()
  }

  return (
    <HeroPageTemplate
      step={2}
      total={8}
      title="Cadastro"
      subtitle="Vamos começar conhecendo você. Suas informações ficam seguras e são usadas apenas para conectar você a oportunidades ideais."
    >
      <RegistrationForm nome={nome} idade={idade} onNomeChange={setNome} onIdadeChange={setIdade} onContinue={handleContinue} />
    </HeroPageTemplate>
  )
}
