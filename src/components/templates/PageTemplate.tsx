import { ReactNode } from 'react'

export function PageTemplate({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-10">
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.08)] p-8 md:p-12 lg:p-16">
          {children}
        </div>
      </div>
    </div>
  )
}
