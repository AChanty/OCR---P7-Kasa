import { useState } from 'react'
import './collapse.css'
import { ReactComponent as ArrowIcon } from './../../assets/icons/arrow.svg'

function Collapse({ headerName, content }) {
   const [isOpen, isClosed] = useState(false)

   return isOpen ? ( // si le composant est ouvert, affiche le contenu qui contient les informations relatives à l'onglet ouvert
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(false)}>
            <h3>{headerName}</h3>
            <ArrowIcon className="collapse_head-closed" fill="white" />
         </div>
         <div className="collapse_content">{content}</div>
      </div>
   ) : (
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(true)}>
            <h3>{headerName}</h3>
            <ArrowIcon className="collapse_head-opened" fill="white" />
         </div>

         {/* change la classe de collapse_content pour pouvoir gérer les animations */}
         <div className="collapse_content-closed"></div>
      </div>
   )
}

export default Collapse
