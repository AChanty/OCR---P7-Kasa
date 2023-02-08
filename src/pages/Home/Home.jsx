import React, { useContext } from 'react'
import './home.css'
import Banner from '../../components/Banner/Banner'
import MobileBackground from './../../assets/img/banner.png'
import DesktopBackground from './../../assets/img/desktop-banner.png'
import Card from '../../components/Card/Card'
import Loading from '../../components/Loading/Loading'
import ResponsiveWrapper from '../../assets/utils/ResponsiveWrapper'
import { LogementsContext } from './../../App.jsx'

function Home() {
   // utilisation des props/states tirés du contexte du fetching dans App.jsx
   const { logements, isDataLoading, errorState } = useContext(LogementsContext)

   return (
      <div className="main-wrapper">
         <ResponsiveWrapper
            // affiche une image de bannière différente en fonction de la taille de l'écran
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
         {isDataLoading ? ( // affiche la barre de chargement pendant le fetching
            <Loading />
         ) : (
            <>
               <div className="home_cards-container">
                  {errorState && ( // affiche une erreur si errorState est true
                     <p>Erreur lors de la récupération des données</p>
                  )}
                  <div className="card-container">
                     {logements.map(
                        // créé un composant Card pour chaque objet disponible dans logement.json
                        (logement, index) => (
                           <Card
                              link={`/logement/${logement.id}`}
                              key={index}
                              title={logement.title}
                              cover={logement.cover}
                           />
                        )
                     )}
                  </div>
               </div>
            </>
         )}
      </div>
   )
}

export default Home
