import { useState, useEffect } from 'react'

// ajouter debounce
export default function ResponsiveRules(breakpoint, contentA, contentB) {
   const [width, setWidth] = useState(window.innerWidth)
   useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResizeWindow)
      return () => {
         window.removeEventListener('resize', handleResizeWindow)
      }
   }, [])

   if (width > breakpoint) {
      return contentA
   } else {
      return contentB
   }
}
