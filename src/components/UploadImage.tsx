import React from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Upload } from 'antd'

const UploadImage: React.FC = () => {
  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }
  return (
    <Form layout='vertical'>
      <Form.Item
        name='upload'
        label={<p className='font-bold dark:text-gray-300'>Your avatar</p>}
        valuePropName='fileList'
        getValueFromEvent={normFile}
      >
        <Upload
          name='image'
          listType='picture'
          className='ml-8 w-[120px]'
        >
          <Button icon={<UploadOutlined />}>Click to upload!</Button>
        </Upload>
      </Form.Item>
    </Form>
  )
}

export default UploadImage
