import './carrousel.css'
import { useState } from 'react'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg'

function Carrousel({ images }) {
   let [currentIndex, setIndex] = useState(1)
   const addCounter = () => {
      currentIndex === images.length ? setIndex(1) : setIndex(currentIndex + 1)
   }
   const removeCounter = () => {
      currentIndex === 1 ? setIndex(images.length) : setIndex(currentIndex - 1)
   }

   const counter = currentIndex + '/' + images.length

   const carrouselStyle = {
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
      background: `url(${images[currentIndex - 1]})`, // affiche l'index correspondant de l'image
   }

   const dotsContainerStyle = {
      display: 'flex',
      justifyContent: 'center',
      gap: '5px',
      bottom: '0',
   }
   const dotsStyle = {
      color: 'white',
      cursor: 'pointer',
      fontSize: '40px',
      userSelect: 'none',
      // display: images.length === 1 ? 'none' : 'block',
      visibility: images.length === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
   }

   const goToSlide = (currentIndex) => {
      setIndex(currentIndex + 1)
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
                  // display: images.length === 1 ? 'none' : 'block', // n'affiche pas ce contenu s'il n'y a qu'une image
                  visibility: images.length === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                  transform: 'rotate(-90deg)',
               }}
               alt="previous"
            />
            <ArrowIcon
               className="carrousel_next-arrow"
               fill="white"
               onClick={addCounter}
               style={{
                  // display: images.length === 1 ? 'none' : 'block',
                  visibility: images.length === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
                  transform: 'rotate(90deg)',
               }}
               alt="next"
            />
            <div
               className="carrousel_counter"
               style={{
                  // display: images.length === 1 ? 'none' : 'block',
                  visibility: images.length === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
               }}
            >
               {counter}
            </div>

            <div
               className="carrousel_dots-container"
               style={dotsContainerStyle}
            >
               {images.map((images, currentIndex) => {
                  return (
                     <div
                        className="carrousel_dots"
                        key={currentIndex}
                        style={dotsStyle}
                        onClick={() => goToSlide(currentIndex)} // renvoie au slide correspondant au point sur lequel on clique
                     >
                        •
                     </div>
                  )
               })}
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
