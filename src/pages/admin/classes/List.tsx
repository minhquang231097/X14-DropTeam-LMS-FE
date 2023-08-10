import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Col, Image, Pagination, PaginationProps, Row, Space, Typography, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheck, MdOutlineClose, MdAddCircleOutline } from 'react-icons/md'
import AdminLayout from '@/layouts/admin'
import { ClassItems } from '@/data/class'

const CustomContent = () => {
  const { useToken } = theme
  const { token } = useToken()
  const navigate = useNavigate()

  const [isActive, setIsActive] = useState(true)

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize)
  }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Classes',
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <div className='flex justify-between'>
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Classes List
          </Typography.Title>
          <Button
            type='primary'
            icon={<MdAddCircleOutline className='text-[18px]' />}
            onClick={() => navigate('/admin/classes/create')}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            Create
          </Button>
        </div>
        {ClassItems.map((classes) => (
          <Card
            key={classes.key}
            bordered
            style={{ margin: '8px 0', border: '1px solid #4b5563' }}
          >
            <Row
              gutter={16}
              style={{ alignItems: 'center' }}
            >
              <Col span={6}>
                <Image
                  src={classes.image_url}
                  alt={classes.name}
                  preview={false}
                />
              </Col>
              <Col span={10}>
                <Space direction='vertical'>
                  <Typography.Text
                    strong
                    style={{ fontSize: '24px' }}
                  >
                    {classes.name}
                  </Typography.Text>
                  <Typography.Text>{classes.location}</Typography.Text>
                </Space>
              </Col>
              <Col span={4}>
                <Space
                  direction='vertical'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography.Text
                    strong
                    style={{ fontSize: '24px' }}
                  >
                    Status
                  </Typography.Text>
                  {classes.is_active === true ? (
                    <Typography.Text
                      style={{
                        color: token.colorSuccessText,
                        fontSize: '18px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MdOutlineCheck classesName='text-[24px]' />
                      Active
                    </Typography.Text>
                  ) : (
                    <Typography.Text
                      style={{
                        color: token.colorErrorText,
                        fontSize: '18px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MdOutlineClose classesName='text-[24px]' />
                      Inactive
                    </Typography.Text>
                  )}
                </Space>
              </Col>
              <Col span={4}>
                <Space
                  direction='vertical'
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Typography.Text
                    strong
                    style={{ fontSize: '24px' }}
                  >
                    Action
                  </Typography.Text>
                  <Space>
                    <Button
                      type='primary'
                      onClick={() => {
                        navigate(`/admin/classes/show/${classes.key}`)
                      }}
                    >
                      Show
                    </Button>
                    {classes.is_active === true ? (
                      <Button
                        type='primary'
                        danger
                        onClick={() => {
                          // eslint-disable-next-line no-param-reassign
                          classes.is_active = false
                          setIsActive(!isActive)
                        }}
                      >
                        Inactive
                      </Button>
                    ) : (
                      <Button
                        type='primary'
                        onClick={() => {
                          // eslint-disable-next-line no-param-reassign
                          classes.is_active = true
                          setIsActive(!isActive)
                        }}
                        style={{ backgroundColor: '#00b96b' }}
                      >
                        Active
                      </Button>
                    )}
                  </Space>
                </Space>
              </Col>
            </Row>
          </Card>
        ))}
        <Pagination
          showSizeChanger
          onShowSizeChange={onShowSizeChange}
          pageSizeOptions={[5, 10]}
          defaultCurrent={1}
          total={2}
          style={{ marginTop: '16px', textAlign: 'center' }}
        />
      </Card>
    </>
  )
}

const AdminListClasseses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminListClasseses
