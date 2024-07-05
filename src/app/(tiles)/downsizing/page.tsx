import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { downsizingString } from '@src/lib/data/tiles/downsizing'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const Downsizing: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={downsizingString.typeformId} />
      <Hero description={downsizingString.description} />
      <div
        className="text-break mx-[8%] mb-20 whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: downsizingString.content }}
      />
      <Testimonials testimonials={downsizingString.testimonials} />
      <FAQ faqString={downsizingString} />
      <Footer typeformId={downsizingString.typeformId} />
    </div>
  )
}

export default Downsizing
