'use client'

import { Transition } from '@headlessui/react'
import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'

export interface ITestimonial {
  img: string
  quote: string
  name: string
}

export default function FancyITestimonialsSlider({
  testimonials
}: {
  testimonials: ITestimonial[]
}) {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const autorotateTiming: number = 5000

  useEffect(() => {
    if (!autorotate || isOpen) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : (active) => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate, testimonials.length, isOpen])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      {/* Testimonial image */}
      <div className="relative h-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-primary/25 before:via-primary/5 before:via-25% before:to-primary/0 before:to-75%">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                className="absolute inset-0 -z-10 h-full"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
              >
                <Image
                  className="relative left-[49%] top-11 -translate-x-1/2 rounded-full"
                  src={testimonial.img}
                  width={56}
                  height={56}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="mb-5 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="text-2xl font-bold text-secondary sm:text-[20px]">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="-m-1.5 flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring ${active === index ? 'bg-primary text-white shadow-lg' : 'bg-white text-secondary hover:bg-primary/10'}`}
            onClick={() => {
              setActive(index)
              setAutorotate(false)
            }}
          >
            <span>{testimonial.name}</span>{' '}
          </button>
        ))}
      </div>
    </div>
  )
}
