import React from 'react'
import { Link } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import Logo from '@/assets/images/logo/logo-with-shadow.png'
import RegisterForm from './RegisterForm'

const Register: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            colorFillAlter: '#e5e7eb',
            colorBgContainer: '#e5e7eb',
            colorTextPlaceholder: '#6b7280',
            colorText: 'black',
            colorIcon: '#6b7280',
            colorBorder: '#d9d9d9',
          },
          Select: {
            colorBgContainer: '#e5e7eb',
            colorFillAlter: '#e5e7eb',
            colorText: 'black',
            colorTextPlaceholder: '#6b7280',
            colorBgElevated: '#e5e7eb',
            colorBorder: '#d9d9d9',
          },
          Checkbox: {
            colorBgContainer: '#e5e7eb',
            colorBorder: '#d9d9d9',
          },
          DatePicker: {
            colorBgContainer: '#e5e7eb',
            colorTextPlaceholder: '#6b7280',
            colorText: 'black',
            colorBgElevated: '#e5e7eb',
            colorBorder: '#d9d9d9',
            colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
            colorTextHeading: '#374151',
            colorIcon: '#6b7280',
          },
        },
      }}
    >
      <div className='w-full pt-20 pb-[96px] bg-gradient-to-r from-[#24C6DC] to-[#514A9D] dark:bg-gradient-to-r dark:from-[#1A2980] dark:to-[#26D0CE]'>
        <div
          className='bg-white w-[1000px] p-10 pb-4 rounded-lg mx-auto'
          style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', border: '1px solid rgba(0,0,0,.14)' }}
        >
          <img
            src={Logo}
            alt=''
            className='login-logo w-[200px]'
          />
          <h1 className='text-black'>Register</h1>
          <span className='text-black'>Already have an account?</span>{' '}
          <Link
            to='/login'
            className='no-underline text-blue-500'
          >
            Login now!
          </Link>
          <RegisterForm />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Register
