import http from '@/utils/http'

export const updateLesson = (id: string) => {
  return http.get('/lesson', {
    params: {
      id,
    },
  })
}
