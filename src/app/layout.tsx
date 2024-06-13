import React from 'react'
import { Toaster } from 'react-hot-toast'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ActiveSectionContextProvider from '@src/context/active-section-context'

import { Footer, Header } from '@src/components'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Niche AI',
  description:
    'Unlock the power of AI with NicheData.ai! Discover pre-foreclosure real estate opportunities quickly and efficiently. Our AI-driven data solutions offer significant time and cost savings, prioritizing high-leverage deals to maximize your success. Currently serving multiple states with plans to expand nationwide. Connect with us today to transform your real estate investments!'
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={`flex flex-col h-full ${inter.className}`}>
        <ActiveSectionContextProvider>
          <div className="bg-burntSienna/30 absolute top-[-1rem] -z-10 left-[-10rem] h-[31.25rem] w-[68rem] rounded-full blur-[10rem] sm:w-[500px] md:w-[600px] lg:left-[-8rem]" />
          <div className="bg-[goldenrod]/30 absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[45rem] rounded-full blur-[10rem] sm:w-[250px]" />

          <Header />
          <div className="flex-1 mx-auto md:mx-[0px]">{children}</div>
          <Footer />

          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
