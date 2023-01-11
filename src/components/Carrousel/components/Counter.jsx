function Counter({ count, currentIndex }) {
   // mise en place du compteur d'images

   const counter = currentIndex + '/' + count

   // n'affiche pas le compteur s'il n'y a qu'une image
   if (count === 1) {
      return null
   } else {
      return <div className="carrousel_counter">{counter}</div>
   }
}

export default Counter
