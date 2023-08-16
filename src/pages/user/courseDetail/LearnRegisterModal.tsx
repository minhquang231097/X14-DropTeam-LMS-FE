import React, { useState } from 'react'
import { Button, Modal, message } from 'antd'

const LearnRegisterModal: React.FC = (data: any) => {
  const [open, setOpen] = useState(false)
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, course_code, price } = data

  const [messageApi, contextHolder] = message.useMessage()
  const error = () => {
    messageApi.open({
      type: 'success',
      content: 'Successfully registered for the course!',
    })
  }
  return (
    <>
      <>
        {contextHolder}
        <Button
          type='primary'
          size='large'
          className='w-full mt-4'
          onClick={() => setOpen(true)}
        >
          Learn
        </Button>
      </>
      <Modal
        title={<span className='text-xl'>Register the Course {data ? title : ''}</span>}
        centered
        open={open}
        onOk={() => {
          setOpen(false)
          error()
        }}
        onCancel={() => setOpen(false)}
      >
        <p>
          Are you sure you want to register for this course? <br /> Course code: {course_code} <br /> Price: {price} $
        </p>
      </Modal>
    </>
  )
}
export default LearnRegisterModal
