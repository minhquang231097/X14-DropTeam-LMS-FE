import { Button, Form, Input } from 'antd'

const ForgotPassword = () => {
  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
    >
      <Form.Item
        name='email'
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <p className='login-label'>Email</p>
        <Input
          size='large'
          placeholder='Email address here ...'
        />
      </Form.Item>

      <Form.Item>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ForgotPassword
