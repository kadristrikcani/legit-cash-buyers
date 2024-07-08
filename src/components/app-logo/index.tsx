import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface IAppLogoProps {
  size?: number
}

const AppLogo: FC<IAppLogoProps> = ({ size = 100 }) => {
  return (
    <Link
      href="/"
      className={`bg-transparent relative flex items-center justify-center rounded-full border-[3px] border-primary p-[4px]`}
    >
      <Image
        src="/logo/app-logo.svg"
        alt="logo"
        width="0"
        height="0"
        sizes="100vw"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          maxWidth: `${size}px`,
          maxHeight: `${size}px`
        }}
      />
    </Link>
  )
}

export default AppLogo
