import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { useFlow } from '../hooks/useFlow'
import { Button } from '../components/atoms/Button'

export function ResumePage() {
  const { state, nextStep, prevStep } = useFlow()
  const nome = state.nome || 'Seu nome'
  const idade = state.idade || '—'

  return (
    <HeroPageTemplate
      step={4}
      total={8}
      title="Currículo resumido"
      subtitle="Revise o resumo gerado a partir das suas respostas. Você pode editar depois."
    >
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2rem] border border-slate-200 p-8 md:p-10">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-2xl font-bold">
                {nome.split(' ').map(n=>n[0]).slice(0,2).join('')}
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-slate-900">{nome}</h4>
                <p className="text-xl text-slate-600 mt-1">{idade} anos • Experiência consolidada</p>
                <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                  Profissional sênior com trajetória sólida, foco em relacionamento humano, aprendizado contínuo e contribuição para equipes diversas.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <h5 className="font-bold text-xl text-slate-900 mb-3">Competências destacadas</h5>
                <ul className="space-y-2 text-lg text-slate-700">
                  <li>• Comunicação clara e empática</li>
                  <li>• Trabalho em equipe</li>
                  <li>• Resolução de problemas</li>
                  <li>• Organização e pontualidade</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6 bg-white">
                <h5 className="font-bold text-xl text-slate-900 mb-3">Interesses</h5>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {state.tipo || 'A definir'} • {state.area || 'A definir'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" onClick={prevStep} className="w-full sm:w-auto">
              Voltar
            </Button>
            <Button variant="primary" onClick={nextStep} className="w-full sm:flex-1 text-xl py-5">
              Continuar para preferências
            </Button>
          </div>
        </div>
      </HeroPageTemplate>
  )
}
