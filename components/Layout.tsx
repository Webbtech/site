import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
      <link rel='manifest' href='/favicon/site.webmanifest' />
      <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff'></meta>
    </Head>
    <Header />
    {/* <header>
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href='/about'>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href='/users'>
          <a>Users List</a>
        </Link>{' '}
        | <a href='/api/users'>Users API</a>
      </nav>
    </header> */}
    {children}
    <footer className='flex items-center justify-center w-full h-24 border-t'>
      <hr />
      <a
        className='flex items-center justify-center'
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by <img src='../vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
      </a>
    </footer>
  </div>
)

export default Layout
