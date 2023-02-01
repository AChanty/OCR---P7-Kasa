// permet de revenir en haut de la page lors de la navigation

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function BackToTop() {
   const { pathname } = useLocation()

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [pathname])

   return null
}
