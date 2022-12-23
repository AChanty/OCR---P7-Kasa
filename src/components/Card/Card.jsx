import './card.css'
import Logements from './../../assets/datas/logements.json'

function Card() {
   return (
      <div>
         {Logements.map((logement) => (
            <div className="card-item" key={logement.id}>
               {logement.title}
               <img src={logement.cover} alt={logement.title} />
            </div>
         ))}
      </div>
   )
}

export default Card
