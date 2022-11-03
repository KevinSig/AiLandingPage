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
      <div className='max-w-7xl mx-auto px-5 sm:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Site branding */}
          <div className='shrink-0 mr-4'>
            {/* Logo */}
            <Link
              to='/'
              className='block text-blue-600 transition duration-150 ease-in-out'
              aria-label='Cruip'
            >
             
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={105}
                height={32}
                viewBox='0 0 104 32'
              >
                <defs>
                  <linearGradient
                    id='a'
                    gradientUnits='userSpaceOnUse'
                    x1={432.338}
                    y1={129.34}
                    x2={560.35}
                    y2={242.39}
                    gradientTransform='scale(.0404 .0406)'
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
                    fill: '#31363c',
                    fillOpacity: 1,
                  }}
                  d='M1.64 25.273c-1.093 0-1.64-.199-1.64-.593a.84.84 0 0 1 .027-.22c.036-.089.063-.179.082-.269L6.02 6.828c.141-.379.653-.566 1.532-.566h1.398c.895 0 1.403.187 1.531.566l5.91 17.363c.055.18.079.344.079.489 0 .394-.446.593-1.34.593h-1.184c-.394 0-.726-.039-.996-.109-.265-.09-.437-.242-.508-.457l-1.074-3.297H5.023L3.95 24.707a.729.729 0 0 1-.43.43c-.214.09-.484.136-.804.136Zm4.54-7.425h4.03l-1.53-4.809c-.09-.289-.172-.578-.242-.863-.055-.29-.11-.578-.16-.864h-.11c-.055.286-.105.575-.16.864a5.61 5.61 0 0 1-.242.863Zm13.496 7.425c-1.074 0-1.613-.289-1.613-.867v-12.5c0-.578.539-.867 1.613-.867h.754c1.074 0 1.61.29 1.61.867v12.5c0 .578-.536.867-1.61.867ZM20.05 9.72c-.7 0-1.207-.074-1.531-.219-.305-.145-.457-.36-.457-.648V6.746c0-.289.152-.504.457-.648.324-.145.832-.215 1.53-.215.7 0 1.2.07 1.505.215.324.144.484.359.484.648v2.106c0 .289-.16.503-.484.648-.305.145-.805.219-1.504.219Zm0 0'
                />
                <path
                  style={{
                    stroke: 'none',
                    fillRule: 'nonzero',
                    fill: 'url(#a)',
                  }}
                  d='M19.457 5.36h1.262c1.062 0 1.922.867 1.922 1.933v.621c0 1.066-.86 1.93-1.922 1.93h-1.262a1.925 1.925 0 0 1-1.922-1.93v-.621c0-1.066.86-1.934 1.922-1.934Zm0 0'
                />
                <path
                  style={{
                    stroke: 'none',
                    fillRule: 'nonzero',
                    fill: '#31363c',
                    fillOpacity: 1,
                  }}
                  d='M31.887 8.543h1.558v10.789c0 1.664.414 2.871 1.25 3.617.832.738 1.93 1.11 3.29 1.11 1.343 0 2.43-.372 3.253-1.11.832-.746 1.246-1.953 1.246-3.617V8.543h1.559v10.789c0 1.395-.254 2.55-.766 3.469-.5.91-1.207 1.59-2.12 2.039-.907.45-1.962.676-3.173.676-1.207 0-2.273-.227-3.195-.676a4.872 4.872 0 0 1-2.137-2.04c-.511-.917-.765-2.073-.765-3.468Zm22.965 16.973c-.93 0-1.75-.223-2.457-.66-.7-.442-1.247-1.079-1.641-1.907-.383-.828-.578-1.82-.578-2.984h.754c0 .91.18 1.676.539 2.297.367.613.836 1.074 1.41 1.39a3.796 3.796 0 0 0 1.84.473 3.56 3.56 0 0 0 2-.621c.629-.414 1.136-1.02 1.531-1.809.395-.8.594-1.773.594-2.918 0-1.125-.188-2.078-.567-2.863-.375-.793-.875-1.394-1.504-1.809a3.54 3.54 0 0 0-2.043-.632c-.644 0-1.257.16-1.84.484-.581.324-1.054.8-1.421 1.43-.36.62-.54 1.398-.54 2.324h-.753c0-1.188.203-2.2.605-3.04.414-.835.973-1.472 1.68-1.901.707-.442 1.508-.665 2.406-.665.992 0 1.914.274 2.766.813.851.531 1.535 1.297 2.054 2.293.52.992.782 2.18.782 3.566 0 1.407-.266 2.61-.793 3.618-.52 1.011-1.211 1.785-2.07 2.324a5.09 5.09 0 0 1-2.754.797Zm-5.48 6.023V12.406h1.316l.242 2.914v16.22Zm19.878-6.023c-1.238 0-2.258-.18-3.066-.54-.797-.363-1.395-.847-1.801-1.46a3.987 3.987 0 0 1-.656-2.051h1.558c.055.91.418 1.598 1.086 2.066.684.457 1.61.688 2.781.688a4.7 4.7 0 0 0 1.696-.297c.52-.207.933-.485 1.25-.836.32-.36.48-.766.48-1.215 0-.578-.207-1.027-.629-1.351-.422-.325-1.09-.602-2.004-.836l-2.324-.704c-1.117-.324-1.973-.785-2.566-1.378a2.976 2.976 0 0 1-.887-2.16c0-1.008.437-1.813 1.305-2.415.87-.613 2.004-.922 3.398-.922 1.524 0 2.711.305 3.563.907.847.601 1.296 1.355 1.34 2.254h-1.61c-.098-.637-.426-1.11-.98-1.418-.555-.313-1.329-.473-2.313-.473-.976 0-1.73.227-2.27.676-.538.449-.804.941-.804 1.472 0 1.028.875 1.778 2.633 2.254l2.28.715c1.15.324 2.02.758 2.622 1.297.61.543.914 1.234.914 2.082 0 .621-.203 1.211-.605 1.766-.395.558-.961 1.015-1.707 1.367-.743.34-1.637.512-2.684.512Zm13.848 0c-1.114 0-2.094-.286-2.942-.852-.844-.574-1.508-1.363-1.988-2.363-.484-1.008-.727-2.156-.727-3.442 0-1.406.239-2.609.711-3.62.485-1.009 1.149-1.782 1.989-2.321.851-.54 1.836-.813 2.957-.813.937 0 1.734.196 2.39.582a4.385 4.385 0 0 1 1.598 1.555c.402.656.687 1.399.848 2.227.168.828.238 1.683.199 2.566h-9.418v-1.082h8.465l-.618.406a7.874 7.874 0 0 0-.109-1.742 4.822 4.822 0 0 0-.523-1.605 3.012 3.012 0 0 0-1.059-1.176c-.457-.297-1.043-.445-1.762-.445-.914 0-1.675.238-2.28.714a4.297 4.297 0 0 0-1.372 1.836 6.453 6.453 0 0 0-.445 2.403v.664c0 .98.148 1.863.445 2.644.305.785.754 1.407 1.356 1.864.609.46 1.37.691 2.285.691.937 0 1.707-.23 2.297-.691.597-.465.957-1.153 1.074-2.051h1.664c-.133.855-.434 1.586-.899 2.187a4.526 4.526 0 0 1-1.746 1.391c-.707.316-1.504.473-2.39.473Zm9.304-.297V6.855h1.559V25.22Zm7.192 0V6.855h1.558V25.22Zm0 0'
                />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className='hidden md:flex md:grow'>
            
            {/* <ul className='flex grow justify-start flex-wrap items-center'>
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
              
              <Dropdown title='Resources'>
                
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
            </ul> */}

            
            {/* <ul className='flex grow justify-end flex-wrap items-center'>
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
            </ul> */}
          </nav>

          {/* Mobile menu */}
          {/* <div className='flex md:hidden'>
            
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
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
