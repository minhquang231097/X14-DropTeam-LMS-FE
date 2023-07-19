import { Button, Checkbox, Form, Input, Select } from 'antd'
import './register.css'

const { Option } = Select

const Register = () => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  }

  const prefixSelector = (
    <Form.Item
      name='prefix'
      noStyle
    >
      <Select style={{ width: 70 }}>
        <Option value='84'>+84</Option>
        <Option value='00'>+00</Option>
      </Select>
    </Form.Item>
  )

  return (
    <Form
      form={form}
      name='register'
      className='register-form grid grid-cols-2'
      onFinish={onFinish}
      initialValues={{ prefix: '84' }}
      scrollToFirstError
    >
      {/* email */}
      <Form.Item
        name='email'
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!'
          },
          {
            required: true,
            message: 'Please input your E-mail!'
          }
        ]}
      >
        <p className='login-label'>Email</p>
        <Input
          size='large'
          placeholder='Email address here ...'
        />
      </Form.Item>

      {/* username */}
      <Form.Item
        name='username'
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <p className='login-label'>Username</p>
        <Input
          size='large'
          placeholder='Username ...'
        />
      </Form.Item>

      {/* address */}
      <Form.Item
        name='address'
        rules={[{ type: 'array', required: true, message: 'Please select your address!' }]}
      >
        <p className='login-label'>Address</p>
        <Input
          size='large'
          style={{ width: '100%' }}
          placeholder='Your address ...'
        />
      </Form.Item>

      {/* phone number */}
      <Form.Item
        name='phone'
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <p className='login-label'>Phone number</p>
        <Input
          size='large'
          addonBefore={prefixSelector}
          style={{ width: '100%' }}
          placeholder='Phone number ...'
        />
      </Form.Item>

      {/* gender */}
      <Form.Item
        name='gender'
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <p className='login-label'>Gender</p>
        <Select
          size='large'
          placeholder='Select your gender'
        >
          <Option value='male'>Male</Option>
          <Option value='female'>Female</Option>
          <Option value='other'>Other</Option>
        </Select>
      </Form.Item>

      {/* password */}
      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
        hasFeedback
      >
        <p className='login-label'>Password</p>
        <Input.Password
          size='large'
          placeholder='********'
        />
      </Form.Item>

      {/* confirm password */}
      <Form.Item
        name='confirm'
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('The new password that you entered do not match!'))
            }
          })
        ]}
      >
        <p className='login-label'>Confirm Password</p>
        <Input.Password
          size='large'
          placeholder='********'
        />
      </Form.Item>

      {/* accept agreement */}
      <Form.Item
        name='agreement'
        valuePropName='checked'
        rules={[
          {
            validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')))
          }
        ]}
      >
        <Checkbox>
          I have read the <a href='/'>Agreement</a>
        </Checkbox>
      </Form.Item>

      {/* submit */}
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register
