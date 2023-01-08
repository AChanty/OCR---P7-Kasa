import { useState, useEffect } from 'react'

export default function ResponsiveRules(breakpoint, contentA, contentB) {
   const [width, setWidth] = useState(window.innerWidth)
   //    const breakpoint = 992
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
