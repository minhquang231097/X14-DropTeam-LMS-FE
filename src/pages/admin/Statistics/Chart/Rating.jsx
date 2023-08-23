import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Bar } from '@ant-design/plots';
import { Card, Space } from 'antd';

const Rating = () => {
  const data = [
    {
      rating: '1*',
      value: 27,
    },
    {
      rating: '2*',
      value: 25,
    },
    {
      rating: '3*',
      value: 18,
    },
    {
      rating: '4*',
      value: 15,
    },
    {
      rating:'5*',
      value: 10,
    },
  ];
  const config = {
    data,
    width: 300,
    height: 200,
    xField: 'value',
    yField: 'rating',
    seriesField: 'rating',
    legend: {
      position: 'top-left',
    },
  };
  return(
    <Card title="Rating">
    <Bar {...config}/>
  </Card>
  );
};

export default Rating