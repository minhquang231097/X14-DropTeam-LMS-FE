import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'

interface DataType {
  _id: string
  class_code?: string
  course: { title: string }
  workplace: string
  schedule: []
  class_size: number
  status: string
}

type ClassesList = {
  data: {
    allClasses: []
    count: number
    page: number
  }
  searchData?: any
  searchText: string
}

const ClassListTable: React.FC<ClassesList> = (props) => {
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
      render: (_, { class_code }) => <>{class_code || ''}</>,
      filteredValue: [props.searchText],
      onFilter: (value, { class_code }) => String(class_code).toLowerCase().includes(String(value).toLowerCase()),
    },
    {
      title: 'Course',
      dataIndex: 'course',
      render: (_, { course }) => <>{course && course.title}</>,
      filters: [
        {
          text: 'C4E',
          value: 'c4e',
        },
        {
          text: 'WEB',
          value: 'web',
        },
        {
          text: 'UI/UX',
          value: 'Code',
        },
      ],
      onFilter: (value, { course }) => String(course).toLowerCase() === String(value).toLowerCase(),
    },
    {
      title: 'Workplace',
      dataIndex: 'workplace',
      render: (_, { workplace }) => <>{workplace || 'undefined'}</>,
      filters: [
        {
          text: 'hdt',
          value: 'hdt',
        },
        {
          text: 'undefined',
          value: 'undefined',
        },
      ],
      onFilter: (value, { workplace }) => String(workplace).toLowerCase() === String(value).toLowerCase(),
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      render: (_, { schedule }) => (
        <>
          {schedule
            ? [...schedule].map((ele) => {
                if (ele === 0) {
                  return (
                    <Tag
                      color='yellow'
                      key='active'
                    >
                      Mon
                    </Tag>
                  )
                } else if (ele === 1) {
                  return (
                    <Tag
                      color='pink'
                      key='active'
                    >
                      Tue
                    </Tag>
                  )
                } else if (ele === 2) {
                  return (
                    <Tag
                      color='green'
                      key='active'
                    >
                      Wed
                    </Tag>
                  )
                } else if (ele === 3) {
                  return (
                    <Tag
                      color='orange'
                      key='active'
                    >
                      Thu
                    </Tag>
                  )
                } else if (ele === 4) {
                  return (
                    <Tag
                      color='blue'
                      key='active'
                    >
                      Fri
                    </Tag>
                  )
                } else if (ele === 5) {
                  return (
                    <Tag
                      color='purple'
                      key='active'
                    >
                      Sat
                    </Tag>
                  )
                } else if (ele === 6) {
                  return (
                    <Tag
                      color='red'
                      key='active'
                    >
                      Sun
                    </Tag>
                  )
                }
              })
            : ''}
        </>
      ),
    },
    {
      title: 'Total Students',
      dataIndex: 'class_size',
      sorter: (a, b) => a.class_size - b.class_size,
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
          text: 'UNDEFINED',
          value: 'undefined',
        },
      ],
      onFilter: (value, { status }) => String(status).toLowerCase() === String(value).toLowerCase(),
    },
  ]

  let data: DataType[] = []

  const navigate = useNavigate()
  if (props.data !== undefined) {
    data = props.data.allClasses
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
      rowKey={({ _id }) => {
        return _id
      }}
      footer={undefined}
      style={{ padding: '0 16px' }}
      onRow={({ _id, class_code }) => {
        return {
          onClick: () => {
            navigate(`/teacher/class-detail?id=${_id}&class_code=${class_code}`)
            navigate(0)
          },
        }
      }}
    />
  )
}

export default ClassListTable
