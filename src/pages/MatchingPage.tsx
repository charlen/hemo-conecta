import { PageTemplate } from '../components/templates/PageTemplate'
import { StepTemplate } from '../components/templates/StepTemplate'
import { useFlow } from '../hooks/useFlow'
import { useEffect, useState } from 'react'

export function MatchingPage() {
  const { nextStep } = useFlow()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false)
      setTimeout(() => nextStep(), 500)
    }, 1200)
    return () => clearTimeout(t)
  }, [nextStep])

  return (
    <PageTemplate>
      <StepTemplate step={6} total={8} title="Vagas para você">
        <div>
          {loading ? <p>Procurando as melhores vagas…</p> : <p>Encontradas!</p>}
        </div>
      </StepTemplate>
    </PageTemplate>
  )
}
