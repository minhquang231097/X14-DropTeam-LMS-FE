/* eslint-disable @typescript-eslint/naming-convention */
import React, { useState } from 'react'
import { Button, Input } from 'antd'
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
  const [searchText, setSearchText] = useState('')
  const navigate = useNavigate()

  const queryString: { class_code?: string; id?: string } = useQueryString()
  const class_code = String(queryString.class_code)
  const id = String(queryString.id)

  const { data } = useQuery({
    queryKey: ['sessions', class_code],
    queryFn: async () => {
      const res = await getSessionsByClassCode(class_code)
      return res.data.data
    },
  })

  const classData = useQuery({
    queryKey: ['class', id],
    queryFn: async () => {
      const res = await getClassById(id)
      return res.data
    },
  }).data

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
                {classData ? 'Class Code: ' + classData.data.class_code : 'Class Name'}
              </span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                {/* Total sessions: <span className='text-blue-600'>{data ? data.data.length : ''}</span> */}
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2 flex'>
                Schedule:{' '}
                <span className='text-blue-600 flex'>
                  {classData && classData.data.schedule
                    ? [...classData.data.schedule].map((ele) => {
                        if (ele === 0) {
                          return <span className='ml-2 text-yellow-500'>Monday</span>
                        } else if (ele === 1) {
                          return <div className='ml-2 text-pink-500'>Tuesday</div>
                        } else if (ele === 2) {
                          return <div className='ml-2 text-green-500'>Wednesday</div>
                        } else if (ele === 3) {
                          return <div className='ml-2 text-orange-500'>Thursday</div>
                        } else if (ele === 4) {
                          return <div className='ml-2 text-blue-500'>Friday</div>
                        } else if (ele === 5) {
                          return <div className='ml-2 text-purple-500'>Saturday</div>
                        } else if (ele === 6) {
                          return <div className='ml-2 text-red-500'>Sunday</div>
                        }
                      })
                    : 'undefined'}
                </span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Start at:{' '}
                <span className='text-blue-600'>
                  {classData ? new Date(classData.data.end_at).toLocaleDateString('vi-VN') : 'DD/MM/YYYY'}
                </span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Expected end at:{' '}
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
            <Input.Search
              placeholder='Search Session Name ...'
              style={{ width: 280 }}
              onSearch={(value) => setSearchText(value)}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <SessionListTable
            data={{ ...data }}
            searchText={searchText}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SessionListForTeacher
