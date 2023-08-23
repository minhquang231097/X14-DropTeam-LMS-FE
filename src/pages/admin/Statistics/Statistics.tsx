import React, { useState } from 'react'
import Chart from './Chart/Chart';
import Donut from './Chart/Donut';
import CardItem from './Card/Card';
import AdminLayout from '@/layouts/admin';
import HeaderDashBoard from './HeaderDashBoard/HeaderDashBoard';
import Rating from './Chart/Rating';
import data from '@/data/data';
const Statistics = () => {
  const[year,setYear]=useState("2021")
  let filterData=data.find((e)=>e.year==year)?.data
  return (
    <div  style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
      // padding:'30px'
    }}>
      <HeaderDashBoard data={data} setYear={setYear}/>
      <CardItem 
      sale={filterData?.sale} 
      mentor={filterData?.mentor}
      student={filterData?.student}
      course={filterData?.course}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
      }}>
        <Chart data={filterData?.earning}/>
        <Rating data={filterData?.rating}/>
        <Donut data={filterData?.traffic}/>
      </div>
    </div>
  )
}

const AdminStatistics: React.FC = () => {
  return <AdminLayout content={<Statistics />} />
}

export default AdminStatistics