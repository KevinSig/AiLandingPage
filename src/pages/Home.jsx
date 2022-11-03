import React from 'react'

import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Feature1 from '../partials/Feature1'
import Feature2 from '../partials/Feature2'
import Feature3 from '../partials/Feature3'
import FeaturesHome from '../partials/FeaturesHome'
import FeaturesHome02 from '../partials/FeaturesHome02'
import FeaturesHome03 from '../partials/FeaturesHome03'
import Target from '../partials/Target'
import PricingSection from '../partials/PricingSection'
import Cta from '../partials/Cta'
import Footer from '../partials/Footer'
import SocialProof from '../partials/SocialProof'
import FAQS from '../partials/Faqs'

function Home() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='grow'>
        {/*  Page sections */}
        <HeroHome />
        <SocialProof />
        <div className='gradiantBG  pointer-events-none '>
          <div className='map pointer-events-none '>
            <Feature1 />
            <Feature2 />
            <Feature3 />
          </div>
        </div>
        <FeaturesBlocks />
        {/* <FeaturesHome02 /> */}
        
        {/* <FeaturesHome /> */}
        <FeaturesHome03 />
        <Target />
        {/* <PricingSection /> */}
        {/* <FAQS /> */}
        <Cta />
      </main>

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
