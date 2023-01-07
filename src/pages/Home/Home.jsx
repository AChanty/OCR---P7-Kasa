import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
import { useState, useEffect } from 'react'
import DesktopBackground from './../../assets/img/desktop-banner.png'
import Card from '../../components/Card/Card'

function Home() {
   const [width, setWidth] = useState(window.innerWidth)
   const breakpoint = 992
   useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth)
      window.addEventListener('resize', handleResizeWindow)
      return () => {
         window.removeEventListener('resize', handleResizeWindow)
      }
   }, [])

   if (width > breakpoint) {
      return (
         <div className="main-wrapper">
            <Banner
               text="Chez vous, partout et ailleurs"
               background={DesktopBackground}
            />
            <div className="home_cards-container">
               <Card />
            </div>
         </div>
      )
   } else {
      return (
         <div className="main-wrapper">
            <p>test</p>
            <Banner
               text="Chez vous, partout et ailleurs"
               background={MobileBackground}
            />
            <div className="home_cards-container">
               <Card />
            </div>
         </div>
      )
   }
}

export default Home
