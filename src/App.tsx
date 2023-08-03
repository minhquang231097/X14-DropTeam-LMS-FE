import React from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/layouts/scrollToTop.ts'
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
import LessonsListForTeacher from './components/pages/teacher/lessonsListForTeacher/LessonsListForTeacher.tsx'

import AdminLogin from './pages/admin/login'
import AdminHome from './pages/admin/main/index'
import AdminListFacilities from './pages/admin/facilities/List.tsx'
import AdminShowFacilities from './pages/admin/facilities/Show.tsx'
import AdminCreateFacilities from './pages/admin/facilities/Create.tsx'
import AdminListCourses from './pages/admin/courses/List.tsx'
import AdminShowCourses from './pages/admin/courses/Show.tsx'
import AdminCreateCourses from './pages/admin/courses/Create.tsx'
import AdminEditCourses from './pages/admin/courses/Edit.tsx'
import AdminListCategories from './pages/admin/categories/List.tsx'
import AdminShowCategories from './pages/admin/categories/Show.tsx'
import AdminCreateCategories from './pages/admin/categories/Create.tsx'
import AdminProfile from './pages/admin/profile/index.tsx'
import AdminChangePassword from './pages/admin/profile/ChangePassword.tsx'

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
            path='/teacher/class-detail'
            element={<ClassDetailForTeacher />}
          />
          <Route
            path='/teacher/lessons-list'
            element={<LessonsListForTeacher />}
          />
          <Route
            path='/admin'
            element={<AdminHome />}
          />
          <Route
            path='/admin/facilities'
            element={<AdminListFacilities />}
          />
          <Route
            path='/admin/facilities/show/:id'
            element={<AdminShowFacilities />}
          />
          <Route
            path='/admin/facilities/create'
            element={<AdminCreateFacilities />}
          />
          <Route
            path='/admin/courses/categories'
            element={<AdminListCategories />}
          />
          <Route
            path='/admin/courses/categories/show/:id'
            element={<AdminShowCategories />}
          />
          <Route
            path='/admin/courses/categories/create'
            element={<AdminCreateCategories />}
          />
          <Route
            path='/admin/courses/all'
            element={<AdminListCourses />}
          />
          <Route
            path='/admin/courses/show/:id'
            element={<AdminShowCourses />}
          />
          <Route
            path='/admin/courses/create'
            element={<AdminCreateCourses />}
          />
          <Route
            path='/admin/courses/edit/:id'
            element={<AdminEditCourses />}
          />
          <Route
            path='/admin/profile'
            element={<AdminProfile />}
          />
          <Route
            path='/admin/change-password'
            element={<AdminChangePassword />}
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
        <ScrollToTop />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
