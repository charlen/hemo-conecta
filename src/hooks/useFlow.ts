import { useContext } from 'react'
import { FlowContext } from '../contexts/FlowContext'

export function useFlow() {
  const ctx = useContext(FlowContext)
  if (!ctx) throw new Error('useFlow must be used within FlowProvider')
  return ctx
}
