import { HTMLAttributes } from 'react'

export function Pill({ children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className="pill" {...props}>{children}</span>
}
