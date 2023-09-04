import axios from 'axios'
import http from '@/utils/http'
import { message } from 'antd'
import { getUserProfile } from './userProfile.api'

const handleUpdateUser = async (
  value: {
    fullname: string
    email: string
    dob: string
    gender: string
    address: string
    phone_number: string
    avatar?: string
  },
  imageUpload?: any,
  other?: any,
) => {
  const ID = JSON.parse(localStorage.getItem('user') as string).id

  if (imageUpload.length > 0) {
    await axios
      .post('http://localhost:8080/api/v1/upload', imageUpload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        const imageURl = res.data.data[0]
        const valueWithImage = {
          ...value,
          avatar: String(imageURl),
        }

        http
          .put(`/user/${ID}`, JSON.stringify(valueWithImage))
          .then((res) => {
            console.log(res)
            if (res.status === 200) {
              getUserProfile(ID).then((res) => {
                const userData = res.data.data
                const userInfo = {
                  id: userData._id,
                  fullname: userData.fullname,
                  email: userData.email,
                  phone_number: userData.phone_number,
                  username: userData.username,
                  role: userData.role,
                  dob: userData.dob,
                  gender: userData.gender,
                  address: userData.address,
                  avatar: userData.avatar,
                }
                localStorage.setItem('user', JSON.stringify(userInfo))

                other(`/edit-profile?id=${ID}`, { replace: true })
                other(0)
              })
            }
          })
          .catch(() => {
            message.error('Something went wrong!')
          })
      })
  } else {
    http
      .put(`/user/${ID}`, JSON.stringify(value))
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          getUserProfile(ID).then((res) => {
            const userData = res.data.data
            const userInfo = {
              id: userData._id,
              fullname: userData.fullname,
              email: userData.email,
              phone_number: userData.phone_number,
              username: userData.username,
              role: userData.role,
              dob: userData.dob,
              gender: userData.gender,
              address: userData.address,
              avatar: userData.avatar,
            }
            localStorage.setItem('user', JSON.stringify(userInfo))

            other(`/edit-profile?id=${ID}`, { replace: true })
            other(0)
          })
        }
      })
      .catch(() => {
        message.error('Something went wrong!')
      })
  }
}

export default handleUpdateUser
