import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api/v1',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' },
})

// Function to refresh the access token using the refresh token
async function refreshAccessToken(): Promise<string> {
  const user = JSON.parse(localStorage.getItem('user') as string)
  // console.log(user.refresh_token)
  const response = await axios.post(`${http.defaults.baseURL}/auth/refresh`, { refreshToken: user.refresh_token })
  // console.log(response)
  const { accessToken } = response.data
  // console.log(response.data)
  return accessToken
}

http.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user') as string)
    if (user) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${user.access_token}`
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
    if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
      originalRequest._retry = true
      const accessToken = await refreshAccessToken()
      const user = JSON.parse(localStorage.getItem('user') as string)
      user.access_token = accessToken
      localStorage.setItem('user', JSON.stringify(user))
      http.defaults.headers.common.Authorization = `Bearer ${accessToken}`
      return http(originalRequest)
    }
    return Promise.reject(error)
  },
)

export default http
