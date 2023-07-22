import graphql from '../../assets/images/courses/graphql.jpg'
import a from '../../assets/images/teacher/a.jpg'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Tooltip } from 'antd'

const CourseCard = () => {
  return (
    <div
      className='w-[300px] dark:bg-[#1E293B] rounded-xl overflow-hidden '
      style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.14)' }}
    >
      <a
        href=''
        className='no-underline text-gray-800 dark:text-gray-100'
      >
        <img
          src={graphql}
          alt=''
          className='w-full'
        />
        <div className='px-4'>
          <p className='font-bold leading-6'>GraphQl: Introduction to GraphQL for Beginners</p>
          <div className='flex items-center'>
            <div className='flex items-center flex-1 text-gray-500'>
              <AiOutlineClockCircle className='text-[#368A29] text-lg mr-2' />
              2h 45m
            </div>
            <div className='flex items-center flex-1 text-gray-500'>
              <BiBarChart className='text-[#754FFE] text-lg mr-2' />
              Advance
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center text-xl mr-1'>
              <p className='m-0 mt-2 mr-1 text-[#F59E0B]'>&#9733;</p>
              <p className='m-0 mt-2 mr-1 text-[#F59E0B]'>&#9733;</p>
              <p className='m-0 mt-2 mr-1 text-[#F59E0B]'>&#9733;</p>
              <p className='m-0 mt-2 mr-1 text-[#F59E0B]'>&#9733;</p>
              <p className='m-0 mt-2 mr-1 text-[#F59E0B]'>&#9733;</p>
            </div>
            <span className='mt-[10px] text-gray-500 text-sm'>(2,500)</span>
          </div>
          <div className='flex items-center'>
            <p className='font-bold mr-2'>$700</p>
            <p className='text-gray-500 text-sm line-through'>$850</p>
          </div>
        </div>
        <div className='flex items-center justify-between border-0 border-t-[1px] border-gray-300 dark:border-[#334155] border-solid px-4'>
          <div className='flex items-center'>
            <img
              src={a}
              alt=''
              className='w-8 h-8 rounded-full mr-2'
            />
            <p className='text-gray-500'>Miston Wilson</p>
          </div>
          <a href=''>
            <Tooltip title='View Detail Course'>
              <BiMessageSquareDetail className='text-xl text-[#8A6AFE]' />
            </Tooltip>
          </a>
        </div>
      </a>
    </div>
  )
}

export default CourseCard
