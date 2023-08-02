import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { Tooltip } from 'antd'
import { Link } from 'react-router-dom'
import { Course } from '@/types/course.type'
import a from '../../assets/images/teacher/a.jpg'

const CourseCard = (course: Course) => {
  return (
    <div
      className='w-[300px] bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden '
      style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.14)' }}
    >
      <Link
        to={`/course-detail?id=${course._id}`}
        className='no-underline text-gray-800 dark:text-gray-100'
      >
        <img
          src={course.image[0]}
          alt=''
          className='w-full'
        />
        <div className='px-4'>
          <p className='font-bold leading-6'>
            {course.course_code}: Introduction to {course.title} for Beginners
          </p>
          <div className='flex items-center'>
            <div className='flex items-center flex-1 text-gray-500'>
              <AiOutlineClockCircle className='text-[#368A29] text-lg mr-2' />
              {course.duration} min
            </div>
            <div className='flex items-center flex-1 text-gray-500'>
              <BiBarChart className='text-[#754FFE] text-lg mr-2' />
              {course.level}
            </div>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center text-xl mr-1'>
              {[...Array(course.rate)].map(() => {
                return <p className='m-0 mt-2 mr-1 text-[#F59E0B]'>&#9733;</p>
              })}
            </div>
            <span className='mt-[10px] text-gray-500 text-sm'>({Math.floor(Math.random() * 10000)})</span>
          </div>
          <div className='flex items-center'>
            <p className='font-bold mr-2'>${course.price}</p>
            <p className='text-gray-500 text-sm line-through'>${course.price * (1 - course.discount / 100)}</p>
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
      </Link>
    </div>
  )
}

export default CourseCard
