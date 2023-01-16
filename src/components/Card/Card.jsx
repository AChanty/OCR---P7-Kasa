import { Link } from 'react-router-dom'
import './card.css'

function Card({ link, title, cover }) {
   return (
      <Link to={link} className="card-item">
         <p className="card-title">{title}</p>
         <div className="card-item_img-container">
            <img className="card-img" src={cover} alt={title} />
         </div>
      </Link>
   )
}

export default Card
