import './carrousel.css'
import { useState } from 'react'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg'

function Carrousel({ images }) {
   // const BulletPoints = () => {
   //    for (let i = 0; i < images.length; i++) {
   //       return <span>0</span>
   //    }
   // }

   let [count, setCount] = useState(1)
   const addCounter = () => {
      count === images.length ? setCount(1) : setCount(count + 1)
   }
   const removeCounter = () => {
      count === 1 ? setCount(images.length) : setCount(count - 1)
   }

   const counter = count + '/' + images.length

   const carrouselStyle = {
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      background: `url(${images[count - 1]})`, // affiche l'index correspondant de l'image
   }

   return (
      <div>
         {/* <div className="test"></div> */}
         {/* <BulletPoints /> */}

         <div className="carrousel_content" style={carrouselStyle}>
            <ArrowIcon
               className="carrousel_previous-arrow"
               fill="white"
               onClick={removeCounter}
               style={{
                  display: images.length === 1 ? 'none' : 'block', // n'affiche pas ce contenu s'il n'y a qu'une image
                  transform: 'rotate(-90deg)',
               }}
               alt="previous"
            />
            <ArrowIcon
               className="carrousel_next-arrow"
               fill="white"
               onClick={addCounter}
               style={{
                  display: images.length === 1 ? 'none' : 'block',
                  transform: 'rotate(90deg)',
               }}
               alt="next"
            />
            <div
               className="carrousel_counter"
               style={{ display: images.length === 1 ? 'none' : 'block' }}
            >
               {counter}
            </div>
         </div>

         {/* <div>
            <ul>
               {images.map((images) => {
                  return (
                     <img
                        key={images}
                        src={images}
                        className="images_item"
                        alt=""
                     />
                  )
               })}
            </ul>
         </div> */}
      </div>
   )
}

export default Carrousel
