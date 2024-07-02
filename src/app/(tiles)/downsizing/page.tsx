import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { downsizingString } from '@src/lib/data/faq/downsizing'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const Downsizing: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={downsizingString.typeformId} />

      <Hero description={downsizingString.description} />
      <h1>Downsizing</h1>
      <Testimonials testimonials={downsizingString.testimonials} />
      <FAQ faqString={downsizingString} />

      <Footer typeformId={downsizingString.typeformId} />
    </div>
  )
}

export default Downsizing
