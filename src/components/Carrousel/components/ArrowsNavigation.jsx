import { ReactComponent as ArrowIcon } from './../../../assets/icons/arrow.svg'

function ArrowsNavigation({ removeCounter, addCounter, count, position }) {
   // mise en place de la navigation par flèches dans le carrousel

   switch (position) {
      case 'left':
         return (
            <div>
               <ArrowIcon
                  className="carrousel-arrow"
                  fill="white"
                  onClick={removeCounter}
                  style={{
                     // display: images.length === 1 ? 'none' : 'block', // n'affiche pas ce contenu s'il n'y a qu'une image
                     visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                     transform: 'rotate(-90deg)',
                     top: '50%',
                  }}
                  alt="previous"
               />
            </div>
         )
      case 'right':
         return (
            <div>
               <ArrowIcon
                  className="carrousel-arrow"
                  fill="white"
                  onClick={addCounter}
                  style={{
                     // display: images.length === 1 ? 'none' : 'block',
                     visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                     transform: 'rotate(90deg)',
                     right: '0',
                     top: '50%',
                  }}
                  alt="next"
               />
            </div>
         )
      case 'top':
         return (
            <div>
               <ArrowIcon
                  className="carrousel-arrow"
                  fill="white"
                  onClick={removeCounter}
                  style={{
                     // display: images.length === 1 ? 'none' : 'block',
                     visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                     top: '6%',
                     left: '50%',
                     transform: 'translate(-50%, 0)',
                  }}
                  alt="previous"
               />
            </div>
         )
      case 'bottom':
         return (
            <div>
               <ArrowIcon
                  className="carrousel-arrow"
                  fill="white"
                  onClick={addCounter}
                  style={{
                     // display: images.length === 1 ? 'none' : 'block',
                     visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                     bottom: '6%',
                     left: '50%',
                     transform: 'translate(-50%, 0) rotate(180deg)',
                  }}
                  alt="next"
               />
            </div>
         )

      default:
         return (
            <div>
               <ArrowIcon
                  className="carrousel-arrow"
                  fill="white"
                  onClick={removeCounter}
                  style={{
                     // display: images.length === 1 ? 'none' : 'block', // n'affiche pas ce contenu s'il n'y a qu'une image
                     visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                     transform: 'rotate(-90deg)',
                     top: '50%',
                  }}
                  alt="previous"
               />
            </div>
         )
   }

   //    return (
   //       <div>
   //          <ArrowIcon
   //             className="carrousel_previous-arrow"
   //             fill="white"
   //             onClick={removeCounter}
   //             style={{
   //                // display: images.length === 1 ? 'none' : 'block', // n'affiche pas ce contenu s'il n'y a qu'une image
   //                visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
   //                transform: 'rotate(-90deg)',
   //             }}
   //             alt="previous"
   //          />
   //          <ArrowIcon
   //             className="carrousel_next-arrow"
   //             fill="white"
   //             onClick={addCounter}
   //             style={{
   //                // display: images.length === 1 ? 'none' : 'block',
   //                visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
   //                transform: 'rotate(90deg)',
   //             }}
   //             alt="next"
   //          />
   //       </div>
   //    )
}

export default ArrowsNavigation
