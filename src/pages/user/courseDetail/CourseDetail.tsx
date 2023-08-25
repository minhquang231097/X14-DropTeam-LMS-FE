import React from 'react'
import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai'
import { BiBarChart } from 'react-icons/bi'
import { Tabs, Collapse, Button, message } from 'antd'
import type { TabsProps, CollapseProps } from 'antd'
import { useQuery } from '@tanstack/react-query'
import Sheft from '@/components/sheft/Sheft'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import LearnRegisterModal from './LearnRegisterModal'
import noImage from '@/assets/images/courses/no-image.png'
import { getCourse } from '@/apis/course.api'
import { useQueryString } from '@/utils/utils'

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
  return (
    <Collapse
      items={itemsCollapse}
      defaultActiveKey={['1']}
      bordered={false}
      accordion
    />
  )
}

const CourseDetail: React.FC = () => {
  const queryString: { id?: string } = useQueryString()
  const id = String(queryString.id) || '#'

  const { data } = useQuery({
    queryKey: ['course', id],
    queryFn: async () => {
      const res = await getCourse(id)
      return res.data.data
    },
  })

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

  const user = JSON.parse(localStorage.getItem('user') as string)
  const [messageApi, contextHolder] = message.useMessage()
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'You are not logged in!',
    })
  }

  return (
    <>
      <Header />
      <>
        <div className='relative z-0 h-[360px] bg-gradient-to-r from-[#F3904F] to-[#3B4371] dark:bg-gradient-to-r dark:from-[#67B26F] dark:to-[#4ca2cd] flex items-center' />
        <div className='max-w-[1280px] mx-auto'>
          <div className='absolute top-28 w-[720px] text-white'>
            <div className='max-md:px-8'>
              <p className='text-4xl font-bold m-0'>Getting Started with {data ? data.title : ''}</p>
              <p className='text-xl'>
                {data ? data.title : ''} is the popular programming language which powers web pages and web
                applications. This course will get you started coding in {data ? data.title : ''}.
              </p>
            </div>
            <div className='flex items-center justify-between max-md:px-8'>
              <div className='flex items-center flex-1 text-white'>
                <BiBarChart className='text-[#754FFE] text-2xl mr-2' />
                {data
                  ? String(data.level)
                      .toLowerCase()
                      .replace(/\b\w/g, (x) => x.toUpperCase())
                  : ''}
              </div>
              <div className='flex items-center flex-1 text-white'>
                <AiOutlineClockCircle className='text-[#368A29] text-2xl mr-2' />
                {data ? data.session_per_course : ''} Sessions
              </div>
              <div className='flex items-center flex-1 text-white'>
                <AiOutlineUser className='text-[#444] text-2xl mr-2' />
                1200 Enrolled
              </div>
            </div>
          </div>
          <div className='absolute z-10 top-80 w-full max-w-[1280px] grid grid-rows-1 grid-cols-3 gap-6 max-md:top-[360px] max-md:w-[96%] max-md:mx-4'>
            <div
              className='col-span-2 row-span-1 bg-white rounded-lg p-4 py-0 '
              style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
            >
              <Tabs
                defaultActiveKey='1'
                items={items}
              />
            </div>
            <div
              className='col-span-1 row-span-1 bg-white rounded-lg p-4'
              style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
            >
              <div>
                <img
                  src={data && data.image ? data.image[0] : noImage}
                  className='w-full rounded-lg'
                  alt=''
                />
                {!user ? (
                  <>
                    {contextHolder}
                    <Button
                      size='large'
                      type='primary'
                      className='w-full mt-4'
                      onClick={error}
                    >
                      Learn
                    </Button>
                  </>
                ) : (
                  <LearnRegisterModal {...data} />
                )}
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
