import React from 'react'

import FAQ from './faq'
import Features from './features'
import Hero from './hero'
import Testimonials from './testimonials'

const Home: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default Home
