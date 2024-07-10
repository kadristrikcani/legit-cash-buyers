import React from 'react'

import TestimonialCarousel, { ITestimonial } from '@src/components/testimonials'

interface ITestimonialProps {
  testimonials: ITestimonial[]
}

const Testimonials: React.FC<ITestimonialProps> = ({ testimonials }) => {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden py-20 sm:pb-0">
      <div className="mx-auto w-full px-4 md:px-6">
        <div className="flex justify-center">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
