import React, { useEffect } from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { facingForeclosureString } from '@src/lib/data/tiles/facing-foreclosure'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const FacingForeclosure: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={facingForeclosureString.typeformId} />

      <Hero description={facingForeclosureString.description} />
      <h1>Facing Foreclosure</h1>
      <Testimonials testimonials={facingForeclosureString.testimonials} />
      <FAQ faqString={facingForeclosureString} />

      <Footer typeformId={facingForeclosureString.typeformId} />
    </div>
  )
}

export default FacingForeclosure
