import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title='About | Next.js + TypeScript Example'>
    <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
      {/* <div className="flex-shrink-0">
    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div> */}
      <div>
        <div className='text-xl font-medium text-black'>About</div>
        <p className='text-gray-500'>
          <Link href='/'>
            <a>Go home</a>
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
