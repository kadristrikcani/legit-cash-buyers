import React from 'react'

import Image from 'next/image'

import { heroString } from '@src/lib/data/hero'

interface IHero {
  description: string
}

const Hero: React.FC<IHero> = ({ description }) => {
  return (
    <section id="hero" className="relative flex-1">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="mb-[120px] mt-16 flex gap-32 sm:mb-[50px] sm:flex-col-reverse sm:gap-16 md:gap-8 md:px-4">
          <div className="bg-transparent relative h-[500px] w-[500px] rounded-full border-[4px] border-primary p-[7px] sm:mx-auto sm:h-[300px] sm:w-[100%] sm:rounded-b-[50%] sm:border-b-0 md:h-[300px] md:w-[300px]">
            <div className="relative mx-auto h-[100%] rounded-full bg-primary sm:rounded-b-lg">
              <Image
                fill
                priority
                className="rounded-full sm:rounded-none"
                src={heroString.heroImageURL}
                alt="Hero Image"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[50px] w-[600px] sm:w-[90vw] md:w-[400px]">
              <Image
                fill
                className="h-full w-full object-cover"
                src="/text-logo.svg"
                alt="Hero Image"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="relative h-[80px] w-[620px] sm:h-[40px] sm:w-[90vw] md:h-[40px] md:w-[350px]">
              <Image
                fill
                className="h-full w-full object-cover"
                src="/subtitle-logo.svg"
                alt="Hero Image"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        <p className="whitespace-pre-line text-center text-[32px] font-semibold text-secondary sm:mx-[20px] sm:whitespace-normal sm:text-[18px] md:mx-[15%] md:whitespace-normal md:text-[24px]">
          {description}
        </p>

        <div className="group my-[130px] flex sm:my-[80px] md:my-[120px]">
          <div className="group-hover:paused flex animate-loop-scroll">
            <Image
              src="/hero.svg"
              alt="Hero img"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: `1000px`, height: `100px` }}
            />
            <Image
              src="/hero.svg"
              alt="Hero img"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: `1000px`, height: `100px` }}
            />
            <Image
              src="/hero.svg"
              alt="Hero img"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: `1000px`, height: `100px` }}
            />
            <Image
              src="/hero.svg"
              alt="Hero img"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: `1000px`, height: `100px` }}
            />
            <Image
              src="/hero.svg"
              alt="Hero img"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: `1000px`, height: `100px` }}
            />
            <Image
              src="/hero.svg"
              alt="Hero img"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: `1000px`, height: `100px` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
