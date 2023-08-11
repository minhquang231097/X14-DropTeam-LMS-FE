import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, PaginationProps, Space, Table, Typography, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheck, MdOutlineClose, MdAddCircleOutline } from 'react-icons/md'
import AdminLayout from '@/layouts/admin'
import { ClassItems } from '@/data/classes'
import AdminSearch from '@/components/adminSearch'

interface DataType {
  key: string
  image_url?: string
  name?: string
  location?: string
  is_active?: boolean
}

const CustomContent = () => {
  const { useToken } = theme
  const { token } = useToken()
  const navigate = useNavigate()

  const [isActive, setIsActive] = useState(true)

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize)
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image_url',
      width: '30%',
      render: (image_url: string) => (
        <Image
          src={image_url}
          alt='Class Image'
        />
      ),
    },
    {
      title: 'Class',
      dataIndex: 'name',
      width: '40%',
      render: (name: string, cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {name}
          </Typography.Text>
          <Typography.Text>{cls.location}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      width: '15%',
      render: (is_active: boolean) => (
        <Typography.Text
          style={{
            color: is_active ? token.colorSuccessText : token.colorErrorText,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {is_active ? (
            <>
              <MdOutlineCheck className='text-[24px]' />
              Active
            </>
          ) : (
            <>
              <MdOutlineClose className='text-[24px]' />
              Inactive
            </>
          )}
        </Typography.Text>
      ),
    },
    {
      title: 'Action',
      width: '15%',
      render: (cls: DataType) => (
        <Space>
          <Button
            type='primary'
            onClick={() => {
              navigate(`/admin/classes/show/${cls.key}`)
            }}
          >
            Show
          </Button>
          {cls.is_active ? (
            <Button
              type='primary'
              danger
              onClick={() => {
                // eslint-disable-next-line no-param-reassign
                cls.is_active = false
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
                cls.is_active = true
                setIsActive(!isActive)
              }}
              style={{ backgroundColor: '#00b96b' }}
            >
              Active
            </Button>
          )}
        </Space>
      ),
    },
  ]

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Class',
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
          <Space
            className='flex'
            size='middle'
          >
            <AdminSearch />
            <Button
              type='primary'
              icon={<MdAddCircleOutline className='text-[18px]' />}
              onClick={() => navigate('/admin/classes/create')}
              style={{ display: 'flex', alignItems: 'center', height: '40px', fontSize: '16px' }}
            >
              Create
            </Button>
          </Space>
        </div>
        <Table
          columns={columns}
          dataSource={ClassItems}
          pagination={{
            position: ['bottomRight'],
            pageSizeOptions: [5, 10],
            onShowSizeChange,
            showSizeChanger: true,
            defaultCurrent: 1,
          }}
          bordered
          style={{ marginTop: 16 }}
        />
      </Card>
    </>
  )
}

const AdminListClasses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminListClasses
