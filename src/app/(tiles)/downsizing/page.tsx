import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { downsizingString } from '@src/lib/data/faq/downsizing'

import Testimonials from '@src/components/testimonials'

const Downsizing: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={downsizingString.description} />
      <h1>Downsizing</h1>
      <Testimonials testimonials={downsizingString.testimonials} />
      <FAQ faqString={downsizingString} />
    </div>
  )
}

export default Downsizing
