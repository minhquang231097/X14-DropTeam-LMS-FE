import React from 'react'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { IoMdLogOut } from 'react-icons/io'
import { RiUserSettingsLine, RiAdminLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import handleLogout from '@/apis/logout.api'

const UserDropdownAdmin: React.FC<{ username: any }> = (props: any) => {
  const navigate = useNavigate()
  const USER = JSON.parse(localStorage.getItem('user') as string)

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div className='flex items-center justify-center text-gray-600 font-bold'>{props.username}</div>,
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
          onClick={() => {
            if (USER.role === 'ADMIN') {
              navigate('/admin')
            }
          }}
        >
          <RiAdminLine className='text-2xl mr-2 p-2 pl-0' />
          Admin Dashboard
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div
          className='flex items-center text-gray-600 font-bold'
          onClick={() => navigate(`/profile-detail?id=${USER.userId}`)}
        >
          <RiUserSettingsLine className='text-2xl mr-2 p-2 pl-0' />
          Edit Profile
        </div>
      ),
    },
    {
      key: '4',
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
      <a target='_blank'>
        <Avatar style={{ backgroundColor: '#f56a00', color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
          {props.username.charAt(0).toUpperCase()}
        </Avatar>
      </a>
    </Dropdown>
  )
}

export default UserDropdownAdmin
