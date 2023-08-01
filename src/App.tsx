import React from 'react'
import ScrollToTop from './components/layouts/scrollToTop.ts'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { Routes, Route } from 'react-router-dom'
import Home from './components/pages/user/home/Home'
import CoursesList from './components/pages/user/cousesList/CoursesList'
import CourseDetail from './components/pages/user/courseDetail/CourseDetail'
import Register from './components/pages/user/register/Register.tsx'
import Login from './components/pages/user/login/Login.tsx'
import ForgotPassword from './components/pages/user/forgotPassword/ForgotPassword.tsx'
import NotFound404 from './components/pages/notFound404/NotFound404.tsx'
import SendMailDone from './components/pages/user/forgotPassword/SendMailDone.tsx'
import ClassesListForTeacher from './components/pages/teacher/classesListForTeacher/ClassesListForTeacher.tsx'
import ClassDetailForTeacher from './components/pages/teacher/classDetailForTeacher/ClassDetailForTeacher.tsx'
import EditProfile from './components/pages/user/profileDetail/EditProfile.tsx'
import ResetPassword from './components/pages/user/resetPassword/ResetPassword.tsx'

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
            path='/profile-detail'
            element={<EditProfile />}
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
            path='/reset-password'
            element={<ResetPassword />}
          />
          <Route
            path='/teacher/classes-list'
            element={<ClassesListForTeacher />}
          />
          <Route
            path='/teacher/classes-detail'
            element={<ClassDetailForTeacher />}
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
