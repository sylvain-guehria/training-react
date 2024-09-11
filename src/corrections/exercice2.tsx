import { useEffect, useState } from 'react'

import type { RefObject } from 'react'

export function useHover<T extends HTMLElement = HTMLElement>(
  elementRef: RefObject<T>,
): boolean {
  const [value, setValue] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setValue(true)
  }
  const handleMouseLeave = () => {
    setValue(false)
  }

  useEffect(() => {
    const currentElement = elementRef.current;
    currentElement?.addEventListener('mouseenter', handleMouseEnter)
    return () => currentElement?.removeEventListener('mouseenter', handleMouseEnter)
  }, [elementRef])

  useEffect(() => {
    const currentElement = elementRef.current;
    currentElement?.addEventListener('mouseleave', handleMouseLeave)
    return () => currentElement?.removeEventListener('mouseleave', handleMouseLeave)
  }, [elementRef])


  return value
}