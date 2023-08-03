import http from '@/utils/http'

const handleUpdateUser = async (
  value: {
    fullname: string
    email: string
    dob: string
    gender: string
    address: string
    phone_number: string
  },
  other?: any,
) => {
  const ID = JSON.parse(localStorage.getItem('user') as string).userId
  const TOKEN = JSON.parse(localStorage.getItem('user') as string).access_token
  const AuthString = `Bearer ${TOKEN}`
  await http
    .put(`/auth/user/info/${ID}`, JSON.stringify(value), {
      headers: {
        Authorization: AuthString,
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status === 200) {
        other('/', { replace: true })
        other(0)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export default handleUpdateUser