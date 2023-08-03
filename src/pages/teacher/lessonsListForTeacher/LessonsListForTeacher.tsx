import React from 'react'
import Divider from 'antd/es/divider'
import { Select, ConfigProvider, Pagination } from 'antd'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'

const LessonsListForTeacher: React.FC = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto py-8 grid grid-cols-4 grid-rows-4 gap-4'>
        <SidebarTeacher />
        <div
          className='col-span-3 row-span-4 bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200 overflow-hidden'
          style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
        >
          <div className='p-4'>
            <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>Lessons List For Teacher</span>
            <p className='m-0 text-sm text-gray-500 mt-2'>
              Course: <span className='text-blue-600'>Code For Everyone</span>
            </p>
            <p className='m-0 text-sm text-gray-500 mt-2'>
              Total lessons: <span className='text-blue-600'>10</span>
            </p>
          </div>
          <Divider
            style={{ margin: 0 }}
            className='dark:bg-gray-600'
          />
          <div className='grid grid-cols-4 gap-4 p-4 py-6'>
            <input
              type='text'
              placeholder='Search Lessons Name ...'
              className='col-span-3 dark:bg-[#0B1324] rounded-md outline-none pl-2 border-[1px] border-solid border-gray-500 dark:border-[#0B1324] focus:outline-none focus:border-sky-500 dark:focus:border-sky-500 dark:focus:border-solid dark:focus:border-[1px] focus:border-[1px] dark:text-gray-100'
            />
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    colorText: '#888',
                    colorBorder: '#777',
                    colorBgContainer: 'trasparent',
                    colorTextPlaceholder: '#888',
                    colorBgSpotlight: '#888',
                  },
                },
              }}
            >
              <Select
                placeholder='Filter by status'
                className='col-span-1 h-8'
                options={[
                  { value: 'Done', label: 'Done' },
                  { value: 'Pending', label: 'Pending' },
                  { value: 'Draft', label: 'Draft' },
                ]}
              />
            </ConfigProvider>
          </div>
          <Divider
            style={{ margin: 0 }}
            className='dark:bg-gray-600'
          />
          <div className='bg-[#F1F5F9]'>
            <div className='grid grid-cols-6 gap-4 p-4 font-bold text-gray-600 dark:bg-[#334155] dark:text-gray-300'>
              <div>No.</div>
              <div className='col-span-4'>Lesson Name</div>
              <div>Status</div>
            </div>
            <Divider
              style={{ margin: 0 }}
              className='dark:bg-gray-600'
            />
            <div className='text-sm'>
              <>
                <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                  <span className='text-sm text-gray-500'>1</span>

                  <p
                    className='col-span-4 m-0 text-gray-500 dark:text-gray-400'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Lesson 12: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
                    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
                    totam, qui voluptate quisquam?
                  </p>

                  <div className='text-sm font-bold text-[#F59E0B] '>Pending</div>
                </div>
                <Divider
                  style={{ margin: 0 }}
                  className='dark:bg-gray-600'
                />
              </>
              <>
                <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                  <span className='text-sm text-gray-500'>2</span>

                  <p
                    className='col-span-4 m-0 text-gray-500 dark:text-gray-400'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Lesson 12: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
                    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
                    totam, qui voluptate quisquam?
                  </p>

                  <div className='text-sm font-bold text-[#38A169] '>Done</div>
                </div>
                <Divider
                  style={{ margin: 0 }}
                  className='dark:bg-gray-600'
                />
              </>
              <>
                <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                  <span className='text-sm text-gray-500'>3</span>

                  <p
                    className='col-span-4 m-0 text-gray-500 dark:text-gray-400'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Lesson 12: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
                    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
                    totam, qui voluptate quisquam?
                  </p>

                  <div className='text-sm font-bold text-[#0EA5E9] '>Draft</div>
                </div>
                <Divider
                  style={{ margin: 0 }}
                  className='dark:bg-gray-600'
                />
              </>
              <>
                <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                  <span className='text-sm text-gray-500'>4</span>

                  <p
                    className='col-span-4 m-0 text-gray-500 dark:text-gray-400'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Lesson 12: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
                    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
                    totam, qui voluptate quisquam?
                  </p>

                  <div className='text-sm font-bold text-[#F59E0B] '>Pending</div>
                </div>
                <Divider
                  style={{ margin: 0 }}
                  className='dark:bg-gray-600'
                />
              </>
              <>
                <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                  <span className='text-sm text-gray-500'>5</span>

                  <p
                    className='col-span-4 m-0 text-gray-500 dark:text-gray-400'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Lesson 12: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
                    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
                    totam, qui voluptate quisquam?
                  </p>

                  <div className='text-sm font-bold text-[#38A169] '>Done</div>
                </div>
                <Divider
                  style={{ margin: 0 }}
                  className='dark:bg-gray-600'
                />
              </>
              <>
                <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                  <span className='text-sm text-gray-500'>6</span>

                  <p
                    className='col-span-4 m-0 text-gray-500 dark:text-gray-400'
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Lesson 12: <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem natus enim porro
                    ad! Perspiciatis iure ipsum reiciendis cupiditate temporibus dolor illum facilis itaque officia ad
                    totam, qui voluptate quisquam?
                  </p>

                  <div className='text-sm font-bold text-[#38A169] '>Done</div>
                </div>
                <Divider
                  style={{ margin: 0 }}
                  className='dark:bg-gray-600'
                />
              </>
            </div>
          </div>
          <div className='flex justify-center mt-8'>
            <ConfigProvider
              theme={{
                components: {
                  Pagination: {
                    colorText: '#888',
                    itemActiveBg: 'transparent',
                  },
                },
              }}
            >
              <Pagination
                defaultCurrent={1}
                total={20}
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LessonsListForTeacher
