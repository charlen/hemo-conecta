import { LabelHTMLAttributes } from 'react'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className="block font-bold mb-3 text-slate-800 text-xl" />
}
