import http from '@/utils/http'
import { message } from 'antd'

export const handleSubmitAttendance = async (list?: any) =>
  http
    .post('/attendance', { list })
    .then(() => {
      message.success('Done!')
    })
    .catch(() => {
      message.error('Error!')
    })
