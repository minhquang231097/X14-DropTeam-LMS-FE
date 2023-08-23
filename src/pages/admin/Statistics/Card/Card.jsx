import React from 'react';
import { Space } from 'antd';
import DashBoardCard from './DashBoardCard';
import { GoBook } from 'react-icons/go';
import { MdOutlineAttachMoney, MdOutlinePeople } from 'react-icons/md';
const CardItem = () => (
  <Space direction="horizontal" >
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
    }}>
      <DashBoardCard title={"Sale"} content={10000} icon={<MdOutlineAttachMoney size={23} color={'#8854C0'}/>} />
      <DashBoardCard title={"Course"} content={100} icon={<GoBook size={23} color={'#8854C0'}/>} />
      <DashBoardCard title={"Student"} content={1000} icon={<MdOutlinePeople size={23} color={'#8854C0'}/>} />
      <DashBoardCard title={"Mentor"} content={10} icon={<MdOutlinePeople size={23} color={'#8854C0'}/>} />
    </div>
  </Space>
);
export default CardItem;