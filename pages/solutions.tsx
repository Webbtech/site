import React, { FunctionComponent, useState } from 'react'
import Head from 'next/head'

import { DropDownMenu } from '../components/DropDwnExample'

const Solutions: FunctionComponent = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Solutions
          </h1>
        </div>
      </header>
      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='relative h-10'>
            <div className='absolute right-0 top-0'>
              <DropDownMenu />
            </div>
          </div>
          <div className='px-4 py-6 sm:px-0'>
            <div className='border-4 border-dashed border-gray-200 rounded-lg h-96'>
              some content
            </div>
          </div>
        </div>
      </main>
      {/*  */}
    </div>
  )
}

export default Solutions
