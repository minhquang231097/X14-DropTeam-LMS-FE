import React from 'react'
import { Col, Row, Space } from 'antd'
import { GoBook } from 'react-icons/go'
import { MdOutlineAttachMoney, MdOutlinePeople } from 'react-icons/md'
import DashBoardCard from './DashBoardCard'

interface CardProps {
  sale: string
  course: string
  student: string
  mentor: string
}

const CardItem = ({ sale, course, student, mentor }: CardProps) => (
  <div className='flex w-full gap-2'>
    <Row
      gutter={[16, 16]}
      style={{ width: '100%' }}
    >
      <Col
        xs={12}
        lg={6}
      >
        <DashBoardCard
          title='Sale'
          content={sale}
          icon={
            <MdOutlineAttachMoney
              size={23}
              color='#8854C0'
            />
          }
        />
      </Col>
      <Col
        xs={12}
        lg={6}
      >
        <DashBoardCard
          title='Course'
          content={course}
          icon={
            <GoBook
              size={23}
              color='#8854C0'
            />
          }
        />
      </Col>
      <Col
        xs={12}
        lg={6}
      >
        <DashBoardCard
          title='Student'
          content={student}
          icon={
            <MdOutlinePeople
              size={23}
              color='#8854C0'
            />
          }
        />
      </Col>
      <Col
        xs={12}
        lg={6}
      >
        <DashBoardCard
          title='Mentor'
          content={mentor}
          icon={
            <MdOutlinePeople
              size={23}
              color='#8854C0'
            />
          }
        />
      </Col>
    </Row>
  </div>
)

export default CardItem
