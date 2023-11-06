import { useEffect } from 'react'
import { useState } from 'react'
export default function useMouse() {
  const [point, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY,
      })
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])
  return [point, setPosition]
}
