import { useState } from 'react'
import { Table, Select } from 'antd'

const { Option } = Select

const MyTable = () => {
  const data = [
    { id: 1, name: 'John', age: 25, status: 'active' },
    { id: 2, name: 'Jane', age: 30, status: 'inactive' },
    { id: 3, name: 'Bob', age: 35, status: 'active' },
  ]

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age' },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status: any, record: any) => (
        <Select
          value={status}
          onChange={(value) => handleStatusChange(value, record)}
        >
          <Option value='active'>Active</Option>
          <Option value='inactive'>Inactive</Option>
        </Select>
      ),
    },
  ]
  const [tableData, setTableData] = useState(data)

  const handleStatusChange = (value: any, record: any) => {
    const newData = [...tableData]
    const updatedRecord = { ...record, status: value }
    const index = newData.findIndex((item) => item.id === record.id)
    newData.splice(index, 1, updatedRecord)
    setTableData(newData)
  }
  return (
    <Table
      dataSource={tableData}
      columns={columns}
      rowKey='id'
      onRow={(record) => ({ onClick: () => console.log(record) })}
    />
  )
}

export default MyTable
