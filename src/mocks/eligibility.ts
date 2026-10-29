export type SexoBiologico = 'Masculino' | 'Feminino';

export interface RespostasTriagem {
  sexo?: SexoBiologico;
  idade?: number;
  peso?: number;
  ultimaDoacaoDias?: number;
  janela12Meses?: boolean;
  janela15Dias?: boolean;
}

export interface Pergunta {
  id: string;
  texto: string;
  tipo: 'radio' | 'number' | 'boolean';
  opcoes?: string[];
  validar?: (valor: unknown, contexto: RespostasTriagem) => { valido: boolean; motivo?: string };
}

export const perguntasTriagem: Pergunta[] = [
  {
    id: 'sexo',
    texto: 'Qual é o seu sexo biológico? Isso define os intervalos regulamentares de doação definidos pelo Ministério da Saúde.',
    tipo: 'radio',
    opcoes: ['Masculino', 'Feminino'],
  },
  {
    id: 'idade',
    texto: 'Qual é a sua idade?',
    tipo: 'number',
    validar: (v) => {
      const idade = Number(v);
      const valido = idade >= 16 && idade <= 69;
      return {
        valido,
        motivo: valido ? undefined : 'A faixa etária para doação de sangue é de 16 a 69 anos, conforme normas do Ministério da Saúde.'
      };
    }
  },
  {
    id: 'peso',
    texto: 'Qual é o seu peso em quilogramas?',
    tipo: 'number',
    validar: (v) => {
      const peso = Number(v);
      const valido = peso > 50;
      return {
        valido,
        motivo: valido ? undefined : 'O peso mínimo para doação é 50 kg, para garantir a segurança do doador.'
      };
    }
  },
  {
    id: 'ultimaDoacao',
    texto: 'Há quantos dias você fez sua última doação de sangue?',
    tipo: 'number',
    validar: (v, ctx) => {
      const dias = Number(v);
      const sexo = ctx.sexo;
      if (!sexo) return { valido: false, motivo: 'Sexo biológico não informado.' };
      const minimo = sexo === 'Feminino' ? 90 : 60;
      const valido = dias >= minimo;
      return {
        valido,
        motivo: valido ? undefined : `Para ${sexo === 'Feminino' ? 'mulheres' : 'homens'}, o intervalo mínimo é de ${minimo} dias, conforme regulamentação do Ministério da Saúde.`
      };
    }
  },
  {
    id: 'janela12Meses',
    texto: 'Nos últimos 12 meses você fez tatuagem, piercing, cirurgia grande ou recebeu transfusão de sangue?',
    tipo: 'boolean',
    validar: (v) => {
      const temRisco = Boolean(v);
      const valido = !temRisco;
      return {
        valido,
        motivo: valido ? undefined : 'Por segurança, é necessário aguardar 12 meses após tatuagem, piercing, cirurgia grande ou transfusão antes de doar.'
      };
    }
  },
  {
    id: 'janela15Dias',
    texto: 'Nos últimos 15 dias você apresentou sintomas de gripe, febre ou Covid-19?',
    tipo: 'boolean',
    validar: (v) => {
      const temSintoma = Boolean(v);
      const valido = !temSintoma;
      return {
        valido,
        motivo: valido ? undefined : 'Para proteger você e quem receberá o sangue, é necessário aguardar 15 dias após sintomas gripais ou febre.'
      };
    }
  }
];

export const mensagensInterrupcao = {
  idade: 'A faixa etária para doação de sangue é de 16 a 69 anos. Você pode retornar quando estiver dentro da faixa permitida.',
  peso: 'O peso mínimo para doação é 50 kg. Isso garante a segurança do doador durante o procedimento.',
  intervalo: 'O intervalo mínimo entre doações é de 90 dias para mulheres e 60 dias para homens. Aguarde o período de recuperação.',
  janela12: 'Por segurança, é necessário aguardar 12 meses após tatuagem, piercing, cirurgia grande ou transfusão.',
  janela15: 'Para proteger você e quem receberá o sangue, aguarde 15 dias após sintomas gripais ou febre.'
};

export const dadosAposAprovacao = [
  { id: 'nome', label: 'Nome completo', tipo: 'text', required: true },
  { id: 'cepCidade', label: 'CEP ou Bairro/Cidade', tipo: 'text', required: true },
  { id: 'telefone', label: 'Telefone com DDD', tipo: 'tel', required: true }
];
