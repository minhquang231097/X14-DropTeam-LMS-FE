import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  className: string
  workplace: string
  schedule: string
  status: string
  tags: string[]
  course: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'key',
    width: '48px',
  },
  {
    title: 'Class Name',
    dataIndex: 'className',
  },
  {
    title: 'Course',
    dataIndex: 'course',
  },
  {
    title: 'Workplace',
    dataIndex: 'workplace',
  },
  {
    title: 'Schedule',
    dataIndex: 'schedule',
    onFilter: (value, record) => record.schedule.indexOf(value as string) === 0,
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
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
    className: 'C4E-137',
    workplace: 'TC',
    schedule: `Mon, Fri`,
    status: 'Done',
    tags: ['Active'],
    course: 'C4E',
  })
}

const ClassListTable: React.FC = () => {
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
            navigate('/teacher/class-detail')
          },
        }
      }}
    />
  )
}

export default ClassListTable
