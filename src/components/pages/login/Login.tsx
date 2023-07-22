import { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import handleLogin from './login'
import './login.css'

const Login = () => {
  const [loginForm, setLoginForm] = useState({ username: '', password: '' })

  return (
    <Form
      name='normal_login'
      className='login-form'
      initialValues={{ remember: true }}
    >
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <p className='login-label'>Username or email</p>
        <Input
          size='large'
          placeholder='Username or Email address here ...'
          onChange={(e) => {
            setLoginForm({ ...loginForm, username: e.target.value })
          }}
        />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <p className='login-label'>Password</p>
        <Input.Password
          size='large'
          type='password'
          placeholder='********'
          onChange={(e) => {
            setLoginForm({ ...loginForm, password: e.target.value })
          }}
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
          onClick={() => handleLogin(loginForm.username, loginForm.password)}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Login
