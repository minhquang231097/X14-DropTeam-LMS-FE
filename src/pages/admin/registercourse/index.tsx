import React from 'react'
import ImgCrop from 'antd-img-crop'
import {
  Breadcrumb,
  Card,
  Form,
  Input,
  Typography,
  Row,
  Col,
  Upload,
  UploadProps,
  Button,
  notification,
  Space,
  Select,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import AdminLayout from '@/layouts/admin'
import { createWorkplace } from '@/apis/workplaceCreate.api'

const CustomContent = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation(createWorkplace, {
    onSuccess: () => {
      // Perform any necessary actions after successful creation
      notification.success({
        message: 'Update successful',
        description: 'The facility has been updated successfully',
      })
      form.resetFields()
      // navigate('/admin/register/all')
    },
    onError: (error: Error) => {
      // Perform any necessary actions after failed creation
      notification.error({
        message: 'Update failed',
        description: error.message,
      })
    },
  })

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: <Link to='/admin'>Home</Link>,
          },
          {
            title: 'Register Course',
          },
        ]}
        style={{ padding: '4px', fontSize: '16px' }}
      />
      <Card>
        <Form
          form={form}
          onFinish={mutate}
          layout='vertical'
        >
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Register Course Form
          </Typography.Title>
          <Row gutter={[24, 8]}>
            <Col span={12}>
              <Form.Item
                label='Course Title'
                name='course_id'
                rules={[{ required: true, message: 'Please enter the course title' }]}
              >
                <Select placeholder='Select' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Facility Name'
                name='workplace_id'
                rules={[{ required: true, message: 'Please enter the facility name' }]}
              >
                <Select placeholder='Select' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Student Name'
                name='student_id'
                rules={[{ required: true, message: 'Please enter the student name' }]}
              >
                <Select placeholder='Select' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Note'
                name='note'
                rules={[{ required: true, message: 'Please enter some notes' }]}
              >
                <Input.TextArea placeholder='Type' />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space
              size='middle'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                type='default'
                onClick={() => navigate('/admin/classes/all')}
              >
                Cancel
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Register
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const AdminRegisterCourse: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminRegisterCourse
