import { PageTemplate } from '../components/templates/PageTemplate'
import { StepTemplate } from '../components/templates/StepTemplate'
import { useFlow } from '../hooks/useFlow'
import { Button } from '../components/atoms/Button'
import { mockJobs } from '../mocks/data'


export function JobsPage() {
  const { prevStep, goToStep, state, toggleCandidatura } = useFlow()
  const applied = state.candidaturas

  return (
    <PageTemplate>
      <StepTemplate step={7} total={8} title="Vagas para você">
        <div className="flex flex-col gap-6">
          {mockJobs.map(j => {
            const isApplied = applied.includes(j.id)
            return (
              <div key={j.id} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col gap-5">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{j.cargo} — {j.empresa}</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-lg font-semibold">{j.tipo}</span>
                    <span className="px-4 py-2 bg-slate-100 text-slate-800 rounded-xl text-lg font-semibold">{j.area}</span>
                  </div>
                </div>
                <p className="text-slate-700 text-xl leading-relaxed">{j.desc}</p>
                <p className="text-slate-700 text-xl leading-relaxed">{j.motivo}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full text-lg font-semibold border-2 border-emerald-200 w-fit">
                  {j.score}% compatível
                </div>
                <Button variant={isApplied?'secondary':'primary'} disabled={isApplied} onClick={()=>toggleCandidatura(j.id)}>
                  {isApplied?'Candidatura enviada ✓':'Candidatar-me'}
                </Button>
              </div>
            )
          })}
        </div>
        <div className="flex justify-between items-center gap-6 mt-10">
          <Button variant="secondary" onClick={prevStep}>Voltar</Button>
          <Button variant="primary" onClick={()=>goToStep(8)}>Minhas candidaturas ({applied.length})</Button>
        </div>
      </StepTemplate>
    </PageTemplate>
  )
}
