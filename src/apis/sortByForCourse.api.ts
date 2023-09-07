import http from '@/utils/http'

export const handleSortByForCourse = (field: any) => {
  if (field === 'create_at') {
    return http.get('/course?sortBy=create_at')
  }
}
