import React from 'react'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import LessonsListTable from './LessonsListTable'

const LessonsListForTeacher: React.FC = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto py-8 grid grid-cols-7 grid-rows-auto gap-4'>
        <SidebarTeacher />
        <div
          className='col-span-6 row-span-4 bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200 overflow-hidden'
          style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
        >
          <div className='p-4 flex justify-between items-start'>
            <div>
              <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>Lessons List For Teacher</span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total lessons: <span className='text-blue-600'>10</span>
              </p>
            </div>
            <input
              type='text'
              placeholder='Search Lessons Name ...'
              className='h-8 dark:bg-[#0B1324] rounded-md outline-none pl-2 border-[1px] border-solid border-gray-500 dark:border-[#0B1324] focus:outline-none focus:border-sky-500 dark:focus:border-sky-500 dark:focus:border-solid dark:focus:border-[1px] focus:border-[1px] dark:text-gray-100'
            />
          </div>
          <LessonsListTable />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LessonsListForTeacher
