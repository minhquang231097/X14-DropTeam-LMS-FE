import http from '@/utils/http'

const handleLogin = async (value: { username: string; password: string }, others?: any) => {
  await http
    .post('/auth/sign-in', JSON.stringify(value))
    .then((res) => {
      const user = {
        userId: res.data.id,
        username: res.data.username,
        role: res.data.role,
        access_token: res.data.accessToken,
        refresh_token: res.data.refreshToken,
      }

      console.log(res)
      if (user && res.data.id) {
        localStorage.setItem('user', JSON.stringify(user))
        others('/', {
          replace: true,
        })
        others(0)
      }

      if (user && res.data.statusCode === 404) {
        alert('Wrong Email or Password. Please try again!')
      }
    })
    .catch((error) => {
      console.log(error)
      alert('Wrong Email or Password. Please try again!')
    })
}

export default handleLogin
