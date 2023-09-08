import React, { useState } from 'react'
import { Card, Col, Row } from 'antd'
import Chart from '@/components/chart/Chart'
import Donut from '@/components/chart/Donut'
import CardItem from '@/components/dashboard/Card'
import HeaderDashBoard from '@/components/dashboard/Header'
import Rating from '@/components/chart/Rating'
import { data } from '@/data/data'
import AdminLayout from '@/layouts/admin'

const CustomContent = () => {
  const [year, setYear] = useState('2021')
  const filterData = data.find((e) => e.year === year)?.data
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <HeaderDashBoard
            data={data}
            setYear={setYear}
          />
        </Col>
        <Col span={24}>
          <CardItem
            sale={filterData?.sale as string}
            mentor={filterData?.mentor as string}
            student={filterData?.student as string}
            course={filterData?.course as string}
          />
        </Col>
        <Col span={24}>
          <Chart data={filterData?.earning} />
        </Col>
        <Col
          xs={24}
          lg={12}
        >
          <Rating data={filterData?.rating} />
        </Col>
        <Col
          xs={24}
          lg={12}
        >
          <Donut data={filterData?.traffic} />
        </Col>
      </Row>
    </div>
  )
}

const AdminHome: React.FC = () => <AdminLayout content={<CustomContent />} />

export default AdminHome
