import React, { ReactElement } from 'react'

export default function Header(): ReactElement {
  return (
    <div className='relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div
          className='
        flex
        justify-between
        items-center
        border-b-2 border-gray-100
        py-6
        md:justify-start md:space-x-10
      '
        ></div>
      </div>
    </div>
  )
}
