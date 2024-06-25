import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { facingForeclosureFaqString } from '@src/lib/data/faq/facing-foreclosure'

const FacingForeclosure: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>Facing Foreclosure</h1>
      <FAQ faqString={facingForeclosureFaqString} />
    </div>
  )
}

export default FacingForeclosure
