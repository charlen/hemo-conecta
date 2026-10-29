import { useState, useEffect } from 'react'
import { useFlow } from '../hooks/useFlow'
import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { Button } from '../components/atoms/Button'
import { ButtonRow } from '../components/molecules/ButtonRow'
import { perguntasTriagem, mensagensInterrupcao } from '../mocks/eligibility'

export function ScreeningPage() {
  const { state, updateTriagem, nextStep, prevStep } = useFlow()
  const [idx, setIdx] = useState(0)
  const [respostas, setRespostas] = useState<Record<string, unknown>>({})
  const [inelegivel, setInelegivel] = useState<string | null>(null)
  const [selected, setSelected] = useState<unknown>(undefined)

  const pergunta = perguntasTriagem[idx]
  const totalPerguntas = perguntasTriagem.length

  useEffect(() => {
    setSelected(respostas[pergunta.id])
  }, [idx, pergunta.id, respostas])

  useEffect(() => {
    if (idx > 0) {
      const prev = perguntasTriagem[idx - 1]
      const valor = respostas[prev.id]
      const ctx = { ...respostas, sexo: respostas.sexo || state.sexo }
      if (prev.validar) {
        const res = prev.validar(valor, ctx)
        if (!res.valido) {
          setInelegivel(res.motivo || mensagensInterrupcao[prev.id as keyof typeof mensagensInterrupcao])
        }
      }
    }
  }, [idx, respostas, state.sexo])

  if (inelegivel) {
    return (
      <HeroPageTemplate step={2} total={3} title="Triagem interrompida" subtitle="Avaliação de elegibilidade">
        <div className="space-y-6">
          <p className="text-xl text-slate-800">Você não está elegível no momento.</p>
          <p className="text-lg text-slate-700">{inelegivel}</p>
          <p className="text-lg text-slate-700">O impedimento é temporário e focado na sua segurança. Quando as condições mudarem, você poderá retornar à triagem.</p>
          <ButtonRow>
            <Button variant="secondary" onClick={prevStep}>Voltar</Button>
          </ButtonRow>
        </div>
      </HeroPageTemplate>
    )
  }

  const handleBack = () => {
    if (idx > 0) {
      setIdx(i => i - 1)
    } else {
      prevStep()
    }
  }

  const handleContinuar = () => {
    if (selected === undefined || selected === '') {
      return
    }
    const novo = { ...respostas, [pergunta.id]: selected }
    setRespostas(novo)
    const ctx = { ...novo, sexo: novo.sexo || state.sexo }
    if (pergunta.validar) {
      const res = pergunta.validar(selected, ctx)
      if (!res.valido) {
        setInelegivel(res.motivo || mensagensInterrupcao[pergunta.id as keyof typeof mensagensInterrupcao])
        return
      }
    }
    const map: Record<string, keyof typeof state> = {
      sexo: 'sexo',
      idade: 'idade',
      peso: 'peso',
      ultimaDoacao: 'ultimaDoacaoDias',
      janela12Meses: 'janela12Meses',
      janela15Dias: 'janela15Dias'
    }
    if (map[pergunta.id]) {
      updateTriagem({ [map[pergunta.id]]: selected as never })
    }
    if (idx + 1 < perguntasTriagem.length) {
      setIdx(i => i + 1)
    } else {
      nextStep()
    }
  }

  return (
    <HeroPageTemplate step={2} total={3} title="Triagem" subtitle="Responda com calma, uma pergunta por vez">
      <div className="space-y-8">
        <p className="text-slate-600 text-xl">Pergunta {idx + 1} de {totalPerguntas}</p>
        <h3 className="text-2xl font-bold">{pergunta.texto}</h3>
        {pergunta.tipo === 'radio' && pergunta.opcoes && (
          <div className="grid grid-cols-2 gap-4">
            {pergunta.opcoes.map(op => (
              <button key={op} type="button" onClick={()=>setSelected(op)} className={`min-h-[72px] rounded-2xl border-2 ${selected===op?'border-primary':'border-slate-300'} hover:border-primary text-xl font-semibold`}>
                {op}
              </button>
            ))}
          </div>
        )}
        {pergunta.tipo === 'number' && (
          <input type="number" value={selected ?? ''} onChange={e=>setSelected(Number(e.target.value))} className="w-full p-4 text-xl border-2 rounded-2xl" />
        )}
        {pergunta.tipo === 'boolean' && (
          <div className="grid grid-cols-2 gap-4">
            <button type="button" onClick={()=>setSelected(true)} className={`min-h-[72px] rounded-2xl border-2 ${selected===true?'border-primary':'border-slate-300'} hover:border-primary text-xl font-semibold`}>Sim</button>
            <button type="button" onClick={()=>setSelected(false)} className={`min-h-[72px] rounded-2xl border-2 ${selected===false?'border-primary':'border-slate-300'} hover:border-primary text-xl font-semibold`}>Não</button>
          </div>
        )}
        <ButtonRow>
          <Button variant="secondary" onClick={handleBack}>Voltar</Button>
          <Button variant="primary" onClick={handleContinuar} disabled={selected === undefined || selected === ''}>Continuar</Button>
        </ButtonRow>
      </div>
    </HeroPageTemplate>
  )
}

