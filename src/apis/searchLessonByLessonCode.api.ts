import http from '@/utils/http'

export const getLessonByLessonCode = async (lesson_code: string) => await http.get(`/lesson/${lesson_code}`)
