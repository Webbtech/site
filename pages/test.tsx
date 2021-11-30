import React from 'react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import Header from '../components/Header'
/* const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
] */

export default function Example() {
  return (
    <div className='relative bg-gray-800 overflow-hidden'>
      <div className='hidden sm:block sm:absolute sm:inset-0' aria-hidden='true'>
        <svg
          className='absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0'
          width={364}
          height={384}
          viewBox='0 0 364 384'
          fill='none'
        >
          <defs>
            <pattern
              id='eab71dd9-9d7a-47bd-8044-256344ee00d0'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'
            >
              <rect x={0} y={0} width={4} height={4} fill='currentColor' />
            </pattern>
          </defs>
          <rect width={364} height={384} fill='url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)' />
        </svg>
      </div>
      <Header />

      <main className='mt-16 sm:mt-24 '>
        <div className='mx-auto max-w-7xl'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            {/* left cell */}
            <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
              <div>
                <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl'>
                  <span className='md:block'>Services for your</span>{' '}
                  {/* <span className='text-indigo-400 md:block'>online business</span> */}
                  <span className='text-gray-500 md:block'>online business</span>
                </h1>
                <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  We provide consulting and development services to help you build and grow your online business.
                </p>
                <p className='text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Find yourself confused understanding the latest architectures?
                </p>
                <p className='text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  At Webbtech we work hard to stay up-to-date on all the latest technologies required to ...
                </p>
                {/* <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt.
                  </p> */}
              </div>
            </div>
            {/* start image box */}
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:col-span-6'>
              {/* <div className='bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'> */}
              {/* <div className='px-4 py-8 sm:px-10'> */}
              <img className='inset-0 w-full h-full object-cover rounded-md' src='/image/lean-startup2.jpg' alt='' />
              {/* <img className='inset-0 w-full h-1/2 object-cover object-center' src='/image/lean-startup.jpg' alt='' /> */}
              {/* </div> */}
              {/* </div> */}
            </div>
            {/* end image box */}
          </div>
        </div>
      </main>
    </div>
  )
}
