import { ReactNode } from 'react'
import { StepTemplate } from './StepTemplate'

type HeroPageTemplateProps = {
  step: number
  total: number
  title: string
  subtitle?: string
  children: ReactNode
}

export function HeroPageTemplate({ step, total, title, subtitle, children }: HeroPageTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Painel visual esquerdo - ocupa tela toda */}
      <div className="hidden md:flex w-5/12 relative overflow-hidden min-h-screen">
        <img src="/hero.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/20" />
        <div className="relative z-10 flex flex-col justify-between p-10 lg:p-16 text-white h-full">
          <div>
            <span className="inline-block text-sm font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              Plataforma Inclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h2>
            {subtitle && <p className="mt-4 text-slate-200 text-xl leading-relaxed">{subtitle}</p>}
          </div>
          <div className="text-slate-300 text-base border-t border-white/15 pt-6">
            Feito com carinho para a humanidade
          </div>
        </div>
      </div>

      {/* Conteúdo direito ocupando todo o espaço */}
      <div className="flex-1 bg-white min-h-screen flex flex-col">
        <div className="flex-1 p-8 md:p-12 lg:p-16">
          <StepTemplate step={step} total={total} title={title}>
            <div className="space-y-8 h-full flex flex-col">
              {children}
            </div>
          </StepTemplate>
        </div>
      </div>
    </div>
  )
}
