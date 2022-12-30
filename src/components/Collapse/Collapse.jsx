import { useState } from 'react'
import './collapse.css'
import arrowIcon from './../../assets/icons/arrow.svg'

function Collapse({ headerName, content }) {
   const [isOpen, isClosed] = useState(true)

   return isOpen ? ( // si le composant est ouvert, affiche le contenu qui contient les informations relatives à l'onglet ouvert
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(false)}>
            <h3>{headerName}</h3>
            <img
               className="collapse_head-closed"
               //    style={{ transition: '.4s' }}
               src={arrowIcon}
               alt="icone flèche"
            />
         </div>
         <div className="collapse_content">{content}</div>
      </div>
   ) : (
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(true)}>
            <h3>{headerName}</h3>
            <img
               className="collapse_head-opened"
               //    style={{ transform: 'rotate(-180deg)', transition: '.4s' }}
               src={arrowIcon}
               alt="icone flèche"
            />
         </div>
         <div className="collapse_content-closed"></div>
      </div>
   )
}

export default Collapse
