import React from 'react'
import { Routes, Route } from 'react-router-dom'

// USER
import ScrollToTop from './layouts/scrollToTop.ts'
import Home from './pages/user/home/Home'
import CoursesList from './pages/user/cousesList/CoursesList'
import CourseDetail from './pages/user/courseDetail/CourseDetail'
import Register from './pages/user/register/Register.tsx'
import Login from './pages/user/login/Login.tsx'
import ForgotPassword from './pages/user/forgotPassword/ForgotPassword.tsx'
import NotFound404 from './pages/notFound404/NotFound404.tsx'
import SendMailDone from './pages/user/forgotPassword/SendMailDone.tsx'
import ClassesListForTeacher from './pages/teacher/classesListForTeacher/ClassesListForTeacher.tsx'
import SessionListForTeacher from './pages/teacher/classDetailForTeacher/SessionListForTeacher.tsx'
import EditProfile from './pages/user/editProfile/EditProfile.tsx'
import ResetPassword from './pages/user/resetPassword/ResetPassword.tsx'
import LessonsListForTeacher from './pages/teacher/lessonsListForTeacher/LessonsListForTeacher.tsx'
import DetailPerSession from './pages/teacher/classDetailForTeacher/DetailPerSession.tsx'
import ChangePassword from './pages/user/changePassword/ChangePassword.tsx'

// ADMIN
// import ColorModeContextProvider from './contexts/colorMode.tsx'
import AdminLogin from './pages/admin/login'
import AdminHome from './pages/admin/main/index'
import AdminListFacilities from './pages/admin/facilities/List.tsx'
import AdminShowFacilities from './pages/admin/facilities/Show.tsx'
import AdminCreateFacilities from './pages/admin/facilities/Create.tsx'
import AdminListCourses from './pages/admin/courses/List.tsx'
import AdminShowCourses from './pages/admin/courses/Show.tsx'
import AdminCreateCourses from './pages/admin/courses/Create.tsx'
import AdminEditCourses from './pages/admin/courses/Edit.tsx'
import AdminProfile from './pages/admin/profile/index.tsx'
import AdminChangePassword from './pages/admin/profile/ChangePassword.tsx'
import AdminEditFacilities from './pages/admin/facilities/Edit.tsx'
import AdminListClasses from './pages/admin/classes/List.tsx'
import AdminShowClasses from './pages/admin/classes/Show.tsx'
import AdminCreateClasses from './pages/admin/classes/Create.tsx'
import AdminEditClasses from './pages/admin/classes/Edit.tsx'
import AdminTeachers from './pages/admin/userlists/TeacherList.tsx'
import AdminStudents from './pages/admin/userlists/StudentList.tsx'
import AdminLessons from './pages/admin/lessons/index.tsx'
import AdminFeedbacks from './pages/admin/feedbacks/index.tsx'
import AdminStudentEdit from './pages/admin/userlists/StudentEdit.tsx'
import AdminTeacherEdit from './pages/admin/userlists/TeacherEdit.tsx'
import Profile from './pages/user/profile/index.tsx'
import Forbidden403 from './pages/forbidden403/Fobidden403.tsx'
import LoginForm from './pages/user/login/LoginForm.tsx'

const App: React.FC = () => {
  const USER = JSON.parse(localStorage.getItem('user') as string)
  return (
    <>
      <Routes>
        {/* USER */}
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
          element={USER ? <EditProfile /> : <LoginForm />}
        />
        <Route
          path='/change-password'
          element={USER ? <ChangePassword /> : <NotFound404 />}
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
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/change-password'
          element={<ChangePassword />}
        />

        {/* TEACHER */}
        <Route
          path='/teacher/classes-list'
          element={USER && USER.role === 'MENTOR' ? <ClassesListForTeacher /> : <Forbidden403 />}
        />
        <Route
          path='/teacher/class-detail'
          element={USER && USER.role === 'MENTOR' ? <SessionListForTeacher /> : <Forbidden403 />}
        />
        <Route
          path='/teacher/lessons-list'
          element={USER && USER.role === 'MENTOR' ? <LessonsListForTeacher /> : <Forbidden403 />}
        />
        <Route
          path='/teacher/class-detail/session'
          element={USER && USER.role === 'MENTOR' ? <DetailPerSession /> : <Forbidden403 />}
        />

        {/* ADMIN */}
        <Route
          path='/admin'
          element={USER && USER.role === 'ADMIN' ? <AdminHome /> : <Forbidden403 />}
        />
        <Route
          path='/admin/facilities/all'
          element={<AdminListFacilities />}
        // element={USER && USER.role === 'ADMIN' ? <AdminListFacilities /> : <Forbidden403 />}
        />
        <Route
          path='/admin/facilities/show/:id'
          element={USER && USER.role === 'ADMIN' ? <AdminShowFacilities /> : <Forbidden403 />}
        />
        <Route
          path='/admin/facilities/edit/:id'
          element={<AdminEditFacilities />}
        />
        <Route
          path='/admin/facilities/create'
          element={USER && USER.role === 'ADMIN' ? <AdminCreateFacilities /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/categories'
          element={USER && USER.role === 'ADMIN' ? <AdminListCategories /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/categories/show/:id'
          element={USER && USER.role === 'ADMIN' ? <AdminShowCategories /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/categories'
          element={USER && USER.role === 'ADMIN' ? <AdminListCategories /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/categories/create'
          element={USER && USER.role === 'ADMIN' ? <AdminCreateCategories /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/all'
          element={USER && USER.role === 'ADMIN' ? <AdminListCourses /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/show/:id'
          element={USER && USER.role === 'ADMIN' ? <AdminShowCourses /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/create'
          element={USER && USER.role === 'ADMIN' ? <AdminCreateCourses /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/edit/:id'
          element={USER && USER.role === 'ADMIN' ? <AdminEditCourses /> : <Forbidden403 />}
        />
        <Route
          path='/admin/courses/show/:id/lessons'
          element={<AdminLessons />}
        />
        <Route
          path='/admin/classes/all'
          element={<AdminListClasses />}
        />
        <Route
          path='/admin/classes/show/:id'
          element={<AdminShowClasses />}
        />
        <Route
          path='/admin/classes/create'
          element={<AdminCreateClasses />}
        />
        <Route
          path='/admin/classes/edit/:id'
          element={<AdminEditClasses />}
        />
        <Route
          path='/admin/users/teachers'
          element={<AdminTeachers />}
        />
        <Route
          path='/admin/users/students'
          element={<AdminStudents />}
        />
        <Route
          path='/admin/users/teachers/edit/:id'
          element={<AdminTeacherEdit />}
        />
        <Route
          path='/admin/users/students/edit/:id'
          element={<AdminStudentEdit />}
        />
        <Route
          path='/admin/classes/create'
          element={<AdminCreateClasses />}
        />
        <Route
          path='/admin/classes/edit/:id'
          element={<AdminEditClasses />}
        />
        <Route
          path='/admin/classes/feedbacks'
          element={<AdminFeedbacks />}
        />
        <Route
          path='/admin/profile'
          element={USER && USER.role === 'ADMIN' ? <AdminProfile /> : <Forbidden403 />}
        />
        <Route
          path='/admin/change-password'
          element={USER && USER.role === 'ADMIN' ? <AdminChangePassword /> : <Forbidden403 />}
        />
        <Route
          path='/admin/login'
          element={USER && USER.role === 'ADMIN' ? <AdminLogin /> : <Forbidden403 />}
        />
        <Route
          path='*'
          element={<NotFound404 />}
        />
      </Routes>
      <ScrollToTop />
    </>
  )
}

export default App
