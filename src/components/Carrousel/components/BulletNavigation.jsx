function BulletsNavigation({ count, currentIndex, goToSlide }) {
   // mise en place de la navigation par points dans le carrousel
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
      visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
   }
   const images = Array.from(Array(count).keys())
   return (
      <div className="carrousel_dots-container" style={dotsContainerStyle}>
         <div
            className="carrousel_dots"
            key={currentIndex.toString()}
            style={dotsStyle}
         >
            <ul style={{ display: 'flex', gap: '5px' }}>
               {images.map((_, index) => (
                  <li
                     onClick={() => goToSlide(index)}
                     key={index}
                     className={
                        // ajoute une classe à la bullet active pour pouvoir y ajouter du css
                        index === currentIndex - 1 ? 'active-bullet' : ''
                     }
                  >
                     •
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default BulletsNavigation
