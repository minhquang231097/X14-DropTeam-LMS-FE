import React from 'react'
import Logo from '@/assets/images/logo/logo-with-shadow.png'
import ForgotPasswordForm from './ForgotPasswordForm'
import { Link } from 'react-router-dom'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const ForgotPassword: React.FC = () => {
  return (
    <>
      <Header />
      <div className='w-full min-h-screen pt-20 pb-[96px] bg-gradient-to-r from-[#134E5E] to-[#71B280] dark:bg-gradient-to-r dark:from-[#8360c3] dark:to-[#2ebf91]'>
        <div className='bg-white w-[480px] p-10 pb-6 rounded-lg mx-auto'>
          <img
            src={Logo}
            alt=''
            className='w-[20%]'
          />
          <h1>Forgot Password</h1>
          <p>Fill the form to reset your password.</p>
          <ForgotPasswordForm />
          Return to{' '}
          <Link
            to='/login'
            className='no-underline text-blue-500'
          >
            Login!
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ForgotPassword
