'use client'

import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import useMobile from '@src/hooks/useMobile'
import useTablet from '@src/hooks/useTablet'

import { tilesString } from '@src/lib/data/tiles'

const Tiles: React.FC = () => {
  const isMobile: boolean = useMobile()
  const isTablet: boolean = useTablet()
  const router = useRouter()

  return (
    <section id="tiles" className="relative flex-1">
      <div className="mx-auto flex flex-col items-center justify-center">
        {!isTablet ? (
          <div className="mx-[10%] grid grid-cols-4 gap-12 py-12 sm:mx-[20px] sm:grid-cols-2 sm:gap-4">
            {tilesString.tiles.map((tile, index) => (
              <div
                key={index}
                className="min-h-[350px] max-w-[350px] space-y-4 rounded-xl bg-yellow px-[25px] pb-[30px] pt-[60px] text-center shadow-2xl hover:cursor-pointer hover:bg-darkenYellow hover:transition-all sm:min-h-[300px] sm:px-[15px] sm:pb-[5px] sm:pt-[20px]"
                onClick={() => router.push(`${tile.url}`)}
              >
                <div className="flex items-center justify-center">
                  <Image
                    src={tile.img}
                    width={isMobile ? 70 : 80}
                    height={isMobile ? 70 : 80}
                    alt={tile.img.replace('/', '').replace('.svg', '')}
                  />
                </div>
                <h1 className="text-2xl text-[24px] font-semibold text-secondary sm:text-[22px]">
                  {isMobile ? tile.mobile.title : tile.title}
                </h1>
                <p className="text-[16px] font-[500] text-secondary sm:text-[14px]">
                  {isMobile ? tile.mobile.description : tile.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-[20px] grid grid-cols-3 gap-6 py-12">
            {tilesString.tiles.map((tile, index) =>
              index < 6 ? (
                <div
                  key={index}
                  className="min-h-[350px] max-w-[350px] space-y-4 rounded-xl bg-yellow px-[25px] pb-[30px] pt-[60px] text-center shadow-2xl"
                  onClick={() => router.push(`${tile.url}`)}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={tile.img}
                      width={80}
                      height={80}
                      alt={tile.img.replace('/', '').replace('.svg', '')}
                    />
                  </div>
                  <h1 className="text-2xl font-semibold text-secondary sm:text-[22px] md:text-[24px]">
                    {tile.title}
                  </h1>
                  <p className="text-[16px] font-[500] text-secondary sm:text-[14px]">
                    {tile.description}
                  </p>
                </div>
              ) : null
            )}
            <div className="hidden md:col-span-3 md:flex md:justify-center md:gap-6">
              {tilesString.tiles.slice(6).map((tile, index) => (
                <div
                  key={index + 6}
                  className="min-h-[250px] max-w-[300px] space-y-4 rounded-xl bg-yellow px-[25px] pb-[30px] pt-[60px] text-center shadow-2xl"
                  onClick={() => router.push(`${tile.url}`)}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={tile.img}
                      width={100}
                      height={100}
                      alt={tile.img.replace('/', '').replace('.svg', '')}
                    />
                  </div>
                  <h1 className="text-2xl font-semibold text-secondary sm:text-[22px] md:text-[24px]">
                    {tile.title}
                  </h1>
                  <p className="text-[16px] font-[500] text-secondary sm:text-[14px]">
                    {tile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tiles
