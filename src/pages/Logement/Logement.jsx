// import './logement.css'
// import Logements from './../../assets/datas/logements.json'
// import { Navigate, useParams } from 'react-router-dom'
// import Tags from '../../components/Tags/Tags.jsx'
// import Rating from './../../components/Rating/Rating.jsx'
// import Collapse from './../../components/Collapse/Collapse.jsx'
// import Carrousel from './../../components/Carrousel/Carrousel.jsx'

// function Logement() {
//    const { id } = useParams() // utilise l'id de l'url
//    const logement = Logements.find((element) => {
//       // cherche l'id de l'url dans logements.json pour faire correspondre la page au logement
//       return element.id === id
//    })

//    // redirige vers la page d'erreur 404 si l'id de l'url ne correspond à aucun id existant
//    if (!logement) {
//       return <Navigate to="/404" />
//    }

//    const {
//       title,
//       pictures,
//       location,
//       tags,
//       rating,
//       host,
//       description,
//       equipments,
//    } = logement

//    return (
//       <div className="main-wrapper">
//          <Carrousel images={pictures} />
//          <div className="logement_infos-wrapper">
//             <div className="logement_title-location-tags-container">
//                <h1 className="logement_title">{title}</h1>
//                <p className="logement_location">{location}</p>

//                <div className="logement_tags-container">
//                   <Tags tags={tags} />
//                </div>
//             </div>

//             <div className="rating-host_container">
//                <div className="rating_wrapper">
//                   <Rating rating={rating} />
//                </div>
//                <div className="host_wrapper">
//                   <p className="host_name">{host.name}</p>
//                   <img src={host.picture} alt={host.name} />
//                </div>
//             </div>
//          </div>

//          <div className="logement_collapses-container">
//             <div className="logement_collapse-item-container">
//                <Collapse
//                   headerName="Description"
//                   content={<p>{description}</p>}
//                />
//             </div>

//             <div className="logement_collapse-item-container">
//                <Collapse
//                   headerName="Équipements"
//                   content={
//                      <ul>
//                         {equipments.map((equipments) => {
//                            return (
//                               <li key={equipments} className="equipements_item">
//                                  {equipments}
//                               </li>
//                            )
//                         })}
//                      </ul>
//                   }
//                />
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Logement

// import './logement.css'
// import { Navigate, useParams } from 'react-router-dom'
// import Tags from '../../components/Tags/Tags.jsx'
// import Rating from './../../components/Rating/Rating.jsx'
// import Collapse from './../../components/Collapse/Collapse.jsx'
// import Carrousel from './../../components/Carrousel/Carrousel.jsx'
// import { useState, useEffect } from 'react'
// import Loading from '../../components/Loading/Loading'

// function Logement() {
//    const [isDataLoading, setDataLoading] = useState(false) // statut de la barre de chargement
//    const [logementData, setLogementData] = useState() // statut de la réponse du fetch
//    // const [logementData, setLogementData] = useState([]) // statut de la réponse du fetch
//    const [notFound, setNotFound] = useState(false)
//    const [errorState, setError] = useState(false)

//    const { id } = useParams()

//    // récupération des données via fetch
//    useEffect(() => {
//       setDataLoading(true) // active l'état de barre de chargement
//       fetch(`/logements.json`)
//          .then((response) => response.json())
//          .then((data) => {
//             // récupère les données de l'id correspondant au paramètre de l'url dans le document fetché
//             const res = data.find((element) => element.id === id)
//             if (res) {
//                // si le fetch résoud le data.find id, transmet la réponse à logementData
//                setLogementData(res)
//             } else {
//                // si le fetch ne résoud pas le data.find id et ne trouve pas d'id correspondant, passe notFound en true
//                setNotFound(true)
//             }
//             setDataLoading(false) // désactive l'état de barre de chargement
//          })
//          .catch((error) => {
//             console.log(error)
//             setError(true)
//             setDataLoading(false)
//          })
//    }, [id])

//    if (notFound) {
//       // si l'id n'est pas trouvé, redirige vers la page 404
//       return <Navigate to="/404" />
//    }
//    if (errorState) {
//       return <p>Erreur lors de la récupération des données</p>
//    }
//    if (!logementData) {
//       // if (isDataLoading) {
//       // affiche la barre de chargement tant que logementData n'a pas reçu les données
//       return <Loading />
//    }

//    const {
//       title,
//       pictures,
//       location,
//       tags,
//       rating,
//       host,
//       description,
//       equipments,
//    } = logementData

//    return (
//       <div className="main-wrapper">
//          {isDataLoading ? ( // affiche la barre de chargement pendant le fetching
//             <Loading />
//          ) : (
//             <>
//                <Carrousel images={pictures} />
//                <div className="logement_infos-wrapper">
//                   <div className="logement_title-location-tags-container">
//                      <h1 className="logement_title">{title}</h1>
//                      <p className="logement_location">{location}</p>

//                      <div className="logement_tags-container">
//                         <Tags tags={tags} />
//                      </div>
//                   </div>

//                   <div className="rating-host_container">
//                      <div className="rating_wrapper">
//                         <Rating rating={rating} />
//                      </div>
//                      <div className="host_wrapper">
//                         <p className="host_name">{host.name}</p>
//                         <img src={host.picture} alt={host.name} />
//                      </div>
//                   </div>
//                </div>

//                <div className="logement_collapses-container">
//                   <div className="logement_collapse-item-container">
//                      <Collapse
//                         headerName="Description"
//                         content={<p>{description}</p>}
//                      />
//                   </div>

//                   <div className="logement_collapse-item-container">
//                      <Collapse
//                         headerName="Équipements"
//                         content={
//                            <ul>
//                               {equipments.map((equipments) => {
//                                  return (
//                                     <li
//                                        key={equipments}
//                                        className="equipements_item"
//                                     >
//                                        {equipments}
//                                     </li>
//                                  )
//                               })}
//                            </ul>
//                         }
//                      />
//                   </div>
//                </div>
//             </>
//          )}
//       </div>
//    )
// }

// export default Logement

import React, { useContext } from 'react'
import './logement.css'
import { Navigate, useParams } from 'react-router-dom'
import Tags from '../../components/Tags/Tags.jsx'
import Rating from './../../components/Rating/Rating.jsx'
import Collapse from './../../components/Collapse/Collapse.jsx'
import Carrousel from './../../components/Carrousel/Carrousel.jsx'
// import { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import { LogementsContext } from './../../App.jsx'

function Logement() {
   // utilisation des states tirés du contexte de App.jsx
   const { logements, isDataLoading, errorState } = useContext(LogementsContext)

   const { id } = useParams()

   if (isDataLoading) {
      // affiche la barre de chargement tant que logementData n'a pas reçu les données
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
      </div>
   )
}

export default Logement
