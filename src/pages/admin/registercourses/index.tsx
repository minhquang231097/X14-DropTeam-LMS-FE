import React, { useState } from 'react'
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
} from 'antd'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { ColumnsType } from 'antd/es/table'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import AdminLayout from '@/layouts/admin'
import { getCoursesList } from '@/apis/coursesList.api'
import { searchWorkplaceForAdmin } from '@/apis/searchWorkplaceForAdmin'
import { getRegisterCourseList, registerCourseForAdmin } from '@/apis/registerCourse.api'
import { getUserListForAdmin } from '@/apis/userForAdmin.api'
import http from '@/utils/http'
import { getClassesByCourse } from '@/apis/classesList.api'

interface IStudent {
  username?: string
  fullname?: string
  email?: string
  dob?: string
  phone_number?: string
}

interface ICourse {
  course_code?: string
  title?: string
}

interface IWorkplace {
  name: string
}
interface DataType {
  _id: string
  create_at?: string
  course?: ICourse
  student?: IStudent
  workplace?: IWorkplace
}

dayjs.extend(customParseFormat)

const CustomContent = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const [selectedCourse, setSelectedCourse] = useState<string | undefined>(undefined)
  const [selectedWorkplace, setSelectedWorkplace] = useState<string | undefined>(undefined)
  const [selectedStudent, setSelectedStudent] = useState<string | undefined>(undefined)
  const [selectedClass, setSelectedClass] = useState<string | undefined>(undefined)

  const [confirmLoading, setConfirmLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 50
  const search = searchParams.get('search') ?? null

  // const [isActive, setIsActive] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpen2, setIsModalOpen2] = useState(false)

  const [filteredData, setFilteredData] = useState<any>(null)

  const { data: registCourseData } = useQuery({
    queryKey: ['regist-course', page, limit],
    queryFn: async () => {
      const res = await getRegisterCourseList(page, limit)
      return res.data
    },
  })

  console.log(registCourseData)

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    const { current, pageSize } = pagination
    const searchParam = search ? `&search=${search}` : ''
    navigate(`/admin/courses/register-course?page=${current}&limit=${pageSize}${searchParam}`)
  }

  const handleSearch = (value: string) => {
    setSearchParams({ search: value })
  }

  // const handleDelete = async () => {
  //   try {
  //     await http.delete(`/class/${selectedClass?._id}`)
  //     // Perform any necessary actions after successful deletion
  //     notification.success({
  //       message: 'Delete successful',
  //       description: 'The class has been deleted successfully',
  //     })
  //   } catch (error: any) {
  //     notification.error({
  //       message: 'Delete failed',
  //       description: error.message,
  //     })
  //   }
  //   setIsModalOpen(false)
  // }

  const { data: course } = useQuery({
    queryKey: ['courses', page, limit],
    queryFn: async () => {
      const res = await getCoursesList(1, 50)
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

  console.log(selectedCourse)

  const { data: classByCourse } = useQuery({
    queryKey: ['classes', selectedCourse],
    queryFn: async () => {
      const res = await getClassesByCourse(selectedCourse as string)
      return res.data.data
    },
    enabled: !!selectedCourse,
  })

  const { data: students } = useQuery({
    queryKey: ['user', page, limit],
    queryFn: async () => {
      const res = await getUserListForAdmin('STUDENT', page, 50)
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
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Student Name',
      dataIndex: 'fullname',
      width: '15%',
      // filteredValue: [searchText],
      // onFilter: (value, { fullname }) => String(fullname).toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '20%',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      width: '15%',
    },
    {
      title: 'Day Of Birth',
      width: '15%',
      render: (regist: DataType) => <Typography.Text>{regist.student?.dob}</Typography.Text>,
    },
    {
      title: 'Registration Course',
      width: '20%',
      render: (regist: DataType) => <Typography.Text>{regist.course?.title}</Typography.Text>,
      filterSearch: true,
      filterMultiple: true,
      filters: (course ?? []).map((data: { title: string }) => ({
        value: data.title,
        text: data.title,
      })),
      onFilter: (value, regist) => {
        console.log(value)
        return String(regist.course?.title).indexOf(String(value)) === 0
      },
    },
    {
      title: 'Registration Date',
      dataIndex: 'create_at',
      width: '15%',
      render: (create_at: string) => <Typography.Text>{dayjs(create_at).format('DD/MM/YYYY')}</Typography.Text>,
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
            Register Course
          </Button>
          <Button
            type='primary'
            onClick={() => setIsModalOpen2(true)}
          >
            Add Students
          </Button>
        </div>
        {registCourseData && (
          <Table
            rowKey={(cls: DataType) => cls._id}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={registCourseData.data}
            pagination={{
              position: ['bottomRight'],
              current: Number(page),
              pageSize: Number(limit),
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [5, 10, 20, 50],
              showSizeChanger: true,
              showQuickJumper: true,
              total: registCourseData.total,
            }}
            onChange={onChange}
            style={{ marginTop: 16 }}
          />
        )}
      </Card>

      {/* MODAL FOR REGISTER COURSE FOR STUDENTS */}
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
                <Select
                  placeholder='Select'
                  options={(students || []).map((data: { _id: string; fullname: string }) => ({
                    value: data._id,
                    label: data.fullname,
                  }))}
                  mode='multiple'
                  maxTagCount='responsive'
                  value={selectedStudent}
                  onChange={(value) => setSelectedStudent(value)}
                  showSearch
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

      {/* MODAL FOR ADDING STUDENTS TO CLASS */}
      <Modal
        title={<Typography.Text style={{ fontSize: '24px' }}>Add Students Modal</Typography.Text>}
        open={isModalOpen2}
        onCancel={() => setIsModalOpen2(false)}
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
                label='Class Code'
                name='class_code'
                rules={[{ required: true, message: 'Please enter the class code' }]}
              >
                <Select
                  placeholder='Select'
                  options={(classByCourse || []).map((data: { _id: string, class_code: string }) => ({
                    value: data._id,
                    label: data.class_code,
                  }))}
                  value={selectedWorkplace}
                  onChange={(value) => setSelectedClass(value)}
                  disabled={!selectedCourse}
                  showSearch
                />
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
                onClick={() => setIsModalOpen2(false)}
              >
                Cancel
              </Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Confirm
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
