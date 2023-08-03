import http from '@/utils/http'

const handleLogout = async (navigate?: any) => {
  const id = JSON.parse(localStorage.getItem('user') as string).userId
  await http
    .post('/auth/sign-out', { id })
    .then((res) => {
      if (res.status === 200) {
        localStorage.removeItem('user')
        navigate(0)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export default handleLogout