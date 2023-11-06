import { useEffect } from 'react'
import { useState } from 'react'

export default function useScroll() {
  const [scroll, setScroll] = useState({
    left: 0,
    top: 0,
  })
  useEffect(() => {
    const fn = () => {
      setScroll({
        left: window.pageXOffset,
        top: window.pageYOffset,
      })
    }

    window.addEventListener('scroll', fn)
    return () => {
      window.removeEventListener('scroll', fn)
    }
  }, [])
  return scroll
}
