import { useEffect, useState } from 'react'

export default function useTablet(): boolean {
  const [isTablet, setIsTablet] = useState<boolean>(false)

  useEffect(() => {
    const checkIsTablet = () => {
      const isWindowTablet = window.innerWidth < 1366 && window.innerWidth > 577

      setIsTablet(isWindowTablet)
    }

    checkIsTablet()

    window.addEventListener('resize', checkIsTablet)

    return () => {
      window.removeEventListener('resize', checkIsTablet)
    }
  }, [])

  return isTablet
}
