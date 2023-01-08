import './rating.css'
// import star from '../../assets/icons/star.svg'
import { ReactComponent as Star } from '../../assets/icons/star.svg'

// function Rating({ starType, ratingValue }) {
//    const range = [1, 2, 3, 4, 5]
//    const rating =
//       starType === 'full' ? <Star fill="#FF6060" /> : <Star fill="#E3E3E3" />
//    //    const emptyStars = 5 - ratingValue

//    return (
//       <div>
//          {range.map((ratingRange) =>
//             ratingValue >= ratingRange ? (
//                <span key={ratingRange.toString()}>{rating}</span>
//             ) : null
//          )}
//       </div>
//    )
// }

function Rating({ rating }) {
   const fullStars = []
   const emptyStars = []

   for (let i = 0; i < rating; i++) {
      fullStars.push(<Star fill="#FF6060" key={i} />)
   }

   for (let i = 0; i < 5 - rating; i++) {
      emptyStars.push(<Star fill="#E3E3E3" key={i} />)
   }

   //    const totalStars = fullStars.concat(emptyStars)

   return (
      <div>
         <span>
            {fullStars}
            {emptyStars}
            {/* {totalStars} */}
         </span>
      </div>
   )
}

export default Rating
