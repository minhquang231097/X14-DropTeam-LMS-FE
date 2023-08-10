import http from '@/utils/http'

export const getClassesList = async (page?: any, limit?: any) =>
  await http.get('/class', {
    params: {
      page: page,
      limit: limit,
    },
  })
