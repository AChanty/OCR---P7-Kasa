import { useState } from 'react'
import './collapse.css'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg'

function Collapse({ headerName, content }) {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="collapse_item">
         <button className="collapse_head" onClick={() => setIsOpen(!isOpen)}>
            <h3>{headerName}</h3>
            <ArrowIcon
               className={
                  // modification de la classe par rapport à l'état de "isOpen"
                  isOpen ? 'collapse_head-closed' : 'collapse_head-opened'
               }
               fill="white"
            />
         </button>
         <div
            className={
               // modification de la classe par rapport à l'état de "isOpen"
               isOpen ? 'collapse_content' : 'collapse_content-closed'
            }
         >
            {/* affichage de {content} seulement si isOpen = true */}
            {isOpen && content}
         </div>
      </div>
   )
}

export default Collapse
