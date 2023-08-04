import http from '@/utils/http'

const handleResetPassword = async (value: any, other?: any) => {
  console.log(value)
  await http
    .put(`/auth/change-password?id=${value.id}&token=${value.token}`, { password: value.newPassword })
    .then((res) => {
      other('/login', {
        replace: true,
      })
      other(0)
    })
    .catch((err) => {
      console.log(err)
    })
}
export default handleResetPassword
