import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoursesList from './pages/cousesList/CoursesList'
import CourseDetail from './pages/courseDetail/CourseDetail'
import Home from './pages/home/Home'
import Register from './pages/register/Register.tsx'
import Login from './pages/login/Login.tsx'
import AdminLogin from './pages/admin/login'
import ForgotPassword from './pages/forgotPassword/ForgotPassword.tsx'
import NotFound404 from './components/notFound404/NotFound404'
import AdminHome from './pages/admin/main/index'

const App: React.FC = () => {
  return (
    <Router>
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
          path='/admin'
          element={<AdminHome />}
        />
        <Route
          path='/admin/login'
          element={<AdminLogin />}
        />
        <Route
          path='*'
          element={<NotFound404 />}
        />
      </Routes>
    </Router>
  )
}

export default App
