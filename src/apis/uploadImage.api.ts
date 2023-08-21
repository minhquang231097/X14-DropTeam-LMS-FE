import axios from 'axios'
import http from '@/utils/http'

export const uploadImage = async (imageUpload: []) =>
  await axios.post('http://localhost:8080/api/v1/upload', imageUpload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
