import http from '@/utils/http'

const handleLogout = async (navigate?: any) => {
  const { userId } = JSON.parse(localStorage.getItem('login') as string)
  await http
    .post('/auth/sign-out', { id: userId })
    .then((res) => {
      if (res.data.statusCode === 200) {
        localStorage.removeItem('user')
        navigate('/login', { replace: true })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export default handleLogout
