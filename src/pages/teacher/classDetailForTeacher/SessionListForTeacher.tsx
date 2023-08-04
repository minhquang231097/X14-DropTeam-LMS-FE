import React from 'react'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import SidebarTeacher from '@/layouts/user/SidebarTeacher'
import SessionListTable from './SessionListTable'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const SessionListForTeacher: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className='max-w-[1280px] mx-auto py-8 grid grid-cols-7 gap-4'>
        <SidebarTeacher />
        <div
          className='col-span-6 row-span-4 bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200 overflow-hidden'
          style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
        >
          <div className='p-4 flex justify-between items-start'>
            <div>
              <span className='text-xl text-gray-600 dark:text-gray-400 font-bold'>Class Name here ...</span>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Total sessions: <span className='text-blue-600'>10</span>
              </p>
              <p className='m-0 text-sm text-gray-500 mt-2'>
                Schedule: <span className='text-blue-600'>Mon & Fri</span>
              </p>
              <Button
                className='mt-4'
                type='primary'
                onClick={() => navigate('/teacher/lessons-list')}
              >
                Lesson List
              </Button>
            </div>
            <input
              type='text'
              placeholder='Search Sessions Name ...'
              className='h-8 dark:bg-[#0B1324] rounded-md outline-none pl-2 border-[1px] border-solid border-gray-500 dark:border-[#0B1324] focus:outline-none focus:border-sky-500 dark:focus:border-sky-500 dark:focus:border-solid dark:focus:border-[1px] focus:border-[1px] dark:text-gray-100'
            />
          </div>

          <SessionListTable />

          {/* <>
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
              </> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SessionListForTeacher
