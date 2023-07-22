import Carousel from '@/components/carousel/Carousel'
import Service from '@/components/service/Service'
import Sheft from '@/components/sheft/Sheft'
import React from 'react'
const Home: React.FC = () => {
  return (
    <div className='dark:bg-[#0F172A]'>
      <Carousel />
      <Service />
      <Sheft title='Recommended to you' />
      <Sheft title='Most Popular' />
      <Sheft title='Trending' />
    </div>
  )
}

export default Home
