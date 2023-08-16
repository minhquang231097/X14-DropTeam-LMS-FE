import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Breadcrumb, Card, Typography, Row, Col, Image, Divider, Space, Button } from 'antd'
import AdminLayout from '@/layouts/admin'
import { ClassItems } from '@/data/classes'
import { ShowButtonStyle } from '../style'

const CustomContent = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const foundClass = ClassItems.find((item) => item.key === id)

  if (!foundClass) {
    return <Typography.Text>Class not found</Typography.Text>
  }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <Link to='/admin/classes/all'>Classes</Link>,
          },
          {
            title: `${foundClass.name}`,
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
              {foundClass.name}
            </Typography.Title>
            <Typography.Text className='mt-2 mx-1'>{foundClass.location}</Typography.Text>
          </Col>
          <Col span={8}>
            <Image
              src={foundClass.image_url}
              alt={foundClass.name}
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
              <Typography.Text>THIS IS THE CLASS DESCRIPTION</Typography.Text>
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
            onClick={() => navigate('/admin/classes/all')}
          >
            Back
          </Button>
          <Button
            type='primary'
            style={ShowButtonStyle}
          >
            Edit
          </Button>
        </Space>
      </Card>
    </>
  )
}

const AdminShowClasses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminShowClasses
