import React, { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface IAppLogoProps {
  size?: number
}

const AppLogo: FC<IAppLogoProps> = ({ size = 108 }) => {
  return (
    <Link href="/">
      <div className="bg-transparent flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-primary p-[4px]">
        <Image src="/logo/app-logo.svg" alt="logo" width={size} height={108} />
      </div>
    </Link>
  )
}

export default AppLogo
