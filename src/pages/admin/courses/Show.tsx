import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Breadcrumb, Card, Typography, Row, Col, Image, Divider, Space } from 'antd'
import AdminLayout from '@/layouts/admin'
import { CourseItems } from '@/data/courses'

const CustomContent = () => {
  const { id } = useParams()
  const foundCourse = CourseItems.find((item) => item.key === id)

  if (!foundCourse) {
    return <Typography.Text>Course not found</Typography.Text>
  }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <Link to='/admin/courses/all'>Courses</Link>,
          },
          {
            title: `${foundCourse.name}`,
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
              {foundCourse.name}
            </Typography.Title>
            <Typography.Text className='mt-2 mx-1'>{foundCourse.location}</Typography.Text>
          </Col>
          <Col span={8}>
            <Image
              src={foundCourse.image_url}
              alt={foundCourse.name}
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
              <Typography.Text>THIS IS THE COURSE DESCRIPTION</Typography.Text>
            </Space>
          </Col>
        </Row>
      </Card>
    </>
  )
}

const AdminShowCourses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminShowCourses
