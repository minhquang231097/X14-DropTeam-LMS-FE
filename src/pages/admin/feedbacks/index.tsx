import React from 'react'
import AdminLayout from '@/layouts/admin'
import { Breadcrumb, Input, Button, Card, Image, PaginationProps, Space, Table, Typography, theme } from 'antd'


const CustomContent = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Feedback',
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <div className='flex justify-between'>
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Feedback Management
          </Typography.Title>
          {/* <Input.Search
            placeholder='Search Student Name ...'
            style={{ width: 280 }}
            onChange={(e) => handleSearch(e.target.value)}
            onSearch={handleSearch}
          /> */}
        </div>
        {/* <TeacherListTable
          data={studentsData as any}
          searchText={searchText}
          setSearchParams={setSearchParams}
          // role={class_id}
          filteredData={filteredData as any}
        /> */}
      </Card>
    </div>
  )
}

const AdminFeedbacks: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminFeedbacks
