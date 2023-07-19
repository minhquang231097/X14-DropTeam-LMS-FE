import { useState } from 'react'
import { Button, Modal } from 'antd'
import Logo from '../../../assets/images/logo/logo-with-shadow.png'
import Register from './Register'

const ModalRegister = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <Button
        type='default'
        onClick={() => setModalOpen(true)}
        size='large'
      >
        Register
      </Button>
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
        Already have an account? <a href='/'>Login now!</a>
        <Register />
      </Modal>
    </div>
  )
}

export default ModalRegister
