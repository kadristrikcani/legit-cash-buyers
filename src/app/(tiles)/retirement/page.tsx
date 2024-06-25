import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { retirementFaqString } from '@src/lib/data/faq/retirement'

const Retirement: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>Retirement</h1>
      <FAQ faqString={retirementFaqString} />
    </div>
  )
}

export default Retirement
