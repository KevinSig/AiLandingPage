import React from 'react'

import HeroImage from '../images/feature1hero.png'

function HeroHome() {
  return (
    <section className='relative'>
      <div
        // className='feature1  absolute inset-0 bg-slate-900 pointer-events-none -z-10  '
        className='absolute inset-0 bg-transparent pointer-events-none -z-10  '
        aria-hidden='true'
      ></div>
      {/* <div className="parallelogram absolute inset-0 bg-slate-900 pointer-events-none -z-10 " aria-hidden="true"></div> */}

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='pt-24 pb-24 md:pt-24 md:pb-24'>
          {/* Hero content */}
          <div className='max-w-l mx-auto md:max-w-none md:flex md:items-center md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-16 md:space-y-0'>
            {/* Content */}
            {/* Hero image */}
            <div data-aos='fade-left'>
              <div className='flex justify-center items-center'>
                <div className='relative'>
                  {/* <div
                    className='absolute inset-0 rounded-xl pointer-events-none border-2 border-slate-700 mb-3 mr-3 -translate-x-4 -translate-y-4 -z-10'
                    aria-hidden='true'
                  ></div> */}
                  <img
                    className='mx-auto md:max-w-none'
                    src={HeroImage}
                    width='640px'
                    height='405px'
                    alt='Hero'
                    // style={{boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}
                  />
                </div>
              </div>
            </div>
            
            <div
              className='text-center md:text-left md:min-w-[28rem]'
              data-aos='fade-right'
            >
              <h2 className='animatedText h2 font-asap-display text-slate mb-4' style={{}}>
                Sell More. Maximize Revenue Potential
              </h2>
              <ul class='list-disc'>
                <li className='text-xl text-slate mb-4'>
                Increase repeat purchases and drive higher lifetime value with ultra relevant recommendations.
                </li>
                <li className='text-xl text-slate mb-4'>
                Decrease shopping cart abandonment rate. Leverage powerful Google AI to meet ever growing customer expectations.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
