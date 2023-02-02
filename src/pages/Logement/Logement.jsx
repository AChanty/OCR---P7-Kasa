import React, { useContext } from 'react'
import './logement.css'
import { Navigate, useParams } from 'react-router-dom'
import Tags from '../../components/Tags/Tags.jsx'
import Rating from './../../components/Rating/Rating.jsx'
import Collapse from './../../components/Collapse/Collapse.jsx'
import Carrousel from './../../components/Carrousel/Carrousel.jsx'
import Loading from '../../components/Loading/Loading'
import { LogementsContext } from './../../App.jsx'

function Logement() {
   // utilisation des props/states tirés du contexte du fetching dans App.jsx
   const { logements, isDataLoading, errorState } = useContext(LogementsContext)

   const { id } = useParams()

   if (isDataLoading) {
      // affiche la barre de chargement tant que logements n'a pas reçu les données
      return <Loading />
   }

   if (errorState) {
      return <p>Erreur lors de la récupération des données</p>
   }

   const logement = logements.find((element) => element.id === id)

   if (!logement) {
      // si l'id n'est pas trouvé, redirige vers la page 404
      return <Navigate to="/404" />
   }

   const {
      title,
      pictures,
      location,
      tags,
      rating,
      host,
      description,
      equipments,
   } = logement

   return (
      <div className="main-wrapper">
         {isDataLoading ? ( // affiche la barre de chargement pendant le fetching
            <Loading />
         ) : (
            <>
               {/* {logement && (
                  <> */}
               <Carrousel images={pictures} />
               <div className="logement_infos-wrapper">
                  <div className="logement_title-location-tags-container">
                     <h1 className="logement_title">{title}</h1>
                     <p className="logement_location">{location}</p>

                     <div className="logement_tags-container">
                        <Tags tags={tags} />
                     </div>
                  </div>

                  <div className="rating-host_container">
                     <div className="rating_wrapper">
                        <Rating rating={rating} />
                     </div>
                     <div className="host_wrapper">
                        <p className="host_name">{host.name}</p>
                        <img src={host.picture} alt={host.name} />
                     </div>
                  </div>
               </div>

               <div className="logement_collapses-container">
                  <div className="logement_collapse-item-container">
                     <Collapse
                        headerName="Description"
                        content={<p>{description}</p>}
                     />
                  </div>

                  <div className="logement_collapse-item-container">
                     <Collapse
                        headerName="Équipements"
                        content={
                           <ul>
                              {equipments.map((equipments) => {
                                 return (
                                    <li
                                       key={equipments}
                                       className="equipements_item"
                                    >
                                       {equipments}
                                    </li>
                                 )
                              })}
                           </ul>
                        }
                     />
                  </div>
               </div>
            </>
         )}
         {/* </>
         )} */}
      </div>
   )
}

export default Logement
