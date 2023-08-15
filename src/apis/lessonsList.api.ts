import http from '@/utils/http'

export const getLessonsList = (page?: number, limit?: number) =>
  http.get('/lesson', {
    params: {
      page: page,
      limit: limit,
    },
  })
