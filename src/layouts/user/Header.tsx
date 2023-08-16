import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Logo from '../../assets/images/logo/logo-with-shadow.png'
import SearchBar from '../../components/SearchBar'
import DropdownList from '../../components/DropdownList'
import DarkMode from './DarkMode'
import UserDropDownDefault from '../../components/UserDropdownDefault'
import UserDropdownLogged from '../../components/UserDropdownLogged'
import UserDropdownAdmin from '../../components/UserDropdownAdmin'

import { ColorModeContext } from '@/contexts/colorMode'

const Header: React.FC = () => {
  const { mode } = useContext(ColorModeContext)
  const USER = JSON.parse(localStorage.getItem('user') as string)

  return (
    <header className='h-[56px] bg-white dark:bg-[#1E293B] flex items-center justify-between border-0 border-b-[1px] border-gray-300 border-solid dark:border-none'>
      <nav className='max-w-[1280px] mx-auto w-full flex items-center justify-between lg:px-8'>
        <div className='flex lg:flex-1'>
          <a
            href='/'
            className='-m-1.5 p-1.5 flex items-center no-underline'
          >
            <img
              className='h-12 w-auto'
              src={Logo}
              alt=''
            />
            <span className='text-2xl font-bold text-gray-600 dark:text-gray-100'>Vite Education</span>
          </a>
        </div>

        <div className='flex lg:flex-1 justify-between'>
          <Link
            to='/'
            className='leading-6 font-bold no-underline text-gray-600 dark:text-gray-100'
          >
            Home
          </Link>
          <a
            target='_blank'
            className='leading-6 font-bold no-underline text-gray-600 dark:text-gray-100'
          >
            About
          </a>
          <a
            target='_blank'
            className='leading-6 font-bold no-underline text-gray-600 dark:text-gray-100'
          >
            Pages
          </a>
          <Link
            to='/courses-list'
            className='leading-6 font-bold no-underline text-gray-600 dark:text-gray-100'
          >
            <DropdownList />
          </Link>
        </div>

        <SearchBar />

        <div className='hidden lg:flex lg:items-center lg:flex-1 lg:justify-end'>
          <DarkMode />
          <a
            target='_blank'
            className='flex items-center no-underline text-gray-600 dark:text-gray-100'
            style={{ color: mode === 'light' ? '#4b5563' : 'white' }}
          >
            {!USER ? (
              <UserDropDownDefault />
            ) : USER && USER.role === 'ADMIN' ? (
              <UserDropdownAdmin username={USER.username} />
            ) : (
              <UserDropdownLogged username={USER.username} />
            )}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
