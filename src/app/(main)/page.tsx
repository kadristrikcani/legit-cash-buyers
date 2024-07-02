import React from 'react'

import { faqString } from '@src/lib/data/faq'
import { heroString } from '@src/lib/data/hero'
import { testimonials } from '@src/lib/data/testimonials'

import FAQ from './faq'
import Features from './features'
import Hero from './hero'
import Testimonials from './testimonials'

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero description={heroString.description} />
      <Features />
      <Testimonials testimonials={testimonials} />
      <FAQ faqString={faqString} />
    </div>
  )
}

export default Home
