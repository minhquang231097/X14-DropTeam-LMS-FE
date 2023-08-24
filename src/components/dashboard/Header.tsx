import React from 'react'
// import {
//     Button,
//     Form,
//     Select,
//   } from 'antd';
//   import { Option } from 'antd/es/mentions'

interface Props {
  data: any
  setYear: (year: string) => void
}

const HeaderDashBoard: React.FC<Props> = (props) => {
  const { data, setYear } = props
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <div style={{ fontSize: '30px', fontWeight: '600' }}>Dashboard</div>
      <div>
        {/* <Form
      layout="horizontal"
      style={{ maxWidth: 600 }}
    >
      <div style={{
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'center',
      alignItems:'center',
  }}>
      <Form.Item>
          <Select placeholder='Select year' style={{width:'180px'}} onChange={handleSelect}>
            {data.map((value)=>(
              <Select.Option value={value.year} key={value.year}>{value.year}</Select.Option>
            ))}
          </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
      </Form.Item>
      </div>
    </Form> */}
        <form>
          <select
            style={{ width: '150px', height: '40px' }}
            onChange={(e) => setYear(e.target.value)}
          >
            {data.map((value: any) => (
              <option
                key={value.year}
                value={value.year}
              >
                {value.year}
              </option>
            ))}
          </select>
          <button style={{ width: '90px', height: '40px' }}>Add course</button>
        </form>
      </div>
    </div>
  )
}
export default HeaderDashBoard
