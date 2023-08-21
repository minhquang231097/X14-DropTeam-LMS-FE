import React from 'react'
import './coursesList.css'
import { useQuery } from '@tanstack/react-query'
import { Select, Pagination, ConfigProvider } from 'antd'
import Sidebar from '@/layouts/user/Sidebar'
import CourseCard from '@/components/CourseCard'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import { useQueryString } from '@/utils/utils'
import { getCoursesList } from '@/apis/coursesList.api'

const CoursesList: React.FC = () => {
  const queryString: { page?: string } = useQueryString()
  const page = Number(queryString.page) || 1

  const { data } = useQuery({
    queryKey: ['courses', page],
    queryFn: async () => {
      const res = await getCoursesList(page, 6)
      return res.data.data.allCourses
    },
  })

  return (
    <>
      <Header />
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorText: '#888',
              itemActiveBg: 'transparent',
            },
            Select: {
              colorText: '#888',
              colorBorder: '#777',
              colorBgContainer: 'trasparent',
              colorTextPlaceholder: '#888',
              colorBgSpotlight: '#888',
            },
            Checkbox: {
              colorBgContainer: 'transparent',
            },
            Radio: {
              colorBgContainer: 'transparent',
            },
          },
        }}
      >
        <div className='h-[128px] dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-gradient-to-r from-[#24C6DC] to-[#514A9D] flex items-center'>
          <p className='max-w-[1280px] mx-auto text-white text-4xl font-bold m-0'>Courses List</p>
        </div>
        <div className='max-w-[1280px] mx-auto'>
          <div className='flex items-center justify-between mb-4 mt-10'>
            <p className='text-gray-500'>
              Displaying <span className='text-blue-500 font-bold'>{data ? data.length : ''}</span> out of{' '}
              <span className='text-blue-500 font-bold'> 25</span> courses
            </p>
            <Select
              placeholder='Sort by'
              style={{ width: 120 }}
              options={[
                { value: 'newest', label: 'Newest' },
                { value: 'free', label: 'Free' },
              ]}
            />
          </div>
        </div>
        <div className='max-w-[1280px] mx-auto mb-[96px] grid grid-rows-1 grid-cols-4 gap-6'>
          <div className='row-span-1'>
            <Sidebar />
          </div>

          <div className='col-span-3 grid grid-cols-3 row-span-1'>
            <div className='col-span-3 grid grid-cols-3 gap-6'>
              {data
                ? data.map((course: any) => (
                    <CourseCard
                      {...course}
                      key={course._id}
                    />
                  ))
                : ''}
            </div>
            <div className='flex justify-center col-start-2 mt-10'>
              <Pagination
                defaultCurrent={1}
                total={20}
              />
            </div>
          </div>
        </div>
      </ConfigProvider>
      <Footer />
    </>
  )
}

export default CoursesList
