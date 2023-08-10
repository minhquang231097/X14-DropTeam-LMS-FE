import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  name: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'key',
    width: '48px',
  },
  {
    title: 'Lesson Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    width: '120px',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green'
          if (tag === 'loser') {
            color = 'volcano'
          }
          if (tag === 'Active') {
            color = 'green'
          }
          return (
            <Tag
              color={color}
              key={tag}
            >
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
]

const data: DataType[] = []
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: `Lesson ${i}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
    totam, qui voluptate quisquam?`,
    tags: ['Active'],
  })
}

const LessonsListTable: React.FC = () => {
  const navigate = useNavigate()

  const [hasData, setHasData] = useState(true)

  return (
    <Table
      pagination={{ position: ['bottomCenter'] }}
      columns={columns}
      dataSource={hasData ? data : []}
      scroll={{ y: 340 }}
      bordered
      size='small'
      rowSelection={undefined}
      showHeader
      footer={undefined}
      style={{ padding: '0 16px' }}
      onRow={() => {
        return {
          onClick: () => {
            navigate('/teacher/class-detail/session')
          },
        }
      }}
    />
  )
}

export default LessonsListTable
