import React from 'react'

import HomeBanner from './BannerSection'

import HeaderTwo from '../../src/components/Header/HeaderTwo'
import Footer from '../../src/components/Footer'
import HomeSixService from '../home-6/ServiceSection'
import HomeSixTestimonial from '../home-6/TestimonialSection'
import HomeSixBlog from '../home-6/BlogSection'
import HomeSixPricing from '../home-6/PricingSection'
import HomeSixPartner from '../home-6/PartnerSection'
import HomeFiveClient from '../home-5/ClientSection'

const HomeThree = () => {
  return (
    <>
      <HeaderTwo />

      <main className='ms-main'>
        <div className='ms-page-content'>
          <HomeBanner />

          <main className='ms-main home-six'>
            <HomeSixService />
            <HomeSixTestimonial />
            <HomeSixBlog />
            <HomeSixPartner />
            {/* <HomeFiveClient /> */}
          </main>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default HomeThree
