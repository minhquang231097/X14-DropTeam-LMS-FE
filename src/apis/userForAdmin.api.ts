import http from '@/utils/http'

export const getUserListForAdmin = (role_user: string, page?: string, limit?: string) =>
  http.get('/user', {
    params: {
      role: role_user,
      page,
      limit,
    },
  })
