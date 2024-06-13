'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'

import useMobile from '@src/hooks/useMobile'

import { footerString } from '@src/lib/data/footer'
import { useSectionInView } from '@src/lib/hooks'

import { AppLogo } from '@src/components'

const Footer: React.FC = () => {
  const isMobile: boolean = useMobile()
  const { ref } = useSectionInView('Footer')

  return (
    <footer
      ref={ref}
      id="footer"
      className="py-6 min-h-[390px] max-h-[390px] relative overflow-hidden sm:max-h-[565px] sm:min-h-[565px] sm:px-[10px] md:max-h-[500px] md:min-h-[500px] md:px-[10px]"
    >
      <div className="bg-[goldenrod]/40 absolute top-[5rem] -z-10 h-[300px] left-[-10rem] w-[35rem] rounded-full blur-[8rem]" />
      <div className="bg-burntSienna/40 absolute top-[10rem] -z-10 right-[-5rem] h-[300px] w-[30rem] rounded-full blur-[10rem]" />

      <div className="container mx-auto px-4 max-w-[1920px]">
        <div className="flex items-center justify-between gap-12 py-6 sm:flex-col sm:items-start sm:gap-8 sm:py-0 || md:flex-col md:items-start md:gap-8 md:py-0">
          <AppLogo size={isMobile ? 120 : 180} />
          <p className="text-[16px] text-neutral60 font-medium whitespace-pre-line leading-[160%] sm:text-[14px]">
            {footerString.description}
          </p>
          <div className="pb-4">
            <div data-tf-live="01J040DS9Z2FPQP91XDXC1WS2E"></div>
            <Script src="//embed.typeform.com/next/embed.js"></Script>
          </div>
        </div>

        <div className="flex-shrink-0 h-px bg-[#E9ECEF] my-[40px] sm:hidden md:hidden" />

        <div className="flex items-center justify-between gap-12 sm:flex-col sm:gap-8 md:mt-[30px]">
          <div className="flex gap-10 text-neutral80 font-medium sm:text-[14px]">
            <Link href="/terms-conditions">{footerString.termsConditions}</Link>
            <Link href="/privacy-policy">{footerString.privacyPolicy}</Link>
          </div>

          <div className="flex gap-10 items-center">
            <Link href={footerString.facebook} target="_blank" rel="noopener noreferrer">
              <Image src="/socials/facebook.svg" alt="Facebook" width={10} height={24} />
            </Link>
            <Link href={footerString.twitter} target="_blank" rel="noopener noreferrer">
              <Image src="/socials/x.svg" alt="Twitter" width={22} height={22} />
            </Link>
            <Link href={footerString.instagram} target="_blank" rel="noopener noreferrer">
              <Image
                src="/socials/instagram.svg"
                alt="Instagram"
                width={22}
                height={24}
              />
            </Link>
          </div>
        </div>

        <p className="text-[14px] sm:text-[12px] text-neutral60 font-medium text-center sm:mt-2 md:my-3">
          {footerString.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
