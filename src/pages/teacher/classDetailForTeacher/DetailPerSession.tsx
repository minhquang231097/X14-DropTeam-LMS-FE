import React, { useState } from 'react'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import { Input } from 'antd'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import DetailPerSessionTable from './DetailPerSessionTable'
import { useQuery } from '@tanstack/react-query'
import { useQueryString } from '@/utils/utils'
import { getSessionById } from '@/apis/sessionBySessionId.api'
import { getStudentsListPerSession } from '@/apis/studentsPerSession'

const DetailPerSession: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  const queryString: { id?: string; class_code?: string } = useQueryString()
  const id = String(queryString.id)
  const class_code = String(queryString.class_code)

  const sessionData = useQuery({
    queryKey: ['session', id],
    queryFn: async () => {
      const res = await getSessionById(id)
      return res.data.data
    },
  }).data

  const studentsData = useQuery({
    queryKey: ['students', class_code],
    queryFn: async () => {
      const res = await getStudentsListPerSession(class_code)
      return res.data.data
    },
  })

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
                {sessionData ? 'Session Code: ' + sessionData.session_code : 'Session Code'}
              </span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total students: <span className='text-blue-600'>10</span>
              </p>
            </div>
            <Input.Search
              placeholder='Search Student Name ...'
              style={{ width: 280 }}
              onSearch={(value) => setSearchText(value)}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <DetailPerSessionTable searchText={searchText} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailPerSession
