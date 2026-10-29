import { TextareaHTMLAttributes } from 'react'

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className="w-full p-5 text-xl bg-white border-2 border-slate-300 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all min-h-[160px]" />
}
