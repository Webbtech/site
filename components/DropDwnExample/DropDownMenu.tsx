import React, { FunctionComponent, useEffect, useState } from 'react'

import { Transition } from '@headlessui/react'

export const DropDownMenu: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  let bgdOverlayClass =
    'fixed inset-0 h-full w-full cursor-default bg-black opacity-50' // bg color is here for demo purposes only
  if (!menuOpen) {
    bgdOverlayClass += ' hidden'
  }

  // another more comprehensive example can be found here:
  // https://usehooks.com/useEventListener/
  // an example in typescript: https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
  useEffect(() => {
    // function handleEsc({ key }: KeyboardEvent<Element>): void {
    // function handleEsc({ key }: KeyboardEvent): void {
    // FIXME: this should be better defined, 'any' isn't really a proper way to handle this
    function handleEsc({ key }: any): void {
      if (key === 'Escape' || key === 'Esc') {
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', (e) => {
      handleEsc(e)
    }) // this function was an attempt to fix the typescript error when using the above with KeyboardEvent

    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className='relative inline-block text-left'>
      <button
        className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
        id='user-menu'
        aria-haspopup='true'
        type='button'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
        <svg
          className='-mr-1 ml-2 h-5 w-5'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden='true'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <button
        className={bgdOverlayClass}
        onClick={() => setMenuOpen(false)}
        tabIndex={-1}
      ></button>
      <Transition
        show={menuOpen}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          <div
            className='py-1'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Account settings
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              Support
            </a>
            <a
              href='#'
              className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              role='menuitem'
            >
              License
            </a>
            <form method='POST' action='#'>
              <button
                type='submit'
                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                role='menuitem'
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </div>
  )
}
