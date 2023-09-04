import http from '@/utils/http'

export const getLessonsList = (course_id?: string, page?: string, limit?: string) => {
  console.log(course_id)
  return http.get('/lesson', {
    params: {
      course_id,
      page,
      limit,
    },
  })
}
