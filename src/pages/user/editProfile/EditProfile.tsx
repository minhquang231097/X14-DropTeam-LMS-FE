import React, { useState, useEffect } from 'react'
import { Divider, Button, Form, Input, Select, DatePicker, Avatar } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'
import UploadImage from '@/components/upload/UploadImage'
import handleUpdateUser from '@/apis/updateUser.api'
import { useQueryString } from '@/utils/utils'
import { getUserProfile } from '@/apis/userProfile.api'
import { uploadImage } from '@/apis/uploadImage.api'

const { Option } = Select

const EditProfile: React.FC = () => {
  const navigate = useNavigate()

  const queryString: { id?: string } = useQueryString()
  const id = String(queryString.id)
  const userData = useQuery({ queryKey: ['user', id], queryFn: async () => getUserProfile(id) }).data?.data?.data

  const [editProfileValue, setEditProfileValue] = useState({
    fullname: '',
    email: '',
    dob: '',
    gender: '',
    address: '',
    phone_number: '',
    avatar: {},
  })

  const [imageUpload, setImageUpload] = useState([])

  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      fullname: 'Mario',
    })
  }, [])

  return (
    <>
      <Header />
      <div
        className='max-w-[1280px] mx-auto my-8 bg-white dark:bg-[#1E293B] dark:border-none rounded-lg border-[1px] border-solid border-gray-200 overflow-hidden'
        style={{ boxShadow: '0 0 10px rgba(0,0,0,.18)', cursor: 'pointer', border: '1px solid rgba(0,0,0,.1)' }}
      >
        <div className='px-12 pt-8'>
          <span className='text-xl font-bold text-gray-800 dark:text-gray-200'>Profile Detail</span>
          <p className='text-gray-600 dark:text-gray-300'>You have full control to manage your own account setting.</p>
        </div>
        <Divider
          style={{ margin: 0 }}
          className='dark:bg-gray-600'
        />

        <div className='px-12 pt-8'>
          <div className='flex items-center pb-4'>
            <Avatar
              size={80}
              style={{
                backgroundColor: '#f56a00',
                color: '#fff',
                fontSize: '36px',
                fontWeight: 'bold',
                marginRight: '32px',
              }}
            >
              {userData && String(userData.username).charAt(0).toUpperCase()}
            </Avatar>
            <UploadImage
              imageUpload={imageUpload}
              setImageUpload={setImageUpload}
            />
          </div>

          <Divider className='dark:bg-gray-600 m-0 mb-8' />

          <Form
            name='editProfile'
            className='mt-4'
            scrollToFirstError
            layout='vertical'
            // initialValues={{ fullname: userData && userData.fullname }}
          >
            <div className='grid grid-cols-2 gap-3'>
              {/* fullname */}
              <Form.Item
                name='fullname'
                rules={[{ required: true, message: 'Please input your fullname!', whitespace: true }]}
                hasFeedback
                label={<p className='my-2 font-bold dark:text-gray-300'>Full Name</p>}
              >
                <Input
                  size='large'
                  type='text'
                  placeholder={userData && userData.fullname}
                  maxLength={200}
                  onChange={(e) => {
                    setEditProfileValue({ ...editProfileValue, fullname: e.target.value })
                  }}
                />
              </Form.Item>

              {/* date of birth */}
              <Form.Item
                name='dob'
                label={<p className='my-2 font-bold dark:text-gray-300'>Date of Birth</p>}
                rules={[{ required: true, message: 'Please input your date of birth!' }]}
                hasFeedback
              >
                <DatePicker
                  size='large'
                  className='w-full'
                  format='DD/MM/YYYY'
                  placeholder={userData ? userData.dob : 'Select your date of birth?'}
                  onChange={(_date: any, dateString: string) => {
                    setEditProfileValue({ ...editProfileValue, dob: dateString })
                  }}
                />
              </Form.Item>

              {/* gender */}
              <Form.Item
                name='gender'
                rules={[{ required: true, message: 'Please select gender!' }]}
                label={<p className='my-2 font-bold dark:text-gray-300'>Gender</p>}
                hasFeedback
              >
                <Select
                  size='large'
                  placeholder={userData ? userData.gender : 'Select your gender?'}
                  onChange={(value) => {
                    setEditProfileValue({ ...editProfileValue, gender: value })
                  }}
                >
                  <Option value='male'>Male</Option>
                  <Option value='female'>Female</Option>
                  <Option value='other'>Other</Option>
                </Select>
              </Form.Item>

              {/* phone number */}
              <Form.Item
                name='phone'
                label={<p className='my-2 font-bold dark:text-gray-300'>Phone number</p>}
                hasFeedback
                rules={[
                  { required: true, message: 'Please input your phone number!' },
                  {
                    validator(_, value) {
                      if (!value || value.length >= 10) {
                        return Promise.resolve()
                      }
                      return Promise.reject(new Error('Please enter 10 digit Number!'))
                    },
                  },
                ]}
              >
                <Input
                  size='large'
                  style={{ width: '100%' }}
                  placeholder={userData ? userData.phone_number : 'Phone number ...'}
                  maxLength={10}
                  type='number'
                  onBlur={(e) => {
                    setEditProfileValue({ ...editProfileValue, phone_number: e.target.value })
                  }}
                />
              </Form.Item>

              {/* address */}
              <Form.Item
                name='address'
                rules={[{ required: true, message: 'Please select your address!', whitespace: true }]}
                label={<p className='my-2 font-bold dark:text-gray-300'>Address</p>}
                hasFeedback
              >
                <Input
                  size='large'
                  style={{ width: '100%' }}
                  placeholder={userData ? userData.address : 'Your address ...'}
                  maxLength={200}
                  onChange={(e) => {
                    setEditProfileValue({ ...editProfileValue, address: e.target.value })
                  }}
                />
              </Form.Item>

              {/* email */}
              <Form.Item
                name='email'
                label={<p className='my-2 font-bold dark:text-gray-300'>Email</p>}
                hasFeedback
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid Email!',
                  },
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input
                  size='large'
                  placeholder={userData ? userData.email : 'Email address here ...'}
                  maxLength={200}
                  onChange={(e) => {
                    setEditProfileValue({ ...editProfileValue, email: e.target.value })
                  }}
                />
              </Form.Item>

              <div className='grid grid-cols-4 gap-4'>
                {/* submit */}
                <Form.Item name='update'>
                  <Button
                    size='large'
                    htmlType='submit'
                    className='w-full'
                    type='primary'
                    onClick={() => {
                      // handleUpdateUser(editProfileValue, navigate)
                      // uploadImage(imageUpload as [])
                    }}
                  >
                    Update
                  </Button>
                </Form.Item>
                {/* submit */}
                <Form.Item name='cancel'>
                  <Button
                    type='primary'
                    size='large'
                    className='w-full'
                    danger
                    onClick={() => {
                      navigate('/', {
                        replace: true,
                      })
                    }}
                  >
                    Cancel
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditProfile
