import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, Modal, PaginationProps, Space, Table, Typography, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdOutlineCheck, MdOutlineClose, MdAddCircleOutline } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AdminLayout from '@/layouts/admin'
// import { CourseItems } from '@/data/courses'
import AdminSearch from '@/components/adminSearch'
import { getCoursesList } from '@/apis/coursesList.api'
import { useQueryString } from '@/utils/utils'

interface DataType {
  _id: string
  course_code: string
  image?: string
  title?: string
  location?: string
  is_active?: boolean
}

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
      return res.data.data.list
    },
  })

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/course/?id=${selectedCourse?._id}`)
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error)
    }
    setIsModalOpen(false)
  }

  // const [isActive, setIsActive] = useState(true)

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize)
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '30%',
      render: (image: any) => (
        <Image
          src={image || 'https://via.placeholder.com/500x250'}
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
          <Typography.Text>{course.location}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'is_active',
      width: '15%',
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
        <Table
          columns={columns}
          dataSource={courseData}
          pagination={{
            position: ['bottomRight'],
            pageSizeOptions: [5, 10],
            onShowSizeChange,
            showSizeChanger: true,
            defaultCurrent: page,
          }}
          bordered
          style={{ marginTop: 16 }}
        />
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
