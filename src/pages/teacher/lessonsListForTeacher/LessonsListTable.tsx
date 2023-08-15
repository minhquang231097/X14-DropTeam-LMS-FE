import React from 'react'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  key: number
  lesson_name: string
  desc: string
  status: string
}

type LessonsList = {
  data: { data: [] }
  searchText: string
}

const LessonsListTable: React.FC<LessonsList> = (props) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'No.',
      dataIndex: 'index',
      width: '48px',
      render: (_value, _record, index) => <>{index + 1}</>,
    },
    {
      title: 'Lesson Name',
      dataIndex: 'lesson_name',
      render: (_value, { lesson_name, desc }, _index) => <>{lesson_name + ':' + ' ' + desc}</>,
      filteredValue: [props.searchText],
      onFilter: (value, { lesson_name }) => String(lesson_name).toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: 'Status',
      key: 'tags',
      width: '160px',
      dataIndex: 'status',
      render: (_, { status }) => (
        <>
          {(status === 'active' && (
            <Tag
              color='green'
              key='active'
            >
              {status.toUpperCase()}
            </Tag>
          )) ||
            (status === 'inactive' && (
              <Tag
                color='volcano'
                key='inactive'
              >
                {status.toUpperCase()}
              </Tag>
            )) || (
              <Tag
                color='geekblue'
                key='undefined'
              >
                {String(status).toUpperCase()}
              </Tag>
            )}
        </>
      ),
    },
  ]

  let data: DataType[] = []

  if (props.data !== undefined) {
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
    />
  )
}

export default LessonsListTable
