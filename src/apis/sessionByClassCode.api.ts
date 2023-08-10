import http from '@/utils/http'

export const getSessionsByClassCode = async (class_code?: string, id?: string) =>
  http.get('/session', {
    params: {
      class_code: class_code,
    },
  })
