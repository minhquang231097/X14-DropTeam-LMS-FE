import http from '@/utils/http'

export const getStudentsByCourseID = (course_id: string) =>
  http.get('/user', {
    params: {
      course_id,
    },
  })
