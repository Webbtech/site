import React, { FunctionComponent, useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

import { ActiveLink } from '../ActiveLink'

interface LinkItem {
  label: string
  path: string
}

interface LinkItems extends Array<LinkItem> {}

const links: LinkItems = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

/**
 * Took much of the js and menu dropdown functionality from Adam Wathans series in:
 * https://www.youtube.com/watch?v=If6XdbBQqmY&list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR&index=21
 */
export const Header: FunctionComponent = () => {
  const [mmOpen, setMmOpen] = useState<boolean>(false)
  const mmClassnames = mmOpen ? 'md:hidden' : 'hidden md:hidden'

  // another more comprehensive example can be found here:
  // https://usehooks.com/useEventListener/
  // an example in typescript: https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
  useEffect(() => {
    // function handleEsc({ key }: KeyboardEvent<Element>): void {
    // function handleEsc({ key }: KeyboardEvent): void {
    // FIXME: this should be better defined, 'any' isn't really a proper way to handle this
    function handleEsc({ key }: any): void {
      if (key === 'Escape' || key === 'Esc') {
        setMmOpen(false)
      }
    }
    window.addEventListener('keydown', (e) => {
      handleEsc(e)
    }) // this was an attempt to fix the typescript error when using the above with KeyboardEvent

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const cbFunc = () => setMmOpen(false)
  return (
    <>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0 pt-2'>
                <Link href='/'>
                  <a title='Click for Home Page'>
                    <Image
                      src='/logo.svg'
                      alt='Webbtech'
                      width={150}
                      height={50}
                    />
                  </a>
                </Link>
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  {links.map((l) => (
                    <ActiveLink
                      activeClasses='px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900'
                      classes='px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700'
                      key={l.path}
                      href={l.path}
                    >
                      {l.label}
                    </ActiveLink>
                  ))}
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                onClick={() => setMmOpen(!mmOpen)}
              >
                <span className='sr-only'>Open main menu</span>
                <Transition show={!mmOpen}>
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </Transition>
                <Transition show={mmOpen}>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </Transition>
              </button>
            </div>
          </div>
        </div>

        <div className={mmClassnames}>
          <Transition
            show={mmOpen}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'
          >
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              {links.map((l) => (
                <ActiveLink
                  activeClasses='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900'
                  classes='block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700'
                  callbackFunc={cbFunc}
                  href={l.path}
                  key={l.path}
                >
                  {l.label}
                </ActiveLink>
              ))}
            </div>
          </Transition>
        </div>
      </nav>
    </>
  )
}
