// import './home.css'
// import Banner from '../../components/Banner/Banner'
// import MobileBackground from './../../assets/img/banner.png'
// import DesktopBackground from './../../assets/img/desktop-banner.png'
// import Card from '../../components/Card/Card'
// import ResponsiveRules from '../../../src/assets/utils/Responsive'
// import Logements from './../../assets/datas/logements.json'

// function Home() {
//    return (
//       <div className="main-wrapper">
//          {ResponsiveRules(
//             992, // change l'image de fond lorsque l'écran est inférieur/supérieur à 992px
//             <Banner
//                text="Chez vous, partout et ailleurs"
//                background={DesktopBackground}
//             />,
//             <Banner
//                text="Chez vous, partout et ailleurs"
//                background={MobileBackground}
//             />
//          )}
//          <div className="home_cards-container">
//             <div className="card-container">
//                {Logements.map(
//                   // créé un div.card-item pour chaque objet disponible dans logement.json
//                   (logement, index) => (
//                      <Card
//                         link={`/logement/${logement.id}`}
//                         key={index}
//                         title={logement.title}
//                         cover={logement.cover}
//                      />
//                   )
//                )}
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Home

import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
import DesktopBackground from './../../assets/img/desktop-banner.png'
import Card from '../../components/Card/Card'
// import ResponsiveRules from '../../assets/utils/ResponsiveRules'
import Loading from '../../components/Loading/Loading'
import { useState, useEffect } from 'react'
import ResponsiveWrapper from '../../assets/utils/ResponsiveWrapper'

function Home() {
   const [isDataLoading, setDataLoading] = useState(false)
   const [logementsDatas, setLogementsDatas] = useState()

   useEffect(() => {
      setDataLoading(true) // active l'état de barre de chargement
      fetch(`/logements.json`)
         .then((response) => response.json())
         .then((data) => {
            setLogementsDatas(data)
            setDataLoading(false) // désactive l'état de barre de chargement
            console.log(data)
         })
         .catch((error) => console.log(error))
   }, [])

   if (!logementsDatas) {
      // affiche la barre de chargement tant que logementsDatas n'a pas reçu les données
      return <Loading />
   }

   return (
      <div className="main-wrapper">
         <ResponsiveWrapper
            // affiche un contenu différent en fonction de la taille de l'écran
            breakpoint={992}
            contentA={
               <Banner
                  text="Chez vous, partout et ailleurs"
                  background={DesktopBackground}
               />
            }
            contentB={
               <Banner
                  text="Chez vous, partout et ailleurs"
                  background={MobileBackground}
               />
            }
         />

         <div className="home_cards-container">
            <div className="card-container">
               {isDataLoading ? ( // affiche la barre de chargement pendant le fetching
                  <Loading />
               ) : (
                  <>
                     {logementsDatas.map(
                        // créé un div.card-item pour chaque objet disponible dans logement.json
                        (logement, index) => (
                           <Card
                              link={`/logement/${logement.id}`}
                              key={index}
                              title={logement.title}
                              cover={logement.cover}
                           />
                        )
                     )}
                  </>
               )}
            </div>
         </div>
      </div>
   )
}

export default Home
