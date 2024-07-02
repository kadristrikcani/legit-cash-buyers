import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { expensiveRepairsString } from '@src/lib/data/tiles/expensive-repairs'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const ExpensiveRepairs: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={expensiveRepairsString.typeformId} />

      <Hero description={expensiveRepairsString.description} />
      <h1>Expensive Repairs</h1>
      <Testimonials testimonials={expensiveRepairsString.testimonials} />
      <FAQ faqString={expensiveRepairsString} />

      <Footer typeformId={expensiveRepairsString.typeformId} />
    </div>
  )
}

export default ExpensiveRepairs
