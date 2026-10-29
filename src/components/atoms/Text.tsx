import { HTMLAttributes } from 'react'

export function Text({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props}>{children}</p>
}
