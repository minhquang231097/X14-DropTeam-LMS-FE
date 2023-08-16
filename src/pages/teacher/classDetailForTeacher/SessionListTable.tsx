import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  _id: string
  key: number
  session_name: string
  status: string
  desc: string
}

type SessionsList = {
  data: { statusCode: number; message: any; data: [] }
  searchText: string
}

const SessionListTable: React.FC<SessionsList> = (props) => {
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
      filteredValue: [props.searchText],
      onFilter: (value, { session_name }) => String(session_name).toLowerCase().includes(String(value).toLowerCase()),
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
            (status === 'completed' && (
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
      filters: [
        {
          text: 'COMPLETED',
          value: 'completed',
        },
        {
          text: 'UNCOMPLETED',
          value: 'uncompleted',
        },
      ],
      onFilter: (value, { status }) => String(status).indexOf(String(value)) === 0,
    },
  ]

  let data: DataType[] = []

  const navigate = useNavigate()
  if (props.data) {
    data = props.data.data
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
      onRow={({ _id }) => {
        return {
          onClick: () => {
            navigate(`/teacher/class-detail/session?id=${_id}`)
          },
        }
      }}
    />
  )
}

export default SessionListTable
