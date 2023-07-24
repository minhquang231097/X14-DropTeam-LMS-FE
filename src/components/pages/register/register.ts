const handleRegister = (
  value: {
    usename: string
    fullname: string
    email: string
    address: string
    phoneNumber: string
    gender: string
    password: string
  },
  other?: any,
) => {
  localStorage.setItem('user', JSON.stringify(value))
}

export default handleRegister
