import http from '@/utils/http'

export const searchFeedback = async ( content?: string) =>
  await http.get('/feedback', {
    params: { search: content },
  })