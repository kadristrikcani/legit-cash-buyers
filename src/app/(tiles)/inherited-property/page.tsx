import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { inheritedPropertyString } from '@src/lib/data/faq/inherited-property'

import Testimonials from '@src/components/testimonials'

const InheritedProperty: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={inheritedPropertyString.description} />
      <h1>Inherited Property</h1>
      <Testimonials testimonials={inheritedPropertyString.testimonials} />
      <FAQ faqString={inheritedPropertyString} />
    </div>
  )
}

export default InheritedProperty
