import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
})

export default http
