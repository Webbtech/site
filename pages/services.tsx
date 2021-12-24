import React from 'react'
// import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon, CurrencyDollarIcon, DesktopComputerIcon, CloudIcon } from '@heroicons/react/outline'

import Layout from '../components/Layout'

const supportLinks = [
  {
    name: 'Application Development',
    href: '/contact',
    description: [
      'Looking to start your next awesome SaaS product with an MVP?',
      'Need a solution to handle your manufacturing production flow?',
    ],
    icon: DesktopComputerIcon,
  },
  {
    name: 'e-Commerce Applications',
    href: '/contact',
    description: ['Looking for a custom solution?', 'Have something unique you want to market?'],
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Technology Consulting',
    href: '/contact',
    description: [
      'Which technology is best suited for your next web or mobile device project?',
      'Can a web based application fix your manufacturing problem?',
    ],
    icon: CloudIcon,
  },
]

type DescriptionProps = {
  description: Array<string>
}
function DescriptionBlock({ description }: DescriptionProps) {
  return (
    <table className='mt-0 md:mt-4 text-base text-gray-500'>
      <tbody>
        {description.map((d, i) => (
          <tr key={i} className='block mt-2 md:mt-6'>
            <td className='align-top' aria-hidden='true'>
              <ChevronRightIcon className='h-5 w-5 text-gray-800 mt-1' />
            </td>
            <td className='pl-1'>{d}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function Example() {
  return (
    <Layout title='Services | Webbtech'>
      <div className='bg-white'>
        {/* Header */}
        <div className='relative pb-32 bg-gray-800'>
          <div className='absolute inset-0'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className='w-full h-full object-cover'
              src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100'
              alt=''
            />
            <div className='absolute inset-0 bg-gray-800 mix-blend-multiply' aria-hidden='true' />
          </div>
          <div className='relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl'>Services</h1>
            <p className='mt-6 max-w-3xl text-xl text-gray-300'>
              We provide a variety of creative custom solutions for your business or next great idea.
            </p>
            <p className='mt-4 max-w-3xl text-xl text-gray-300'>
              With a background in construction and various manufacturing industries, we understand what it takes run a
              Small-Medium Business and can provide solutions to serve your specific requirements.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className='-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8'
          aria-labelledby='contact-heading'
        >
          <h2 className='sr-only' id='contact-heading'>
            Contact us
          </h2>
          <div className='grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8'>
            {supportLinks.map((link) => (
              <div key={link.name} className='flex flex-col bg-white rounded-2xl shadow-xl'>
                <div className='flex-1 relative pt-10 md:pt-16 px-6 pb-6 md:pb-8 md:px-8'>
                  <div className='absolute top-0 p-1 md:p-3 inline-block bg-blue-accent rounded-lg md:rounded-xl shadow-lg transform -translate-y-1/2'>
                    <link.icon className='h-8 w-8 md:h-10 md:w-10 text-white' aria-hidden='true' />
                  </div>
                  <h3 className='text-xl font-medium text-gray-900'>{link.name}</h3>
                  <DescriptionBlock description={link.description} />
                </div>

                <Link href={link.href} passHref>
                  <a className='basic-link font-semibold text-xl'>
                    <div className='p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8'>
                      Contact us<span aria-hidden='true'> &rarr;</span>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}
