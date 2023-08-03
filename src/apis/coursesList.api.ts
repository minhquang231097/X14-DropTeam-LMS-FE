import http from '@/utils/http'

export const getCoursesList = (page?: any, limit?: any) =>
  http.get('/course/page', {
    params: {
      page,
      limit,
    },
  })
