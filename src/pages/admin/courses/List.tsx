import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, Modal, Space, Table, TableProps, Typography, notification } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MdAddCircleOutline } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { ColumnsType } from 'antd/es/table'
import AdminLayout from '@/layouts/admin'
import AdminSearch from '@/components/search/adminSearch'
import { getCoursesList } from '@/apis/coursesList.api'
import LevelTag from '@/components/tag/LevelTag'
import { COMMON_LEVEL } from '@/utils/level'
import http from '@/utils/http'

interface DataType {
  _id: string
  course_code: string
  image?: string
  title?: string
  location?: string
  is_active?: boolean
  create_at?: string
  formated_date: string
  level: COMMON_LEVEL
}

dayjs.extend(customParseFormat)

const CustomContent = () => {
  const navigate = useNavigate()

  // const queryString: { page?: string } = useQueryString()
  // const page = Number(queryString.page) || 1
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 10

  const [selectedCourse, setSelectedCourse] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: courseData } = useQuery({
    queryKey: ['courses', page, limit],
    queryFn: async () => {
      const res = await getCoursesList(page, limit)
      return res.data
    },
  })

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra)
    const { current, pageSize } = pagination
    navigate(`/admin/courses/all?page=${current}&limit=${pageSize}`)
  }

  const handleDelete = async () => {
    try {
      await http.delete(`/course/${selectedCourse?._id}`)
      // Perform any necessary actions after successful deletion
      notification.success({
        message: 'Delete successful',
        description: 'The course has been deleted successfully',
      })
    } catch (error: any) {
      notification.error({
        message: 'Delete failed',
        description: error.message,
      })
    }

    setIsModalOpen(false)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '30%',
      render: (image: any) => (
        <Image
          src={image.length > 0 ? image : 'https://via.placeholder.com/500x250'}
          alt='Course Image'
        />
      ),
    },
    {
      title: 'Course',
      dataIndex: 'course_code',
      width: '40%',
      sorter: true,
      render: (course_code: string, course: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {course_code}: {course.title}
          </Typography.Text>
          <Typography.Text>Created at: {dayjs(course.create_at).format('DD/MM/YYYY')}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Difficulty',
      dataIndex: 'level',
      width: '10%',
      sorter: true,
      render: (value: COMMON_LEVEL) => (
        <LevelTag
          level={value}
          style={{ fontSize: '14px', padding: '4px 8px' }}
        />
      ),
    },
    {
      title: 'Action',
      width: '15%',
      render: (course: DataType) => (
        <Space>
          <Button
            type='primary'
            onClick={() => {
              navigate(`/admin/courses/show/${course._id}`)
            }}
          >
            Show
          </Button>
          <Button
            type='primary'
            danger
            onClick={() => {
              setSelectedCourse(course)
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
            title: 'Courses',
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
            Course List
          </Typography.Title>
          <Space
            className='flex'
            size='middle'
          >
            <AdminSearch />
            <Button
              type='primary'
              icon={<MdAddCircleOutline className='text-[18px]' />}
              onClick={() => navigate('/admin/courses/create')}
              style={{ display: 'flex', alignItems: 'center', height: '40px', fontSize: '16px' }}
            >
              Create
            </Button>
          </Space>
        </div>
        {courseData && (
          <Table
            rowKey={(course: DataType) => course._id}
            columns={columns}
            dataSource={courseData.data}
            pagination={{
              position: ['bottomRight'],
              current: Number(page),
              pageSize: Number(limit),
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [5, 10, 20],
              showSizeChanger: true,
              showQuickJumper: true,
              total: courseData.total,
            }}
            onChange={onChange}
            bordered
            style={{ marginTop: 16 }}
          />
        )}
        <Modal
          title='Confirm Delete'
          onOk={handleDelete}
          okType='danger'
          onCancel={() => setIsModalOpen(false)}
          getContainer={false}
          open={isModalOpen}
        >
          <Typography.Text>Are you sure you want to delete this course?</Typography.Text>
        </Modal>
      </Card>
    </>
  )
}

const AdminListCourses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminListCourses
