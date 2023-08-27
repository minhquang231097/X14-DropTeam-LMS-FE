import http from '@/utils/http'

export const getCourse = async (id?: string) => await http.get(`/course/${id}`)
