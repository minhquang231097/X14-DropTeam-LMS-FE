import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Input } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { FaFileUpload } from 'react-icons/fa'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import DetailPerSessionTable from './DetailPerSessionTable'
// import { useQueryString } from '@/utils/utils'
// import { getSessionById } from '@/apis/sessionBySessionId.api'
import { getStudentsListPerSession } from '@/apis/studentsPerSession'

const DetailPerSession: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  // const queryString: { id?: string; class_code?: string } = useQueryString()
  // const id = String(queryString.id)
  // const class_code = String(queryString.class_code)

  const [searchParams, setSearchParams] = useSearchParams()
  const session_code = searchParams.get('session_code') ?? ''
  const class_id = searchParams.get('class_id') ?? ''
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'

  // const sessionData = useQuery({
  //   queryKey: ['session', session_id],
  //   queryFn: async () => {
  //     const res = await getSessionById(session_id)
  //     return res
  //   },
  // })

  const studentsData = useQuery({
    queryKey: ['students', class_id, page, limit],
    queryFn: async () => {
      const res = await getStudentsListPerSession(class_id, page, limit)
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
              <span className='text-xl text-[#F56A00] font-bold'>
                {session_code ? `Session Code: ${session_code}` : 'Session Code'}
              </span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total students: <span className='text-blue-600'>{studentsData && studentsData.total}</span>
              </p>
            </div>
            <div className='flex flex-col items-end'>
              <Input.Search
                placeholder='Search Student Name ...'
                style={{ width: 280 }}
                onSearch={(value) => setSearchText(value)}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <Button
                className='mt-3'
                type='primary'
                icon={<FaFileUpload className='w-6 h-6' />}
                size='large'
                ghost
              />
            </div>
          </div>
          <DetailPerSessionTable
            data={studentsData as any}
            searchText={searchText}
            setSearchParams={setSearchParams}
            session_code={session_code}
            class_id={class_id}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DetailPerSession
