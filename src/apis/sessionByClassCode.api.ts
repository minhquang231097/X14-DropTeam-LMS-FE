import http from '@/utils/http'

export const getSessionsByClassCode = async (page?: string, limit?: string) =>
  http.get('/session', {
    params: {
      page,
      limit,
    },
  })
