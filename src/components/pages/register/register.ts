import axios from 'axios'

const handleRegister = async (
  value: {
    fullname: string
    email: string
    dob: string
    gender: string
    address: string
    phone_number: string
    username: string
    password: string
  },
  other?: any,
) => {
  console.log(value.phone_number)
  await axios
    .post('http://localhost:8080/auth/sign-up', JSON.stringify(value), {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((res) => {
      if (res.status === 200) {
        other('/login', { replace: true })
        other(0)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}

export default handleRegister
