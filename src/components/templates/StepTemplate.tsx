import { ReactNode } from 'react'

type StepTemplateProps = {
  step: number
  total: number
  title: string
  children: ReactNode
}

export function StepTemplate({ step, total, title, children }: StepTemplateProps) {
  const progress = Math.min(100, Math.max(0, (step / total) * 100))
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-slate-600 text-xl md:text-2xl leading-relaxed">Passo {step} de {total}</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">{title}</h1>
        <div className="w-full bg-slate-300 h-4 rounded-full mt-8 overflow-hidden">
          <div className="h-4 rounded-full transition-all duration-500 bg-[#2563eb]" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {children}
      </div>
    </div>
  )
}
