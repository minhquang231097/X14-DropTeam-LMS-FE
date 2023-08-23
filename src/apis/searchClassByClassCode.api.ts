import http from '@/utils/http'

export const getClassByClassCode = async (class_code: string) =>
  http.get('/class', {
    params: { class_code },
  })
