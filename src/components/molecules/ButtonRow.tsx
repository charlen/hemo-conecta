import { Container } from '../atoms/Container'

type ButtonRowProps = {
  children: React.ReactNode
}

export function ButtonRow({ children }: ButtonRowProps) {
  return <Container className="flex gap-4">{children}</Container>
}

