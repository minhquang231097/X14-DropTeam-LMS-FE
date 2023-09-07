import http from '@/utils/http'

export const getClassesList = async (page?: any, limit?: any) =>
  http.get('/class', {
    params: {
      page,
      limit,
    },
  })

export const getClassesBySearch = async (page?: any, limit?: any, search?: any) =>
  http.get('/class', {
    params: {
      page,
      limit,
      search,
    },
  })
