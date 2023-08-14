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
  message,
  Space,
  InputNumber,
} from 'antd'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import AdminLayout from '@/layouts/admin'
import { createCourse } from '@/apis/courseCreate.api'
// import { UploadOutlined } from '@ant-design/icons'

interface ICourse {
  course_code: string
  title: string
  image?: []
  desc?: string
  lesson_list?: []
  session_per_course?: number
  price?: number
  duration?: number
  level?: number
  rate?: number
  discount?: number
}

const CustomContent = () => {
  const [form] = Form.useForm()

  const { mutate, isLoading } = useMutation(createCourse, {
    onSuccess: () => {
      // Perform any necessary actions after successful creation
      form.resetFields()
    },
  })

  const handleSubmit = async (values: ICourse) => {
    try {
      mutate(values)
    } catch (error) {
      console.error(error)
    }
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
            title: 'Create',
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <Form
          form={form}
          onFinish={handleSubmit}
          layout='vertical'
        >
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Create A New Course
          </Typography.Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label='Course Title'
                name='title'
                rules={[{ required: true, message: 'Please enter the title' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Course Code'
                name='course_code'
                rules={[{ required: true, message: 'Please enter the code' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Number of Sessions per Course'
                name='session_per_course'
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label='Price'
                name='price'
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Lesson List'
                name='lesson_list'
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Duration'
                name='duration'
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label='Level'
                name='level'
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label='Discount'
                name='discount'
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Course Description'
                name='desc'
              >
                <Input.TextArea />
              </Form.Item>
            </Col>
          </Row>
          {/* <Col
                span={12}
                style={{ display: 'flex', flexDirection: 'column', margin: '8px 0' }}
              >
                <Typography.Text>* Facility Image</Typography.Text>
                <ImgCrop rotationSlider>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </ImgCrop>
              </Col> */}
          {/* </Row> */}
          <Form.Item>
            <Space
              size='middle'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button type='default'>Cancel</Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Create
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const AdminCreateCourses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminCreateCourses
