import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { relocationFaqString } from '@src/lib/data/faq/relocation'

const Relocation: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>Relocation</h1>
      <FAQ faqString={relocationFaqString} />
    </div>
  )
}

export default Relocation
