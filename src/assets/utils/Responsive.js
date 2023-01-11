import { useState, useEffect } from 'react'

function debounce(func, timeout = 200) {
   // permet de déclencher l'eventlistener du resize qu'une fois toutes les 200ms, plutôt qu'à chaque fenêtre de modification
   let timer
   return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
         func.apply(this, args)
      }, timeout)
   }
}

export default function ResponsiveRules(breakpoint, contentA, contentB) {
   const [width, setWidth] = useState(window.innerWidth)
   useEffect(() => {
      const debouncedHandleResizeWindow = debounce(() => {
         console.log('test')
         setWidth(window.innerWidth)
      })

      window.addEventListener('resize', debouncedHandleResizeWindow)
      return () => {
         window.removeEventListener('resize', debouncedHandleResizeWindow)
      }
   }, [])

   if (width > breakpoint) {
      return contentA
   } else {
      return contentB
   }
}
