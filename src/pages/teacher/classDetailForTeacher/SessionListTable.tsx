import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  _id: string
  key: number
  session_code: string
  status: string
  desc: string
  class: { class_code: string }
}

type SessionsList = {
  data: { list: []; page: number; total: number; total_page: number }
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
      dataIndex: 'session_code',
      width: '160px',
      filteredValue: [props.searchText],
      onFilter: (value, { session_code }) => String(session_code).toLowerCase().includes(String(value).toLowerCase()),
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
                {String('unknown').toUpperCase()}
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
    data = props.data.list
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
      onRow={({ _id, class: { class_code } }) => {
        return {
          onClick: () => {
            navigate(`/teacher/class-detail/session?id=${_id}&class_code=${class_code}`)
          },
        }
      }}
    />
  )
}

export default SessionListTable
