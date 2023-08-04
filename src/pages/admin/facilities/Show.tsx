import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Breadcrumb, Card, Typography, Row, Col, Image, Divider, Space } from 'antd'
import AdminLayout from '@/layouts/admin'
import { FacilityItems } from '@/data/facility'

const CustomContent = () => {
  const { id } = useParams()
  const facility = FacilityItems.find((item) => item.key === id)

  if (!facility) {
    return <Typography.Text>Facility not found</Typography.Text>
  }

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
          {
            title: `${facility.name}`,
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <Row gutter={[16, 16]}>
          <Col span={16}>
            <Typography.Title
              level={3}
              className='mt-0 mx-1'
            >
              {facility.name}
            </Typography.Title>
            <Typography.Text className='mt-2 mx-1'>{facility.location}</Typography.Text>
          </Col>
          <Col span={8}>
            <Image
              src={facility.image_url}
              alt={facility.name}
            />
          </Col>
          <Divider />
          <Col span={24}>
            <Space direction='vertical'>
              <Typography.Title
                level={4}
                className='-mt-1'
              >
                Description
              </Typography.Title>
              <Typography.Text>THIS IS THE FACILITY DESCRIPTION</Typography.Text>
            </Space>
          </Col>
        </Row>
      </Card>
    </>
  )
}

const AdminShowFacilities: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminShowFacilities
