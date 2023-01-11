import './rating.css'
import { ReactComponent as Star } from '../../assets/icons/star.svg'

function Rating({ rating }) {
   const fullStars = []
   const emptyStars = []

   for (let i = 0; i < rating; i++) {
      fullStars.push(<Star fill="#FF6060" key={i} />)
   }

   for (let i = 0; i < 5 - rating; i++) {
      emptyStars.push(<Star fill="#E3E3E3" key={i + rating} />)
      // la valeur key est modifiée pour éviter des doublons après avoir mergé les tableaux
   }

   // merge les deux tableaux
   const totalStars = fullStars.concat(emptyStars)

   return (
      <div>
         <span>
            {/* {fullStars}
            {emptyStars} */}
            {totalStars}
         </span>
      </div>
   )
}

export default Rating
