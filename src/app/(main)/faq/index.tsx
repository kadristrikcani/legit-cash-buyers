import React from 'react'

import { faqString } from '@src/lib/data/faq'

import { FAQAccordion } from '@src/components'

interface IFaq {
  faqString: typeof faqString
}

const FAQ: React.FC<IFaq> = ({ faqString }) => {
  return (
    <section id="join-niche" className="relative flex-1">
      <div className="mx-auto mb-32 mt-16 flex flex-col items-center justify-center gap-[50px] sm:mx-[20px] sm:mb-16 sm:gap-[15px] md:mx-[20px]">
        <h1 className="text-center text-[64px] font-bold leading-[115%] text-secondary sm:text-[24px] md:text-[34px]">
          {faqString.title}
        </h1>

        <FAQAccordion questions={faqString.faqs} />
      </div>
    </section>
  )
}

export default FAQ
