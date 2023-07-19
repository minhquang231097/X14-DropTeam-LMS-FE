import React from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import ModalLogin from './components/pages/login/ModalLogin'
import ModalRegister from './components/pages/register/ModalRegister'

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority='high'>
        <ModalLogin />
        <ModalRegister />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
