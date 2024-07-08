'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import useMobile from '@src/hooks/useMobile'

import { footerString } from '@src/lib/data/footer'

import { AppLogo } from '@src/components'

interface IFooter {
  typeformId: string
}

const Footer: React.FC<IFooter> = ({ typeformId }) => {
  const isMobile: boolean = useMobile()

  useEffect(() => {
    return () => {
      const scriptElement = document.getElementById('typeform-script-footer')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

  useEffect(() => {
    const loadTypeformScript = async () => {
      try {
        const scriptElement = document.createElement('script')
        scriptElement.id = 'typeform-script-footer'
        scriptElement.src = '//embed.typeform.com/next/embed.js'
        scriptElement.async = true

        document.body.appendChild(scriptElement)

        return () => {
          document.body.removeChild(scriptElement)
        }
      } catch (error) {
        console.error('Error loading Typeform script:', error)
      }
    }

    loadTypeformScript()

    return () => {
      const scriptElement = document.getElementById('typeform-script-footer')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

  return (
    <footer
      id="footer"
      className="relative max-h-[275px] min-h-[275px] overflow-hidden px-4 py-6 sm:max-h-[480px] sm:min-h-[480px] sm:px-[10px] md:max-h-[600px] md:min-h-[600px] md:px-[10px]"
    >
      <div className="absolute left-[-10rem] top-[5rem] -z-10 h-[300px] w-[35rem] rounded-full bg-[goldenrod]/40 blur-[8rem]" />
      <div className="absolute right-[-5rem] top-[10rem] -z-10 h-[300px] w-[30rem] rounded-full bg-burntSienna/40 blur-[10rem]" />

      <div className="container mx-auto max-w-[1920px] px-4">
        <div className="sm:items-star relative flex items-center justify-between gap-12 pt-6 sm:flex-col sm:gap-0 sm:py-0 md:flex-col md:items-start md:gap-8 md:py-0">
          <div className="flex items-center justify-center gap-10">
            <AppLogo size={isMobile ? 80 : 100} />
            <div
              className="whitespace-pre-line text-[16px] font-medium leading-[160%] text-neutral60 sm:text-[14px]"
              dangerouslySetInnerHTML={{ __html: footerString.description }}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center sm:relative">
            <Image
              src="/google-review.svg"
              alt="google review"
              width={isMobile ? 120 : 150}
              height={isMobile ? 120 : 150}
              className="mx-auto"
            />
          </div>

          <div className="flex items-center justify-center gap-16 sm:flex-col sm:gap-4">
            <Image
              src="/bbb.png"
              alt="BBB"
              className="rounded-[5px]"
              width={isMobile ? 120 : 150}
              height={150}
            />

            <div className="pb-4">
              <div data-tf-live={typeformId}></div>
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
