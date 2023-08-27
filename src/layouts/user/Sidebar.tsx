import React from 'react'
import { Checkbox, Radio } from 'antd'

const Sidebar: React.FC = () => {
  return (
    <div
      className='bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200'
      style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
    >
      <p className='font-bold m-0 py-4 px-5 text-gray-500 dark:text-gray-100 border-0 border-b-[1px] border-solid border-gray-300 dark:border-gray-500'>
        Filter
      </p>
      <div className='px-5 text-gray-500  border-0 border-b-[1px] border-solid border-gray-300 dark:border-gray-500 pb-4'>
        <p className='font-bold'>CATEGORY</p>
        <div className='flex flex-col'>
          <div className='mb-2 dark:text-gray-100'>
            <Checkbox style={{ color: '#888' }}>React</Checkbox>
          </div>
          <div className='mb-2 dark:text-gray-100'>
            <Checkbox style={{ color: '#888' }}>NodeJS</Checkbox>
          </div>
          <div className='mb-2 dark:text-gray-100'>
            <Checkbox style={{ color: '#888' }}>Angular</Checkbox>
          </div>
          <div className='mb-2 dark:text-gray-100'>
            <Checkbox style={{ color: '#888' }}>JavaScript</Checkbox>
          </div>
          <div className='mb-2 dark:text-gray-100'>
            <Checkbox style={{ color: '#888' }}>HTML</Checkbox>
          </div>
        </div>
      </div>
      <div className='px-5 text-gray-500  border-0 border-b-[1px] border-solid border-gray-300 dark:border-gray-500 pb-4'>
        <p className='font-bold'>RATING</p>
        <div className='flex flex-col'>
          <Radio.Group>
            <div className='mb-2'>
              <Radio value='5'>
                <p className='m-0 text-xl text-[#F59E0B]'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              </Radio>
            </div>
            <div className='mb-2'>
              <Radio value='4'>
                <p className='m-0 text-xl text-[#F59E0B]'>&#9733;&#9733;&#9733;&#9733;</p>
              </Radio>
            </div>
            <div className='mb-2'>
              <Radio value='3'>
                <p className='m-0 text-xl text-[#F59E0B]'>&#9733;&#9733;&#9733;</p>
              </Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
      <div className='px-5 text-gray-500  border-0 mb-4'>
        <p className='font-bold'>LEVEL</p>
        <div className='flex flex-col'>
          <div className='mb-2'>
            <Checkbox style={{ color: '#888' }}>All Level</Checkbox>
          </div>
          <div className='mb-2'>
            <Checkbox style={{ color: '#888' }}>Beginner</Checkbox>
          </div>
          <div className='mb-2'>
            <Checkbox style={{ color: '#888' }}>Intermediate</Checkbox>
          </div>
          <div className='mb-2'>
            <Checkbox style={{ color: '#888' }}>Advance</Checkbox>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
