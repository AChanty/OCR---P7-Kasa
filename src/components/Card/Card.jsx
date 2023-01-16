// import { Link } from 'react-router-dom'
// import './card.css'
// import Logements from './../../assets/datas/logements.json'

// function Card() {
//    return (
//       <div className="card-container">
//          {Logements.map(
//             (
//                logement // créé un div.card-item pour chaque objet disponible dans logement.json
//             ) => (
//                <Link
//                   to={`logement/${logement.id}`} // le lien dirige vers logement/:logement.id
//                   className="card-item"
//                   key={logement.id}
//                >
//                   <p className="card-title">{logement.title}</p>
//                   <div className="card-item_img-container">
//                      <img
//                         className="card-img"
//                         src={logement.cover}
//                         alt={logement.title}
//                      />
//                   </div>
//                </Link>
//             )
//          )}
//       </div>
//    )
// }

// export default Card

import { Link } from 'react-router-dom'
import './card.css'

function Card({ id, title, cover }) {
   return (
      <Link
         to={`/logement/${id}`} // le lien dirige vers logement/:logement.id
         className="card-item"
         key={id}
      >
         <p className="card-title">{title}</p>
         <div className="card-item_img-container">
            <img className="card-img" src={cover} alt={title} />
         </div>
      </Link>
   )
}

export default Card
