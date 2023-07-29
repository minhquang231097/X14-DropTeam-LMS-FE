import http from '@/utils/http'

export const getCourses = (page?: any, limit?: any) =>
  http.get('/course/page', {
    params: {
      page: page,
      limit: limit,
    },
  })
