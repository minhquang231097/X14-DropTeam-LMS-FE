import React from 'react'
import ImgCrop from 'antd-img-crop'
import { Breadcrumb, Card, Form, Input, Typography, Row, Col, Upload, UploadProps, Button, message, Space } from 'antd'
import { Link } from 'react-router-dom'
import { UploadOutlined } from '@ant-design/icons'
import AdminLayout from '@/layouts/admin'

const CustomContent = () => {
  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info: any) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
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
            title: 'Create',
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <Typography.Title
          level={3}
          className='mt-0 mx-1'
        >
          Create a new Facility
        </Typography.Title>
        <Form layout='vertical'>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Row style={{ margin: '8px 0' }}>
                <Typography.Text>* Facility Name</Typography.Text>
                <Input />
              </Row>
              <Row style={{ margin: '8px 0' }}>
                <Typography.Text>* Facility Location</Typography.Text>
                <Input />
              </Row>
              <Row style={{ margin: '8px 0' }}>
                <Typography.Text>* Facility Description</Typography.Text>
                <Input.TextArea />
              </Row>
            </Col>
            <Col
              span={12}
              style={{ display: 'flex', flexDirection: 'column', margin: '8px 0' }}
            >
              <Typography.Text>* Facility Image</Typography.Text>
              <ImgCrop rotationSlider>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
              </ImgCrop>
            </Col>
          </Row>
          <Space
            size='middle'
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Button type='default'>Cancel</Button>
            <Button type='primary'>Update</Button>
          </Space>
        </Form>
      </Card>
    </>
  )
}

const AdminCreateFacilities: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminCreateFacilities
