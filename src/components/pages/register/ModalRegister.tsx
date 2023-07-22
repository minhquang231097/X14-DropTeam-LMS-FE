import { useState } from 'react'
import { Modal } from 'antd'
import Logo from '../../../assets/images/logo/logo-with-shadow.png'
import { BsPersonAdd } from 'react-icons/bs'
import Register from './Register'

const ModalRegister = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <div
        onClick={() => setModalOpen(true)}
        className='flex items-center text-gray-600 font-bold'
      >
        <BsPersonAdd className='text-2xl mr-2 p-2' />
        Register
      </div>
      <Modal
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
        centered
        style={{ top: 20, marginBottom: 40 }}
        width={1000}
      >
        <img
          src={Logo}
          alt=''
          className='login-logo'
        />
        <h1>Register</h1>
        Already have an account? <a href='/login'>Login now!</a>
        <Register />
      </Modal>
    </div>
  )
}

export default ModalRegister
