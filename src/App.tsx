import { FlowProvider } from './contexts/FlowContext'
import { WelcomePage } from './pages/WelcomePage'
import { ScreeningPage } from './pages/ScreeningPage'
import { ResultPage } from './pages/ResultPage'
import { useFlow } from './hooks/useFlow'

function FlowRouter() {
  const { step } = useFlow()
  const steps = [
    WelcomePage,
    ScreeningPage,
    ResultPage
  ]
  const Current = steps[step] ?? ResultPage
  return <Current />
}

export function App() {
  return (
    <FlowProvider>
      <FlowRouter />
    </FlowProvider>
  )
}
