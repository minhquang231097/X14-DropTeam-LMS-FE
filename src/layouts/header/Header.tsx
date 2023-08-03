<<<<<<<< HEAD:src/components/layouts/Header.tsx
import Logo from '../../assets/images/logo/logo-with-shadow.png'
import SearchBar from './SearchBar'
import DropdownList from './DropdownList'
import DarkMode from './DarkMode'
import UserDropDown from './UserDropdownDefault'
import UserDropdownLogged from './UserDropdownLogged'
========
>>>>>>>> develop:src/layouts/header/Header.tsx
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo/logo-with-shadow.png'
import SearchBar from '../../components/search/SearchBar'
import DropdownList from '../../components/dropdown/DropdownList'
import DarkMode from '../../components/darkModeToggle/DarkMode'
import UserDropDown from '../../components/userDropdown/UserDropDown'

const Header: React.FC = () => {
  const USER = JSON.parse(localStorage.getItem('user'))
  return (
    <header className='h-[56px] bg-white dark:bg-[#1E293B] flex items-center justify-between border-0 border-b-[1px] border-gray-300 border-solid dark:border-none'>
      <nav className='max-w-[1280px] mx-auto w-full flex items-center justify-between lg:px-8'>
        <div className='flex lg:flex-1'>
          <a
            href='/'
            className='-m-1.5 p-1.5 flex items-center no-underline text-gray-600'
          >
            <img
              className='h-12 w-auto'
              src={Logo}
              alt=''
            />
            <span className='text-2xl font-bold dark:text-gray-100'>Vite Education</span>
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
          >
            {!USER ? <UserDropDown /> : <UserDropdownLogged username={USER.username} />}
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
