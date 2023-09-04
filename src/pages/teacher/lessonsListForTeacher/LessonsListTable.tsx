import React from 'react'
import { Table, Tag, TableProps } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { useNavigate } from 'react-router-dom'

interface DataType {
  key: number
  title: string
  content: string
  status: string
}

type LessonsList = {
  data: { count: number; data: []; page: number; statusCode: number; total: number; total_page: number }
  searchText: string
  setSearchParams: any
  filteredData: { data: []; count: number }
}

const LessonsListTable: React.FC<LessonsList> = (props) => {
  const navigate = useNavigate()

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
      render: (_value, { title, content }, _index) => <>{`${title}: ${content}`}</>,
      filteredValue: [props.searchText],
      onFilter: (value, { title }) => String(title).toLowerCase().includes(String(value).toLowerCase()),
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
                {String('unknown').toUpperCase()}
              </Tag>
            )}
        </>
      ),
    },
  ]

  let data: DataType[] = []

  if (props.data !== undefined) {
    data = props.searchText ? props.filteredData.data : props.data.data
  }

  const onChange: TableProps<DataType>['onChange'] = (pagination, _filters, _sorter, _extra) => {
    const { current, pageSize } = pagination
    props.setSearchParams(current)
    navigate(`/teacher/lessons-list?page=${current}&limit=${pageSize}`)
  }

  return (
    <Table
      pagination={{
        position: ['bottomCenter'],
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSizeOptions: [10, 20],
        showSizeChanger: true,
        current: props.data && props.data.page,
        total: props.searchText ? props.filteredData.count : props.data.total,
      }}
      columns={columns}
      dataSource={data}
      scroll={{ y: 340 }}
      bordered
      size='small'
      style={{ padding: '0 16px' }}
      onChange={onChange}
    />
  )
}

export default LessonsListTable
