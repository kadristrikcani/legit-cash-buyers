'use client'

import React from 'react'

import Image from 'next/image'

import { goalsString } from '@src/lib/data/goals'
import { useSectionInView } from '@src/lib/hooks'

const Goals: React.FC = () => {
  const { ref } = useSectionInView('Goals')

  return (
    <section
      id="goals"
      ref={ref}
      className="px-[120px] pt-[80px] pb-[120px] sm:px-4 md:px-[20px] sm:pb-[50px]"
    >
      <div className="flex flex-row relative gap-8 md:w-[70%] md:mx-auto">
        <div className="flex mx-auto gap-[150px] mb-10 sm:gap-[18px] sm:flex-col sm:text-center md:gap-[18px] md:flex-col md:text-center">
          <h2 className="text-[40px] font-bold text-secondary max-w-[600px] sm:text-[24px] md:max-w-[100%] md:text-[34px]">
            {goalsString.title}
          </h2>

          <p className="text-[16px] text-neutral60 font-medium whitespace-pre-line max-w-[550px] leading-[160%] sm:text-[14px] md:max-w-[100%]">
            {goalsString.description}
          </p>
        </div>
      </div>

      <div className="relative flex mx-auto justify-center w-[100%] h-[512px] mr-[-20px] sm:h-[280px] sm:mr-[-5px] md:h-[500px] md:mr-[-5px]">
        <Image src="/goals.svg" alt="goals" fill objectFit="contain" />
      </div>
    </section>
  )
}

export default Goals
