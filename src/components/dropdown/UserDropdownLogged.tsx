import React from 'react'
import { Avatar, Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { IoMdLogOut } from 'react-icons/io'
import { RiUserSettingsLine, RiShieldKeyholeLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import handleLogout from '@/apis/logout.api'

const UserDropdownLogged: React.FC<{ username: any }> = (prop: any) => {
  const { username } = prop
  const navigate = useNavigate()
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div className='flex items-center justify-center text-lg text-[#F56A00] font-bold'>{username}</div>,
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
          onClick={() => navigate('/edit-profile')}
        >
          <RiUserSettingsLine className='text-2xl mr-2 p-2 pl-0' />
          Edit Profile
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div
          className='flex items-center text-gray-600 font-bold'
          onClick={() => navigate('/change-password')}
        >
          <RiShieldKeyholeLine className='text-2xl mr-2 p-2 pl-0' />
          Change Password
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
        <Avatar style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold', backgroundColor: '#F1F5F9' }}>
          {username.charAt(0).toUpperCase()}
        </Avatar>
      </a>
    </Dropdown>
  )
}

export default UserDropdownLogged
