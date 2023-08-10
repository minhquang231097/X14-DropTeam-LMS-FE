import { ConfigProvider, Menu, MenuProps } from 'antd'
import { MdClass, MdMenuBook, MdOutlineFeedback, MdOutlineHome, MdPeople, MdPlace } from 'react-icons/md'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './menu.css'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  style?: React.CSSProperties,
): MenuItem {
  return { label, key, icon, children, style } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Home', '', <MdOutlineHome style={{ fontSize: '24px', verticalAlign: 'middle' }} />),

  getItem('Users', 'users', <MdPeople style={{ fontSize: '24px', verticalAlign: 'middle' }} />, [
    getItem('Teachers', 'users/teachers'),
    getItem('Students', 'users/students'),
  ]),

  getItem('Courses', 'courses', <MdMenuBook style={{ fontSize: '24px', verticalAlign: 'middle' }} />, [
    getItem('All Courses', 'courses/all'),
    getItem('Course Categories', 'courses/categories'),
  ]),

  getItem('Classes', 'classes/all', <MdClass style={{ fontSize: '24px', verticalAlign: 'middle' }} />),
  getItem('Facilities', 'facilities/all', <MdPlace style={{ fontSize: '24px', verticalAlign: 'middle' }} />),
  getItem('Feedbacks', 'feedbacks', <MdOutlineFeedback style={{ fontSize: '24px', verticalAlign: 'middle' }} />),
  // getItem('Analytics', 'analytics', <MdBarChart style={{ fontSize: '24px', verticalAlign: 'middle' }} />),
  // getItem('Calendar', 'calendar', <MdOutlineCalendarToday style={{ fontSize: '24px', verticalAlign: 'middle' }} />),
]

const MenuSection: React.FC = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/admin/${e.key}`)
    // console.log(e.key)
  }

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Menu: { itemColor: 'white', itemBg: '#111827', itemHoverColor: '#1677ff', colorBgElevated: '#111827' },
          },
        }}
      >
        <Menu
          onClick={onClick}
          defaultSelectedKeys={['']}
          defaultOpenKeys={['courses/all']}
          mode='inline'
          items={items}
        />
      </ConfigProvider>
    </>
  )
}

export default MenuSection
