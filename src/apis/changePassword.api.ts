import http from '@/utils/http'

export const handleChangePassword = async (value: any, other?: any) =>
  http
    .put('/user', { password: value.currentPassword, newPassword: value.newPassword })
    .then((res) => {
      if (res.data.message === 'Success' && res.data.statusCode === 200) {
        other('/', {
          replace: true,
        })
        other(0)
      } else if (res.data.statusCode === 404) {
        alert('Current password is incorrect!')
      }
    })
    .catch((err) => {
      console.log(err)
    })
