import { ReactComponent as ArrowIcon } from './../../../assets/icons/arrow.svg'

function ArrowsNavigation({ count, position, action }) {
   // mise en place de la navigation par flèches pour le carrousel

   // n'affiche pas la navigation s'il n'y a qu'une image
   if (count === 1) {
      return null
   } else {
      // la variable "arrowStyles" contient le style qui change selon la valeur de la prop {position}
      let arrowStyles = {}
      switch (position) {
         case 'left':
            arrowStyles = {
               transform: 'rotate(-90deg)',
               top: '50%',
            }
            break
         case 'right':
            arrowStyles = {
               transform: 'rotate(90deg)',
               right: '0',
               top: '50%',
            }
            break
         case 'top':
            arrowStyles = {
               top: '6%',
               left: '50%',
               transform: 'translate(-50%, 0)',
            }
            break
         case 'bottom':
            arrowStyles = {
               bottom: '6%',
               left: '50%',
               transform: 'translate(-50%, 0) rotate(180deg)',
            }
            break
         default:
            arrowStyles = {
               transform: 'rotate(-90deg)',
               top: '50%',
            }
      }
      return (
         <div>
            <ArrowIcon
               className="carrousel-arrow"
               fill="white"
               onClick={action}
               style={arrowStyles}
               // change le texte alternatif en fonction de l'action lors du clic sur la flèche
               alt={action.name === 'removeCounter' ? 'Previous' : 'Next'}
            />
         </div>
      )
   }
}

export default ArrowsNavigation
