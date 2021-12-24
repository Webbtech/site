import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

let navigation: Array<{
  name: string
  href: string
  current: boolean
}>
if (process.env.NEXT_PUBLIC_STAGE === 'development') {
  navigation = [
    { name: 'home', href: '/', current: false },
    { name: 'services', href: '/services', current: false },
    { name: 'about', href: '/about', current: false },
    { name: 'contact', href: '/contact', current: false },
  ]
} else {
  navigation = [
    { name: 'home', href: '/', current: false },
    { name: 'services', href: '/services', current: false },
    // { name: 'About', href: '/about', current: false },
    { name: 'contact', href: '/contact', current: false },
  ]
}

function classNames(...classes: any) { // eslint-disable-line
  return classes.filter(Boolean).join(' ')
}

export default function Header(): JSX.Element {
  const router = useRouter()

  return (
    <div className='hidden sm:block '>
      <footer className='flex-1 flex items-center justify-center h-20 bg-gray-300'>
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
    </div>
  )
}
