'use client'

import React, { useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import useMobile from '@src/hooks/useMobile'

import { headerString } from '@src/lib/data/header'

import { AppLogo, LinkButton } from '@src/components'

interface IHeader {
  typeformId: string
}

const Header: React.FC<IHeader> = ({ typeformId }) => {
  const isMobile: boolean = useMobile()
  const router = useRouter()

  useEffect(() => {
    // Remove old script when component is unmounted
    return () => {
      const scriptElement = document.getElementById('typeform-script')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

  useEffect(() => {
    // Load script when route changes
    const loadTypeformScript = async () => {
      try {
        const scriptElement = document.createElement('script')
        scriptElement.id = 'typeform-script'
        scriptElement.src = '//embed.typeform.com/next/embed.js'
        scriptElement.async = true

        document.body.appendChild(scriptElement)

        return () => {
          // Clean up when component unmounts or when script needs to be reloaded
          document.body.removeChild(scriptElement)
        }
      } catch (error) {
        console.error('Error loading Typeform script:', error)
      }
    }

    loadTypeformScript()

    return () => {
      // Clean up when component unmounts
      const scriptElement = document.getElementById('typeform-script')
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [router])

  return (
    <header className="px-4 py-6 sm:px-2 sm:py-4">
      <div className="container mx-auto max-w-[1920px] px-4 sm:px-0">
        <div className="flex items-center justify-between">
          <AppLogo size={isMobile ? 80 : 100} />
          <div className="flex gap-4 sm:mt-2 sm:flex-col sm:items-end sm:gap-2">
            <LinkButton
              href={headerString.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              className="sm:w-[175px] sm:px-5 sm:py-3 sm:text-[14px]"
            >
              <Image src="/phone.svg" alt="phone" width={21} height={21} />
              {headerString.buttonLinkText}
            </LinkButton>

            <div>
              <div data-tf-live={typeformId} />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
