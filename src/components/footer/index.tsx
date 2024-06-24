'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import useMobile from '@src/hooks/useMobile'

import { footerString } from '@src/lib/data/footer'

import { AppLogo } from '@src/components'

const Footer: React.FC = () => {
  const isMobile: boolean = useMobile()

  return (
    <footer
      id="footer"
      className="relative max-h-[265px] min-h-[265px] overflow-hidden px-4 py-6 sm:max-h-[735px] sm:min-h-[735px] sm:px-[10px] md:max-h-[600px] md:min-h-[600px] md:px-[10px]"
    >
      <div className="absolute left-[-10rem] top-[5rem] -z-10 h-[300px] w-[35rem] rounded-full bg-[goldenrod]/40 blur-[8rem]" />
      <div className="absolute right-[-5rem] top-[10rem] -z-10 h-[300px] w-[30rem] rounded-full bg-burntSienna/40 blur-[10rem]" />

      <div className="container mx-auto max-w-[1920px] px-4">
        <div className="relative flex items-center justify-between gap-12 pt-6 sm:flex-col sm:items-start sm:gap-8 sm:py-0 md:flex-col md:items-start md:gap-8 md:py-0">
          <div className="flex items-center justify-center gap-10">
            <AppLogo size={isMobile ? 80 : 110} />
            <div
              className="whitespace-pre-line text-[16px] font-medium leading-[160%] text-neutral60 sm:text-[14px]"
              dangerouslySetInnerHTML={{ __html: footerString.description }}
            ></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/google-review.svg"
              alt="google review"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          <div className="flex items-center justify-center gap-16">
            <Image src="/bbb.png" alt="BBB" width={150} height={150} />

            <div className="pb-4">
              <div data-tf-live="01J040DS9Z2FPQP91XDXC1WS2E"></div>
              <Script src="//embed.typeform.com/next/embed.js"></Script>
            </div>
          </div>
        </div>

        <div className="my-[20px] h-px flex-shrink-0 bg-[#E9ECEF] sm:hidden md:hidden" />

        <div className="flex items-center justify-center sm:flex-col sm:gap-8 md:mt-[30px]">
          <div className="flex gap-4 font-medium text-neutral60 sm:text-[14px]">
            <Link href="/terms-conditions" className="hover:underline">
              {footerString.termsConditions}
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              {footerString.privacyPolicy}
            </Link>
          </div>
        </div>

        <p className="mt-2 text-center text-[14px] font-medium text-neutral60 sm:mt-2 sm:text-[12px] md:my-3">
          {footerString.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
