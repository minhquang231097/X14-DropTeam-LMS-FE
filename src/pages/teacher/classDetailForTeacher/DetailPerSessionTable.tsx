import React, { useState } from 'react'
import { Table, Tag, Select, Input } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  name: string
  email: string
  session: string
  phone: string
  tags: string[]
}

const { TextArea } = Input

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'key',
    width: '48px',
  },
  {
    title: 'Student Name',
    dataIndex: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Phone Number',
    dataIndex: 'phone',
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
  {
    title: 'Attendance',
    render: () => (
      <Select
        defaultValue='Select'
        style={{ width: '100%' }}
        options={[
          { value: 'present', label: 'Present' },
          { value: 'absent', label: 'Absent' },
        ]}
      />
    ),
  },

  {
    title: 'Score',
    render: () => (
      <Input
        type='number'
        placeholder='Input score ...'
      />
    ),
  },

  {
    title: 'Comment',
    render: () => (
      <TextArea
        rows={1}
        placeholder='Comment here ...'
      />
    ),
  },
]

const data: DataType[] = []
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    name: 'Dinh Cuong',
    email: 'cuong@gmail.com',
    phone: '0979999999',
    session: `Session ${i}`,
    tags: ['Active'],
  })
}

const DetailPerSessionTable: React.FC = () => {
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
    />
  )
}

export default DetailPerSessionTable
