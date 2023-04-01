import './rating.css'
import { ReactComponent as Star } from '../../assets/icons/star.svg'

function Rating({ rating }) {
   const stars = []

   for (let i = 0; i < 5; i++) {
      // Si i est inférieur à rating, ajoute une étoile pleine, sinon ajoute une étoile vide jusqu'à atteindre le total de 5
      const starColor = i < rating ? '#FF6060' : '#E3E3E3'
      stars.push(<Star fill={starColor} key={i} />)
   }

   return (
      <div>
         <span>{stars}</span>
      </div>
   )
}

export default Rating
