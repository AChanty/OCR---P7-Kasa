import './logement.css'
import Logements from './../../assets/datas/logements.json'
import { Navigate, useParams } from 'react-router-dom'
import Tag from './../../components/Tag/Tag.jsx'
import Rating from './../../components/Rating/Rating.jsx'

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
      <div className="logement_container">
         {/* <Carousel /> */}
         <img className="logement_carousel" src={cover} alt={title} />
         <h1 className="logement_title">{title}</h1>
         <p className="logement_location">{location}</p>

         <Tag tagsList={tags} />
         {/* <ul className="tags_container">
            {tags.map((tags) => {
               // créé un <li> pour chaque tag de logement.tags
               return (
                  <li key={tags} className="logement_tags">
                     {tags}
                  </li>
               )
            })}
         </ul> */}

         {/* <ul className="tags_container">
            {tags.map((tags) => {
               // créé un <li> pour chaque tag de logement.tags
               return (
                  <li key={tags} className="logement_tags">
                     <Tag2 />
                  </li>
               )
            })}
         </ul> */}

         <div className="rating-host_container">
            <div className="rating_wrapper">
               {/* <p>{rating}</p> */}
               <Rating starType="full" ratingValue={rating} />
               <Rating starType="empty" ratingValue={5 - rating} />
            </div>
            <div className="host_wrapper">
               <p className="host_name">{host.name}</p>
               <img src={host.picture} alt={host.name} />
            </div>
         </div>

         <h3>Description</h3>
         <p>{description}</p>
         <h3>Equipements</h3>
         <ul>
            {equipments.map((equipments) => {
               // créé un <li> pour chaque equipment de logement.equipments
               return <li key={equipments}>{equipments}</li>
            })}
         </ul>
      </div>
   )
}

export default Logement
