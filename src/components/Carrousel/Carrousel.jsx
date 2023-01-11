import './carrousel.css'
import { useState } from 'react'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg'
import BulletsNavigation from './components/BulletNavigation'
import ArrowsNavigation from './components/ArrowsNavigation'
import Counter from './components/Counter'

function Carrousel({ images }) {
   let [currentIndex, setIndex] = useState(1)
   const addCounter = () => {
      // si l'image affichée est la dernière du tableau, affiche la première lors du clic
      // sinon affiche l'image suivante du tableau
      currentIndex === images.length ? setIndex(1) : setIndex(currentIndex + 1)
   }
   const removeCounter = () => {
      // si l'image affichée est la première du tableau, affiche la première lors du clic
      // sinon affiche l'image précédente du tableau
      currentIndex === 1 ? setIndex(images.length) : setIndex(currentIndex - 1)
   }

   // const counter = currentIndex + '/' + images.length

   const carrouselStyle = {
      backgroundImage: `url(${images[currentIndex - 1]})`, // affiche l'index correspondant depuis le tableau des images
      backgroundSize: 'cover',
      backgroundPosition: 'bottom',
   }

   const goToSlide = (currentIndex) => {
      setIndex(currentIndex + 1) // permet de se rendre dans un index bien précis du tableau des images
   }

   return (
      <div>
         <div className="carrousel_content" style={carrouselStyle}>
            <Counter count={images.length} currentIndex={currentIndex} />
            <ArrowsNavigation
               count={images.length}
               removeCounter={removeCounter}
               addCounter={addCounter}
               position={'left'}
            />
            <ArrowsNavigation
               count={images.length}
               removeCounter={removeCounter}
               addCounter={addCounter}
               position={'right'}
            />
            <BulletsNavigation
               count={images.length}
               currentIndex={currentIndex}
               goToSlide={goToSlide}
            />
         </div>
      </div>
   )
}

export default Carrousel
