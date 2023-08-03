import Carousel from '@/layouts/user/Carousel'
import Service from '@/layouts/user/Service'
import Sheft from '@/layouts/user/Sheft'
import React from 'react'
import Header from '@/layouts/user/Header'
import Footer from '@/layouts/user/Footer'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className='dark:bg-[#0F172A] mb-[96px]'>
        <Carousel />
        <Service />
        <Sheft title='Recommended to you' />
        <Sheft title='Most Popular' />
        <Sheft title='Trending' />
      </div>
      <Footer />
    </>
  )
}

export default Home
