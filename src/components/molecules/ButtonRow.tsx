import { Container } from '../atoms/Container'

type ButtonRowProps = {
  children: React.ReactNode
}

export function ButtonRow({ children }: ButtonRowProps) {
  return <Container className="flex justify-between gap-4 sticky bottom-0 bg-white py-4 mt-8 border-t border-slate-200">{children}</Container>
}

