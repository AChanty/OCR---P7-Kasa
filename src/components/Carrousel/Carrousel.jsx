import { useState } from 'react'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg'

function Carrousel({ images }) {
   let [count, setCount] = useState(1)
   const addCounter = () => {
      if (count === images.length) {
         setCount(images.length)
      } else {
         setCount(count + 1)
      }
   }
   const removeCounter = () => {
      if (count === 1) {
         setCount(1)
      } else {
         setCount(count - 1)
      }
   }
   return (
      <div>
         <ArrowIcon
            fill="white"
            onClick={removeCounter}
            style={{
               transform: 'rotate(-90deg)',
               backgroundColor: 'red',
            }}
            alt="previous"
         />
         <ArrowIcon
            fill="white"
            onClick={addCounter}
            style={{
               transform: 'rotate(90deg)',
               backgroundColor: 'red',
            }}
            alt="next"
         />
         <div>
            {count}/{images.length}
         </div>
      </div>
   )
}

export default Carrousel
