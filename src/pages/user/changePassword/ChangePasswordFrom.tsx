import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { handleChangePassword } from '@/apis/changePassword.api'

const ChangePasswordFrom: React.FC = () => {
  const navigate = useNavigate()
  const [changePassword, setChangePassword] = useState({
    currentPassword: '',
    newPassword: '',
  })

  return (
    <Form
      name='changePassword'
      initialValues={{ remember: true }}
      layout='vertical'
    >
      <Form.Item
        name='currentPassword'
        label={<p className='font-bold my-2'>Current Password</p>}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your current password!',
          },
          {
            validator(_, value) {
              if (!value || value.length >= 6) {
                return Promise.resolve()
              }
              return Promise.reject('Please enter password at least 6 characters')
            },
          },
        ]}
      >
        <Input
          size='large'
          type='password'
          placeholder='Your current password here ...'
          onChange={(e) => {
            setChangePassword({ ...changePassword, currentPassword: e.target.value })
          }}
        />
      </Form.Item>

      <Form.Item
        name='newPassword'
        label={<p className='font-bold my-2'>New Password</p>}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your new password!',
          },
          {
            validator(_, value) {
              if (!value || value.length >= 6) {
                return Promise.resolve()
              }
              return Promise.reject('Please enter password at least 6 characters')
            },
          },
        ]}
      >
        <Input
          size='large'
          type='password'
          placeholder='Your new password here ...'
          onChange={(e) => {
            setChangePassword({ ...changePassword, newPassword: e.target.value })
          }}
        />
      </Form.Item>

      <Form.Item>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          className='w-full'
          onClick={() => {
            handleChangePassword(changePassword, navigate)
          }}
        >
          Change Password
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ChangePasswordFrom
