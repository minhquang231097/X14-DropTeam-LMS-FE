import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, Modal, Space, Table, TableProps, Typography, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheck, MdOutlineClose, MdAddCircleOutline, MdOutlineCircle } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AdminLayout from '@/layouts/admin'
import AdminSearch from '@/components/adminSearch'
import { useQueryString } from '@/utils/utils'
import { getClassesList } from '@/apis/classesList.api'

interface DataType {
  _id: string
  image_url?: string
  name?: string
  location?: string
  is_active?: boolean
  mentor: IMentor
}

interface IMentor {
  fullname: string
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
      return res.data.data
    },
  })

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
    const { current } = pagination
    navigate(`/admin/classes/all?page=${current}&limit=10`)
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/classes/?id=${selectedClass?._id}`)
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error)
    }
    setIsModalOpen(false)
  }

  const columns = [
    // {
    //   title: 'Image',
    //   dataIndex: 'image_url',
    //   width: '30%',
    //   render: (image_url: string) => (
    //     <Image
    //       src={image_url}
    //       alt='Class Image'
    //     />
    //   ),
    // },
    {
      title: 'Class',
      dataIndex: 'class_code',
      width: '40%',
      render: (class_code: string, cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {class_code}
          </Typography.Text>
          <Typography.Text>Mentor: {cls.mentor.fullname}</Typography.Text>
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
            Class List
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
        {classData && (
          <Table
            rowKey={(cls: DataType) => cls._id}
            columns={columns}
            dataSource={classData.list}
            pagination={{
              position: ['bottomRight'],
              current: page,
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [10],
              showSizeChanger: true,
              showQuickJumper: true,
              total: classData.total,
            }}
            onChange={onChange}
            bordered
            style={{ marginTop: 16 }}
          />
        )}
      </Card>
      <Modal
        title='Confirm Delete'
        onOk={handleDelete}
        okType='danger'
        onCancel={() => setIsModalOpen(false)}
        getContainer={false}
        open={isModalOpen}
      >
        <Typography.Text>Are you sure you want to delete this class?</Typography.Text>
      </Modal>
    </>
  )
}

const AdminListClasses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminListClasses
