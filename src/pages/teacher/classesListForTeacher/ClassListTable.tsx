import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  _id: string
  class_code?: string
  course?: {}
  workplace?: string
  schedule: string
  class_size: number
  status: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'index',
    width: '48px',
    render: (_value, _record, index) => <>{index + 1}</>,
  },
  {
    title: 'Class Code',
    dataIndex: 'class_code',
  },
  {
    title: 'Course',
    dataIndex: 'course',
    render: (_, { course }) => <>{course && course.title}</>,
  },
  {
    title: 'Workplace',
    dataIndex: 'workplace',
    render: (_, { workplace }) => <>{workplace || 'TC'}</>,
  },
  {
    title: 'Schedule',
    dataIndex: 'schedule',
  },
  {
    title: 'Total Students',
    dataIndex: 'class_size',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {(status === 'Active' && (
          <Tag
            color='green'
            key='active'
          >
            {status.toUpperCase()}
          </Tag>
        )) ||
          (status === 'Inactive' && (
            <Tag
              color='volcano'
              key='inactive'
            >
              {status.toUpperCase()}
            </Tag>
          )) || (
            <Tag
              color='geekblue'
              key='active'
            >
              {String(status).toUpperCase()}
            </Tag>
          )}
      </>
    ),
  },
]

let data: DataType[] = []

const ClassListTable: React.FC<{ list: []; count: number; page: number }> = (value) => {
  const navigate = useNavigate()
  if (value.page !== undefined) {
    data = [...value.list]
  }

  return (
    <Table
      pagination={{ position: ['bottomCenter'] }}
      columns={columns}
      dataSource={data}
      scroll={{ y: 340 }}
      bordered
      size='small'
      rowSelection={undefined}
      showHeader
      footer={undefined}
      style={{ padding: '0 16px' }}
      onRow={({ _id, class_code }) => {
        return {
          onClick: () => {
            navigate(`/teacher/class-detail?class_code=${class_code}&id=${_id}`)
          },
        }
      }}
    />
  )
}

export default ClassListTable
