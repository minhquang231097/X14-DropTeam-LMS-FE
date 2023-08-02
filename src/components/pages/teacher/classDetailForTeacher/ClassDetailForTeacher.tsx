import React from 'react'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import SidebarTeacher from '@/components/layouts/SidebarTeacher'
import Divider from 'antd/es/divider'
import { Select, ConfigProvider, Pagination } from 'antd'
import { Link } from 'react-router-dom'

const ClassDetailForTeacher: React.FC = () => {
  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto py-8 grid grid-cols-4 gap-4'>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorText: '#888',
                colorBorder: '#999',
                colorBgContainer: 'trasparent',
                colorTextPlaceholder: '#888',
                colorBgSpotlight: '#888',
              },
            },
          }}
        >
          <SidebarTeacher />
          <div
            className='col-span-3 row-span-4 bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200 overflow-hidden'
            style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
          >
            <div className='p-4'>
              <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>Class Name here ...</span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total students: <span className='text-blue-600'>10</span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Schedule: <span className='text-blue-600'>Mon & Fri</span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Lessons list:{' '}
                <Link
                  to='/teacher/lessons-list'
                  className='text-blue-600 no-underline'
                >
                  View -&gt;
                </Link>
              </p>
            </div>
            <Divider
              style={{ margin: 0 }}
              className='dark:bg-gray-600'
            />
            <div className='grid grid-cols-4 gap-4 p-4 py-6'>
              <input
                type='text'
                placeholder='Search Student Name ...'
                className='col-span-3 dark:bg-[#0B1324] rounded-md outline-none pl-2 border-[1px] border-solid border-gray-500 dark:border-[#0B1324] focus:outline-none focus:border-sky-500 dark:focus:border-sky-500 dark:focus:border-solid dark:focus:border-[1px] focus:border-[1px] dark:text-gray-100'
              />

              <Select
                placeholder='Sort by'
                className='col-span-1 h-8'
                options={[
                  { value: 'newest', label: 'Newest' },
                  { value: 'free', label: 'Free' },
                ]}
              />
            </div>
            <Divider
              style={{ margin: 0 }}
              className='dark:bg-gray-600'
            />
            <div className=' overflow-x-scroll'>
              <div className='grid grid-cols-12 px-4 gap-4 items-center font-bold text-gray-600 dark:text-gray-300'>
                <div>No.</div>
                <div className='col-span-2'>Student Name</div>
                <div className='col-span-2'>Mail</div>
                <div className='col-span-2'>Phone Number</div>
                <div>Status</div>

                <div className='flex'>
                  {/* Session 1 */}
                  <div className='text-center border-solid border-[1px] border-gray-600'>
                    <div className='text-sm p-2'>Session 1</div>
                    <div className='flex text-sm border-solid border-0 border-t-[1px] border-gray-600'>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>
                        Attendance
                      </div>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>Score</div>
                      <div className='p-2 w-[94px] '>Comment</div>
                    </div>
                  </div>

                  {/* Session 2 */}
                  <div className='text-center border-solid border-[1px] border-gray-600'>
                    <div className='text-sm p-2'>Session 2</div>
                    <div className='flex text-sm border-solid border-0 border-t-[1px] border-gray-600'>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>
                        Attendance
                      </div>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>Score</div>
                      <div className='p-2 w-[94px] '>Comment</div>
                    </div>
                  </div>

                  {/* Session 3 */}
                  <div className='text-center border-solid border-[1px] border-gray-600'>
                    <div className='text-sm p-2'>Session 3</div>
                    <div className='flex text-sm border-solid border-0 border-t-[1px] border-gray-600'>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>
                        Attendance
                      </div>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>Score</div>
                      <div className='p-2 w-[94px] '>Comment</div>
                    </div>
                  </div>

                  {/* Session 4 */}
                  <div className='text-center border-solid border-[1px] border-gray-600'>
                    <div className='text-sm p-2'>Session 4</div>
                    <div className='flex text-sm border-solid border-0 border-t-[1px] border-gray-600'>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>
                        Attendance
                      </div>
                      <div className='p-2 w-[94px] border-solid border-0 border-r-[1px] border-gray-600'>Score</div>
                      <div className='p-2 w-[94px] '>Comment</div>
                    </div>
                  </div>
                </div>
              </div>
              <Divider
                style={{ margin: 0 }}
                className='dark:bg-gray-600'
              />

              <>
                <>
                  <div className='grid grid-cols-12 gap-4 items-center p-4'>
                    <span className='text-sm text-gray-500'>1</span>
                    <p className='col-span-2 m-0 font-bold text-gray-600 text-sm dark:text-gray-400'>Dinh Cuong</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>cuong@email.com</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>0979999999</p>
                    <div className='text-sm font-bold text-[#38A169] '>Active</div>

                    <div className='flex'>
                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: 0 }}
                    className='dark:bg-gray-600'
                  />
                </>

                <>
                  <div className='grid grid-cols-12 gap-4 items-center p-4'>
                    <span className='text-sm text-gray-500'>2</span>
                    <p className='col-span-2 m-0 font-bold text-gray-600 text-sm dark:text-gray-400'>Thanh Tung</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>tung@email.com</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>0979999888</p>
                    <div className='text-sm font-bold text-[#38A169] '>Active</div>

                    <div className='flex'>
                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none  dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: 0 }}
                    className='dark:bg-gray-600'
                  />
                </>

                <>
                  <div className='grid grid-cols-12 gap-4 items-center p-4'>
                    <span className='text-sm text-gray-500'>3</span>
                    <p className='col-span-2 m-0 font-bold text-gray-600 text-sm dark:text-gray-400'>Dinh Cuong</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>cuong@email.com</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>0979999999</p>
                    <div className='text-sm font-bold text-[#38A169] '>Active</div>

                    <div className='flex'>
                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: 0 }}
                    className='dark:bg-gray-600'
                  />
                </>

                <>
                  <div className='grid grid-cols-12 gap-4 items-center p-4'>
                    <span className='text-sm text-gray-500'>4</span>
                    <p className='col-span-2 m-0 font-bold text-gray-600 text-sm dark:text-gray-400'>Thanh Tung</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>tung@email.com</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>0979999888</p>
                    <div className='text-sm font-bold text-[#38A169] '>Active</div>

                    <div className='flex'>
                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none  dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: 0 }}
                    className='dark:bg-gray-600'
                  />
                </>

                <>
                  <div className='grid grid-cols-12 gap-4 items-center p-4'>
                    <span className='text-sm text-gray-500'>5</span>
                    <p className='col-span-2 m-0 font-bold text-gray-600 text-sm dark:text-gray-400'>Dinh Cuong</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>cuong@email.com</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>0979999999</p>
                    <div className='text-sm font-bold text-[#38A169] '>Active</div>

                    <div className='flex'>
                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: 0 }}
                    className='dark:bg-gray-600'
                  />
                </>

                <>
                  <div className='grid grid-cols-12 gap-4 items-center p-4'>
                    <span className='text-sm text-gray-500'>6</span>
                    <p className='col-span-2 m-0 font-bold text-gray-600 text-sm dark:text-gray-400'>Thanh Tung</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>tung@email.com</p>
                    <p className='col-span-2 m-0 text-sm text-gray-500'>0979999888</p>
                    <div className='text-sm font-bold text-[#38A169] '>Active</div>

                    <div className='flex'>
                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none  dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>

                      <div className='flex min-w-[334px] '>
                        <Select
                          placeholder='Attendance'
                          className='min-w-[112px] h-8'
                          options={[
                            { value: 'present', label: 'Present' },
                            { value: 'absent', label: 'Absent' },
                          ]}
                        />
                        <Select
                          placeholder='Score'
                          className='min-w-[110px] h-8'
                          options={[
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' },
                          ]}
                        />
                        <input
                          type='text'
                          className='max-w-[108px] p-0 rounded border-solid border-[1px] focus:outline-none dark:bg-transparent dark:text-gray-300'
                        />
                      </div>
                    </div>
                  </div>
                  <Divider
                    style={{ margin: 0 }}
                    className='dark:bg-gray-600'
                  />
                </>
              </>
            </div>
            <div className='flex justify-center my-8'>
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
        </ConfigProvider>
      </div>
      <Footer />
    </>
  )
}

export default ClassDetailForTeacher
