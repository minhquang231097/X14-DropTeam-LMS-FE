import http from '@/utils/http'

export const getStudentsListPerSession = (class_code: string, sessionId: string) =>
  http.get('/user', {
    params: {
      class_code: class_code,
      sessionId: sessionId,
    },
  })
