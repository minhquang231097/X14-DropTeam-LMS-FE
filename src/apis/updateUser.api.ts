import axios from 'axios'
import http from '@/utils/http'
import { message } from 'antd'

const handleUpdateUser = async (
  value: {
    fullname: string
    email: string
    dob: string
    gender: string
    address: string
    phone_number: string
    avatar: string
  },
  imageUpload?: any,
  other?: any,
) => {
  const ID = JSON.parse(localStorage.getItem('user') as string).id
  const TOKEN = JSON.parse(localStorage.getItem('user') as string).access_token
  const AuthString = `Bearer ${TOKEN}`

  await axios
    .post('http://localhost:8080/api/v1/upload', imageUpload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      const imageURL = res.data.data[0]
      const valueWithImage = {
        ...value,
        avatar: String(imageURL),
      }
      http
        .put(`/user/${ID}`, JSON.stringify(valueWithImage))
        .then((res) => {
          if (res.status === 200) {
            other(`/edit-profile?id=${ID}`, { replace: true })
            other(0)
          }
        })
        .catch((err) => {
          console.log(err.response.status)
          if (err.response.status == 422) {
            message.error("You don't have changes!")
          } else {
            message.error('Something went wrong!')
          }
        })
    })
    .catch(() => {
      message.error('Something went wrong!')
    })
}

export default handleUpdateUser
