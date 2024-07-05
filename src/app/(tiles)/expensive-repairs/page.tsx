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
      <div
        className="text-break mx-[8%] mb-20 whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: expensiveRepairsString.content }}
      />
      <Testimonials testimonials={expensiveRepairsString.testimonials} />
      <FAQ faqString={expensiveRepairsString} />

      <Footer typeformId={expensiveRepairsString.typeformId} />
    </div>
  )
}

export default ExpensiveRepairs
