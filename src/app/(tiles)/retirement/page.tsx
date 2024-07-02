import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { retirementString } from '@src/lib/data/faq/retirement'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const Retirement: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={retirementString.typeformId} />

      <Hero description={retirementString.description} />
      <h1>Retirement</h1>
      <Testimonials testimonials={retirementString.testimonials} />
      <FAQ faqString={retirementString} />

      <Footer typeformId={retirementString.typeformId} />
    </div>
  )
}

export default Retirement
