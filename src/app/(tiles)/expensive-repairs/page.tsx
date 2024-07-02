import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { expensiveRepairsString } from '@src/lib/data/faq/expensive-repairs'

import Testimonials from '@src/components/testimonials'

const ExpensiveRepairs: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={expensiveRepairsString.description} />
      <h1>Expensive Repairs</h1>
      <Testimonials testimonials={expensiveRepairsString.testimonials} />
      <FAQ faqString={expensiveRepairsString} />
    </div>
  )
}

export default ExpensiveRepairs
