import React from 'react'
import Link from 'next/link'

export default function Header(): JSX.Element {
  return (
    <footer className='flex-1 flex items-center justify-center h-24  bg-gray-300'>
      <div className='flex space-x-6'>
        <Link href='/'>
          <a className='ftr-link flex'>home</a>
        </Link>
        <Link href='/services'>
          <a className='ftr-link flex'>services</a>
        </Link>
        <Link href='/about'>
          <a className='ftr-link flex'>about</a>
        </Link>
        <Link href='/contact'>
          <a className='ftr-link flex'>contact</a>
        </Link>
      </div>
    </footer>
  )
}
