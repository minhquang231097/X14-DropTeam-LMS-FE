import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Service from '../../components/service/Service'
import Sheft from '../../components/sheft/Sheft'
import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'
import ScrollToTop from '../../components/scrollToTop/scrollToTop'

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
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default Home
