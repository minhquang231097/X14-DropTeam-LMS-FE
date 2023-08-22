import http from '@/utils/http'

export const getLessonsList = (page?: string, limit?: string) =>
  http.get('/lesson', {
    params: {
      page: page,
      limit: limit,
    },
  })
