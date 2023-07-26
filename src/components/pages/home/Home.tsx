import Carousel from '@/components/layouts/Carousel'
import Service from '@/components/layouts/Service'
import Sheft from '@/components/layouts/Sheft'
import React from 'react'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

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
