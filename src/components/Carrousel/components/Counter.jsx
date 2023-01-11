function Counter({ count, currentIndex }) {
   const counter = currentIndex + '/' + count

   // mise en place du compteur d'images
   return (
      <div
         className="carrousel_counter"
         style={{
            // display: images.length === 1 ? 'none' : 'block',
            visibility: count === 1 ? 'hidden' : 'visible', // n'affiche pas ce contenu s'il n'y a qu'une image
         }}
      >
         {counter}
      </div>
   )
}

export default Counter
