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
            992, // change l'image de fond lorsque l'écran est supérieur à 992px
            <Banner
               text="Chez vous, partout et ailleurs"
               background={DesktopBackground}
            />,
            <Banner
               text="Chez vous, partout et ailleurs"
               background={MobileBackground}
            />
         )}
         <div className="home_cards-container">
            <Card />
         </div>
      </div>

      // <div className="main-wrapper">
      //    <div className="desktopBanner">
      //       <Banner
      //          text="Chez vous, partout et ailleurs"
      //          background={DesktopBackground}
      //       />
      //    </div>

      //    <div className="mobileBanner">
      //       <Banner
      //          text="Chez vous, partout et ailleurs"
      //          background={MobileBackground}
      //       />
      //    </div>

      //    <div className="home_cards-container">
      //       <Card />
      //    </div>
      // </div>
   )
}

export default Home
