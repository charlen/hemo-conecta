import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { useFlow } from '../hooks/useFlow'
import { Button } from '../components/atoms/Button'

const tipos = ["Meio período","Temporário","Remoto","Presencial"]
const areas = ["Atendimento","Administrativo","Vendas","Educação"]

export function PreferencesPage() {
  const { state, updateTipo, updateArea, nextStep, prevStep } = useFlow()
  const isValid = !!state.tipo && !!state.area

  return (
    <HeroPageTemplate
      step={5}
      total={8}
      title="Preferências"
      subtitle="Escolha o tipo de trabalho e a área que mais combinam com você. Você pode mudar depois."
    >
      <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Tipo de trabalho</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tipos.map(t => {
                const active = state.tipo === t
                return (
                  <button
                    key={t}
                    onClick={() => updateTipo(active ? '' : t)}
                    className={`p-6 rounded-2xl border-2 text-lg font-semibold transition-all min-h-[84px] text-center ${active ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-lg' : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'}`}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Área de interesse</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areas.map(a => {
                const active = state.area === a
                return (
                  <button
                    key={a}
                    onClick={() => updateArea(active ? '' : a)}
                    className={`p-6 rounded-2xl border-2 text-lg font-semibold transition-all min-h-[84px] text-center ${active ? 'bg-[#2563eb] text-white border-[#2563eb] shadow-lg' : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300'}`}
                  >
                    {a}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button variant="secondary" onClick={prevStep} className="w-full sm:w-auto">
              Voltar
            </Button>
            <Button variant="primary" onClick={nextStep} disabled={!isValid} className="w-full sm:flex-1 text-xl py-5">
              Ver vagas para mim
            </Button>
          </div>
        </div>
      </HeroPageTemplate>
  )
}
