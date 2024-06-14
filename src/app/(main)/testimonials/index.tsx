'use client'

import React from 'react'

import { testimonials } from '@src/lib/data/testimonials'

import TestimonialCarousel from '@src/components/testimonials'

const Testimonials: React.FC = () => {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden py-20">
      <div className="mx-auto w-full px-4 md:px-6">
        <div className="flex justify-center">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
