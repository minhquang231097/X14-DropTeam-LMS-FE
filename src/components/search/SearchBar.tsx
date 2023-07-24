import React from 'react'
import { FiSearch } from 'react-icons/fi'
const SearchBar: React.FC = () => {
  return (
    <div className='relative flex items-center ml-10'>
      <FiSearch className='absolute left-3 text-gray-400' />
      <input
        type='text'
        placeholder='Search Course ...'
        className='dark:bg-[#0B1324] rounded-md outline-none h-8 pl-10 border-[1px] border-solid border-gray-400 dark:border-0 focus:outline-none focus:border-sky-500 focus:border-[1px] dark:text-gray-100'
      />
    </div>
  )
}

export default SearchBar
