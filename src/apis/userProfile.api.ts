import http from '@/utils/http'

export const getUserProfile = (id: string) =>
  http.get('/user', {
    params: {
      id: id,
    },
  })
