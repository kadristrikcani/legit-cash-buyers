import React from 'react'

import Hero from '@src/app/(main)/hero'

interface Props {
  children: React.ReactNode
}

export default function TilesLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-auto flex-1 md:mx-[0px]">
        <Hero />
        {children}
      </div>
    </div>
  )
}
