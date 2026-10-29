import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { useFlow } from '../hooks/useFlow'
import { mockJobs } from '../mocks/data'

export function DashboardPage() {
  const { state } = useFlow()
  const nome = state.nome || 'Seu nome'
  const email = state.email || 'seu@email.com'

  const candidaturas = mockJobs.filter(j => state.candidaturas.includes(j.id))

  return (
    <HeroPageTemplate
      step={4}
      total={4}
      title="Seu Portal Hemo Conecta"
      subtitle="Acompanhe sua triagem, histórico de doações e próximos passos."
    >
      <div className="space-y-10">
        {/* Perfil */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-[2rem] border border-slate-200 p-8 md:p-10">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-2xl font-bold">
              {nome.split(' ').map(n=>n[0]).slice(0,2).join('')}
            </div>
            <div className="flex-1">
              <h4 className="text-3xl font-extrabold text-slate-900">{nome}</h4>
              <p className="text-xl text-slate-600 mt-1">{email} • {state.idade || '—'} anos • {state.area || 'A definir'}</p>
              <p className="mt-4 text-lg text-slate-700 leading-relaxed">
                Profissional sênior em {state.tipo || 'várias modalidades'}. Perfil criado para conectar experiência a oportunidades inclusivas.
              </p>
            </div>
          </div>
        </div>

        {/* Histórico de triagens */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Histórico de triagens</h3>
          <div className="space-y-4">
            {candidaturas.map(j => (
              <div key={j.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex justify-between items-center">
                <div>
                  <p className="text-xl font-bold text-slate-900">{j.cargo} — {j.empresa}</p>
                  <p className="text-slate-600 mt-1">{j.tipo} • {j.area}</p>
                </div>
                <span className="px-4 py-2 bg-emerald-50 text-emerald-800 rounded-full font-semibold">Em análise</span>
              </div>
            ))}
            {candidaturas.length === 0 && (
              <p className="text-slate-600 text-lg">Você ainda não fez candidaturas. Volte para Vagas e aplique.</p>
            )}
          </div>
        </div>

        {/* Recomendações */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Recomendações para você</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {mockJobs.slice(2,4).map(j => (
              <div key={j.id} className="bg-white rounded-2xl border border-slate-200 p-6">
                <p className="text-lg font-bold text-slate-900">{j.cargo} — {j.empresa}</p>
                <p className="text-slate-600 mt-2">{j.tipo} • {j.area}</p>
                <p className="text-slate-700 mt-3 text-base">{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HeroPageTemplate>
  )
}
