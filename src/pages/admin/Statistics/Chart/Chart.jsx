import React from 'react';
import { Column, Line } from '@ant-design/plots';
import { Card, Space } from 'antd';
// import DashBoardCard from '../Card/DashBoardCard';
const Chart=() => {
  const data = [
    { month: 'Jun', value: 3 },
    { month: 'Feb', value: 4 },
    { month: 'Mar', value: 3.5 },
    { month: 'April', value: 5 },
    { month: 'May', value: 4.9 },
    { month: 'Jun', value: 6 },
    { month: 'Jul', value: 7 },
    { month: 'Aug', value: 9 },
    { month: 'Sep', value: 19 },
    { month: 'Oct', value: 19 },
    { month: 'Nov', value: 19 },
    { month: 'Dec', value: 19 },
  ];

  const config = {
    data,
    width: 300,
    height: 200,
    xField: 'month',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return(
    <Card title="Earning">
      <Column {...config}/>
    </Card>
  );
};
export default Chart;