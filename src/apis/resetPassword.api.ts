import http from '@/utils/http'

const handleResetPassword = async (value: any, other?: any) => {
  await http
    .put(`/auth/change-password?id=${value.id}&token=${value.token}`, { password: value.newPassword })
    .then(() => {
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
