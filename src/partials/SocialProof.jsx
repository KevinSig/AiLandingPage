import React, { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition'

// import FitFlavors from '../images/fitflavors.png'
// import Muscleu from '../images/muscleu.png'
import ikea from '../images/ikea.png'
import hanes from '../images/hanes.png'
import sephora from '../images/sephora.png'
import flowers from '../images/flowers.png'
import galaxus from '../images/galaxus.png'

function SocialProof() {
  return (
    <section className='relative'>
      <div
        className='absolute inset-0 bg-slate-50 pointer-events-none -z-10 '
        aria-hidden='true'
      ></div>
      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 '>
        <div className='py-12 md:py-4'>
          {/* Section header */}
          <div className='max-w-3xl mx-auto text-center pb-10'>
            <span className='text-lg text-slate-900 mb-2'>
              Skyrocketing revenues for eCommerce companies of all shapes and sizes
            </span>
          </div>

          <div
            className='  pb-4 mx-auto grid grid-cols-3 gap-32 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-16 items-center sm:max-w-4xl lg:max-w-none'
            data-aos-id-blocks
          >
            <div
              className='relative flex mx-h-30'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <img src={ikea} className='socialProof' />
            </div>
            <div
              className='relative flex mx-h-30'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <img src={hanes} className='socialProof' />
            </div>
            <div
              className='relative flex mx-h-30'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <img src={sephora} className='socialProof' />
            </div>
            <div
              className='relative flex mx-h-30'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <img src={flowers} className='socialProof' />
            </div>
            <div
              className='relative flex mx-h-30'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
              <img src={galaxus} className='socialProof' />
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
