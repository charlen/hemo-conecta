import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'secondary', className = '', ...props }: ButtonProps) {
  const base = 'appearance-none px-8 py-4 text-xl font-semibold rounded-2xl transition-all min-h-[56px] shadow-sm'
  const isPrimary = variant === 'primary'
  const variantClass = isPrimary
    ? 'text-white hover:brightness-95 active:scale-[0.98] border-0'
    : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
  return (
    <button
      className={`${base} ${variantClass} ${className}`}
      style={isPrimary ? { backgroundColor: '#2563eb' } : undefined}
      {...props}
    />
  )
}
