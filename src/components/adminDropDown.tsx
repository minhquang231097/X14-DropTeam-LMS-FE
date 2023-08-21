import React from 'react'
import type { MenuProps } from 'antd'
import { Avatar, Dropdown } from 'antd'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdLockOutline, MdOutlineLogout, MdOutlinePersonOutline } from 'react-icons/md'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <Link
        to='/admin/profile'
        className='flex items-center text-gray-600 font-bold'
      >
        <MdOutlinePersonOutline className='text-2xl mr-2 p-2 pl-0' />
        Profile Info
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link
        to='/admin/change-password'
        className='flex items-center text-gray-600 font-bold'
      >
        <MdLockOutline className='text-2xl mr-2 p-2 pl-0' />
        Change Password
      </Link>
    ),
  },
  {
    type: 'divider',
  },
  {
    key: '3',
    label: (
      <Link
        to='/login'
        className='flex items-center text-gray-600 font-bold'
      >
        <MdOutlineLogout className='text-2xl mr-2 p-2 pl-0' />
        Logout
      </Link>
    ),
    style: { color: '#ef4444' },
  },
]

const AdminDropDown: React.FC = () => {
  const USER = JSON.parse(localStorage.getItem('user') as string)

  return (
    <Dropdown
      menu={{ items }}
      placement='bottomRight'
      arrow
    >
      {USER && USER.role === 'ADMIN' ? (
        <Avatar
          size={40}
          style={{
            color: 'fff',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {USER.username.charAt(0).toUpperCase()}
        </Avatar>
      ) : (
        <FaUserCircle className='text-[40px] cursor-pointer flex items-center no-underline' />
      )}
    </Dropdown>
  )
}

export default AdminDropDown
