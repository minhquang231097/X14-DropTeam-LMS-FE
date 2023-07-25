import axios from 'axios'

const handleLogin = async (value: { username: string; password: string }, others?: any) => {
  await axios
    .post('http://localhost:8080/auth/sign-in', JSON.stringify(value), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      console.log(res.data)
      const user = {
        username: res.data.username,
        access_token: res.data.accessToken,
        refresh_token: res.data.refreshToken,
      }
      if (user && res.status === 200) {
        localStorage.setItem('user', JSON.stringify(user))
        others('/', {
          replace: true,
        })
        others(0)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

export default handleLogin
