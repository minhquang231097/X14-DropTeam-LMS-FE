import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Logo from '@/assets/images/logo/logo-with-shadow.png'

const Login: React.FC = () => {
  return (
    <div className='w-full min-h-screen pt-20 pb-[96px] bg-gradient-to-r from-[#FEAC6E] via-[#C779D0] to-[#4BC0C8] dark:bg-gradient-to-r dark:from-[#12c2e9] dark:via-[#c491ed] dark:to-[#f7797d]'>
      <div className='bg-white w-[480px] p-10 pb-4 rounded-lg mx-auto'>
        <img
          src={Logo}
          alt=''
          className='w-[20%]'
        />
        <h1 className='text-black'>Login</h1>
        <span className='text-black'>Don’t have an account?</span>{' '}
        <Link
          to='/register'
          className='no-underline text-blue-500'
        >
          Register now!
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
