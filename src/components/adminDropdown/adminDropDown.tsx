import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
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
        to='/admin/login'
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
  return (
    <Dropdown
      menu={{ items }}
      placement='bottomRight'
      arrow
    >
      <a
        target='_blank'
        className='flex items-center no-underline text-gray-600 dark:text-gray-100'
      >
        <FaUserCircle className='text-[40px] cursor-pointer' />
      </a>
    </Dropdown>
  )
}

export default AdminDropDown
