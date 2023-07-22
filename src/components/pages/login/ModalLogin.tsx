import { useState } from 'react'
import { Modal } from 'antd'
import Login from './Login.tsx'
import Logo from '../../../assets/images/logo/logo-with-shadow.png'
import { IoMdLogIn } from 'react-icons/io'

const ModalLogin = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <div
        onClick={() => setModalOpen(true)}
        className='flex items-center text-gray-600 font-bold'
      >
        <IoMdLogIn className='text-2xl mr-2 p-2' />
        Login
      </div>
      <Modal
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
      >
        <img
          src={Logo}
          alt=''
          className='login-logo'
        />
        <h1>Login</h1>
        Don’t have an account? <a href='/'>Register now!</a>
        <Login />
      </Modal>
    </div>
  )
}

export default ModalLogin
