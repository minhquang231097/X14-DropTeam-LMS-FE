import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, Space, Table, Typography, Modal, theme, TableProps, notification } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MdAddCircleOutline } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import AdminLayout from '@/layouts/admin'
import AdminSearch from '@/components/search/adminSearch'
import { getWorkplacesList } from '@/apis/workplaceList.api'
import { COMMON_STATUS } from '@/utils/status'
import StatusTag from '@/components/tag/StatusTag'
import http from '@/utils/http'

interface DataType {
  _id: string
  image_url?: string
  name: string
  workplace_code: string
  address: string
  status: string
}

const CustomContent = () => {
  const navigate = useNavigate()

  // const queryString: { page?: string } = useQueryString()
  // const page = Number(queryString.page) || 1
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 10

  const [selectedFacility, setSelectedFacility] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: workplaceData } = useQuery({
    queryKey: ['workplaces', page, limit],
    queryFn: async () => {
      const res = await getWorkplacesList(page, limit)
      return res.data
    },
  })

  const handleDelete = async () => {
    try {
      await http.delete(`/workplace/${selectedFacility?._id}`)
      // Perform any necessary actions after successful deletion
      notification.success({
        message: 'Delete successful',
        description: 'The workplace has been deleted successfully',
      })
    } catch (error: any) {
      notification.error({
        message: 'Delete failed',
        description: error.message,
      })
    }
    setIsModalOpen(false)
  }

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra)
    const { current, pageSize } = pagination
    navigate(`/admin/facilities/all?page=${current}&limit=${pageSize}`)
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image_url',
      width: '30%',
      render: () => (
        <Image
          src='https://res.cloudinary.com/dar4pvqx2/image/upload/v1693931926/vitebanner_wtcoum.jpg'
          alt='Facility Image'
        />
      ),
    },
    {
      title: 'Facility',
      dataIndex: 'name',
      width: '40%',
      sorter: true,
      render: (name: string, facility: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {name} ({facility.workplace_code})
          </Typography.Text>
          <Typography.Text>{facility.address}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '10%',
      sorter: true,
      render: (value: COMMON_STATUS) => (
        <StatusTag
          status={value}
          style={{ fontSize: '14px', padding: '4px 8px' }}
        />
      ),
    },
    {
      title: 'Action',
      width: '15%',
      render: (facility: DataType) => (
        <Space>
          <Button
            type='primary'
            onClick={() => {
              navigate(`/admin/facilities/show/${facility._id}`)
            }}
          >
            Show
          </Button>
          <Button
            type='primary'
            danger
            onClick={() => {
              setSelectedFacility(facility)
              setIsModalOpen(true)
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Breadcrumb
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Facilities',
          },
        ]}
        style={{ padding: '4px' }}
      />
      <Card>
        <div className='flex justify-between'>
          <Typography.Title
            level={3}
            className='mt-0 mx-1'
          >
            Facility List
          </Typography.Title>
          <Space
            className='flex'
            size='middle'
          >
            <AdminSearch />
            <Button
              type='primary'
              icon={<MdAddCircleOutline className='text-[22px]' />}
              onClick={() => navigate('/admin/facilities/create')}
              style={{ display: 'flex', alignItems: 'center', height: '40px', fontSize: '16px' }}
            >
              Create
            </Button>
          </Space>
        </div>
        {workplaceData && (
          <Table
            rowKey={(facility: DataType) => facility._id}
            columns={columns}
            dataSource={workplaceData.data}
            pagination={{
              position: ['bottomRight'],
              current: Number(page),
              pageSize: Number(limit),
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [5, 10, 20],
              showSizeChanger: true,
              showQuickJumper: true,
              total: workplaceData.total,
            }}
            onChange={onChange}
            bordered
            style={{ marginTop: 16 }}
          />
        )}
      </Card>
      <Modal
        title='Confirm Delete'
        onOk={handleDelete}
        okType='danger'
        onCancel={() => setIsModalOpen(false)}
        getContainer={false}
        open={isModalOpen}
      >
        <Typography.Text>Are you sure you want to delete this facility?</Typography.Text>
      </Modal>
    </>
  )
}

const AdminListFacilities: React.FC = () => {
  return <AdminLayout content={<CustomContent />} />
}

export default AdminListFacilities
