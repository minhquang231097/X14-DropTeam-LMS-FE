import { useQuery } from '@tanstack/react-query'
import http from '@/utils/http'

export const UseSearchQuery = (endpoint: string, keysearch?: string) => {
  return useQuery({
    queryKey: [`${endpoint}`, keysearch],
    queryFn: async () => {
      const res = await http.get(`/${endpoint}`, {
        params: {
          search: keysearch,
        },
      })
      return res.data.data
    },
    enabled: !!keysearch,
  })
}
