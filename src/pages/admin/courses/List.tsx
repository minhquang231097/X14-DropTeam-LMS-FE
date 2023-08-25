import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, Modal, Space, Table, TableProps, Typography, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheck, MdOutlineClose, MdAddCircleOutline } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import AdminLayout from '@/layouts/admin'
import AdminSearch from '@/components/search/adminSearch'
import { getCoursesList } from '@/apis/coursesList.api'
import { useQueryString } from '@/utils/utils'

interface DataType {
  _id: string
  course_code: string
  image?: string
  title?: string
  location?: string
  is_active?: boolean
  created_at?: string
  formated_date: string
}

dayjs.extend(customParseFormat)

const CustomContent = () => {
  const { useToken } = theme
  const { token } = useToken()
  const navigate = useNavigate()

  const queryString: { page?: string } = useQueryString()
  const page = Number(queryString.page) || 1

  const [selectedCourse, setSelectedCourse] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: courseData } = useQuery({
    queryKey: ['course', page, 10],
    queryFn: async () => {
      const res = await getCoursesList(page, 10)
      return res.data
    },
  })

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra)
    const { current } = pagination
    navigate(`/admin/courses/all?page=${current}&limit=10`)
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/course/?id=${selectedCourse?._id}`)
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error)
    }
    setIsModalOpen(false)
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '25%',
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
      render: (course_code: string, course: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {course_code}: {course.title}
          </Typography.Text>
          <Typography.Text>Created at: {dayjs(course.created_at).format('DD/MM/YYYY')}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      width: '20%',
      render: () => (
        <Typography.Text
          style={{
            color: token.colorSuccessText,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MdOutlineCheck className='text-[24px] m-1' />
          Active
        </Typography.Text>
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
          {/* <Button
            type='primary'
            danger
            onClick={() => {
              setSelectedCourse(course)
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
              current: page,
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [10],
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
