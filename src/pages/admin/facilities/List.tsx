import React, { useState } from 'react'
import { Breadcrumb, Button, Card, Image, Space, Table, Typography, Modal, theme, TableProps } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MdAddCircleOutline, MdOutlineCheck, MdOutlineCircle, MdOutlineClose } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import AdminLayout from '@/layouts/admin'
// import { FacilityItems } from '@/data/facilities'
import AdminSearch from '@/components/adminSearch'
import { getWorkplacesList } from '@/apis/workplaceList.api'
import { useQueryString } from '@/utils/utils'

interface DataType {
  _id: string
  image_url?: string
  name?: string
  address?: string
  status?: string
}

const CustomContent = () => {
  const { useToken } = theme
  const { token } = useToken()
  const navigate = useNavigate()

  const queryString: { page?: string } = useQueryString()
  const page = Number(queryString.page) || 1

  // const [isActive, setIsActive] = useState(true)
  const [selectedFacility, setSelectedFacility] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { data: workplaceData } = useQuery({
    queryKey: ['workplace', page, 10],
    queryFn: async () => {
      const res = await getWorkplacesList(page, 10)
      return res.data?.data
    },
  })

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/workplace/?id=${selectedFacility?._id}`)
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error)
    }
    setIsModalOpen(false)
  }

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
    const { current } = pagination
    navigate(`/admin/facilities/all?page=${current}&limit=10`)
  }

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image_url',
      width: '30%',
      render: () => (
        <Image
          src='https://via.placeholder.com/500x250'
          alt='Facility Image'
        />
      ),
    },
    {
      title: 'Facility',
      dataIndex: 'name',
      width: '40%',
      render: (name: string, facility: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '20px' }}
          >
            {name}
          </Typography.Text>
          <Typography.Text>{facility.address}</Typography.Text>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      width: '15%',
      render: (status: any) => (
        <Typography.Text
          style={{
            color:
              status === 'ON'
                ? token.colorSuccessText
                : status === 'OFF'
                  ? token.colorErrorText
                  : token.colorWarningText,
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {status === 'ON' ? (
            <>
              <MdOutlineCheck className='text-[24px] m-1' /> ACTIVE
            </>
          ) : status === 'OFF' ? (
            <>
              <MdOutlineClose className='text-[24px] m-1' /> INACTIVE
            </>
          ) : (
            <>
              <MdOutlineCircle className='text-[24px] m-1' /> UPCOMING
            </>
          )}
        </Typography.Text>
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
          {/* <Button
            type='primary'
            danger
            onClick={() => {
              setSelectedFacility(facility)
              setIsModalOpen(true)
            }}
          >
            Delete
          </Button> */}
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
            dataSource={workplaceData.list}
            pagination={{
              position: ['bottomRight'],
              current: page,
              defaultCurrent: 1,
              defaultPageSize: 10,
              pageSizeOptions: [10],
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
