import http from '@/utils/http'
export const getCourse = (id?: string) =>
  http.get('/course', {
    params: {
      id: id,
    },
  })
