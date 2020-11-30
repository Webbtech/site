import React, { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { ActiveLink } from '../ActiveLink'
import { Center } from '../Center'
import { Container, Logo, Menu } from './style'

interface LinkItem {
  label: string
  path: string
}

interface LinkItems extends Array<LinkItem> {}

const links: LinkItems = [
  { label: 'Solutions', path: '/solutions' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <Center>
        <Logo>
          <Link href='/'>
            <a>
              <Image
                src='/logo.svg'
                alt='Picture of the author'
                width={150}
                height={50}
              />
            </a>
          </Link>
        </Logo>
        <Menu>
        <ul className='tab tab-block'>
          {links.map((l) => (
            <ActiveLink key={l.path} href={l.path}>{l.label}</ActiveLink>
          ))}
          </ul>
        </Menu>
      </Center>
    </Container>
  )
}
