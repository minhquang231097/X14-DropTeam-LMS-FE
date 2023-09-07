import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  Card,
  Form,
  Input,
  Typography,
  Row,
  Col,
  Button,
  notification,
  Space,
  Select,
  Modal,
  Table,
  TableProps,
  Image,
} from 'antd'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons'
import { ColumnsType } from 'antd/es/table'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import AdminLayout from '@/layouts/admin'
import { getCoursesList } from '@/apis/coursesList.api'
import { searchWorkplaceForAdmin } from '@/apis/searchWorkplaceForAdmin'
import { getRegisterCourseList, registerCourseForAdmin } from '@/apis/registerCourse.api'
import { getUserListForAdmin } from '@/apis/userForAdmin.api'
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
  create_at?: string
  start_at?: string
  end_at?: string
  course?: ICourse
  mentor?: IMentor
  workplace?: IWorkplace
}

dayjs.extend(customParseFormat)

const CustomContent = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined)
  const [selectedWorkplace, setSelectedWorkplace] = useState<string | undefined>(undefined)
  const [selectedStudent, setSelectedStudent] = useState<string | undefined>(undefined)

  const [confirmLoading, setConfirmLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 50
  const search = searchParams.get('search') ?? null

  // const [isActive, setIsActive] = useState(true)
  const [selectedClass, setSelectedClass] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filteredData, setFilteredData] = useState<any>(null)

  const { data: classData } = useQuery({
    queryKey: ['classes', page, limit],
    queryFn: async () => {
      const res = await getClassesList(page, limit)
      return res.data
    },
  })

  const { data: registCourseData } = useQuery({
    queryKey: ['regist-course', page, limit],
    queryFn: async () => {
      const res = await getRegisterCourseList(page, limit)
      return res.data
    },
  })

  console.log(registCourseData)

  useEffect(() => {
    if (classData) {
      setFilteredData(classData)
    }
  }, [classData])

  useEffect(() => {
    if (search) {
      const filtered = classData?.data.filter(
        (item: any) =>
          item.class_code.toLowerCase().includes(search.toLowerCase()) ||
          item.course.title.toLowerCase().includes(search.toLowerCase()),
      )
      setFilteredData({ data: filtered, total: classData?.total })
    } else {
      // navigate(`/admin/classes/all?page=${page}&limit=${limit}`)
      setFilteredData({ data: classData?.data, total: classData?.total })
    }
  }, [limit, page, search, classData])

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    // const { current, pageSize } = pagination
    const searchParam = search ? `&search=${search}` : ''
    // navigate(`/admin/classes/all?page=${current}&limit=${pageSize}${searchParam}`)
  }

  const handleSearch = (value: string) => {
    setSearchParams({ search: value })
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

  const { data: course } = useQuery({
    queryKey: ['courses', page, limit],
    queryFn: async () => {
      const res = await getCoursesList(page, limit)
      return res.data.data
    },
  })

  const { data: workplace } = useQuery({
    queryKey: ['workplaces'],
    queryFn: async () => {
      const res = await searchWorkplaceForAdmin('ON')
      return res.data.data
    },
  })

  const { data: students } = useQuery({
    queryKey: ['user', page, limit],
    queryFn: async () => {
      const res = await getUserListForAdmin('STUDENT', page, limit)
      return res.data.data
    },
  })

  const { mutate, isLoading } = useMutation(registerCourseForAdmin, {
    onSuccess: () => {
      // Perform any necessary actions after successful creation
      notification.success({
        message: 'Update successful',
        description: 'The student has been successfully registered',
      })
      setIsModalOpen(false)
      // form.resetFields()
      // navigate('/admin/register/all')
    },
    onError: (error: Error) => {
      // Perform any necessary actions after failed creation
      notification.error({
        message: 'Update failed',
        description: error.message,
      })
    },
    retry: 3,
  })

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys)
    // setSelectedRowKeys(newSelectedRowKeys);
  }

  const rowSelection = {
    // selectedRowKeys,
    onChange: onSelectChange,
  }

  const OnCourseChange = (value: string) => {
    setSelectedCourse(value)
    // const { data: courseByID } = useQuery({
    //   queryKey: ['courseByID'],
    //   queryFn: async () => {
    //     const res = await getCourse(value)
    //     return res.data.data
    //   },
    // })
    // console.log(courseByID)
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Image</Typography.Text>,
      dataIndex: 'image_url',
      width: '12.5%',
      render: () => (
        <Image
          src='https://res.cloudinary.com/dar4pvqx2/image/upload/v1693931926/vitebanner_wtcoum.jpg'
          alt='Class Image'
        />
      ),
    },
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Class</Typography.Text>,
      dataIndex: 'class_code',
      width: '25%',
      render: (class_code: string, cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '22px' }}
          >
            {class_code}
          </Typography.Text>
          <Typography.Text strong>{cls.course?.title}</Typography.Text>
          <Typography.Text>Created at: {dayjs(cls.create_at).format('DD/MM/YYYY')}</Typography.Text>
        </Space>
      ),
      sorter: (a, b) => {
        const dateA: any = a.create_at ? dayjs(a.create_at) : dayjs('')
        const dateB: any = b.create_at ? dayjs(b.create_at) : dayjs('')
        return dateA - dateB
      },
      defaultSortOrder: 'descend',
    },
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Schedule</Typography.Text>,
      dataIndex: 'schedule',
      width: '20%',
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
      title: <Typography.Text style={{ fontSize: '18px' }}>Facility</Typography.Text>,
      width: '15%',
      sorter: true,
      render: (cls: DataType) => (
        <Space direction='vertical'>
          <Typography.Text>{cls.workplace?.name}</Typography.Text>
        </Space>
      ),
    },
    {
      title: <Typography.Text style={{ fontSize: '14px' }}>Number of Students</Typography.Text>,
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
      title: <Typography.Text style={{ fontSize: '18px' }}>Action</Typography.Text>,
      width: '10%',
      render: (cls: DataType) => (
        <Space>
          <Button
            type='primary'
            size='large'
            onClick={() => {
              navigate(`/admin/classes/show/${cls._id}`)
            }}
          >
            <EyeOutlined className='text-white text-[22px]' />
          </Button>
          <Button
            type='primary'
            size='large'
            danger
            onClick={() => {
              setSelectedClass(cls)
              setIsModalOpen(true)
            }}
          >
            <DeleteOutlined className='text-white text-[22px]' />
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
            title: <Link to='/admin'>Home</Link>,
          },
          {
            title: 'Register Course',
          },
        ]}
        style={{ padding: '4px', fontSize: '16px' }}
      />
      <Card>
        <Typography.Title
          level={3}
          className='mt-0 mx-1'
        >
          Register Course
        </Typography.Title>
        {/* <Card
          bordered={false}
          bodyStyle={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
        > */}
        <div className='flex justify-between py-2'>
          <Button
            type='primary'
            onClick={() => setIsModalOpen(true)}
          >
            Register For New Student
          </Button>
          <Button
            type='primary'
            onClick={() => setIsModalOpen(true)}
          >
            Add New Students To Class
          </Button>
        </div>

        {/* </Card> */}
        {classData && (
          <Table
            rowKey={(cls: DataType) => cls._id}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={search ? filteredData?.data : classData.data}
            pagination={{
              position: ['bottomRight'],
              current: Number(page),
              pageSize: Number(limit),
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [5, 10, 20],
              showSizeChanger: true,
              showQuickJumper: true,
              total: search ? filteredData?.total : classData.total,
            }}
            onChange={onChange}
            style={{ marginTop: 16 }}
          />
        )}
      </Card>

      <Modal
        title={<Typography.Text style={{ fontSize: '24px' }}>Register Course Modal</Typography.Text>}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={mutate}
          layout='vertical'
          style={{ paddingTop: '8px' }}
        >
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label='Course Title'
                name='course_id'
                rules={[{ required: true, message: 'Please enter the course title' }]}
              >
                <Select
                  placeholder='Select'
                  options={(course || []).map((data: { _id: string; title: string }) => ({
                    value: data._id,
                    label: data.title,
                  }))}
                  value={selectedCourse}
                  onChange={OnCourseChange}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Facility Name'
                name='workplace_id'
                rules={[{ required: true, message: 'Please enter the facility name' }]}
              >
                <Select
                  placeholder='Select'
                  options={(workplace || []).map((data: { _id: string; name: string }) => ({
                    value: data._id,
                    label: data.name,
                  }))}
                  value={selectedWorkplace}
                  onChange={(value) => setSelectedWorkplace(value)}
                  showSearch
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Student Name'
                name='student_id'
                rules={[{ required: true, message: 'Please enter the student name' }]}
              >
                <Input.Search
                  placeholder='Select'
                  // options={(students || []).map((data: { _id: string; fullname: string }) => ({
                  //   value: data._id,
                  //   label: data.fullname,
                  // }))}
                  // mode='multiple'
                  // maxTagCount='responsive'
                  value={selectedStudent}
                  // onChange={(value) => setSelectedStudent(value)}
                  // showSearch
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label='Note'
                name='note'
                rules={[{ required: true, message: 'Please enter some notes' }]}
              >
                <Input.TextArea placeholder='Type...' />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Space
              size='middle'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                type='default'
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Register
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

const AdminRegisterCourse: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminRegisterCourse
