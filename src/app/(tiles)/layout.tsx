import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function TilesLayout({ children }: Props) {
  return (
    <div>
      <div className="mx-auto flex-1 md:mx-[0px]">{children}</div>
    </div>
  )
}
