import { useState } from 'react'
import './collapse.css'
import arrowIcon from './../../assets/icons/arrow.svg'

function Collapse({ headerName, content }) {
   const [isOpen, isClosed] = useState(true)

   return isOpen ? ( // si le composant est ouvert, affiche ce contenu qui contient les informations relatives à l'onglet ouvert
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(false)}>
            <h3>{headerName}</h3>
            <img
               style={{ transition: '.4s' }}
               src={arrowIcon}
               alt="icone flèche"
            />
         </div>
         <div className="collapse_content">
            <p>{content}</p>
         </div>
      </div>
   ) : (
      <div className="collapse_item">
         <div className="collapse_head" onClick={() => isClosed(true)}>
            <h3>{headerName}</h3>
            <img
               style={{ transform: 'rotate(-180deg)', transition: '.4s' }}
               src={arrowIcon}
               alt="icone flèche"
            />
         </div>
      </div>
   )
}

// function Collapse({ headerName, description, equipments }) {
//    const [isOpen, isClosed] = useState(true)

//    return isOpen ? ( // si le composant est ouvert, affiche ce contenu qui contient les informations relatives à l'onglet ouvert
//       <div className="collapse_item">
//          <div className="collapse_head" onClick={() => isClosed(false)}>
//             <h3>{headerName}</h3>
//             <img
//                style={{ transition: '.4s' }}
//                src={arrowIcon}
//                alt="icone flèche"
//             />
//          </div>
//          <div className="collapse_content">
//             {/* <p>{[description, equipments]}</p> */}
//             <p>
//                {[
//                   description,
//                   equipments,
//                   //   <ul>
//                   //      {equipments.map((equipments) => {
//                   //         return (
//                   //            <li key={equipments} className="equipements_item">
//                   //               {equipments}
//                   //            </li>
//                   //         )
//                   //      })}
//                   //   </ul>,
//                ]}
//             </p>
//          </div>
//       </div>
//    ) : (
//       <div className="collapse_item">
//          <div className="collapse_head" onClick={() => isClosed(true)}>
//             <h3>{headerName}</h3>
//             <img
//                style={{ transform: 'rotate(-180deg)', transition: '.4s' }}
//                src={arrowIcon}
//                alt="icone flèche"
//             />
//          </div>
//       </div>
//    )
// }

export default Collapse
