import { useFlow } from '../hooks/useFlow'
import { Button } from '../components/atoms/Button'

export function WelcomePage() {
  const { nextStep } = useFlow()

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row antialiased font-sans">
      
      {/* Lado Esquerdo - Painel Hero com Imagem e Texto Totalmente Integrados */}
      <div className="w-full md:w-5/12 min-h-[60vh] md:min-h-screen relative flex flex-col justify-between pt-8 md:pt-12 lg:pt-16 pb-8 md:pb-12 lg:pb-16 px-8 md:px-12 lg:px-16 text-white overflow-hidden bg-slate-900">
        
        {/* A Imagem de Fundo Ocupando Todo o Painel */}
        <img 
          src="/assets/hero.jpeg" 
          alt="Pessoa doando sangue em hemocentro" 
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
        
        {/* Filtro Cinematográfico e Camada de Degradê Duplo para Legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/10 mix-blend-multiply opacity-95 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Conteúdo superior */}
        <div className="relative z-10 space-y-6 md:space-y-8">
          <div>
            <span className="text-sm md:text-base font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md px-4 py-2 rounded-full inline-block mb-4 border border-white/20">
              Plataforma de Doação
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none drop-shadow-md">
              Hemo Conecta
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-100 font-medium max-w-sm leading-relaxed drop-shadow">
            Conectando doadores a quem precisa de sangue com segurança e cuidado.
          </p>
        </div>

        {/* Rodapé do painel esquerdo */}
        <div className="relative z-10 w-full">
          <div className="border-t border-white/20 pt-4 text-base md:text-lg text-slate-300">
            Feito com carinho para a humanidade • Hemo Conecta
          </div>
        </div>
      </div>

      {/* Lado Direito - Área de Ação Principal */}
      <div className="w-full md:w-7/12 flex flex-col justify-between p-8 md:p-12 lg:p-16 bg-white">
        
        {/* Div invisível para ajudar no alinhamento vertical flex-col no desktop */}
        <div className="hidden md:block" />

        {/* Bloco de Conteúdo Centralizado */}
        <div className="max-w-2xl w-full space-y-8 md:space-y-10 my-auto">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Sua doação <br />
              <span className="text-[#2563eb] font-extrabold">salva vidas.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
              Responda ao questionário de elegibilidade e descubra se você pode doar sangue com segurança. O processo é simples, acessível e feito para você.
            </p>
          </div>

          {/* Botão de Chamada para Ação */}
          <div className="pt-2">
            <Button 
              variant="primary" 
              onClick={nextStep} 
              className="w-full text-xl md:text-2xl py-4 md:py-5 shadow-lg shadow-blue-100 rounded-2xl font-bold transition-all"
            >
              Iniciar triagem
            </Button>
          </div>
        </div>

        {/* Disclaimer Refinado integrado como nota de rodapé discreta */}
        <div className="mt-8 md:mt-0 pt-6 border-t border-slate-100 flex items-center gap-2.5 text-slate-400 text-sm md:text-base">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <p>
            <span className="font-semibold text-slate-500">Versão MVP:</span> Triagem de elegibilidade com dados ilustrativos.
          </p>
        </div>

      </div>

    </div>
  )
}
