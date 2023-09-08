import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Collapse,
  CollapseProps,
  Form,
  Input,
  Space,
  Tabs,
  TabsProps,
  Typography,
  notification,
} from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getCourse } from '@/apis/course.api'
import { getLessonsList } from '@/apis/lessonsList.api'
import { updateLesson } from '@/apis/lessonsUpdate.api'

const CollapseComponent: React.FC = () => {
  const [form] = Form.useForm()
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const { id: courseId } = useParams()

  const { data: lessonsData } = useQuery({
    queryKey: ['lessons', courseId],
    queryFn: async () => {
      const res = await getLessonsList(courseId, 1, 50)
      return res.data.data
    },
  })

  const { mutate } = useMutation(updateLesson, {
    onSuccess: () => {
      // Perform any necessary actions after successful creation
      notification.success({
        message: 'Update successful',
        description: 'The lesson has been updated successfully',
      })
      form.resetFields()
      // navigate('/admin/classes/all')
    },
    onError: (error: Error) => {
      // Perform any necessary actions after failed creation
      notification.error({
        message: 'Update failed',
        description: error.message,
      })
    },
  })

  const handleFinish = (values: any) => {
    const { id, ...rest } = values
    mutate({ id, ...rest })
  }

  const itemsCollapse: CollapseProps['items'] =
    lessonsData?.map((item: any) => ({
      key: item.id,
      label: item.title,
      children: (
        <>
          {isEditing ? (
            <Form.Item
              noStyle
              name='content'
            >
              <Input.TextArea
                value={item.content}
                style={{ width: '100%', minHeight: '160px' }}
                onChange={(e) => {
                  setContent(e.target.value)
                }}
              />
            </Form.Item>
          ) : (
            <Typography.Text>{item.content}</Typography.Text>
          )}
          {/* <div className='flex justify-end gap-2 py-2'>
            <Form.Item noStyle>
              {isEditing && (
                <Button
                  type='default'
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </Button>
              )}
              <Button
                type='primary'
                htmlType='submit'
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Save' : 'Edit'}
              </Button>
            </Form.Item>
          </div> */}
        </>
      ),
    })) || []

  return (
    <Form
      form={form}
      onFinish={handleFinish}
      initialValues={{ ...lessonsData }}
    >
      <Collapse
        items={itemsCollapse}
        bordered={false}
        accordion
      // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      >
        {itemsCollapse?.map((item) => (
          <div key={item.key as string}>
            <div className='w-full'>{item.label}</div>
            <Space
              direction='vertical'
              style={{ width: '100%' }}
            >
              {item.children}
            </Space>
          </div>
        ))}
      </Collapse>
    </Form>
  )
}

const AdminLessonList = () => {
  const { id } = useParams<{ id: string }>()
  // const navigate = useNavigate()

  const { data } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await getCourse(id as string)
      return res.data.data
    },
  })

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Description`,
      children: `${data ? data.desc : ''}`,
    },
    {
      key: '2',
      label: `Contents`,
      children: (
        <div className='pb-4'>
          <CollapseComponent />
        </div>
      ),
    },
  ]

  return (
    <Card style={{ width: '100%', margin: '0 8px' }}>
      <Tabs
        defaultActiveKey='1'
        items={items}
        size='large'
      />
    </Card>
  )
}

export default AdminLessonList
