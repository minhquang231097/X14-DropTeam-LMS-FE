// import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import React from 'react'
import { ConfigProvider, Button } from 'antd'
// import ButtonComponent from './components/Button'

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority='high'>
        <h1 className='text-3xl text-red-900'>Hello world!</h1>
        <Button className='bg-green-500'>Test Integration</Button>
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
