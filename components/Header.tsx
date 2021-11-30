import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Projects', href: '/test', current: false },
  { name: 'Projects2', href: '/test2', current: false },
]

function classNames(...classes: any) { // eslint-disable-line
  return classes.filter(Boolean).join(' ')
}

/**
 * Header
 * Found this at: https://tailwindui.com/preview#component-70a9bdf83ef2c8568c5cddf6c39c2331
 * @returns
 */
export default function Header(): JSX.Element {
  const router = useRouter()

  return (
    <Disclosure as='nav' className='bg-gray-900'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3'>
            <div className='relative flex items-center justify-between sm:h-8 md:h-12 lg:h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch'>
                <Link href='/'>
                  <div className='flex-shrink-0 flex items-center'>
                    <img className='block lg:hidden h-8 w-auto' src='/logo.svg' alt='Webbtech' />
                    <img className='hidden lg:block h-12 w-auto' src='/logo.svg' alt='Webbtech' />
                  </div>
                </Link>
                <div className='hidden md:flex items-center sm:ml-6'>
                  <div className='flex space-x-2'>
                    {navigation.map((item) => {
                      item.current = router.asPath === item.href || false
                      return (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
