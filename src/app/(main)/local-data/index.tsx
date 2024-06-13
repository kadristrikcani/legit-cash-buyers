'use client'

import React from 'react'

import Image from 'next/image'

import { useActiveSectionContext } from '@src/context/active-section-context'

import useMobile from '@src/hooks/useMobile'

import { localDataString } from '@src/lib/data/local-data'
import { useSectionInView } from '@src/lib/hooks'

import { Chip, LinkButton } from '@src/components'

const LocalData: React.FC = () => {
  const isMobile: boolean = useMobile()

  const { ref } = useSectionInView('LocalData')

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
      id="local-data"
      ref={ref}
      className="px-[120px] py-[30px] mx-auto sm:px-4 md:mx-0 md:px-[20px]"
    >
      <div className="flex flex-row relative gap-16 sm:flex-col-reverse sm:gap-0 md:flex-col-reverse md:text-center">
        <div className="w-[100%] h-[512px] sm:h-[280px] md:h-[480px]">
          <div className="bg-[goldenrod]/30 absolute top-[-2rem] -z-10 right-[70rem] h-[581px] w-[581px] rounded-full blur-[8rem] sm:right-0 sm:top-[250px] sm:h-[350px] md:w-[600px] md:right-[35rem] md:top-[350px] md:h-[550px]" />
          <div className="relative w-[700px] h-[426px] sm:w-[95%] sm:h-[280px] md:w-[95%]">
            <Image src="/USA-map.svg" alt="USA map" fill objectFit="contain" />
          </div>
        </div>

        <div className="container mx-auto flex flex-col justify-center max-w-[520px] sm:pb-[20px] sm:text-center sm:px-[10px]">
          <div className="max-w-[230px]">
            <Chip>{localDataString.chip}</Chip>
          </div>

          <div className="py-4 space-y-[24px]">
            <h2 className="text-[40px] font-bold text-secondary text-break whitespace-pre-line sm:text-[24px]">
              {localDataString.title}
            </h2>
            <h3 className="text-[18px] text-neutral100 font-medium sm:text-[16px]">
              {localDataString.subtitle}
            </h3>
            <p className="text-[16px] text-neutral60 font-medium whitespace-pre-line pb-[30px] sm:text-[14px]">
              {localDataString.description}
            </p>
            <LinkButton
              className="pt-3 pb-3"
              href="#subscribe-form"
              color="secondary"
              onClick={() => {
                setActiveSection('SubscribeForm')
                setTimeOfLastClick(Date.now())
              }}
            >
              {localDataString.buttonText}
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/arrow-circle-down.svg"
          alt="arrow down"
          height={100}
          width={isMobile ? 120 : 180}
        />
      </div>
    </section>
  )
}

export default LocalData
