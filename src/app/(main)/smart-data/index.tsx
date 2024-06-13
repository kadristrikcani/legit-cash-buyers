'use client'

import React from 'react'

import Image from 'next/image'

import { useActiveSectionContext } from '@src/context/active-section-context'

import useMobile from '@src/hooks/useMobile'

import { smartDataString } from '@src/lib/data/smart-data'
import { useSectionInView } from '@src/lib/hooks'

import { Chip, LinkButton } from '@src/components'

const SmartData: React.FC = () => {
  const isMobile: boolean = useMobile()
  const { ref } = useSectionInView('SmartData')

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      id="smart-data"
      ref={ref}
      className="px-[120px] py-[30px] sm:px-4 md:px-[20px]"
    >
      <div className="flex flex-row relative gap-24 max-w-[1920px] mx-auto sm:flex-col sm:gap-6 md:flex-col md:gap-6 md:text-center">
        <div className="container mx-auto flex flex-col justify-center max-w-[50%] sm:pb-[20px] sm:text-center sm:max-w-[100%] sm:px-[10px] md:max-w-[70%] ">
          <div className="max-w-[160px]">
            <Chip>{smartDataString.chip}</Chip>
          </div>

          <div className="py-4 space-y-[24px]">
            <h2 className="text-[40px] font-bold text-secondary text-break whitespace-pre-line sm:text-[24px]">
              {smartDataString.title}
            </h2>

            <div className="max-w-[80%] flex flex-col gap-4 sm:max-w-[100%] md:max-w-[100%]">
              <h3 className="text-[18px] text-neutral100 font-medium sm:text-[16px]">
                {smartDataString.subtitle}
              </h3>
              <p className="text-[16px] text-neutral60 font-medium whitespace-pre-line pb-[30px] sm:text-[14px]">
                {smartDataString.description}
              </p>
            </div>

            <LinkButton
              className="pt-3 pb-3"
              href="#subscribe-form"
              color="secondary"
              onClick={() => {
                setActiveSection('SubscribeForm')
                setTimeOfLastClick(Date.now())
              }}
            >
              {smartDataString.buttonText}
            </LinkButton>
          </div>
        </div>

        <div className="relative w-[673px] h-[331px] sm:h-[280px] sm:w-[100%] md:w-[100%] md:mx-auto">
          <div className="bg-burntSienna/20 absolute top-[2rem] -z-10 right-[-30rem] h-[581px] w-[581px] rounded-full blur-[8rem] sm:top-[-5rem] sm:w-[68.75rem] md:right-[-10rem]" />
          <Image
            fill
            src="/smart-data.svg"
            alt="smart data"
            objectFit="contain"
            className="mt-[25px]"
          />
        </div>
      </div>

      <div className="flex justify-center md:mt-[55px]">
        <Image
          src="/arrow-down.svg"
          alt="arrow down"
          height={100}
          width={isMobile ? 120 : 180}
        />
      </div>
    </section>
  )
}

export default SmartData
