import { HTMLAttributes } from 'react'

export function Heading({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h2 {...props}>{children}</h2>
}
