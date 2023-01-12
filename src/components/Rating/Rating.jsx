import './rating.css'
import { ReactComponent as Star } from '../../assets/icons/star.svg'

function Rating({ rating }) {
   const fullStars = []
   const emptyStars = []

   for (let i = 0; i < rating; i++) {
      // push une étoile pleine dans le tableau "fullStars" pour chaque unité de valeur "rating"
      fullStars.push(<Star fill="#FF6060" key={i} />)
   }

   for (let i = 0; i < 5 - rating; i++) {
      // push une étoile vide dans le tableau "emptyStars" pour chaque unité restante entre la note actuelle et la note maximale (5)
      emptyStars.push(<Star fill="#E3E3E3" key={i + rating} />)
      // la valeur key est modifiée pour éviter des doublons après avoir mergé les tableaux
   }

   // merge les deux tableaux pour avoir 5 étoiles
   const totalStars = fullStars.concat(emptyStars)

   return (
      <div>
         <span>{totalStars}</span>
      </div>
   )
}

export default Rating
