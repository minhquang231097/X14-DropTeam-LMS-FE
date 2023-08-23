import React from 'react'
import { Card, Space } from 'antd';
const DashBoardCard = ({title,content,icon}) => {
  return (
    <Card
    title={<div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {title} {icon}
      </div>}
    style={{
      width: 200,
      border: '1px solid rgb(112,128,144, 0.1)',
      borderRadius: '8px',
    }}
  >
     <div style={{fontSize:'25px'}}>
       {content}
     </div>
  </Card>
  )
}

export default DashBoardCard