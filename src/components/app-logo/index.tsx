import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface IAppLogoProps {
  size?: number
}

const AppLogo: FC<IAppLogoProps> = ({ size = 108 }) => {
  return (
    <Link href="/">
      <Image src="/logo/app-logo.svg" alt="logo" width={size} height={108} />
    </Link>
  )
}

export default AppLogo
