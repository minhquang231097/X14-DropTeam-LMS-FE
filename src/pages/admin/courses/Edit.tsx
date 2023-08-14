import React from 'react'
import { Breadcrumb, Button, Form, Input, Typography } from 'antd'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import AdminLayout from '@/layouts/admin'
import { updateCourse } from '@/apis/courseUpdate.api'
import { getCourse } from '@/apis/course.api'

interface ICourse {
  name: string
  address: string
  // Add more fields as needed
}

const CustomContent = () => {
  const { id } = useParams<{ id: string }>()
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const { data: course } = useQuery({
    queryKey: ['course'],
    queryFn: async () => {
      const res = await getCourse(id as string)
      return res.data.data
    },
  })

  if (!course) {
    return <Typography.Text>Facility not found</Typography.Text>
  }

  const handleSubmit = async () => {
    // try {
    //   await updateWorkplace(id)
    //   // Perform any necessary actions after successful update
    // } catch (error) {
    //   console.error(error)
    // }
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
            title: `${course.course_code}: ${course.title}`,
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Form
        form={form}
        onFinish={handleSubmit}
      >
        <Form.Item
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please enter the name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Address'
          name='address'
          rules={[{ required: true, message: 'Please enter the address' }]}
        >
          <Input />
        </Form.Item>
        {/* Add more form fields as needed */}
        <Form.Item>
          <Button
            type='primary'
            htmlType='submit'
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

const AdminEditCourses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminEditCourses
