import { Container } from '../atoms/Container'
import { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
}

export function Card({ children }: CardProps) {
  return <Container className="card">{children}</Container>
}
