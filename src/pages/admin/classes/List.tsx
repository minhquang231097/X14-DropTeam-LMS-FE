import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, PaginationProps, Space, Table, Typography, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheck, MdOutlineClose, MdAddCircleOutline, MdOutlineCircle } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AdminLayout from '@/layouts/admin'
import { ClassItems } from '@/data/classes'
import AdminSearch from '@/components/adminSearch'
import { useQueryString } from '@/utils/utils'
import { getClassesList } from '@/apis/classesList.api'

interface DataType {
  _id: string
  image_url?: string
  name?: string
  location?: string
  is_active?: boolean
}

const CustomContent = () => {
  const { useToken } = theme
  const { token } = useToken()
  const navigate = useNavigate()

  const queryString: { page?: string } = useQueryString()
  const page = Number(queryString.page) || 1

  // const [isActive, setIsActive] = useState(true)
  const [selectedClass, setSelectedClass] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: classData } = useQuery({
    queryKey: ['class', page, 10],
    queryFn: async () => {
      const res = await getClassesList(page, 10)
      return res.data.data.list
    },
  })

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/course/?id=${selectedClass?._id}`)
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error)
    }
    setIsModalOpen(false)
  }

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
      dataIndex: 'status',
      width: '15%',
      render: (status: any) => (
        <Typography.Text
          style={{
            color:
              status === 'ON'
                ? token.colorSuccessText
                : status === 'OFF'
                  ? token.colorErrorText
                  : token.colorWarningText,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {status === 'ON' ? (
            <>
              <MdOutlineCheck className='text-[24px] m-1' /> ACTIVE
            </>
          ) : status === 'OFF' ? (
            <>
              <MdOutlineClose className='text-[24px] m-1' /> CANCELED
            </>
          ) : (
            <>
              <MdOutlineCircle className='text-[24px] m-1' /> UPCOMING
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
              navigate(`/admin/classes/show/${cls._id}`)
            }}
          >
            Show
          </Button>
          {/* <Button
            type='primary'
            danger
            onClick={() => {
              setSelectedClass(class)
              setIsModalOpen(true)
            }}
          >
            Delete
          </Button> */}
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
          // dataSource={ClassItems}
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
