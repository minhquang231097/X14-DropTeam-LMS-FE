import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import React from 'react'
import ButtonComponent from './components/Button'

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{ token: { fontFamily: 'Inter, Roboto, sans-serif' } }}>
      <StyleProvider hashPriority='high'>
        <ButtonComponent />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
