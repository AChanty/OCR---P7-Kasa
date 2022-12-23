import './logement.css'
import Logements from './../../assets/datas/logements.json'
import { useParams } from 'react-router-dom'

function Logement() {
   const { id } = useParams() // utilise l'id de l'url
   const logement = Logements.find((element) => {
      // cherche l'id de l'url dans logements.json pour faire correspondre la page au logement
      return element.id === id
   })

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
      <div>
         <img src={cover} alt={title} />
         <h1>{title}</h1>
         <p>{location}</p>
         <ul>
            {tags.map((tags) => {
               return <li key={tags}>{tags}</li>
            })}
         </ul>
         <p>{rating}</p>
         <p>{host.name}</p>
         <img src={host.picture} alt={host.name} />

         <h3>Description</h3>
         <p>{description}</p>
         <h3>Equipements</h3>
         <ul>
            {equipments.map((equipments) => {
               return <li key={equipments}>{equipments}</li>
            })}
         </ul>
      </div>
   )
}

export default Logement
