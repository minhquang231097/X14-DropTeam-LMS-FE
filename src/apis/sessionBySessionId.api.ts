import http from '@/utils/http'

export const getSessionById = async (id: string) => await http.get(`/session/${id}`)
