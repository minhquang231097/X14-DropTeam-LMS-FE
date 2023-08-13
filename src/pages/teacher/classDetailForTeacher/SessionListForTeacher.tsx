/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import SessionListTable from './SessionListTable'
import { useQueryString } from '@/utils/utils'
import { getSessionsByClassCode } from '@/apis/sessionByClassCode.api'
import { getClassById } from '@/apis/class.api'

const SessionListForTeacher: React.FC = () => {
  const navigate = useNavigate()
  const queryString: { class_code?: string; id?: string } = useQueryString()
  const class_code = String(queryString.class_code).toLocaleLowerCase()
  const id = String(queryString.id)

  const { data } = useQuery({
    queryKey: ['sessions', class_code],
    queryFn: async () => {
      const res = await getSessionsByClassCode(class_code)
      return res.data
    },
  })

  const classData = useQuery({
    queryKey: ['class', id],
    queryFn: async () => {
      const res = await getClassById(id)
      return res.data
    },
  }).data

  console.log(classData)

  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto py-8 grid grid-cols-7 gap-4'>
        <SidebarTeacher />
        <div
          className='col-span-6 row-span-4 bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200 overflow-hidden'
          style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
        >
          <div className='p-4 flex justify-between items-start'>
            <div>
              <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>
                {classData ? classData.data.class_code : 'Class Name'}
              </span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total sessions: <span className='text-blue-600'>{data ? data.data.length : ''}</span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Schedule: <span className='text-blue-600'>Mon & Fri</span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Start at:{' '}
                <span className='text-blue-600'>
                  {classData ? new Date(classData.data.start_at).toLocaleDateString('vi-VN') : 'DD/MM/YYYY'}
                </span>
              </p>
              <Button
                className='mt-4'
                type='primary'
                onClick={() => navigate('/teacher/lessons-list')}
              >
                Lesson List
              </Button>
            </div>
            <input
              type='text'
              placeholder='Search Sessions Name ...'
              className='h-8 dark:bg-[#0B1324] rounded-md outline-none pl-2 border-[1px] border-solid border-gray-500 dark:border-[#0B1324] focus:outline-none focus:border-sky-500 dark:focus:border-sky-500 dark:focus:border-solid dark:focus:border-[1px] focus:border-[1px] dark:text-gray-100'
            />
          </div>
          <SessionListTable {...data} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SessionListForTeacher
