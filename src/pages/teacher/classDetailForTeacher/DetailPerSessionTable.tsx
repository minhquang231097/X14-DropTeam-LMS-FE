import React from 'react'
import { Table, Tag, Select, Input, TableProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  _id: string
  key: number
  fullname: string
  email: string
  phone_number: string
  session: string
  status?: string
}

type StudentList = {
  data: { count: number; data: []; page: number; statusCode: number; total: number; total_page: number }
  searchText: string
  setSearchParams: any
  session_code: string
  class_id: string
}

const { TextArea } = Input

const DetailPerSessionTable: React.FC<StudentList> = (props) => {
  const navigate = useNavigate()
  const { searchText, data, session_code, setSearchParams, class_id } = props

  const columns: ColumnsType<DataType> = [
    {
      title: 'No.',
      dataIndex: 'index',
      width: '40px',
      render: (_value, _record, index) => <>{index + 1}</>,
    },
    {
      title: 'Student Name',
      dataIndex: 'fullname',
      width: '140px',
      filteredValue: [searchText],
      onFilter: (value, { fullname }) => String(fullname).toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '212px',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone_number',
      width: '120px',
    },
    {
      title: 'Status',
      key: 'tags',
      dataIndex: 'status',
      width: '100px',
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
    {
      title: 'Attendance',
      render: () => (
        <Select
          defaultValue='Select'
          style={{ width: '100%' }}
          options={[
            { value: 'p', label: 'Present' },
            { value: 'ap', label: 'Absent With Permission' },
            { value: 'aop', label: 'Absent Without Permission' },
            { value: 'r', label: 'Reserve' },
          ]}
        />
      ),
    },
    {
      title: 'Score',
      width: '80px',
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

  let sessionData: DataType[] = []

  if (data) {
    sessionData = data.data
  }

  const onChange: TableProps<DataType>['onChange'] = (pagination, _filters, _sorter, _extra) => {
    const { current } = pagination
    setSearchParams(current)
    navigate(`/teacher/class-detail/session?sesson_code=${session_code}&class_id=${class_id}&page=${current}&limit=10`)
  }

  return (
    <Table
      pagination={{
        position: ['bottomCenter'],
        defaultCurrent: 1,
        defaultPageSize: 10,
        pageSizeOptions: [10],
        showSizeChanger: true,
        current: data && data.page,
        total: data && data.total,
      }}
      columns={columns}
      dataSource={sessionData}
      scroll={{ y: 340 }}
      bordered
      size='small'
      style={{ padding: '0 16px' }}
      rowKey={(_record) => _record._id}
      onChange={onChange}
    />
  )
}

export default DetailPerSessionTable
