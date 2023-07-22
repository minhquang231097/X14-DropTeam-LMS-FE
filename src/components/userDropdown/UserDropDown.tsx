import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import { FaUserCircle } from 'react-icons/fa'
import ModalLogin from '../pages/login/ModalLogin'
import ModalRegister from '../pages/register/ModalRegister'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <ModalLogin />,
  },
  {
    key: '2',
    label: <ModalRegister />,
  },
]

const UserDropDown: React.FC = () => {
  return (
    <Dropdown
      menu={{ items }}
      placement='bottomRight'
      arrow
    >
      <a
        href='/'
        className='flex items-center no-underline text-gray-600 dark:text-gray-100'
      >
        <FaUserCircle className='text-3xl cursor-pointer' />
      </a>
    </Dropdown>
  )
}

export default UserDropDown
