import http from '@/utils/http'
import { message } from 'antd'

export const handleUserRegistCourse = () => {
  http
    .post('/regist-course/student')
    .then(() => {
      message.success('Done!')
    })
    .catch(() => {
      message.error('Something went wrong!')
    })
}
