import React from 'react'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { IoMdLogOut } from 'react-icons/io'
import handleLogout from '../pages/login/logout.ts'
import { useNavigate } from 'react-router-dom'

const UserDropdownLogged: React.FC<{ username: any }> = (prop: any) => {
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div className='flex items-center justify-center text-gray-600 font-bold'>{prop.username}</div>,
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: (
        <div
          className='flex items-center text-gray-600 font-bold'
          onClick={() => handleLogout(navigate)}
        >
          <IoMdLogOut className='text-2xl mr-2 p-2 pl-0' />
          Logout
        </div>
      ),
    },
  ]
  return (
    <Dropdown
      menu={{ items }}
      placement='bottomRight'
      arrow
    >
      <a href=''>
        <Avatar style={{ backgroundColor: '#f56a00', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
          {prop.username.charAt(0).toUpperCase()}
        </Avatar>
      </a>
    </Dropdown>
  )
}

export default UserDropdownLogged
