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
      className="relative max-h-[370px] min-h-[370px] overflow-hidden px-4 py-6 sm:max-h-[735px] sm:min-h-[735px] sm:px-[10px] md:max-h-[600px] md:min-h-[600px] md:px-[10px]"
    >
      <div className="absolute left-[-10rem] top-[5rem] -z-10 h-[300px] w-[35rem] rounded-full bg-[goldenrod]/40 blur-[8rem]" />
      <div className="absolute right-[-5rem] top-[10rem] -z-10 h-[300px] w-[30rem] rounded-full bg-burntSienna/40 blur-[10rem]" />

      <div className="container mx-auto max-w-[1920px] px-4">
        <div className="flex items-center justify-between gap-12 pt-6 sm:flex-col sm:items-start sm:gap-8 sm:py-0 md:flex-col md:items-start md:gap-8 md:py-0">
          <AppLogo size={isMobile ? 100 : 150} />
          <div
            className="whitespace-pre-line text-[16px] font-medium leading-[160%] text-neutral60 sm:text-[14px]"
            dangerouslySetInnerHTML={{ __html: footerString.description }}
          ></div>
          <div className="pb-4">
            <div data-tf-live="01J040DS9Z2FPQP91XDXC1WS2E"></div>
            <Script src="//embed.typeform.com/next/embed.js"></Script>
          </div>
        </div>

        <div className="my-[20px] h-px flex-shrink-0 bg-[#E9ECEF] sm:hidden md:hidden" />

        <div className="flex items-center justify-between gap-12 sm:flex-col sm:gap-8 md:mt-[30px]">
          <div className="flex gap-10 font-medium text-neutral80 sm:text-[14px]">
            <Link href="/terms-conditions">{footerString.termsConditions}</Link>
            <Link href="/privacy-policy">{footerString.privacyPolicy}</Link>
          </div>

          <Image src="/bbb.png" alt="BBB" width={150} height={150} />
        </div>

        <p className="text-center text-[14px] font-medium text-neutral60 sm:mt-2 sm:text-[12px] md:my-3">
          {footerString.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
