import { interviewQuestions, mockJobs } from '../mocks/data'

export const api = {
  getInterviewQuestions: async () => {
    await new Promise(r => setTimeout(r, 100))
    return interviewQuestions
  },
  generateCurriculum: async (data: { nome: string; idade: string }) => {
    await new Promise(r => setTimeout(r, 200))
    return `Currículo gerado para ${data.nome}, idade ${data.idade}.`
  },
  getJobs: async () => {
    await new Promise(r => setTimeout(r, 100))
    return mockJobs
  }
}
