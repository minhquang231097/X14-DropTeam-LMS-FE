import Logo from '../../assets/images/logo/logo-with-shadow.png'
import SearchBar from '../search/SearchBar'
import DropdownList from '../dropdown/DropdownList'
import DarkMode from '../darkModeToggle/DarkMode'
import UserDropDown from '../userDropdown/UserDropDown'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='h-[56px] dark:bg-[#1E293B] flex items-center justify-between border-0 border-b-[1px] border-gray-300 border-solid dark:border-none'>
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
            href='#'
            className='leading-6 font-bold no-underline text-gray-600 dark:text-gray-100'
          >
            About
          </a>
          <a
            href='#'
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
            href='#'
            className='flex items-center no-underline text-gray-600 dark:text-gray-100'
          >
            <UserDropDown />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
