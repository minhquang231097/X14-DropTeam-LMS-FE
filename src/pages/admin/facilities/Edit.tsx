import React from 'react'
import { Breadcrumb, Card, Form, Input, Typography, Row, Col, Button, message, Space, Select } from 'antd'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import http from '@/utils/http'
import AdminLayout from '@/layouts/admin'
import { getWorkplace } from '@/apis/workplaceByID.api'
// import { UploadOutlined } from '@ant-design/icons'

interface IWorkplace {
  name: string
  workplace_code: string
  address: string
  status: string
}

const CustomContent = () => {
  const [form] = Form.useForm()

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const updateWorkplace = async (workplace: IWorkplace) => {
    if (!id) {
      throw new Error('Missing id parameter')
    }
    await http.put('/workplace', workplace, {
      params: {
        id,
      },
    })
  }

  const { mutate, isLoading } = useMutation(updateWorkplace, {
    onSuccess: () => {
      // Perform any necessary actions after successful creation
      form.resetFields()
    },
  })

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

  const handleSubmit = async (values: IWorkplace) => {
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
            title: <Link to='/admin/facilities/all'>Facilities</Link>,
          },
          {
            title: `${workplace.name}`,
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
            Update The Facility
          </Typography.Title>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label='Facility Name'
                name='name'
                rules={[{ required: true, message: 'Please enter the name' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Facility Code'
                name='workplace_code'
                rules={[{ required: true, message: 'Please enter the code' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Facility Location'
                name='address'
                rules={[{ required: true, message: 'Please enter the location' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Facility Status'
                name='status'
                rules={[{ required: true, message: 'Please select the status' }]}
              >
                <Select
                  options={[
                    { label: 'OFF', value: 'OFF' },
                    { label: 'ON', value: 'ON' },
                    { label: 'UPCOMING', value: 'UPCOMING' },
                  ]}
                />
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
              <Button
                type='default'
                onClick={() => navigate(`/admin/facilities/show/${id}`)}
              >
                Cancel
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Update
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const AdminEditFacilities: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminEditFacilities
