import http from '@/utils/http'

export const getStudentsListPerSession = (class_code: string) =>
  http.get('/user', {
    params: {
      class_code: class_code,
    },
  })
