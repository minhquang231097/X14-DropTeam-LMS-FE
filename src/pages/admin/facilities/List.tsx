import React from 'react'
import { Breadcrumb, Card, Image, Typography } from 'antd'
import { Link } from 'react-router-dom'
import AdminLayout from '@/layouts/admin'

const CustomContent = () => {
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <Link to='/admin/facilities/all'>Facilities</Link>,
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Typography.Title
        level={4}
        className='mt-2 mx-1'
      >
        Facility List
      </Typography.Title>
      <Card>
        <Card>
          <Image />
        </Card>
      </Card>
    </>
  )
}

const AdminListFacilities: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminListFacilities
