import React from 'react'
import Carousel from '../../carousel/Carousel'
import Service from '../../service/Service'
import Sheft from '../../sheft/Sheft'

const Home: React.FC = () => {
  return (
    <div className='dark:bg-[#0F172A] mb-[96px]'>
      <Carousel />
      <Service />
      <Sheft title='Recommended to you' />
      <Sheft title='Most Popular' />
      <Sheft title='Trending' />
    </div>
  )
}

export default Home
