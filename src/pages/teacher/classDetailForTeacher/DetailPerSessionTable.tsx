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
  filteredData: { data: [] }
}

const { TextArea } = Input

const DetailPerSessionTable: React.FC<StudentList> = (props) => {
  const navigate = useNavigate()

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
      filteredValue: [props.searchText],
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
          {(status === 'ACTIVE' && (
            <Tag
              color='green'
              key='ACTIVE'
            >
              {status.toUpperCase()}
            </Tag>
          )) ||
            (status === 'INACTIVE' && (
              <Tag
                color='volcano'
                key='INACTIVE'
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
      filters: [
        {
          text: 'ACTIVE',
          value: 'active',
        },
        {
          text: 'INACTIVE',
          value: 'inactive',
        },
        {
          text: 'UNKNOWN',
          value: 'unknown',
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
            { value: 'p', label: <span className='text-[#389E0D]'>Present</span> },
            { value: 'ap', label: <span className='text-[#D46B08]'>Absent With Permission</span> },
            { value: 'aop', label: <span className='text-[#6737B5]'>Absent Without Permission</span> },
            { value: 'r', label: <span className='text-[#C41D7F]'>Reserve</span> },
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

  let data: DataType[] = []

  if (props.data !== undefined) {
    data = props.searchText ? props.filteredData.data : props.data.data
  }

  const onChange: TableProps<DataType>['onChange'] = (pagination, _filters, _sorter, _extra) => {
    const { current, pageSize } = pagination
    props.setSearchParams(current)
    navigate(
      `/teacher/class-detail/session?sesson_code=${props.session_code}&class_id=${props.class_id}&page=${current}&limit=${pageSize}`,
    )
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
        total: props.data && props.data.total,
      }}
      columns={columns}
      dataSource={data}
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
