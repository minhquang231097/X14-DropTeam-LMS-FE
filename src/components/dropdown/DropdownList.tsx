import React from 'react'
import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import { RiArrowDropDownLine } from 'react-icons/ri'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a
        rel='noopener noreferrer'
        href='/'
      >
        Course 1
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        rel='noopener noreferrer'
        href='/'
      >
        Course 2
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        rel='noopener noreferrer'
        href='/'
      >
        Course 3
      </a>
    ),
  },
]

const DropdownList: React.FC = () => {
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
        Courses
        <RiArrowDropDownLine className='text-2xl' />
      </a>
    </Dropdown>
  )
}

export default DropdownList
