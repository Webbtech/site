import React from 'react'
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

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
      <div className='relative pt-6 pb-16 sm:pb-24'>
        <Popover>
          <nav
            className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
            aria-label='Global'
          >
            <div className='flex items-center flex-1'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <a href='#'>
                  <span className='sr-only'>Workflow</span>
                  <img className='h-8 w-auto sm:h-12' src='logo.svg' alt='Webbtech' />
                </a>
                <div className='-mr-2 flex items-center md:hidden'>
                  <Popover.Button className='bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    <MenuIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='hidden space-x-10 md:flex md:ml-10'>
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className='font-medium text-white hover:text-gray-300'>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className='hidden md:flex'>
              <a
                href='#'
                className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'
              >
                Log in
              </a>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                      alt=''
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href='#'
                  className='block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100'
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

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
    </div>
  )
}
