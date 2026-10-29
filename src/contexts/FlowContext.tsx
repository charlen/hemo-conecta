import { createContext, ReactNode, useState } from 'react'

export type TriagemState = {
  sexo?: 'Masculino' | 'Feminino'
  idade?: number
  peso?: number
  ultimaDoacaoDias?: number
  janela12Meses?: boolean
  janela15Dias?: boolean
  nome?: string
  cepCidade?: string
  telefone?: string
}

export type FlowContextType = {
  state: TriagemState
  updateTriagem: (patch: Partial<TriagemState>) => void
  nextStep: () => void
  prevStep: () => void
  goToStep: (step: number) => void
  step: number
}

const FlowContext = createContext<FlowContextType | undefined>(undefined)

const initialState: TriagemState = {
  sexo: undefined,
  idade: undefined,
  peso: undefined,
  ultimaDoacaoDias: undefined,
  janela12Meses: undefined,
  janela15Dias: undefined,
  nome: undefined,
  cepCidade: undefined,
  telefone: undefined
}

export function FlowProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TriagemState>(initialState)
  const [step, setStep] = useState(0)

  const updateTriagem = (patch: Partial<TriagemState>) => {
    setState(s => ({ ...s, ...patch }))
  }

  const nextStep = () => setStep(s => s + 1)
  const prevStep = () => setStep(s => Math.max(0, s - 1))
  const goToStep = (step: number) => setStep(step)

  return (
    <FlowContext.Provider value={{ state, updateTriagem, nextStep, prevStep, goToStep, step }}>
      {children}
    </FlowContext.Provider>
  )
}

export { FlowContext }

