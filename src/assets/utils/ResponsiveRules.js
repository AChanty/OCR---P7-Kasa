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

// cet utilitaire prend un breakpoint en prop (la taille de l'écran à partir de laquelle on veut changer le contenu affiché)
// et deux props de contenu (contentA et contentB) qui seront affichés en fonction du breakpoint renseigné
// il utilise l'état "width" pour stocker la largeur actuelle de l'écran et un useEffect pour déclencher le debounce lors
// du resize de la fenêtre
// il compare ensuite la largeur actuelle de l'écran à la valeur du breakpoint pour afficher le contenu en fonction de la condition
export default function ResponsiveRules(breakpoint, contentA, contentB) {
   const [width, setWidth] = useState(window.innerWidth)

   useEffect(() => {
      const debouncedHandleResizeWindow = debounce(() => {
         console.log('debounce trigger')
         setWidth(window.innerWidth)
      })

      window.addEventListener('resize', debouncedHandleResizeWindow)
      return () => {
         window.removeEventListener('resize', debouncedHandleResizeWindow)
      }
   }, [])

   // si la taille de l'écran (width) est supérieure au breakpoint, affiche 'contentA', sinon affiche 'contentB'
   if (width > breakpoint) {
      return contentA
   } else {
      return contentB
   }
}
