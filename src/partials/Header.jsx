import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Transition from '../utils/Transition'
import Dropdown from '../utils/Dropdown'

function Header({ mode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [top, setTop] = useState(true)

  const trigger = useRef(null)
  const mobileNav = useRef(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`absolute w-full z-30 ${mode !== 'light' && 'dark'}`}>
      <div className='max-w-6xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link
              to='/'
              className='block text-blue-600 transition duration-150 ease-in-out'
              aria-label='Cruip'
            >
              {/* <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 4.116c.039.899-.51.468-.79.629-.894.524-1.491 2.04-2.612 2.125-.423.87-1.121.898-1.874 1.503-.327.256-.463.839-.756 1.097l-3.694 3.27a2.395 2.395 0 0 1-.44.314c-.378.219-.656.717-1.096.81-.475.106-1.601-.775-2.633-2.012-.825-1.587-.025-1.924.518-2.525.916-1.022 2.48-2.064 3.585-2.753.843-.537 1.677-1.13 2.59-1.482.935-.357 1.779-.842 2.738-1.041.7-.141 1.522.063 2.206 0a9.596 9.596 0 0 1 2.258.065M30.676 3.646c-.06 1.046-1.038.955-1.593 1.363C27.32 6.31 25.8 8.656 23.63 9.583c-1.07 1.412-2.411 1.952-4.056 3.254-.711.56-1.21 1.417-1.877 1.965-2.887 2.381-5.668 4.524-8.64 6.823-.303.236-.646.468-1.008.697-.834.528-1.675 1.394-2.543 1.77-.95.413-2.376-.279-3.375-1.544-.43-1.849 1.112-2.657 2.38-3.737 2.13-1.82 5.33-4.012 7.558-5.536 1.707-1.17 3.395-2.426 5.138-3.43 1.789-1.03 3.439-2.179 5.224-3.063 1.303-.643 2.758-.96 4.038-1.53a40.762 40.762 0 0 1 4.207-1.606M30.386 14.346c.229.918-.566.8-.896 1.136-1.048 1.058-1.721 3.056-3.254 3.7-.563 1.17-1.522 1.532-2.603 2.507-.464.426-.731 1.128-1.177 1.542-1.94 1.77-3.91 3.263-6.082 4.772a6.36 6.36 0 0 1-.748.43c-.618.313-1.24.914-1.901 1.065-.731.161-1.856-.807-2.662-2.199-.401-1.784.715-2.129 1.6-2.818 1.49-1.15 3.693-2.49 5.192-3.486 1.154-.755 2.247-1.633 3.417-2.292 1.2-.68 2.244-1.52 3.44-2.128.868-.448 1.927-.61 2.79-1.029.92-.447 1.873-.85 2.884-1.2" />
              </svg> */}
              {/* <svg
                width='878'
                height='1146'
                // viewBox='0 0 878 1146'
                viewBox="0 0 32 32"
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M61 936C20.3333 936 0 928.667 0 914C0 911.333 0.333333 908.667 1 906C2.33333 902.667 3.33333 899.333 4 896L224 253C229.333 239 248.333 232 281 232H333C366.333 232 385.333 239 390 253L610 896C612 902.667 613 908.667 613 914C613 928.667 596.333 936 563 936H519C504.333 936 492 934.667 482 932C472 928.667 465.667 923 463 915L423 793H187L147 915C144.333 922.333 139 927.667 131 931C123 934.333 113 936 101 936H61ZM230 661H380L323 483C319.667 472.333 316.667 461.667 314 451C312 440.333 310 429.667 308 419H304C302 429.667 300 440.333 298 451C296 461.667 293 472.333 289 483L230 661ZM732.281 936C692.281 936 672.281 925.333 672.281 904V441C672.281 419.667 692.281 409 732.281 409H760.281C800.281 409 820.281 419.667 820.281 441V904C820.281 925.333 800.281 936 760.281 936H732.281ZM746.281 360C720.281 360 701.281 357.333 689.281 352C677.948 346.667 672.281 338.667 672.281 328V250C672.281 239.333 677.948 231.333 689.281 226C701.281 220.667 720.281 218 746.281 218C772.281 218 790.948 220.667 802.281 226C814.281 231.333 820.281 239.333 820.281 250V328C820.281 338.667 814.281 346.667 802.281 352C790.948 357.333 772.281 360 746.281 360Z'
                  fill='#F1F3F4'
                />
                <rect
                  x='651'
                  y='195'
                  width='190'
                  height='166'
                  rx='71.5'
                  fill='url(#paint0_linear_1312_5059)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_1312_5059'
                    x1='648.5'
                    y1='191'
                    x2='841'
                    y2='361'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop offset='0.276837' stop-color='#A64AE4' />
                    <stop offset='0.744792' stop-color='#7D94FE' />
                  </linearGradient>
                </defs>
              </svg> */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={32}
                height={27}
                viewBox='0 0 31 27'
              >
                <defs>
                  <linearGradient
                    id='a'
                    gradientUnits='userSpaceOnUse'
                    x1={648.5}
                    y1={-4}
                    x2={841}
                    y2={166}
                    gradientTransform='scale(.0353 .03644)'
                  >
                    <stop
                      offset={0.277}
                      style={{
                        stopColor: '#a64ae4',
                        stopOpacity: 1,
                      }}
                    />
                    <stop
                      offset={0.745}
                      style={{
                        stopColor: '#7d94fe',
                        stopOpacity: 1,
                      }}
                    />
                  </linearGradient>
                </defs>
                <path
                  style={{
                    stroke: 'none',
                    fillRule: 'nonzero',
                    fill: '#f1f3f4',
                    fillOpacity: 1,
                  }}
                  d='M2.152 27C.72 27 0 26.734 0 26.2c0-.098.012-.196.035-.294.047-.12.082-.242.106-.363l7.77-23.43c.187-.511.859-.765 2.01-.765h1.837c1.176 0 1.847.254 2.012.765l7.77 23.43c.07.242.105.46.105.656 0 .535-.59.801-1.766.801h-1.555c-.515 0-.953-.047-1.304-.145-.356-.12-.579-.328-.672-.62l-1.414-4.446H6.602l-1.41 4.445c-.094.27-.286.461-.567.582-.281.122-.637.184-1.059.184Zm5.97-10.02h5.296l-2.012-6.488a18.434 18.434 0 0 1-.32-1.164l-.211-1.168h-.14l-.212 1.168a7.6 7.6 0 0 1-.32 1.164ZM25.854 27c-1.414 0-2.117-.39-2.117-1.164V8.965c0-.777.703-1.168 2.117-1.168h.989c1.414 0 2.117.39 2.117 1.168v16.87c0 .774-.703 1.165-2.117 1.165Zm.493-20.988c-.918 0-1.586-.098-2.012-.293-.398-.192-.598-.485-.598-.871V2.004c0-.387.2-.68.598-.875.426-.195 1.094-.29 2.012-.29.918 0 1.578.095 1.98.29.422.195.633.488.633.875v2.844c0 .386-.211.68-.633.87-.402.196-1.062.294-1.98.294Zm0 0'
                />
                <path
                  style={{
                    stroke: 'none',
                    fillRule: 'nonzero',
                    fill: 'url(#a)',
                  }}
                  d='M22.984 2.605C22.984 1.168 24.117 0 25.508 0h1.66c1.395 0 2.527 1.168 2.527 2.605v.836c0 1.442-1.133 2.606-2.527 2.606h-1.66c-1.39 0-2.524-1.164-2.524-2.606Zm0 0'
                />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            {/* Desktop menu links */}
            <ul className='flex grow justify-start flex-wrap items-center'>
              <li>
                <Link
                  to='/pricing'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/wall-of-love'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Wall of Love
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title='Resources'>
                {/* 2nd level: hover */}
                <li>
                  <Link
                    to='/404'
                    className='font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight'
                  >
                    404
                  </Link>
                </li>
                <li>
                  <Link
                    to='/support'
                    className='font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight'
                  >
                    Support
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className='flex grow justify-end flex-wrap items-center'>
              <li>
                <Link
                  to='/signin'
                  className='font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out'
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  to='/request-demo'
                  className='font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group'
                >
                  Request Demo{' '}
                  <span className='tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1'>
                    -&gt;
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className='flex md:hidden'>
            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls='mobile-nav'
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className='sr-only'>Menu</span>
              <svg
                className='w-6 h-6 fill-current text-slate-900 dark:text-slate-100'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect y='4' width='24' height='2' />
                <rect y='11' width='24' height='2' />
                <rect y='18' width='24' height='2' />
              </svg>
            </button>

            {/*Mobile navigation */}
            <div ref={mobileNav}>
              <Transition
                show={mobileNavOpen}
                tag='nav'
                id='mobile-nav'
                className='absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white'
                enter='transition ease-out duration-200 transform'
                enterStart='opacity-0 -translate-y-2'
                enterEnd='opacity-100 translate-y-0'
                leave='transition ease-out duration-200'
                leaveStart='opacity-100'
                leaveEnd='opacity-0'
              >
                <ul className='px-5 py-2'>
                  <li>
                    <Link
                      to='/pricing'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/about'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/blog'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/wall-of-love'
                      className='flex font-medium text-slate-800 hover:text-blue-600 py-2'
                    >
                      Wall of Love
                    </Link>
                  </li>
                  <li className='py-2 my-2 border-t border-b border-gray-200'>
                    <span className='flex font-medium text-slate-800 hover:text-blue-600 py-2'>
                      Resources
                    </span>
                    <ul className='pl-4'>
                      <li>
                        <Link
                          to='/404'
                          className='text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2'
                        >
                          404
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/support'
                          className='text-sm flex font-medium text-slate-600 hover:text-blue-600 py-2'
                        >
                          Support
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      to='/signin'
                      className='flex font-medium w-full text-slate-800 hover:text-blue-600 py-2'
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to='/request-demo'
                      className='flex font-medium text-blue-600 py-2 group'
                    >
                      Request Demo{' '}
                      <span className='tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1'>
                        -&gt;
                      </span>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
