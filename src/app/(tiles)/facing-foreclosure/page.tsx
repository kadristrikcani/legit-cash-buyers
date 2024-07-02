import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { facingForeclosureFaqString } from '@src/lib/data/faq/facing-foreclosure'

import Testimonials from '@src/components/testimonials'

const FacingForeclosure: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={facingForeclosureFaqString.description} />
      <h1>Facing Foreclosure</h1>
      <Testimonials testimonials={facingForeclosureFaqString.testimonials} />
      <FAQ faqString={facingForeclosureFaqString} />
    </div>
  )
}

export default FacingForeclosure
