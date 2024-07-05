'use client'

import React from 'react'

import Image from 'next/image'

interface IHero {
  description: string
}

const Hero: React.FC<IHero> = ({ description }) => {
  return (
    <section id="hero" className="relative flex-1">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="mb-[120px] mt-16 flex gap-32 sm:mb-[50px] sm:flex-col-reverse sm:gap-16 md:gap-12 md:px-4">
          <div className="bg-transparent relative h-[500px] w-[500px] rounded-full border-[4px] border-primary p-[7px] sm:mx-auto sm:h-[300px] sm:w-[100%] sm:rounded-b-[50%] sm:border-b-0 md:h-[350px] md:w-[350px]">
            <div className="mx-auto h-[100%] rounded-full bg-primary sm:rounded-b-lg">
              <Image
                fill
                className="rounded-full p-[7px] pl-[25px] sm:rounded-none"
                src="/hero-person.png"
                alt="Hero Image"
                objectFit="contain"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[50px] w-[600px] sm:w-[90vw]">
              <Image
                fill={true}
                className="h-full w-full object-cover"
                src="/text-logo.svg"
                alt="Hero Image"
                objectFit="contain"
              />
            </div>

            <div className="relative h-[80px] w-[620px] sm:h-[40px] sm:w-[90vw]">
              <Image
                fill={true}
                className="h-full w-full object-cover"
                src="/subtitle-logo.svg"
                alt="Hero Image"
                objectFit="contain"
              />
            </div>
          </div>
        </div>

        <p className="whitespace-pre-line text-center text-[32px] font-semibold text-secondary sm:mx-[20px] sm:whitespace-normal sm:text-[18px] md:text-[24px]">
          {description}
        </p>

        <div className="group my-[130px] flex sm:my-[80px] md:my-[120px]">
          <div className="group-hover:paused flex animate-loop-scroll">
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
