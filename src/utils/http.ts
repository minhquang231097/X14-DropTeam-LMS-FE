import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
})

// Function to refresh the access token using the refresh token
async function refreshAccessToken(): Promise<string> {
  const user = JSON.parse(localStorage.getItem('user') as string)
  const response = await axios.post(`${http.defaults.baseURL}/auth/refresh`, { refreshToken: user.refreshToken })
  const { accessToken } = response.data
  return accessToken
}

http.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user') as string)
    if (user) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${user.accessToken}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

http.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const accessToken = await refreshAccessToken()
      const user = JSON.parse(localStorage.getItem('user') as string)
      user.accessToken = accessToken
      localStorage.setItem('user', JSON.stringify(user))
      http.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      return http(originalRequest)
    }
    return Promise.reject(error)
  },
)

export default http
