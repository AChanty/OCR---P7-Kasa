import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
// import { useState, useEffect } from 'react'
import DesktopBackground from './../../assets/img/desktop-banner.png'
import Card from '../../components/Card/Card'
import ResponsiveRules from '../../../src/assets/utils/Responsive'

function Home() {
   // const [width, setWidth] = useState(window.innerWidth)
   // const breakpoint = 992
   // useEffect(() => {
   //    const handleResizeWindow = () => setWidth(window.innerWidth)
   //    window.addEventListener('resize', handleResizeWindow)
   //    return () => {
   //       window.removeEventListener('resize', handleResizeWindow)
   //    }
   // }, [])

   // function responsiveBackground() {
   //    if (width > breakpoint) {
   //       return (
   //          <Banner
   //             text="Chez vous, partout et ailleurs"
   //             background={DesktopBackground}
   //          />
   //       )
   //    } else {
   //       return (
   //          <Banner
   //             text="Chez vous, partout et ailleurs"
   //             background={MobileBackground}
   //          />
   //       )
   //    }
   // }

   return (
      <div className="main-wrapper">
         {ResponsiveRules(
            992,
            <Banner
               text="Chez vous, partout et ailleurs"
               background={MobileBackground}
            />,
            <Banner
               text="Chez vous, partout et ailleurs"
               background={DesktopBackground}
            />
         )}
         <div className="home_cards-container">
            <Card />
         </div>
      </div>
   )
}

export default Home
