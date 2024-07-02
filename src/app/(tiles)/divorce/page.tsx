import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { divorceString } from '@src/lib/data/faq/divorce'

import Testimonials from '@src/components/testimonials'

const Divorce: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={divorceString.description} />
      <h1>Divorce</h1>
      <Testimonials testimonials={divorceString.testimonials} />
      <FAQ faqString={divorceString} />
    </div>
  )
}

export default Divorce
