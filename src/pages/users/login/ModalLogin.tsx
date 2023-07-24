import { useState } from 'react'
import { Button, Modal } from 'antd'
import Login from './Login.tsx'
import Logo from '../../../assets/images/logo/logo-with-shadow.png'

const ModalLogin = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <Button
        type='primary'
        onClick={() => setModalOpen(true)}
        size='large'
      >
        Login
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
        <h1>Login</h1>
        Don’t have an account? <a href='/'>Register now!</a>
        <Login />
      </Modal>
    </div>
  )
}

export default ModalLogin
