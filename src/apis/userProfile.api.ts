import http from '@/utils/http'

export const getUserProfile = async (id: string) => {
  console.log(id)
  const TOKEN = JSON.parse(localStorage.getItem('login') as string).accessToken
  return http.get(`/user/info`, { headers: { Authorization: `Bearer ${TOKEN}` } })
}
