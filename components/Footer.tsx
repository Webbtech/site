import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

if (process.env.NEXT_PUBLIC_STAGE === 'development') {
  const navigation = [
    { name: 'home', href: '/', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
} else {
  const navigation = [
    { name: 'home', href: '/', current: false },
    // { name: 'Services', href: '/services', current: false },
    // { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ]
}

function classNames(...classes: any) { // eslint-disable-line
  return classes.filter(Boolean).join(' ')
}

export default function Header(): JSX.Element {
  const router = useRouter()
  console.log('process.env: ', process.env.NEXT_PUBLIC_STAGE)

  return (
    <footer className='flex-1 flex items-center justify-center h-24  bg-gray-300'>
      <div className='flex space-x-6'>
        {navigation.map((item) => {
          item.current = router.asPath === item.href || false
          return (
            <Link key={item.name} href={item.href}>
              <a className={classNames(item.current ? 'ftr-link flex text-black' : 'ftr-link flex')}>{item.name}</a>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
