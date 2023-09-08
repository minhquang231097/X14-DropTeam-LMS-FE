import http from '@/utils/http'

export const uploadImage = async (imageUpload: any) =>
  http.post('/upload', imageUpload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
