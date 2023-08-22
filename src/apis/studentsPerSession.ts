import http from '@/utils/http'

export const getStudentsListPerSession = (class_id: string, page: string, limit: string) =>
  http.get('/user', {
    params: {
      id: class_id,
      page: page,
      limit: limit,
    },
  })
