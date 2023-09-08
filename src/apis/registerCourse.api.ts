import http from '@/utils/http'

export const registerCourseForAdmin = async (registerCourseData: any) => {
  http.post('/regist-course/admin', { ...registerCourseData })
}

export const registerCourseForStudent = async (registerCourseData: any) => {
  http.post('/regist-course/student', { ...registerCourseData })
}

export const getRegisterCourseList = async (page?: any, limit?: any) =>
  http.get('/regist-course', {
    params: {
      page,
      limit,
    },
  })

export const getRegisterCourseByCourseId = async (course_id: string) =>
  http.get('/regist-course', {
    params: {
      course_id,
    },
  })
