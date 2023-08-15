import React, { useState } from 'react'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import ClassListTable from './ClassListTable'
import { Input } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { useQueryString } from '@/utils/utils'
import { getClassesList } from '@/apis/classesList.api'
import { getClassByClassCode } from '@/apis/searchClassByClassCode.api'

const ClassesListForTeacher: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  const queryString: { page?: string } = useQueryString()
  const page = Number(queryString.page) || 1

  const { data } = useQuery({
    queryKey: ['classes', page],
    queryFn: async () => {
      const res = await getClassesList(page, 20)
      return res.data.data
    },
  })

  // const searchData = useQuery({
  //   queryKey: ['search', searchText],
  //   queryFn: async () => {
  //     const res = await getClassByClassCode(String(searchText).toUpperCase())
  //     return res.data
  //   },
  // }).data

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
              <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>Classes List For Teacher</span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total classes: <span className='text-blue-600'>{data && data.total}</span>
              </p>
            </div>

            <Input.Search
              placeholder='Search Class Name ...'
              style={{ width: 280 }}
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={(value) => setSearchText(value)}
            />
          </div>
          <ClassListTable
            data={{ ...data }}
            searchText={searchText}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ClassesListForTeacher
