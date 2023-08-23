import React from 'react'
import { Button, Form, Input } from 'antd'
import '../../user/profile/ChangePassword/ChangePassword.css'
import { useState } from 'react';
import handleChangePassword from '@/apis/changePassword.api';

// const onFinish = (values: any) => {
//   console.log('Success:', values)
// }

// const onFinishFailed = (errorInfo: any) => {
//   console.log('Failed:', errorInfo)
// }

const AdminChangePassword: React.FC = () => {
  // const [oldPassword, setOldPassword] = useState("1234");
  const [changePasswordValue, setChangePasswordValue] = useState({ oldPassword: '', newPassword: '' })


  return (
    <div className='changepassword-container'>
      <div>
        <h1>Change Password</h1>
      </div>
      <Form
        name='basic'
        layout='vertical'
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Old Password'
          name='oldpassword'
          rules={[
            { required: true, message: 'Please input your password!' },
            // () => ({
            //   validator(_, value) {
            //     if () {
            //       return Promise.resolve();
            //     }
            //     return Promise.reject(new Error('Your old password do not match!'));
            //   },
            // }),
          ]}
        >
          <Input.Password onChange={(event) => setChangePasswordValue({ ...changePasswordValue, oldPassword: event.target.value })} />
        </Form.Item>

        <Form.Item
          label='New Password'
          name='newpassword'
          rules={[
            { required: true, message: 'Please input your password!' },
            () => ({
              validator(_, value) {
                if (value.length >= 6) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The password must be at least 6 characters long!'));
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password onChange={(e)=>setChangePasswordValue({...changePasswordValue, newPassword:e.target.value})}/>
        </Form.Item>

        <Form.Item
          label='Confirm Password'
          name='confirmpassword'
          hasFeedback
          rules={[{
            required: true,
            message: 'Please input your password!'
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newpassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit' onClick={()=>handleChangePassword(changePasswordValue)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AdminChangePassword
