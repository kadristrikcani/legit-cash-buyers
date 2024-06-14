'use client'

import React from 'react'

import Script from 'next/script'

import useMobile from '@src/hooks/useMobile'

import { headerString } from '@src/lib/data/header'

import { AppLogo, LinkButton } from '@src/components'

const Header: React.FC = () => {
  const isMobile: boolean = useMobile()

  return (
    <header className="px-4 py-6 sm:px-2 sm:py-4">
      <div className="container mx-auto max-w-[1920px] px-4 sm:px-0">
        <div className="flex items-center justify-between">
          <AppLogo size={isMobile ? 120 : 180} />
          <div className="flex gap-4 sm:gap-3">
            <LinkButton
              href={headerString.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              color="secondary"
              className="sm:px-5 sm:py-3 sm:text-[14px]"
            >
              {`📞 `}
              {headerString.buttonLinkText}
            </LinkButton>

            <div>
              <div data-tf-live="01J040DS9Z2FPQP91XDXC1WS2E"></div>
              <Script src="//embed.typeform.com/next/embed.js"></Script>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
