import React, { FunctionComponent } from 'react'

import { useRouter } from 'next/router'

interface LinkProps {
  href: string
  classes: string
  activeClasses: string
  callbackFunc?: Function
}

export const ActiveLink: FunctionComponent<LinkProps> = ({
  children,
  classes,
  callbackFunc,
  activeClasses,
  href,
}) => {
  const router = useRouter()
  const testActive = () => router.pathname === href && true
  const isActive = testActive()
  const liClassName = isActive
    ? activeClasses
    : classes

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
    if (callbackFunc) {
      callbackFunc(false)
    }
  }

  return (
    <a className={liClassName} href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
