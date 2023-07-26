import axios from 'axios'

const http = axios.create({
  baseURL: 'https://localhost:8080/',
  timeout: 10000,
  headers: { 'Content-type': 'application/json' },
})

export default http
