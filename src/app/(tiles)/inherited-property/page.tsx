import React from 'react'

import FAQ from '@src/app/(main)/faq'

import { inheritedPropertyFaqString } from '@src/lib/data/faq/inherited-property'

const InheritedProperty: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <h1>InheritedProperty</h1>
      <FAQ faqString={inheritedPropertyFaqString} />
    </div>
  )
}

export default InheritedProperty
