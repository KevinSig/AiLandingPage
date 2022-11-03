import React from 'react'

function FeaturesBlocks() {
  return (
    <section>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 '>
        <div className='py-12 md:py-20'>
          {/* Items */}
          <div
            className='relative max-w-sm mx-auto grid gap-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-20 items-start md:max-w-2xl lg:max-w-none'
            data-aos-id-blocks
          >
            {/* Lines decoration */}
            <div
              className='absolute inset-0 -my-8 md:-my-12 pointer-events-none hidden md:flex'
              aria-hidden='true'
            >
              <div className='h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100'></div>
              <div className='h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100'></div>
              <div className='h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100'></div>
              <div className='h-full w-full border-l last:border-r odd:hidden lg:odd:block border-slate-100'></div>
            </div>

            {/* 1st item */}
            <div
              className='relative'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
            >
 
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='32'
                  cy='32'
                  r='32'
                  fill='url(#paint0_linear_18_11)'
                />
                <path
                  d='M40.1828 33.7946C41.5324 33.7946 42.7201 33.0568 43.3319 31.9411L49.7741 20.2623C49.9258 19.9895 50.0036 19.6819 49.9999 19.3698C49.9961 19.0578 49.911 18.7521 49.7528 18.483C49.5947 18.214 49.369 17.9909 49.0981 17.8359C48.8273 17.6808 48.5207 17.5992 48.2086 17.599H21.5759L19.8844 14H14V17.599H17.599L24.0772 31.2572L21.6479 35.648C20.3343 38.0594 22.0618 40.9926 24.797 40.9926H46.3911V37.3936H24.797L26.7765 33.7946H40.1828ZM23.2854 21.198H45.1494L40.1828 30.1955H27.5503L23.2854 21.198ZM24.797 42.7921C22.8176 42.7921 21.216 44.4116 21.216 46.3911C21.216 48.3705 22.8176 49.9901 24.797 49.9901C26.7765 49.9901 28.396 48.3705 28.396 46.3911C28.396 44.4116 26.7765 42.7921 24.797 42.7921ZM42.7921 42.7921C40.8126 42.7921 39.2111 44.4116 39.2111 46.3911C39.2111 48.3705 40.8126 49.9901 42.7921 49.9901C44.7715 49.9901 46.3911 48.3705 46.3911 46.3911C46.3911 44.4116 44.7715 42.7921 42.7921 42.7921Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_18_11'
                    x1='1.50914e-06'
                    y1='-2.88'
                    x2='65.6'
                    y2='65.28'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#974AE4' />
                    <stop offset='1' stop-color='#5C79FE' />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className='h4 font-asap-display mb-2'>Shopify Native</h3>
              <p className='text-lg text-slate-500'>
                Built inside of Shopify’s native checkout means your data is
                safeguarded from any type of vulnerabilities
              </p>
            </div>

            {/* 2nd item */}
            <div
              className='relative'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
              data-aos-delay='100'
            >

              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='32'
                  cy='32'
                  r='32'
                  fill='url(#paint0_linear_18_44)'
                />
                <path
                  d='M29.3245 53H26.9912L29.3245 36.6667H21.1578C19.8045 36.6667 19.8278 35.92 20.2712 35.1267C20.7145 34.3333 20.3878 34.94 20.4345 34.8467C23.4445 29.5267 27.9712 21.5933 33.9911 11H36.3245L33.9911 27.3333H42.1578C43.3011 27.3333 43.4645 28.1033 43.2545 28.5233L43.0911 28.8733C33.8978 44.95 29.3245 53 29.3245 53Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_18_44'
                    x1='1.50914e-06'
                    y1='-2.88'
                    x2='65.6'
                    y2='65.28'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#974AE4' />
                    <stop offset='1' stop-color='#5C79FE' />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className='h4 font-asap-display mb-2'>Blazing Fast</h3>
              <p className='text-lg text-slate-500'>
                No external code means there is no impact on page speed and
                users aren't churning because of page loads
              </p>
            </div>

            {/* 3rd item */}
            <div
              className='relative'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
              data-aos-delay='200'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='32'
                  cy='32'
                  r='32'
                  fill='url(#paint0_linear_18_45)'
                />
                <path
                  d='M49.8812 33.5236L47.0469 22.1667C46.6775 20.6855 45.6975 19.4136 44.3594 18.6786C43.0194 17.9455 41.4237 17.7967 39.9725 18.283L39.0194 18.6005C38.495 18.7748 38.2119 19.3417 38.3869 19.8655L38.7031 20.8142C38.8775 21.338 39.4438 21.6211 39.9675 21.4467L40.7913 21.1723C41.4706 20.9461 42.2288 20.9492 42.8638 21.2805C43.5069 21.6161 43.9619 22.1905 44.1369 22.8942L46.5406 32.508C45.1538 32.0823 43.4288 31.7292 41.4656 31.7292C39.2925 31.7292 36.8419 32.168 34.2875 33.4005H29.7137C27.1594 32.1667 24.7087 31.7286 22.535 31.7286C20.5712 31.7286 18.8462 32.0817 17.4594 32.5073L19.8631 22.893C20.0375 22.1898 20.4938 21.6148 21.1369 21.2798C21.7719 20.9486 22.5294 20.9455 23.2087 21.1717L24.0319 21.4461C24.5556 21.6205 25.1219 21.3373 25.2963 20.8136L25.6125 19.8648C25.7875 19.3411 25.5044 18.7742 24.98 18.5998L24.0269 18.2823C22.5756 17.7961 20.98 17.9442 19.64 18.678C18.3019 19.4136 17.3219 20.6848 16.9525 22.1655L14.1187 33.5236C14.04 33.8403 14.0001 34.1654 14 34.4917V38.8823C14 42.8136 17.2237 46.0005 21.2 46.0005H23.52C27.2875 46.0005 30.4181 43.1292 30.7 39.4148L30.8831 37.0005H33.1175L33.3006 39.4148C33.5819 43.1292 36.7125 46.0005 40.48 46.0005H42.8C46.7762 46.0005 50 42.8136 50 38.883V34.4923C50 34.1655 49.96 33.8405 49.8812 33.5236ZM26.7113 39.1123C26.5881 40.7317 25.1863 42.0005 23.52 42.0005H21.2C19.4356 42.0005 18 40.6017 18 38.8823V36.5361C19.1325 36.1305 20.7138 35.7286 22.5363 35.7286C24.0275 35.7286 25.49 35.9992 26.9069 36.5361L26.7113 39.1123V39.1123ZM46 38.883C46 40.6023 44.5644 42.0005 42.8 42.0005H40.48C38.8131 42.0005 37.4112 40.7317 37.2887 39.1123L37.0931 36.5361C38.51 35.9992 39.9731 35.7286 41.465 35.7286C43.285 35.7286 44.8669 36.1311 45.9994 36.5367V38.883H46Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_18_45'
                    x1='1.50914e-06'
                    y1='-2.88'
                    x2='65.6'
                    y2='65.28'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#974AE4' />
                    <stop offset='1' stop-color='#5C79FE' />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className='h4 font-asap-display mb-2'>
                Incredibly Intelligent
              </h3>
              <p className='text-lg text-slate-500'>
                Built on-top of Googles already powerful recommendations AI
                gives you an edge like no other
              </p>
            </div>

            {/* 4th item */}
            <div
              className='relative'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
              data-aos-delay='300'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='32'
                  cy='32'
                  r='32'
                  fill='url(#paint0_linear_18_46)'
                />
                <path
                  d='M47.375 20.4C42.5465 21.695 36.8855 22.25 31.65 22.25C26.4145 22.25 20.7535 21.695 15.925 20.4L15 24.1C18.441 25.025 22.4 25.6355 26.1 25.95V50H29.8V38.9H33.5V50H37.2V25.95C40.9 25.6355 44.859 25.025 48.3 24.1L47.375 20.4ZM31.65 20.4C33.685 20.4 35.35 18.735 35.35 16.7C35.35 14.665 33.685 13 31.65 13C29.615 13 27.95 14.665 27.95 16.7C27.95 18.735 29.615 20.4 31.65 20.4Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_18_46'
                    x1='1.50914e-06'
                    y1='-2.88'
                    x2='65.6'
                    y2='65.28'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#974AE4' />
                    <stop offset='1' stop-color='#5C79FE' />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className='h4 font-asap-display mb-2'>1:1 Personalization</h3>
              <p className='text-lg text-slate-500'>
                Tailored experiences ensure your customers are getting offers
                made for them{' '}
              </p>
            </div>

            {/* 5th item */}
            <div
              className='relative'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
              data-aos-delay='400'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='32'
                  cy='32'
                  r='32'
                  fill='url(#paint0_linear_18_47)'
                />
                <path
                  d='M31.0517 42.08C28.3484 41.9522 25.7983 40.7879 23.931 38.8291C22.0637 36.8702 21.0227 34.2673 21.0244 31.561C21.0244 25.7483 25.7483 21.0244 31.561 21.0244C37.2156 21.0244 41.8166 25.4673 42.08 31.0517L38.3922 29.9454C38.1052 28.728 37.4982 27.6094 36.6341 26.7051C35.77 25.8009 34.68 25.1439 33.477 24.8019C32.2739 24.46 31.0013 24.4455 29.7907 24.7601C28.5802 25.0747 27.4756 25.7068 26.5912 26.5912C25.7068 27.4756 25.0747 28.5802 24.7601 29.7907C24.4455 31.0013 24.46 32.2739 24.8019 33.477C25.1439 34.68 25.8009 35.77 26.7052 36.6341C27.6094 37.4982 28.728 38.1052 29.9454 38.3922L31.0517 42.08V42.08ZM49.122 31.561C49.122 32.0878 49.1044 32.6146 49.0517 33.1415L45.5922 32.1054C45.6098 31.9298 45.6098 31.7366 45.6098 31.561C45.6098 23.799 39.3229 17.5122 31.561 17.5122C23.799 17.5122 17.5122 23.799 17.5122 31.561C17.5122 39.3229 23.799 45.6098 31.561 45.6098C31.7366 45.6098 31.9298 45.6098 32.1054 45.5922L33.1415 49.0517C32.6146 49.1044 32.0878 49.122 31.561 49.122C21.8673 49.122 14 41.2546 14 31.561C14 21.8673 21.8673 14 31.561 14C41.2546 14 49.122 21.8673 49.122 31.561ZM42.5015 39.042L49.122 36.8293L31.561 31.561L36.8293 49.122L39.042 42.5015L46.5405 50L50.0176 46.5229L42.5015 39.042Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_18_47'
                    x1='1.50914e-06'
                    y1='-2.88'
                    x2='65.6'
                    y2='65.28'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#974AE4' />
                    <stop offset='1' stop-color='#5C79FE' />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className='h4 font-asap-display mb-2'>One-Click Install</h3>
              <p className='text-lg text-slate-500'>
                Instantly increase sales with a click of a button. A no-setup
                process means no down time.{' '}
              </p>
            </div>

            {/* 6th item */}
            <div
              className='relative'
              data-aos='fade-up'
              data-aos-anchor='[data-aos-id-blocks]'
              data-aos-delay='500'
            >
              <svg
                className='w-16 h-16 mb-4'
                viewBox='0 0 64 64'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='32'
                  cy='32'
                  r='32'
                  fill='url(#paint0_linear_18_48)'
                />
                <path
                  d='M48.9397 20.2634C46.7578 19.3482 44.5742 19 42.3917 19C35.4635 18.9994 28.5359 22.5066 21.6077 22.5066C19.8702 22.5066 18.1337 22.2861 16.3962 21.7348C16.201 21.673 16.0053 21.6437 15.814 21.6437C14.846 21.6437 14 22.3929 14 23.433V41.2786C14 41.989 14.4067 42.6623 15.0597 42.9357C17.2416 43.8514 19.4252 44.1996 21.6077 44.1996C28.5359 44.1996 35.4641 40.6925 42.3923 40.6925C44.1298 40.6925 45.8662 40.913 47.6038 41.4642C47.799 41.5261 47.9947 41.5553 48.186 41.5553C49.154 41.5553 50 40.8061 50 39.7661V21.921C49.9994 21.21 49.5928 20.5373 48.9397 20.2634V20.2634ZM16.7 24.6373C17.8317 24.9208 19.0129 25.0631 20.2279 25.1396C19.8972 26.7928 18.4437 28.0387 16.7 28.0387V24.6373ZM16.7 40.6683V37.9807C18.6332 37.9807 20.1975 39.5146 20.2836 41.4344C19.0163 41.3326 17.8317 41.0795 16.7 40.6683V40.6683ZM31.9997 36.9997C29.5141 36.9997 27.4998 34.5816 27.4998 31.5998C27.4998 28.6175 29.5146 26.1999 31.9997 26.1999C34.4848 26.1999 36.4996 28.6175 36.4996 31.5998C36.4996 34.5827 34.4842 36.9997 31.9997 36.9997ZM47.2995 38.5623C46.314 38.3154 45.2908 38.177 44.244 38.0876C44.5742 36.6206 45.7909 35.5069 47.2995 35.3156V38.5623ZM47.2995 25.2813C45.5619 25.0614 44.2137 23.6107 44.1602 21.8192C45.2593 21.9413 46.3027 22.1696 47.2995 22.5313V25.2813Z'
                  fill='white'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_18_48'
                    x1='1.50914e-06'
                    y1='-2.88'
                    x2='65.6'
                    y2='65.28'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stop-color='#974AE4' />
                    <stop offset='1' stop-color='#5C79FE' />
                  </linearGradient>
                </defs>
              </svg>

              <h3 className='h4 font-asap-display mb-2'>Free</h3>
              <p className='text-lg text-slate-500'>
                Install for free and see the results flow in. Risk free
                guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBlocks
