import { useState } from 'react'
import { Button, Modal } from 'antd'
import ForgotPassword from './ForgotPassword'
import Logo from '../../../assets/images/logo/logo-with-shadow.png'

const ModalForgotPassword = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <Button
        type='primary'
        onClick={() => setModalOpen(true)}
        size='large'
        className='mt-4'
      >
        Forgot Password
      </Button>
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
        <h1>Forgot Password</h1>
        <p>Fill the form to reset your password.</p>
        <ForgotPassword />
        Return to <a href='/'>Sign up!</a>
      </Modal>
    </div>
  )
}

export default ModalForgotPassword
