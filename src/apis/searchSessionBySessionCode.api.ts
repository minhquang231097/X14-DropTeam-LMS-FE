import http from '@/utils/http'

export const getSessionBySessionCode = async (session_code: string) =>
  await http.get('/session', {
    params: { search: session_code },
  })
