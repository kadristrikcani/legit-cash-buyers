import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <div className="absolute left-[-10rem] top-[-1rem] -z-10 h-[31.25rem] w-[68rem] rounded-full bg-burntSienna/30 blur-[10rem] sm:w-[500px] md:w-[600px] lg:left-[-8rem]" />
      <div className="absolute right-[0rem] top-[-6rem] -z-10 h-[31.25rem] w-[45rem] rounded-full bg-[goldenrod]/30 blur-[10rem] sm:w-[250px]" />
      {children}
    </div>
  )
}
