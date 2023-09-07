import { Spin } from 'antd'
import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// USER
const ScrollToTop = lazy(() => import('./layouts/scrollToTop.ts'))
const Home = lazy(() => import('./pages/user/home/Home'))
const CoursesList = lazy(() => import('./pages/user/cousesList/CoursesList'))
const CourseDetail = lazy(() => import('./pages/user/courseDetail/CourseDetail'))
const Register = lazy(() => import('./pages/user/register/Register.tsx'))
const Login = lazy(() => import('./pages/user/login/Login.tsx'))
const ForgotPassword = lazy(() => import('./pages/user/forgotPassword/ForgotPassword.tsx'))
const NotFound404 = lazy(() => import('./pages/notFound404/NotFound404.tsx'))
const SendMailDone = lazy(() => import('./pages/user/forgotPassword/SendMailDone.tsx'))
const EditProfile = lazy(() => import('./pages/user/editProfile/EditProfile.tsx'))
const ResetPassword = lazy(() => import('./pages/user/resetPassword/ResetPassword.tsx'))
const DetailPerSession = lazy(() => import('./pages/teacher/classDetailForTeacher/DetailPerSession.tsx'))
const ChangePassword = lazy(() => import('./pages/user/changePassword/ChangePassword.tsx'))

// TEACHER
const ClassesListForTeacher = lazy(() => import('./pages/teacher/classesListForTeacher/ClassesListForTeacher.tsx'))
const SessionListForTeacher = lazy(() => import('./pages/teacher/classDetailForTeacher/SessionListForTeacher.tsx'))
const LessonsListForTeacher = lazy(() => import('./pages/teacher/lessonsListForTeacher/LessonsListForTeacher.tsx'))
const CoursesListForTeacher = lazy(() => import('./pages/teacher/coursesListForTeacher/CoursesListForTeacher.tsx'))

// ADMIN
const AdminHome = lazy(() => import('./pages/admin/home/index'))
const AdminListFacilities = lazy(() => import('./pages/admin/facilities/List.tsx'))
const AdminShowFacilities = lazy(() => import('./pages/admin/facilities/Show.tsx'))
const AdminCreateFacilities = lazy(() => import('./pages/admin/facilities/Create.tsx'))
const AdminListCourses = lazy(() => import('./pages/admin/courses/List.tsx'))
const AdminShowCourses = lazy(() => import('./pages/admin/courses/Show.tsx'))
const AdminCreateCourses = lazy(() => import('./pages/admin/courses/Create.tsx'))
const AdminEditCourses = lazy(() => import('./pages/admin/courses/Edit.tsx'))
const AdminEditFacilities = lazy(() => import('./pages/admin/facilities/Edit.tsx'))
const AdminListClasses = lazy(() => import('./pages/admin/classes/List.tsx'))
const AdminShowClasses = lazy(() => import('./pages/admin/classes/Show.tsx'))
const AdminCreateClasses = lazy(() => import('./pages/admin/classes/Create.tsx'))
const AdminEditClasses = lazy(() => import('./pages/admin/classes/Edit.tsx'))
const AdminMentors = lazy(() => import('./pages/admin/userlists/MentorList.tsx'))
const AdminStudents = lazy(() => import('./pages/admin/userlists/StudentList.tsx'))
const AdminLessons = lazy(() => import('./pages/admin/lessons/Edit.tsx'))
const AdminFeedbacks = lazy(() => import('./pages/admin/feedbacks/index.tsx'))
const AdminStudentEdit = lazy(() => import('./pages/admin/userlists/StudentEdit.tsx'))
const AdminMentorEdit = lazy(() => import('./pages/admin/userlists/MentorEdit.tsx'))
const Forbidden403 = lazy(() => import('./pages/forbidden403/Fobidden403.tsx'))
const LoginForm = lazy(() => import('./pages/user/login/LoginForm.tsx'))
const AdminRegisterCourse = lazy(() => import('./pages/admin/registercourses/index.tsx'))

const App: React.FC = () => {
  const USER = JSON.parse(localStorage.getItem('user') as string)
  return (
    <>
      <Routes>
        {/* USER */}
        <Route
          path='/'
          element={
            <Suspense fallback={<Spin />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/courses-list'
          element={
            <Suspense fallback={<Spin />}>
              <CoursesList />
            </Suspense>
          }
        />
        <Route
          path='/course-detail'
          element={
            <Suspense fallback={<Spin />}>
              <CourseDetail />
            </Suspense>
          }
        />
        <Route
          path='/register'
          element={
            <Suspense fallback={<Spin />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<Spin />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='/edit-profile'
          element={
            USER ? (
              <Suspense fallback={<Spin />}>
                <EditProfile />
              </Suspense>
            ) : (
              <Suspense fallback={<Spin />}>
                <LoginForm />
              </Suspense>
            )
          }
        />
        <Route
          path='/change-password'
          element={
            USER ? (
              <Suspense fallback={<Spin />}>
                <ChangePassword />
              </Suspense>
            ) : (
              <NotFound404 />
            )
          }
        />
        <Route
          path='/forgot-password'
          element={
            <Suspense fallback={<Spin />}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path='/forgot-password/send-mail'
          element={
            <Suspense fallback={<Spin />}>
              <SendMailDone />
            </Suspense>
          }
        />
        <Route
          path='/reset-password'
          element={
            <Suspense fallback={<Spin />}>
              <ChangePassword />
            </Suspense>
          }
        />
        <Route
          path='/profile'
          element={
            USER ? (
              <Suspense fallback={<Spin />}>
                <EditProfile />
              </Suspense>
            ) : (
              <Suspense fallback={<Spin />}>
                <LoginForm />
              </Suspense>
            )
          }
        />
        <Route
          path='/change-password'
          element={
            USER ? (
              <Suspense fallback={<Spin />}>
                <ChangePassword />
              </Suspense>
            ) : (
              <Suspense fallback={<Spin />}>
                <LoginForm />
              </Suspense>
            )
          }
        />

        {/* TEACHER */}
        <Route
          path='/teacher/classes-list'
          element={
            USER && (USER.role === 'MENTOR' || 'ADMIN') ? (
              <Suspense fallback={<Spin />}>
                <ClassesListForTeacher />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/teacher/class-detail'
          element={
            USER && (USER.role === 'MENTOR' || 'ADMIN') ? (
              <Suspense fallback={<Spin />}>
                <SessionListForTeacher />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/teacher/lessons-list'
          element={
            USER && (USER.role === 'MENTOR' || 'ADMIN') ? (
              <Suspense fallback={<Spin />}>
                <LessonsListForTeacher />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/teacher/class-detail/session'
          element={
            USER && (USER.role === 'MENTOR' || 'ADMIN') ? (
              <Suspense fallback={<Spin />}>
                <DetailPerSession />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/teacher/courses-list'
          element={
            USER && (USER.role === 'MENTOR' || 'ADMIN') ? (
              <Suspense fallback={<Spin />}>
                <CoursesListForTeacher />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />

        {/* ADMIN */}
        <Route
          path='/admin'
          // element={<AdminHome />}
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminHome />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/facilities/all'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminListFacilities />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/facilities/show/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminShowFacilities />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/facilities/edit/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminEditFacilities />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/facilities/create'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminCreateFacilities />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/categories'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminListCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/categories/show/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminShowCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/categories'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminListCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/categories/create'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminCreateCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/all'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminListCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/show/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminShowCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/create'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminCreateCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/edit/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminEditCourses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/show/:id/lessons'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminLessons />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/classes/all'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminListClasses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/classes/show/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminShowClasses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/classes/create'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminCreateClasses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/classes/edit/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminEditClasses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/users/mentors'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminMentors />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/users/students'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminStudents />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/users/mentors/edit/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminMentorEdit />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/users/students/edit/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminStudentEdit />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/classes/create'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminCreateClasses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/classes/edit/:id'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminEditClasses />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/feedbacks'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminFeedbacks />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        <Route
          path='/admin/courses/register-course'
          element={
            USER && USER.role === 'ADMIN' ? (
              <Suspense fallback={<Spin />}>
                <AdminRegisterCourse />
              </Suspense>
            ) : (
              <Forbidden403 />
            )
          }
        />
        {/* <Route
          path='/admin/profile'
          element={USER && USER.role === 'ADMIN' ? <AdminProfile /> : <Forbidden403 />}
        />
        <Route
          path='/admin/change-password'
          element={USER && USER.role === 'ADMIN' ? <AdminChangePassword /> : <Forbidden403 />}
        /> */}
        {/* <Route
          path='/admin'
          element={<Statistic />}
        /> */}
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
