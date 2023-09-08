import http from '@/utils/http'

export const handleSortByForCourse = (field?: any, order?: any, page?: any, limit?: any) => {
  return http.get('/course', { params: { sortFeild: field, sortOrder: order, page, limit } })
}
