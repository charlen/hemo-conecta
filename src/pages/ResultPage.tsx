import { useState } from 'react'
import { useFlow } from '../hooks/useFlow'
import { HeroPageTemplate } from '../components/templates/HeroPageTemplate'
import { Button } from '../components/atoms/Button'
import { ButtonRow } from '../components/molecules/ButtonRow'

export function ResultPage() {
  const { state, updateTriagem, prevStep } = useFlow()
  const [nome, setNome] = useState(state.nome || '')
  const [cepCidade, setCepCidade] = useState(state.cepCidade || '')
  const [telefone, setTelefone] = useState(state.telefone || '')

  const handleSubmit = () => {
    updateTriagem({ nome, cepCidade, telefone })
    alert('Cadastro concluído! Entraremos em contato pelo WhatsApp.')
  }

  const completo = nome && cepCidade && telefone

  return (
    <HeroPageTemplate step={3} total={3} title="Resultado da triagem" subtitle="Parabéns, você está elegível">
      <div className="space-y-8">
        <p className="text-xl text-slate-700">
          Você passou por todas as etapas de triagem com sucesso. Agora precisamos de seus dados para contato.
        </p>
        <div className="space-y-4">
          <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Nome completo" className="w-full p-4 text-xl border-2 rounded-2xl" />
          <input value={cepCidade} onChange={e=>setCepCidade(e.target.value)} placeholder="CEP ou Bairro/Cidade" className="w-full p-4 text-xl border-2 rounded-2xl" />
          <input value={telefone} onChange={e=>setTelefone(e.target.value)} placeholder="Telefone com DDD" className="w-full p-4 text-xl border-2 rounded-2xl" />
        </div>
        <ButtonRow>
          <Button variant="secondary" onClick={prevStep}>Voltar</Button>
          <Button variant="primary" disabled={!completo} onClick={handleSubmit}>Confirmar cadastro</Button>
        </ButtonRow>
      </div>
    </HeroPageTemplate>
  )
}
