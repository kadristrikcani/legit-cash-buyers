import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { inheritedPropertyString } from '@src/lib/data/tiles/inherited-property'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const InheritedProperty: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={inheritedPropertyString.typeformId} />

      <Hero description={inheritedPropertyString.description} />
      <div
        className="text-break mx-auto mb-20 max-w-[50%] whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: inheritedPropertyString.content }}
      />
      <Testimonials testimonials={inheritedPropertyString.testimonials} />
      <FAQ faqString={inheritedPropertyString} />

      <Footer typeformId={inheritedPropertyString.typeformId} />
    </div>
  )
}

export default InheritedProperty
