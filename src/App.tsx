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
          path='/admin/facilities/all'
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
    </Router>
  )
}

export default App
