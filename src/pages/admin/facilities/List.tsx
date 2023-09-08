import React, { useEffect, useState } from 'react'
import { Breadcrumb, Button, Card, Image, Space, Table, Typography, Modal, theme, TableProps, notification } from 'antd'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { MdAddCircleOutline } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import AdminLayout from '@/layouts/admin'
import AdminSearch from '@/components/search/AdminSearch'
import AdminStatusSelect from '@/components/select/AdminStatusSelect'
import { getWorkplacesBySearch, getWorkplacesList } from '@/apis/workplaceList.api'
import { COMMON_STATUS } from '@/utils/status'
import StatusTag from '@/components/tag/StatusTag'
import http from '@/utils/http'

dayjs.extend(customParseFormat)

interface DataType {
  _id: string
  image_url?: string
  name: string
  workplace_code: string
  address: string
  status: string
  create_at: string
}

const CustomContent = () => {
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page') ?? 1
  const limit = searchParams.get('limit') ?? 10
  const search = searchParams.get('search') ?? null

  const tablePagination: TablePaginationConfig = {
    position: ['bottomRight'],
    current: Number(page),
    pageSize: Number(limit),
    defaultCurrent: 1,
    defaultPageSize: 10,
    pageSizeOptions: [5, 10, 20],
    showSizeChanger: true,
    showQuickJumper: true,
  }

  const [selectedFacility, setSelectedFacility] = useState<DataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filteredData, setFilteredData] = useState<any>(null)

  const { data: workplaceData } = useQuery({
    queryKey: ['workplaces', page, limit],
    queryFn: async () => {
      const res = await getWorkplacesList(page, limit)
      return res.data
    },
  })

  const { data: searchWorkplaceData } = useQuery({
    queryKey: ['workplaces', page, limit, search],
    queryFn: async () => {
      const res = await getWorkplacesBySearch(page, limit, search)
      return res.data
    },
  })

  useEffect(() => {
    if (workplaceData) {
      setFilteredData(workplaceData.data)
    }
    if (searchWorkplaceData) {
      setFilteredData(searchWorkplaceData.data)
    }
    if (!search) {
      navigate(`/admin/facilities/all?page=${page}&limit=${limit}`)
    }
  }, [limit, navigate, page, search, searchWorkplaceData, workplaceData])

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
    const { current, pageSize } = pagination
    const searchParam = search ? `&search=${search}` : ''
    navigate(`/admin/facilities/all?page=${current}&limit=${pageSize}${searchParam}`)
  }

  const handleSearch = (value: string) => {
    setSearchParams({ search: value })
  }

  // const handleSearchStatus = (value: string) => {
  //   setSearchParams({ status: value })
  // }

  // const filterOption = (input: string, option: { label: string; value: string }) =>
  //   (option?.value ?? '').toLowerCase().includes(input.toLowerCase())

  const columns: ColumnsType<DataType> = [
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Image</Typography.Text>,
      dataIndex: 'image_url',
      width: '15%',
      render: () => (
        <Image
          src='https://res.cloudinary.com/dar4pvqx2/image/upload/v1693931926/vitebanner_wtcoum.jpg'
          alt='Facility Image'
        />
      ),
    },
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Facility</Typography.Text>,
      dataIndex: 'name',
      width: '45%',
      render: (name: string, facility: DataType) => (
        <Space direction='vertical'>
          <Typography.Text
            strong
            style={{ fontSize: '22px' }}
          >
            {name} ({facility.workplace_code})
          </Typography.Text>
          <Typography.Text>Created at: {dayjs(facility.create_at).format('DD/MM/YYYY')}</Typography.Text>
        </Space>
      ),
      sorter: (a, b) => {
        const dateA: any = a.create_at ? dayjs(a.create_at) : dayjs('')
        const dateB: any = b.create_at ? dayjs(b.create_at) : dayjs('')
        return dateA - dateB
      },
      defaultSortOrder: 'descend',
    },
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Status</Typography.Text>,
      dataIndex: 'status',
      width: '15%',
      render: (value: COMMON_STATUS) => (
        <StatusTag
          status={value}
          style={{ fontSize: '14px', padding: '4px 8px' }}
        />
      ),
      filters: [
        {
          text: 'ACTIVE',
          value: 'ON',
        },
        {
          text: 'INACTIVE',
          value: 'OFF',
        },
        {
          text: 'UPCOMING',
          value: 'UPCOMING',
        },
      ],
      onFilter: (value, { status }) => String(status).indexOf(String(value)) === 0,
    },
    {
      title: <Typography.Text style={{ fontSize: '18px' }}>Action</Typography.Text>,
      width: '15%',
      render: (facility: DataType) => (
        <Space>
          <Button
            type='primary'
            size='large'
            onClick={() => {
              navigate(`/admin/facilities/show/${facility._id}`)
            }}
          >
            <EyeOutlined className='text-white text-[22px]' />
          </Button>
          <Button
            type='primary'
            size='large'
            danger
            onClick={() => {
              setSelectedFacility(facility)
              setIsModalOpen(true)
            }}
          >
            <DeleteOutlined className='text-white text-[22px]' />
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
            title: <Link to='/admin'>Home</Link>,
          },
          {
            title: 'Facilities',
          },
        ]}
        style={{ padding: '4px', fontSize: '16px' }}
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
            <AdminSearch
              endpoint='workplace'
              keysearch={search ?? ''}
              onChangeInput={handleSearch}
            />
            {/* <AdminStatusSelect
              endpoint='workplace'
              status={status ?? ''}
              options={options}
              optionFilterProp='value'
              filterOption={filterOption}
              onChangeInput={handleSearchStatus}
            /> */}
            <Button
              type='primary'
              onClick={() => navigate('/admin/facilities/create')}
              style={{ display: 'flex', alignItems: 'center', height: '40px', fontSize: '16px' }}
            >
              <MdAddCircleOutline className='text-[22px]' />
            </Button>
          </Space>
        </div>
        {workplaceData && !search && (
          <Table
            rowKey={(facility: DataType) => facility._id}
            columns={columns}
            dataSource={workplaceData.data}
            pagination={{
              ...tablePagination,
              total: workplaceData?.total,
            }}
            onChange={onChange}
            style={{ marginTop: 16 }}
          />
        )}
        {search && (
          <Table
            rowKey={(facility: DataType) => facility._id}
            columns={columns}
            dataSource={searchWorkplaceData?.data}
            pagination={{
              ...tablePagination,
              total: searchWorkplaceData?.total,
            }}
            onChange={onChange}
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
