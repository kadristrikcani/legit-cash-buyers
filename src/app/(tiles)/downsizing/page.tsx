import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { downsizingFaqString } from '@src/lib/data/faq/downsizing'

const Downsizing: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>Downsizing</h1>
      <FAQ faqString={downsizingFaqString} />
    </div>
  )
}

export default Downsizing
