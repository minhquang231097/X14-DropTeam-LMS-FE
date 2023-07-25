import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import handleSubmitForgot from './forgotPassword'

const ForgotPasswordForm: React.FC = () => {
  const [emailForgot, setEmailForgot] = useState('')

  return (
    <Form
      name='normal_login'
      initialValues={{ remember: true }}
      layout='vertical'
    >
      <Form.Item
        name='email'
        label={<p className='font-bold my-2'>Email</p>}
        hasFeedback
        rules={[
          {
            type: 'email',
            message: 'The input is not valid Email!',
          },
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          size='large'
          placeholder='Email address here ...'
          onChange={(e) => {
            setEmailForgot(e.target.value)
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
            handleSubmitForgot(emailForgot)
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ForgotPasswordForm
