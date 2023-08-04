import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  session: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: 'No.',
    dataIndex: 'key',
    width: '48px',
  },
  {
    title: 'Session',
    dataIndex: 'session',
  },
]

const data: DataType[] = []
for (let i = 1; i <= 100; i++) {
  data.push({
    key: i,
    session: `Session ${i} (Click to input Attendance, Score & Comment)`,
    tags: ['Active'],
  })
}

const SessionListTable: React.FC = () => {
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

export default SessionListTable
