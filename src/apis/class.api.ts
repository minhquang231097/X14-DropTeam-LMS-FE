import http from '@/utils/http'

export const getClassById = async (id: string) =>
  await http.get('/class', {
    params: {
      id: id,
    },
  })
