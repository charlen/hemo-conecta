import { ReactNode } from 'react'
import { StepTemplate } from './StepTemplate'

type HeroStepTemplateProps = {
  step: number
  total: number
  title: string
  subtitle?: string
  visual?: ReactNode
  children: ReactNode
}

export function HeroStepTemplate({ step, total, title, subtitle, visual, children }: HeroStepTemplateProps) {
  return (
    <div className="grid md:grid-cols-[1.1fr_1.9fr] gap-12 items-start">
      {visual && (
        <div className="hidden md:flex flex-col justify-between min-h-[520px] relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-10">
          <div className="absolute inset-0">
            <img src="/assets/hero.jpeg" alt="" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-950/20" />
          </div>
          <div className="relative z-10">
            <span className="inline-block text-sm font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
              Plataforma Inclusiva
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">{title}</h2>
            {subtitle && <p className="mt-4 text-slate-200 text-xl leading-relaxed">{subtitle}</p>}
          </div>
          <div className="relative z-10 text-slate-300 text-base border-t border-white/15 pt-6">
            Feito com carinho para a humanidade
          </div>
        </div>
      )}
      <div>
        <StepTemplate step={step} total={total} title={title}>
          <div className="space-y-8">
            {children}
          </div>
        </StepTemplate>
      </div>
    </div>
  )
}
