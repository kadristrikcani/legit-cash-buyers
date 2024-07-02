import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { retirementString } from '@src/lib/data/faq/retirement'

import Testimonials from '@src/components/testimonials'

const Retirement: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={retirementString.description} />
      <h1>Retirement</h1>
      <Testimonials testimonials={retirementString.testimonials} />
      <FAQ faqString={retirementString} />
    </div>
  )
}

export default Retirement
