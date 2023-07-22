import React from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import Header from './components/header/Header'
import { Routes, Route } from 'react-router-dom'
import ModalLogin from './components/pages/login/ModalLogin'
import Home from './components/pages/home/Home'
import CoursesList from './components/pages/cousesList/CoursesList'
import Footer from './components/footer/Footer'

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority='high'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/courses-list'
            element={<CoursesList />}
          />
          <Route
            path='/login'
            element={<ModalLogin />}
          />
        </Routes>
        <Footer />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
