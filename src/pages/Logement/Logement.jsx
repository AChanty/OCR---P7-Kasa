import './logement.css'
import Logements from './../../assets/datas/logements.json'
import { Navigate, useParams } from 'react-router-dom'
import Tag from './../../components/Tag/Tag.jsx'
import Rating from './../../components/Rating/Rating.jsx'
import Collapse from './../../components/Collapse/Collapse.jsx'

// import Tag2 from './../../components/Tag/Tag.jsx'

// import Carousel from './../../components/Carousel/Carousel.jsx'

function Logement() {
   const { id } = useParams() // utilise l'id de l'url
   const logement = Logements.find((element) => {
      // cherche l'id de l'url dans logements.json pour faire correspondre la page au logement
      return element.id === id
   })

   // redirige vers la page d'erreur 404 si l'id de l'url ne correspond à aucun id existant
   if (!logement) {
      return <Navigate to="/404" />
   }

   const {
      cover,
      title,
      location,
      tags,
      rating,
      host,
      description,
      equipments,
   } = logement

   return (
      <div className="main-wrapper">
         {/* <Carousel /> */}
         <img className="logement_carousel" src={cover} alt={title} />
         <h1 className="logement_title">{title}</h1>
         <p className="logement_location">{location}</p>

         <div>
            <Tag tags={tags} />
         </div>

         <div className="rating-host_container">
            <div className="rating_wrapper">
               <Rating starType="full" ratingValue={rating} />
               <Rating starType="empty" ratingValue={5 - rating} />
            </div>
            <div className="host_wrapper">
               <p className="host_name">{host.name}</p>
               <img src={host.picture} alt={host.name} />
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
                              <li key={equipments} className="equipements_item">
                                 {equipments}
                              </li>
                           )
                        })}
                     </ul>
                  }
               />
            </div>
         </div>
      </div>
   )
}

export default Logement
