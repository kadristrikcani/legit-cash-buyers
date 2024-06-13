'use client'

import { motion } from 'framer-motion'

import React from 'react'

import Image from 'next/image'

import { useActiveSectionContext } from '@src/context/active-section-context'

import { heroString } from '@src/lib/data/hero'
import { useSectionInView } from '@src/lib/hooks'

import { Form } from '@src/components'

const Hero: React.FC = () => {
  const { ref } = useSectionInView('SubscribeForm')

  const { activeSection } = useActiveSectionContext()

  return (
    <section id="hero" className="relative flex-1">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div
          className={`px-4 pt-16 text-center space-y-[16px] sm:pt-16 sm:pb-8  ${activeSection === 'SubscribeForm' ? 'pb-16' : 0}`}
        >
          <h1 className="text-[64px] font-bold text-secondary text-break whitespace-pre-line leading-[115%] md:text-[34px] sm:text-[24px]">
            {heroString.title}
          </h1>
          <p className="text-[16px] text-neutral60 whitespace-pre-line sm:text-[14px]">
            {heroString.description}
          </p>
        </div>

        <div
          className={`relative  w-[800px] h-[650px] bg-transparent sm:w-[90%] md:w-[95%] ${activeSection === 'SubscribeForm' ? ` w-[874px] max-h-[499px]  bg-[#7e8492] rounded-[1.25rem] border-[6px] border-white shadow-2xl  sm:max-h-[555px] md:max-h-[500px]` : `sm:h-[380px] md:h-[500px]`}`}
        >
          {activeSection === 'SubscribeForm' ? (
            <motion.section
              id="subscribe-form"
              className="scroll-mt-[340px]"
              ref={ref}
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              transition={{
                duration: 1
              }}
              viewport={{
                once: true
              }}
            >
              <Form />
            </motion.section>
          ) : (
            <Image
              fill
              src="/hero-image.svg"
              alt="Hero Image"
              objectFit="contain"
              className="rounded-[1rem]"
            />
          )}
        </div>

        <div className="flex group my-[150px] sm:my-[80px] md:my-[120px]">
          <div className="flex animate-loop-scroll group-hover:paused">
            <Image src="/hero.svg" alt="Hero img" height={100} width={1000} />
            <Image src="/hero.svg" alt="Hero img" height={100} width={1000} />
            <Image src="/hero.svg" alt="Hero img" height={100} width={1000} />
            <Image src="/hero.svg" alt="Hero img" height={100} width={1000} />
            <Image src="/hero.svg" alt="Hero img" height={100} width={1000} />
            <Image src="/hero.svg" alt="Hero img" height={100} width={1000} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
