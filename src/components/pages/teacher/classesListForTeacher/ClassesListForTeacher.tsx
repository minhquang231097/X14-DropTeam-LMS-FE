import React from 'react'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import SidebarTeacher from '@/components/layouts/SidebarTeacher'
import Divider from 'antd/es/divider'
import { Select, ConfigProvider, Pagination } from 'antd'

const ClassesListForTeacher: React.FC = () => {
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
            <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>Classes</span>
            <p className='m-0 text-small text-gray-500 mt-2'>
              Total: <span className='text-blue-600 font-bold'>10</span>
            </p>
          </div>
          <Divider
            style={{ margin: 0 }}
            className='dark:bg-gray-600'
          />
          <div className='grid grid-cols-4 gap-4 p-4 py-6'>
            <input
              type='text'
              placeholder='Search Classes Name ...'
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
                placeholder='Sort by'
                className='col-span-1 h-8'
                options={[
                  { value: 'newest', label: 'Newest' },
                  { value: 'free', label: 'Free' },
                ]}
              />
            </ConfigProvider>
          </div>
          <Divider
            style={{ margin: 0 }}
            className='dark:bg-gray-600'
          />
          <div className='bg-[#F1F5F9] '>
            <div className='grid grid-cols-6 gap-4 p-4 font-bold text-gray-600 dark:bg-[#334155] dark:text-gray-300'>
              <div>No.</div>
              <div className='col-span-2'>Class Name</div>
              <div>Workplace</div>
              <div>Schedule</div>
              <div>Status</div>
            </div>
            <Divider
              style={{ margin: 0 }}
              className='dark:bg-gray-600'
            />
            <>
              <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                <span className='text-sm text-gray-500'>1</span>
                <div className='col-span-2'>
                  <p className='m-0 font-bold mb-2 text-gray-600 dark:text-gray-400'>Code For Everyone</p>
                  <p className='m-0 text-sm text-gray-500'>
                    <span>1/1/2023</span> - <span>1/1/2024</span>
                  </p>
                </div>
                <p className='m-0 text-sm text-gray-500'>TC</p>
                <p className='m-0 text-sm text-gray-500'>Mon, Fri</p>
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
                <div className='col-span-2'>
                  <p className='m-0 font-bold mb-2 text-gray-600 dark:text-gray-400'>Code For Everyone</p>
                  <p className='m-0 text-sm text-gray-500'>
                    <span>1/1/2023</span> - <span>1/1/2024</span>
                  </p>
                </div>
                <p className='m-0 text-sm text-gray-500'>TC</p>
                <p className='m-0 text-sm text-gray-500'>Mon, Fri</p>
                <div className='text-sm font-bold text-[#38A169] '>Active</div>
              </div>
              <Divider
                style={{ margin: 0 }}
                className='dark:bg-gray-600'
              />
            </>
            <>
              <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                <span className='text-sm text-gray-500'>3</span>
                <div className='col-span-2'>
                  <p className='m-0 font-bold mb-2 text-gray-600 dark:text-gray-400'>Code For Everyone</p>
                  <p className='m-0 text-sm text-gray-500'>
                    <span>1/1/2023</span> - <span>1/1/2024</span>
                  </p>
                </div>
                <p className='m-0 text-sm text-gray-500'>TC</p>
                <p className='m-0 text-sm text-gray-500'>Mon, Fri</p>
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
                <div className='col-span-2'>
                  <p className='m-0 font-bold mb-2 text-gray-600 dark:text-gray-400'>Code For Everyone</p>
                  <p className='m-0 text-sm text-gray-500'>
                    <span>1/1/2023</span> - <span>1/1/2024 e2e5e7</span>
                  </p>
                </div>
                <p className='m-0 text-sm text-gray-500'>TC</p>
                <p className='m-0 text-sm text-gray-500'>Mon, Fri</p>
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
                <div className='col-span-2'>
                  <p className='m-0 font-bold mb-2 text-gray-600 dark:text-gray-400'>Code For Everyone</p>
                  <p className='m-0 text-sm text-gray-500'>
                    <span>1/1/2023</span> - <span>1/1/2024</span>
                  </p>
                </div>
                <p className='m-0 text-sm text-gray-500'>TC</p>
                <p className='m-0 text-sm text-gray-500'>Mon, Fri</p>
                <div className='text-sm font-bold text-[#38A169] '>Active</div>
              </div>
              <Divider
                style={{ margin: 0 }}
                className='dark:bg-gray-600'
              />
            </>
            <>
              <div className='grid grid-cols-6 gap-4 items-center p-4 hover:bg-[#f1eded] dark:hover:bg-[#1a2644] dark:bg-[#0F172A]'>
                <span className='text-sm text-gray-500'>6</span>
                <div className='col-span-2'>
                  <p className='m-0 font-bold mb-2 text-gray-600 dark:text-gray-400'>Code For Everyone</p>
                  <p className='m-0 text-sm text-gray-500'>
                    <span>1/1/2023</span> - <span>1/1/2024</span>
                  </p>
                </div>
                <p className='m-0 text-sm text-gray-500'>TC</p>
                <p className='m-0 text-sm text-gray-500'>Mon, Fri</p>
                <div className='text-sm font-bold text-[#38A169] '>Active</div>
              </div>
              <Divider
                style={{ margin: 0 }}
                className='dark:bg-gray-600'
              />
            </>
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

export default ClassesListForTeacher
