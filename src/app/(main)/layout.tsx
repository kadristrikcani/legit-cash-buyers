import React from 'react'

import { footerString } from '@src/lib/data/footer'
import { headerString } from '@src/lib/data/header'

import { Footer, Header } from '@src/components'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header typeformId={headerString.typeformId} />
      {children}
      <Footer typeformId={footerString.typeformId} />
    </div>
  )
}
