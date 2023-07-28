import React from 'react'
// import { Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Logo from '@/assets/images/logo/logo-with-shadow.png'

const Login: React.FC = () => {
  return (
    <div className='w-full min-h-screen pt-20 pb-[96px] bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black'>
      <div className='bg-white w-[480px] p-10 pb-4 rounded-lg mx-auto'>
        <img
          src={Logo}
          alt=''
          className='w-[20%]'
        />
        <h1>Login</h1>
        {/* Don’t have an account?{' '}
        <Link
          to='/register'
          className='no-underline text-blue-500'
        >
          Register now!
        </Link> */}
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
