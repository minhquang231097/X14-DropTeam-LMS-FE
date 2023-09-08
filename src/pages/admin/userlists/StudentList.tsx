import React, { useContext, useState } from 'react'
import { Breadcrumb, Input, Button, Card, Image, PaginationProps, Space, Table, Typography, theme } from 'antd'
import { Link, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { MdSearch } from 'react-icons/md'
import AdminLayout from '@/layouts/admin'
import { getStudentsListForAdmin } from '@/apis/studentListForAdmin'
import { searchStudentForTeacher } from '@/apis/searchStudentForTeacher.api'
import StudentListTable from './StudentListTable'
import { ColorModeContext } from '@/contexts/colorMode'

const CustomContent = () => {
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const { mode } = useContext(ColorModeContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const user_role = searchParams.get('student') ?? ''
  const page = searchParams.get('page') ?? '1'
  const limit = searchParams.get('limit') ?? '10'

  const studentsData = useQuery({
    queryKey: ['role', user_role, page, limit],
    queryFn: async () => {
      const res = await getStudentsListForAdmin('student', page, limit)
      return res.data
    },
  }).data

  useQuery({
    queryKey: ['search', searchText],
    queryFn: async () => {
      const res = await searchStudentForTeacher(String(searchText).toUpperCase())
      setFilteredData(res.data)
    },
  }).data

  const handleSearch = (value: string) => {
    setSearchText(value)
  }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to='/admin'>Home</Link>,
          },
          {
            title: 'Students',
          },
        ]}
        style={{ padding: '4px', fontSize: '16px' }}
      />
      <Card>
        <div className='flex justify-between'>
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Student List
          </Typography.Title>
          <Input.Search
            placeholder='Search...'
            style={{ width: 280 }}
            onChange={(e) => handleSearch(e.target.value)}
            onSearch={handleSearch}
            enterButton={
              <MdSearch className={`text-${mode === 'light' ? 'black' : 'white'} align-middle text-[20px]`} />
            }
          />
        </div>
        <StudentListTable
          data={studentsData as any}
          searchText={searchText}
          setSearchParams={setSearchParams}
          // role={class_id}
          filteredData={filteredData as any}
        />
      </Card>
    </>
  )
}

const AdminStudents: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminStudents
