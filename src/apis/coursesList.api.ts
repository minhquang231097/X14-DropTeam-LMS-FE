import http from '@/utils/http'

export const getCoursesList = async (page?: any, limit?: any) =>
  http.get('/course', {
    params: {
      page,
      limit,
    },
  })

export const getCoursesBySearch = async (page?: any, limit?: any, search?: any) =>
  http.get('/course', {
    params: {
      page,
      limit,
      search,
    },
  })
