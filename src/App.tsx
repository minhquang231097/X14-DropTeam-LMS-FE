import React from 'react'
import ScrollToTop from './components/layouts/scrollToTop/scrollToTop.ts'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/home/Home'
import CoursesList from './components/pages/cousesList/CoursesList'
import CourseDetail from './components/pages/courseDetail/CourseDetail'
import Register from './components/pages/register/Register.tsx'
import Login from './components/pages/login/Login.tsx'
import ForgotPassword from './components/pages/forgotPassword/ForgotPassword.tsx'
import NotFound404 from './components/pages/notFound404/NotFound404.tsx'
import SendMailDone from './components/pages/forgotPassword/SendMailDone.tsx'
import ChangePassword from './components/pages/changePassword/ChangePassword.tsx'

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority='high'>
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
            path='/course-detail'
            element={<CourseDetail />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
          <Route
            path='/forgot-password/send-mail'
            element={<SendMailDone />}
          />
          <Route
            path='/change-password'
            element={<ChangePassword />}
          />
          <Route
            path='*'
            element={<NotFound404 />}
          />
        </Routes>
        <ScrollToTop />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
