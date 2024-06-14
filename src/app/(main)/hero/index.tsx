'use client'

import React from 'react'

import Image from 'next/image'

import { heroString } from '@src/lib/data/hero'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex-1">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="mb-[120px] mt-16 flex gap-32 sm:mb-[50px] sm:flex-col-reverse sm:gap-24 md:gap-12 md:px-4">
          <div className="bg-transparent relative h-[500px] w-[500px] rounded-full border-[4px] border-primary p-[7px] sm:mx-auto sm:h-[300px] sm:w-[100%]  sm:rounded-b-[50%] sm:border-b-0 md:h-[350px] md:w-[350px] ">
            <div className="mx-auto h-[100%] rounded-full bg-primary sm:rounded-b-lg">
              <Image
                fill
                className="rounded-full p-[7px] pl-[25px] sm:rounded-none"
                src="/michael-bust.png"
                alt="Hero Image"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[150px] w-[300px] md:w-[220px]">
              <Image
                fill={true}
                className="h-full w-full object-cover"
                src="/niche-text-logo.png"
                alt="Hero Image"
                objectFit="contain"
              />
            </div>

            <h1 className="text-break whitespace-pre-line text-center text-[40px] font-bold leading-[115%] text-secondary sm:text-[24px] md:text-[30px]">
              {heroString.title}
              <span className="stroke-current relative mx-1 ml-2 inline-block">
                {heroString.highlightedText}
                <svg
                  className="absolute -bottom-0 max-h-1.5 w-full"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    fill="#F07659"
                  ></path>
                </svg>
              </span>
            </h1>
          </div>
        </div>

        <p className="whitespace-pre-line text-center text-[32px] font-semibold text-secondary sm:mx-[20px] sm:text-[18px] md:text-[24px]">
          {heroString.description}
        </p>

        <div className="group my-[150px] flex sm:my-[80px] md:my-[120px]">
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
