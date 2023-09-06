import { message } from 'antd'
import http from '@/utils/http'

export const handleSubmitAttendance = async (list?: any) =>
  http
    .post('/attendance', { list })
    .then(() => {
      message.success('Done!')
    })
    .catch(() => {
      message.error('Error!')
    })
