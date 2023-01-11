import { ReactComponent as ArrowIcon } from './../../../assets/icons/arrow.svg'

function ArrowsNavigation({ count, position, action }) {
   // mise en place de la navigation par flèches dans le carrousel

   // n'affiche pas la navigation s'il n'y a qu'une image
   if (count === 1) {
      return null
   } else {
      switch (position) {
         case 'left':
            return (
               <div>
                  <ArrowIcon
                     className="carrousel-arrow"
                     fill="white"
                     onClick={action}
                     style={{
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
                     onClick={action}
                     style={{
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
                     onClick={action}
                     style={{
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
                     onClick={action}
                     style={{
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
                     onClick={action}
                     style={{
                        transform: 'rotate(-90deg)',
                        top: '50%',
                     }}
                     alt="previous"
                  />
               </div>
            )
      }
   }
}

export default ArrowsNavigation
