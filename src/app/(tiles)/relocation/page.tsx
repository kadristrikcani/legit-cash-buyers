import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { relocationString } from '@src/lib/data/faq/relocation'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const Relocation: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={relocationString.typeformId} />

      <Hero description={relocationString.description} />
      <h1>Relocation</h1>
      <Testimonials testimonials={relocationString.testimonials} />
      <FAQ faqString={relocationString} />

      <Footer typeformId={relocationString.typeformId} />
    </div>
  )
}

export default Relocation
