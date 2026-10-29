import { Container } from '../atoms/Container'

type ButtonRowProps = {
  children: React.ReactNode
}

export function ButtonRow({ children }: ButtonRowProps) {
  return <Container className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4 mt-auto pt-8 border-t border-slate-200">{children}</Container>
}

