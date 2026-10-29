import { useState } from 'react'
import { useFlow } from '../hooks/useFlow'
import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { Button } from '../components/atoms/Button'
import { ButtonRow } from '../components/molecules/ButtonRow'

export function EligibilityPage() {
  const { updateTriagem, nextStep, prevStep } = useFlow()
  const [sexo, setSexo] = useState<'Masculino' | 'Feminino' | ''>('')

  const handleSelect = (s: 'Masculino' | 'Feminino') => {
    setSexo(s)
    updateTriagem({ sexo: s })
  }

  const handleContinuar = () => {
    if (sexo) nextStep()
  }

  return (
    <HeroPageTemplate step={1} total={4} title="Triagem de elegibilidade" subtitle="Comece informando seu sexo biológico">
      <div className="space-y-8">
        <p className="text-xl text-slate-700">
          O sexo biológico define os intervalos regulamentares de tempo entre as doações definidos pelo Ministério da Saúde.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {(['Masculino','Feminino'] as const).map(s => (
            <button key={s} type="button" onClick={()=>handleSelect(s)} className={`min-h-[72px] rounded-2xl border-2 ${sexo===s?'border-primary':'border-slate-300'} hover:border-primary text-xl font-semibold`}>
              {s}
            </button>
          ))}
        </div>
        <ButtonRow>
          <Button variant="secondary" onClick={prevStep}>Voltar</Button>
          <Button variant="primary" onClick={handleContinuar} disabled={!sexo}>Continuar</Button>
        </ButtonRow>
      </div>
    </HeroPageTemplate>
  )
}
