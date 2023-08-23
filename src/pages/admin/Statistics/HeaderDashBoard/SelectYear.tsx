import React, { useState } from 'react';
import {
  Button,
  Form,
  Select,
} from 'antd';
import { Option } from 'antd/es/mentions'

const SelectYear: React.FC = () => {

  return (
    <Form
      // labelCol={{ span: 4 }}
      // wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <div style={{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
      // gap: '30px',
  }}>
      <Form.Item>
          <Select placeholder='Select year' style={{width:'180px'}}>
            <Option value='2023'>2023</Option>
            <Option value='2022'>2022</Option>
            <Option value='2021'>2021</Option>
          </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
      </Form.Item>
      </div>
    </Form>
  );
};

export default SelectYear;