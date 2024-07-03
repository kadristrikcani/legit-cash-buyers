import React from 'react'

import FAQ from '@src/app/(main)/faq'
import Hero from '@src/app/(main)/hero'

import { nightmareTenantsString } from '@src/lib/data/tiles/nightmare-tenants'

import { Footer, Header } from '@src/components'
import Testimonials from '@src/components/testimonials'

const NightmareTenants: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Header typeformId={nightmareTenantsString.typeformId} />

      <Hero description={nightmareTenantsString.description} />
      <div
        className="text-break mx-auto mb-20 max-w-[50%] whitespace-pre-line text-[16px] sm:text-[14px]"
        dangerouslySetInnerHTML={{ __html: nightmareTenantsString.content }}
      />
      <Testimonials testimonials={nightmareTenantsString.testimonials} />
      <FAQ faqString={nightmareTenantsString} />

      <Footer typeformId={nightmareTenantsString.typeformId} />
    </div>
  )
}

export default NightmareTenants
