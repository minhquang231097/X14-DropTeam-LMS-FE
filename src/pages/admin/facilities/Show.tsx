import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Breadcrumb, Card, Typography, Row, Col, Image, Divider, Space, Button } from 'antd'
import { useQuery } from '@tanstack/react-query'
import AdminLayout from '@/layouts/admin'
// import { FacilityItems } from '@/data/facilities'
import { getWorkplace } from '@/apis/workplaceByID.api'
import { ShowButtonStyle } from '../style'

const CustomContent = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id } = useParams()
  const navigate = useNavigate()

  const { data: workplace } = useQuery({
    queryKey: ['workplace'],
    queryFn: async () => {
      const res = await getWorkplace(id as string)
      return res.data.data
    },
  })

  if (!workplace) {
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
            title: `${workplace.name}`,
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
              {workplace.name}
            </Typography.Title>
            <Typography.Text className='mt-2 mx-1'>{workplace.address}</Typography.Text>
          </Col>
          <Col span={8}>
            <Image
              src='https://via.placeholder.com/500x250'
              alt={workplace.name}
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
        <Space
          size='middle'
          style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}
        >
          <Button
            type='default'
            style={ShowButtonStyle}
            onClick={() => navigate('/admin/facilities/all')}
          >
            Back
          </Button>
          <Button
            type='primary'
            style={ShowButtonStyle}
            onClick={() => navigate(`/admin/facilities/edit/${id}`)}
          >
            Edit
          </Button>
        </Space>
      </Card>
    </>
  )
}

const AdminShowFacilities: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminShowFacilities
