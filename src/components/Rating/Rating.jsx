import './rating.css'
// import star from '../../assets/icons/star.svg'
import { ReactComponent as Star } from '../../assets/icons/star.svg'

// function Rating({ ratingValue, starType }) {
//    //    const ratingValue = props.ratingValue
//    const range = [1, 2, 3, 4, 5]
//    const rating =
//       starType === 'full' ? <img src={star} alt="full star" /> : <p>☀️</p>

//    return (
//       // <div>{ratingValue}</div>
//       <div>
//          {range.map((ratingRange) =>
//             ratingValue >= ratingRange ? (
//                <span key={ratingRange.toString()}>{rating}</span>
//             ) : null
//          )}
//       </div>
//    )
// }

function Rating({ starType, ratingValue }) {
   //    const ratingValue = props.ratingValue
   const range = [1, 2, 3, 4, 5]
   const rating =
      starType === 'full' ? <Star fill="#FF6060" /> : <Star fill="#E3E3E3" />
   //    const emptyStars = 5 - ratingValue

   return (
      <div>
         {range.map((ratingRange) =>
            ratingValue >= ratingRange ? (
               <span key={ratingRange.toString()}>{rating}</span>
            ) : null
         )}
      </div>
   )
}

export default Rating
