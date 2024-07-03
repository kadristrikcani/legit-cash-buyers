import React from 'react'

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
      <div
        className="text-break mx-auto mb-20 max-w-[50%] whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: facingForeclosureString.content }}
      />
      <Testimonials testimonials={facingForeclosureString.testimonials} />
      <FAQ faqString={facingForeclosureString} />

      <Footer typeformId={facingForeclosureString.typeformId} />
    </div>
  )
}

export default FacingForeclosure
