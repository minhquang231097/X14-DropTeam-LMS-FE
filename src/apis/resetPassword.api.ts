import http from '@/utils/http'

const handleResetPassword = async (value: any, other?: any) => {
  console.log(value)
  await http
    .post(`/auth/change-password?id=${value.id}&token=${value.token}`, { password: value.newPassword })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
export default handleResetPassword
