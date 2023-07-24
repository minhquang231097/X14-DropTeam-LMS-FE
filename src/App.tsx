import React from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ScrollToTop from './components/scrollToTop/scrollToTop'
import Header from './components/header/Header'
import Home from './components/pages/home/Home'
import CoursesList from './components/pages/cousesList/CoursesList'
import CourseDetail from './components/pages/courseDetail/CourseDetail'
import Footer from './components/footer/Footer'
import Register from './components/pages/register/Register.tsx'
import Login from './components/pages/login/Login.tsx'
import ForgotPassword from './components/pages/forgotPassword/ForgotPassword.tsx'
import NotFound404 from './components/notFound404/NotFound404'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
              path='*'
              element={<NotFound404 />}
            />
          </Routes>
          <Footer />
          <ScrollToTop />
        </StyleProvider>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
