import { Link } from 'react-router-dom'
import './card.css'
import Logements from './../../assets/datas/logements.json'

function Card() {
   return (
      <div className="card-container">
         {Logements.map((logement) => (
            <Link href="#" className="card-item" key={logement.id}>
               <p className="card-title">{logement.title}</p>
               <img
                  className="card-img"
                  src={logement.cover}
                  alt={logement.title}
               />
            </Link>
         ))}
      </div>
   )
}

export default Card
