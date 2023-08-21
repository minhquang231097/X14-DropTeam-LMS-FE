import React, { useState } from 'react'
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
  notification,
} from 'antd'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import AdminLayout from '@/layouts/admin'
import http from '@/utils/http'
import { getClassById } from '@/apis/class.api'

interface IMentor {
  fullname: string
}

interface IWorkplace {
  name: string
}
interface IClass {
  _id: string
  image_url?: string
  class_name?: string
  location?: string
  is_active?: boolean
  class_size?: number
  start_at?: string
  end_at?: string
  mentor?: IMentor
  workplace?: IWorkplace
}

dayjs.extend(customParseFormat)

const CustomContent = () => {
  const [form] = Form.useForm()
  const { RangePicker } = DatePicker

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const weekdays = [
    { value: 'monday', label: 'Monday' },
    { value: 'tuesday', label: 'Tuesday' },
    { value: 'wednesday', label: 'Wednesday' },
    { value: 'thursday', label: 'Thursday' },
    { value: 'friday', label: 'Friday' },
    { value: 'saturday', label: 'Saturday' },
    { value: 'sunday', label: 'Sunday' },
  ]

  const plainOptions = [
    { value: '1', label: 'Student 01' },
    { value: '2', label: 'Student 02' },
    { value: '3', label: 'Student 03' },
    { value: '4', label: 'Student 04' },
    { value: '5', label: 'Student 05' },
    { value: '6', label: 'Student 06' },
    { value: '7', label: 'Student 07' },
    { value: '8', label: 'Student 08' },
    { value: '9', label: 'Student 09' },
    { value: '10', label: 'Student 10' },
    { value: '11', label: 'Student 11' },
    { value: '12', label: 'Student 12' },
  ]

  const defaultCheckedList = [
    { value: '1', label: 'Student 01' },
    { value: '2', label: 'Student 02' },
    { value: '3', label: 'Student 03' },
    { value: '4', label: 'Student 04' },
    { value: '5', label: 'Student 05' },
  ]

  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList.map((option) => option.value))
  const [selectedWeekdays, setSelectedWeekdays] = useState<string[]>([])

  const checkAll = plainOptions.length === checkedList.length
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions.map((option) => option.value) : [])
  }

  const onChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedList(checkedValues)
  }

  const handleWeekdaysChange = (value: string[]) => {
    setSelectedWeekdays(value)
  }

  const updateClass = async (cls: IClass) => {
    if (!id) {
      throw new Error('Missing id parameter')
    }
    await http.put(`/class/`, cls, {
      params: {
        id,
      },
    })
  }

  const { mutate, isLoading } = useMutation(updateClass, {
    onSuccess: () => {
      // Perform any necessary actions after successful creation
      notification.success({
        message: 'Update successful',
        description: 'The class has been updated successfully',
      })
      form.resetFields()
      navigate('/admin/classes/all')
    },
    onError: () => {
      // Perform any necessary actions after failed creation
      notification.error({
        message: 'Update failed',
        description: 'There was an error updating the class',
      })
      form.resetFields()
    },
  })

  const { data: classByID } = useQuery({
    queryKey: ['class'],
    queryFn: async () => {
      const res = await getClassById(id as string)
      return res.data.data
    },
  })

  if (!classByID) {
    return <Typography.Text>Class not found</Typography.Text>
  }

  // const handleSubmit = async (values: IClass) => {
  //   try {
  //     mutate(values)
  //     notification.success({
  //       message: 'Update successful',
  //       description: 'The Class has been updated successfully',
  //     })
  //   } catch (error) {
  //     notification.error({
  //       message: 'Update failed',
  //       description: 'There was an error updating the Class',
  //     })
  //   }
  // }

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: <Link to='/admin/classes/all'>Classes</Link>,
          },
          {
            title: `${classByID.class_code}`,
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <Form
          form={form}
          onFinish={mutate}
          layout='vertical'
          initialValues={{
            ...classByID,
            mentor: classByID.mentor?.fullname,
            workplace: classByID.workplace?.address,
            course: classByID.course?.title,
            time: [dayjs(classByID.create_at).startOf('day'), dayjs(classByID.end_at).endOf('day')],
          }}
        >
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Edit The Class
          </Typography.Title>
          <Row gutter={[24, 16]}>
            <Col span={12}>
              <Form.Item
                label='Course'
                name='course'
                rules={[{ required: true, message: 'Please enter the course name' }]}
              >
                <Select />
              </Form.Item>
              <Form.Item
                label='Class Code'
                name='class_code'
                rules={[{ required: true, message: 'Please enter the code' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label='Time'
                name='time'
                rules={[{ required: true, message: 'Please enter the time' }]}
              >
                <RangePicker
                  style={{ width: '100%' }}
                  format='DD/MM/YYYY'
                />
              </Form.Item>
              <Form.Item
                label='Total Sessions'
                name='total_session'
                rules={[{ required: true, message: 'Please enter the total sessions' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Facility'
                name='workplace'
                rules={[{ required: true, message: 'Please enter the facility' }]}
              >
                <Select />
              </Form.Item>
              <Form.Item
                label='Mentor'
                name='mentor'
                rules={[{ required: true, message: 'Please enter the mentor' }]}
              >
                <Select />
              </Form.Item>
              <Form.Item
                label='Schedule'
                name='schedule'
                rules={[{ required: true, message: 'Please enter the schedule' }]}
              >
                <Select
                  mode='multiple'
                  placeholder='Select weekdays'
                  value={selectedWeekdays}
                  onChange={handleWeekdaysChange}
                  maxTagCount='responsive'
                >
                  {weekdays.map((weekday) => (
                    <Select.Option
                      key={weekday.value}
                      value={weekday.value}
                    >
                      {weekday.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                label='Number of Students'
                name='class_size'
                rules={[{ required: true, message: 'Please enter the number of students' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Card>
                  <Typography.Paragraph
                    strong
                    style={{ fontSize: '24px' }}
                  >
                    Enrollment List
                  </Typography.Paragraph>
                  <Checkbox
                    indeterminate={indeterminate}
                    onChange={onCheckAllChange}
                    checked={checkAll}
                  >
                    Check all
                  </Checkbox>
                  <Divider />
                  <Checkbox.Group
                    style={{ width: '100%' }}
                    defaultValue={defaultCheckedList.map((option) => option.value)}
                    value={checkedList}
                    onChange={onChange}
                  >
                    <Row gutter={[16, 16]}>
                      {plainOptions.map((option) => (
                        <Col
                          span={8}
                          key={option.value}
                        >
                          <Checkbox value={option.value}>{option.label}</Checkbox>
                        </Col>
                      ))}
                    </Row>
                  </Checkbox.Group>
                </Card>
              </Form.Item>
            </Col>
          </Row>
          {/* <Col
                span={12}
                style={{ display: 'flex', flexDirection: 'column', margin: '8px 0' }}
              >
                <Typography.Text>* Facility Image</Typography.Text>
                <ImgCrop rotationSlider>
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </ImgCrop>
              </Col> */}
          {/* </Row> */}
          <Form.Item>
            <Space
              size='middle'
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button type='default'>Cancel</Button>
              <Button
                type='primary'
                htmlType='submit'
                loading={isLoading}
              >
                Update
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const AdminEditClasses: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminEditClasses
