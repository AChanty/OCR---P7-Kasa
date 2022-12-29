import { useState } from 'react'
import './collapse.css'
import arrowIcon from './../../assets/icons/arrow.svg'

function Collapse({ headerName, description, equipments }) {
   const [isOpen, isClosed] = useState(true)
   return isOpen ? (
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(false)}>
            <h3>{headerName}</h3>
            <img
               style={{ transition: '.3s' }}
               src={arrowIcon}
               alt="icone flèche"
            />
         </div>
         <div className="collapse_content">
            <p>{[description, equipments]}</p>
         </div>
      </div>
   ) : (
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(true)}>
            <h3>{headerName}</h3>
            <img
               style={{ transform: 'rotate(-180deg)', transition: '.3s' }}
               src={arrowIcon}
               alt="icone flèche"
            />
         </div>
      </div>
   )
}

export default Collapse
