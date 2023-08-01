import CourseCard from './CourseCard'
import { getCoursesList } from '@/apis/coursesList.api'
import { useQuery } from '@tanstack/react-query'
import { useQueryString } from '@/utils/utils'

const Sheft: React.FC = ({ title: title }) => {
  const queryString: { page?: string } = useQueryString()
  const page = Number(queryString.page) || 1

  const { data } = useQuery({
    queryKey: ['courses', page],
    queryFn: async () => {
      const data = await getCoursesList(page, 4)
      return data?.data
    },
  })

  return (
    <div className='max-w-[1280px] mx-auto '>
      <p className='text-2xl font-bold m-0 mt-[96px] mb-[30px] dark:text-gray-100'>{title}</p>
      <div className='grid grid-cols-4 gap-6'>{data ? data.map((course: any) => <CourseCard {...course} />) : ''}</div>
    </div>
  )
}

export default Sheft
