import http from '@/utils/http'

export const getUserProfile = async (id: string) => await http.get(`/user/info/${id}`)
