import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { useFlow } from '../hooks/useFlow'
import { interviewQuestions } from '../mocks/data'
import { useState } from 'react'
import { Button } from '../components/atoms/Button'
import { Textarea } from '../components/atoms/Textarea'

export function InterviewPage() {
  const { state, updateEntrevista, nextStep, prevStep } = useFlow()
  const [index, setIndex] = useState(0)
  const question = interviewQuestions[index] ?? ''
  const answer = state.entrevista[index] ?? ''
  const total = interviewQuestions.length

  const isAnswerValid = answer.trim().length > 0
  const handleNext = () => {
    if (index < total - 1) {
      setIndex(i => i + 1)
    } else {
      nextStep()
    }
  }

  return (
    <HeroPageTemplate
      step={3}
      total={8}
      title="Conversa guiada"
      subtitle="Responda com calma. Suas respostas ajudam a encontrar as vagas mais alinhadas com sua experiência."
    >
      <div className="bg-white rounded-[2rem] border border-slate-200 p-8 md:p-10 shadow-sm">
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-lg font-semibold">
            Pergunta {index + 1} de {total}
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed mb-8">
          {question}
        </h3>
        <Textarea
          value={answer}
          onChange={e => updateEntrevista(index, e.target.value)}
          placeholder="Escreva sua resposta aqui..."
        />
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button variant="secondary" onClick={prevStep} className="sm:w-auto w-full">
            Voltar
          </Button>
          <Button variant="primary" onClick={handleNext} disabled={!isAnswerValid} className="sm:flex-1 w-full text-xl py-5">
            {index < total - 1 ? 'Próxima pergunta' : 'Finalizar entrevista'}
          </Button>
        </div>
      </div>
    </HeroPageTemplate>
  )
}
