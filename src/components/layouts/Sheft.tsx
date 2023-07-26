import CourseCard from './CourseCard'
const Sheft: React.FC = ({ title: title }) => {
  return (
    <div className='max-w-[1280px] mx-auto '>
      <p className='text-2xl font-bold m-0 mt-[96px] mb-[30px] dark:text-gray-100'>{title}</p>
      <div className='grid grid-cols-4 gap-6'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  )
}

export default Sheft
