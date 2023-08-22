import React, { useState } from 'react'
import { Input } from 'antd'
import { useSearchParams } from 'react-router-dom'
// import { useQueryString } from '@/utils/utils'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import LessonsListTable from './LessonsListTable'
import { useQuery } from '@tanstack/react-query'
import { getLessonsList } from '@/apis/lessonsList.api'

const LessonsListForTeacher: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  // const queryString: { page?: string } = useQueryString()
  // const page = Number(queryString.page) || 1

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'

  const { data } = useQuery({
    queryKey: ['classes', page, limit],
    queryFn: async () => {
      const res = await getLessonsList(page, limit)
      return res.data
    },
  })

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
              <span className='text-xl text-[#F56A00] font-bold'>Lessons List For Teacher</span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total lessons: <span className='text-blue-600'>{data ? data.total : ''}</span>
              </p>
            </div>
            <Input.Search
              placeholder='Search Lesson Name ...'
              style={{ width: 280 }}
              onSearch={(value) => setSearchText(value)}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <LessonsListTable
            data={data as any}
            searchText={searchText}
            setSearchParams={setSearchParams}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LessonsListForTeacher
