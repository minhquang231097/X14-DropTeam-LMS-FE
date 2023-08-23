import React from 'react'
import Chart from './Chart/Chart';
import Donut from './Chart/Donut';
import CardItem from './Card/Card';
import AdminLayout from '@/layouts/admin';
import HeaderDashBoard from './HeaderDashBoard/HeaderDashBoard';
import Rating from './Chart/Rating';
const Statistics = () => {
  return (
    <div  style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      // padding:'30px'
    }}>
      <HeaderDashBoard />
      <CardItem />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}>
        <Chart />
        <Rating/>
        <Donut />
      </div>
    </div>
  )
}

const AdminStatistics: React.FC = () => {
  return <AdminLayout content={<Statistics />} />
}

export default AdminStatistics