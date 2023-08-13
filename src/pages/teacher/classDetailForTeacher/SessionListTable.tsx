import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  session_name: string
  status: string
  desc: string
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'index',
    width: '48px',
    render: (_value, _record, index) => <>{index + 1}</>,
  },
  {
    title: 'Session',
    dataIndex: 'session_name',
    width: '160px',
  },
  {
    title: 'Description',
    dataIndex: 'desc',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'status',
    width: '160px',
    render: (_, { status }) => (
      <>
        {(status === 'completed' && (
          <Tag
            color='green'
            key='active'
          >
            {status.toUpperCase()}
          </Tag>
        )) ||
          (status === 'uncompleted' && (
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

const SessionListTable: React.FC<{ statusCode: number; message: any; data: [] }> = (value) => {
  const navigate = useNavigate()
  if (value.statusCode === 200) {
    data = [...value.data]
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

export default SessionListTable
