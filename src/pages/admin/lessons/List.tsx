import React, { useState } from 'react'
import { Button, Card, Collapse, CollapseProps, Input, Space, Tabs, TabsProps, Typography } from 'antd'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getCourse } from '@/apis/course.api'
import { getLessonsList } from '@/apis/lessonsList.api'

interface ILessonProps {
  class_id: string
}

interface CollapsePanelProps {
  key: string
  label: React.ReactNode
  children: React.ReactNode
  extra: React.ReactNode
}

interface CollapseComponentProps {
  itemsCollapse?: CollapsePanelProps[]
  isEditing?: boolean
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>
}

const CollapseComponent: React.FC<CollapseComponentProps> = ({ itemsCollapse }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Collapse
      items={itemsCollapse}
      defaultActiveKey={['1']}
      bordered={false}
      accordion
    >
      {itemsCollapse &&
        itemsCollapse.map((item) => (
          <Collapse.Panel
            key={item.key}
            header={
              <div className='w-full'>
                {isEditing ? (
                  <Input
                    value={item.children?.toString()}
                    style={{ width: '100%', minHeight: '160px' }}
                    onChange={(e) => {
                      const newValue = e.target.value
                      // Do something with the new value
                    }}
                  />
                ) : (
                  item.children
                )}
              </div>
            }
            extra={
              <div className='flex justify-end gap-2'>
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
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </div>
            }
          >
            <Space
              direction='vertical'
              style={{ width: '100%' }}
            >
              {isEditing ? (
                <Input.TextArea
                  value={item.children?.toString()}
                  style={{ width: '100%', minHeight: '160px' }}
                  onChange={(e) => {
                    const newValue = e.target.value
                    // Do something with the new value
                  }}
                />
              ) : (
                item.children
              )}
            </Space>
          </Collapse.Panel>
        ))}
    </Collapse>
  )
}

const AdminLessonList = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const itemsCollapse: CollapseProps['items'] = []

  const { data } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await getCourse(id as string)
      return res.data.data
    },
  })

  const lessonsData = useQuery({
    queryKey: ['lessons', id],
    queryFn: async () => {
      const res = await getLessonsList(id, 1, 50)
      return res.data.data
    },
  }).data

  // const { mutate } = useMutation()

  lessonsData &&
    lessonsData.map((item: any) => {
      itemsCollapse.push({
        key: item.id,
        label: (
          <div className='w-full'>
            {isEditing ? (
              <Input
                value={item.title}
                style={{ width: '200px' }}
                onChange={(e) => {
                  setTitle(e.target.value)
                  // Do something with the new value
                }}
              />
            ) : (
              <Typography.Text strong>{item.title}</Typography.Text>
            )}
          </div>
        ),
        children: (
          <Space
            direction='vertical'
            style={{ width: '100%' }}
          >
            {isEditing ? (
              <Input.TextArea
                value={item.content}
                style={{ width: '100%', minHeight: '160px' }}
                onChange={(e) => {
                  setContent(e.target.value)
                  // Do something with the new value
                }}
              />
            ) : (
              <Typography.Text>{item.content}</Typography.Text>
            )}
          </Space>
        ),
        extra: (
          <div className='flex justify-end gap-2'>
            {isEditing && (
              <Button
                type='default'
                onClick={() => setIsEditing(!isEditing)}
              >
                Cancel
              </Button>
            )}
            <Button
              type='primary'
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Save' : 'Edit'}
            </Button>
          </div>
        ),
      })
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
          <CollapseComponent
            itemsCollapse={
              itemsCollapse.map((item) => ({
                key: item.key?.toString(),
                label: item.label,
                children: item.children,
                extra: item.extra,
              })) as CollapsePanelProps[]
            }
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
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
