import React from 'react'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title:
    'Sell Your House Fast for Cash | Legit Cash Buyers - Professional Service, Quick Cash',
  description:
    'Sell your home quickly and easily with Legit Cash Buyers. We buy houses for cash in any condition across the United States. No realtor fees, no commissions, no hassle. Get your cash offer today!'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>

      <body className={`flex h-full flex-col ${inter.className}`}>
        <div className="absolute left-[-10rem] top-[-1rem] -z-10 h-[31.25rem] w-[68rem] rounded-full bg-burntSienna/30 blur-[10rem] sm:w-[500px] md:w-[600px] lg:left-[-8rem]" />
        <div className="absolute right-[0rem] top-[-6rem] -z-10 h-[31.25rem] w-[45rem] rounded-full bg-[goldenrod]/30 blur-[10rem] sm:w-[250px]" />
        <div className="mx-auto flex-1 md:mx-[0px]">{children}</div>
      </body>
    </html>
  )
}
