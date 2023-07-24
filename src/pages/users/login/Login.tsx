import { Button, Checkbox, Form, Input } from 'antd'
import './login.css'

const Login = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }
  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your Username!' }]}
        noStyle
      >
        <p className='login-label'>Username or email</p>
        <Input
          size='large'
          placeholder='Username or Email address here ...'
        />
      </Form.Item>
      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
        noStyle
      >
        <p className='login-label'>Password</p>
        <Input.Password
          size='large'
          type='password'
          placeholder='********'
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name='remember'
          valuePropName='checked'
          noStyle
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a
          className='login-form-forgot'
          href='/'
        >
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          size='large'
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
