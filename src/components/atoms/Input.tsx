import { InputHTMLAttributes } from 'react'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full p-5 text-xl bg-white border-2 border-slate-300 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary transition-all" />
}
