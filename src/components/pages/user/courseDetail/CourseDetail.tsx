import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'
import { Tabs, Collapse, Button } from 'antd'
import type { TabsProps } from 'antd'
import type { CollapseProps } from 'antd'
import JS from '@/assets/images/courses/js.jpg'
import Sheft from '@/components/layouts/Sheft'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { getCourse } from '@/apis/course.api'
import { useQuery } from '@tanstack/react-query'
import { useQueryString } from '@/utils/utils'

const CourseDetail: React.FC = () => {
  const queryString: { id?: string } = useQueryString()
  const id = String(queryString.id) || '#'

  const { data } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const data = await getCourse(id)
      return data?.data.data
    },
  })

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

  const itemsCollapse: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Lesson 1',
      children: <p>{text}</p>,
    },
    {
      key: '2',
      label: 'Lesson 2',
      children: <p>{text}</p>,
    },
    {
      key: '3',
      label: 'Lesson 3',
      children: <p>{text}</p>,
    },
  ]

  const CollapseComponent: React.FC = () => {
    const onChange = (key: string | string[]) => {
      console.log(key)
    }

    return (
      <Collapse
        items={itemsCollapse}
        defaultActiveKey={['1']}
        onChange={onChange}
        bordered={false}
        accordion
      />
    )
  }

  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Description`,
      children: `${data ? data.desc : ''}`,
    },
    {
      key: '2',
      label: `Contents`,
      children: <CollapseComponent />,
    },
  ]

  return (
    <>
      <Header />
      <>
        <div className='relative z-0 h-[360px] bg-gradient-to-r from-[#F3904F] to-[#3B4371] dark:bg-gradient-to-r dark:from-[#67B26F] dark:to-[#4ca2cd] flex items-center'></div>
        <div className='max-w-[1280px] mx-auto'>
          <div className='absolute top-28 w-[720px] text-white'>
            <p className='text-4xl font-bold m-0'>Getting Started with {data ? data.title : ''}</p>
            <p className='text-xl'>
              {data ? data.title : ''} is the popular programming language which powers web pages and web applications.
              This course will get you started coding in {data ? data.title : ''}.
            </p>
            <div className='flex items-center justify-between'>
              <div className='flex items-center flex-1 text-white'>
                <BiBarChart className='text-[#754FFE] text-2xl mr-2' />
                {data ? data.level : ''}
              </div>
              <div className='flex items-center flex-1 text-white'>
                <AiOutlineClockCircle className='text-[#368A29] text-2xl mr-2' />
                {data ? data.duration : ''} minutes
              </div>
              <div className='flex items-center flex-1 text-white'>
                <AiOutlineUser className='text-[#444] text-2xl mr-2' />
                1200 Enrolled
              </div>
            </div>
          </div>
          <div className='absolute z-10 top-80 w-full max-w-[1280px] grid grid-rows-1 grid-cols-3 gap-6'>
            <div
              className='col-span-2 row-span-1 bg-white rounded-lg p-4 py-0'
              style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
            >
              <Tabs
                defaultActiveKey='1'
                items={items}
                onChange={onChange}
              />
            </div>
            <div
              className='col-span-1 row-span-1 bg-white rounded-lg p-4'
              style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
            >
              <div>
                <img
                  src={data ? data.image : JS}
                  alt=''
                  className='w-full rounded-lg'
                />
                <Button
                  type='primary'
                  className='w-full mt-4'
                  size='large'
                >
                  Learn
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[320px] mb-[96px]'>
          <Sheft title='Recommended to you' />
        </div>
      </>
      <Footer />
    </>
  )
}

export default CourseDetail
