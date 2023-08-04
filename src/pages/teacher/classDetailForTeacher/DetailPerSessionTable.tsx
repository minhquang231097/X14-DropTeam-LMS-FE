import React, { useState } from 'react'
import { Table, Tag, Select, Dropdown, Input } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  name: string
  email: string
  session: string
  phone: string
  tags: string[]
}

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
      <Select
        defaultValue='Select'
        style={{ width: '100%' }}
        options={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
        ]}
      />
    ),
  },

  {
    title: 'Comment',
    render: () => (
      <Input
        showCount
        maxLength={20}
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
