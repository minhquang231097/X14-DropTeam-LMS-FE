import React, { useState } from 'react'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Breadcrumb, Button, Card, Image, Modal, Space, Table, TableProps, Typography, notification, theme } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MdAddCircleOutline } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import AdminLayout from '@/layouts/admin'
import AdminSearch from '@/components/search/adminSearch'
import { getClassesList } from '@/apis/classesList.api'
import { weekdays } from '@/utils/day'
import http from '@/utils/http'

interface IMentor {
  fullname: string
}

interface ICourse {
  title: string
}

interface IWorkplace {
  name: string
}
interface DataType {
  _id: string
  image_url?: string
  class_name?: string
  location?: string
  is_active?: boolean
  class_size?: number
  start_at?: string
  end_at?: string
  course?: ICourse
  mentor?: IMentor
  workplace?: IWorkplace
}

dayjs.extend(customParseFormat)

const CustomContent = () => {
  const navigate = useNavigate()

  // const queryString: { page?: string } = useQueryString()
  // const page = Number(queryString.page) || 1
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 10

  // const [isActive, setIsActive] = useState(true)
  const [selectedClass, setSelectedClass] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: classData } = useQuery({
    queryKey: ['classes', page, limit],
    queryFn: async () => {
      const res = await getClassesList(page, limit)
      return res.data
    },
  })

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra)
    const { current, pageSize } = pagination
    navigate(`/admin/classes/all?page=${current}&limit=${pageSize}`)
  }

  const handleDelete = async () => {
    try {
      await http.delete(`/class/${selectedClass?._id}`)
      // Perform any necessary actions after successful deletion
      notification.success({
        message: 'Delete successful',
        description: 'The class has been deleted successfully',
      })

    } catch (error: any) {
      notification.error({
        message: 'Delete failed',
        description: error.message,
      })
    }
    setIsModalOpen(false)
  }

  const columns = [
    {
      title: 'Class',
      dataIndex: 'class_code',
      width: '30%',
      sorter: true,
      render: (class_code: string, cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {class_code}
          </Typography.Text>
          <Typography.Text>Course: {cls.course?.title}</Typography.Text>
          <Typography.Text>Mentor: {cls.mentor?.fullname}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      width: '25%',
      sorter: true,
      render: (schedule: number[], cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text>
            Time: {dayjs(cls.start_at).format('DD/MM/YYYY')} - {dayjs(cls.end_at).format('DD/MM/YYYY')}
          </Typography.Text>
          <Typography.Text>
            Schedule:{' '}
            {schedule
              .map((day: number) => {
                const weekday = weekdays.find((w) => w.value === day)
                return weekday ? weekday.label : ''
              })
              .join(', ')}
          </Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Facility',
      width: '20%',
      sorter: true,
      render: (cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text>{cls.workplace?.name}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Number of Students',
      dataIndex: 'class_size',
      width: '10%',
      sorter: true,
      render: (class_size: number) => (
        <Space direction='vertical'>
          <Typography.Text>{class_size}</Typography.Text>
        </Space>
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
          <Button
            type='primary'
            danger
            onClick={() => {
              setSelectedClass(cls)
              setIsModalOpen(true)
            }}
          >
            Delete
          </Button>
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
            dataSource={classData.data}
            pagination={{
              position: ['bottomRight'],
              current: Number(page),
              pageSize: Number(limit),
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [5, 10, 20],
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
