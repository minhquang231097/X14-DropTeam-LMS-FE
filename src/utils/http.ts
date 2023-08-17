import axios from 'axios'

const getUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : ''
const token = getUser.access_token

const http = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
})

export default http
