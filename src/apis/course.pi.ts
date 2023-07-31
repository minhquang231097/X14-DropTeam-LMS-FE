import http from '@/utils/http'
export const getCoure = (id?: string) =>
  http.get('', {
    params: {
      id: id,
    },
  })
