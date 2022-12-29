import './tag.css'
// import Logements from './../../assets/datas/logements.json'
// import { useParams } from 'react-router-dom'

function Tag(props) {
   return (
      <ul className="tags_container">
         {props.tags.map((tags) => {
            // créé un <li> pour chaque tag de logement.tags
            return (
               <li key={tags} className="logement_tag">
                  {tags}
               </li>
            )
         })}
      </ul>
   )
}

// function Tag(props) {
//    //    const { id } = useParams() // utilise l'id de l'url
//    //    const logement = Logements.find((element) => {
//    //       // cherche l'id de l'url dans logements.json pour faire correspondre la page au logement
//    //       return element.id === id
//    //    })
//    //    const { tags } = logement

//    return (
//       <ul className="tags_container">
//          {props.tags.map((tags) => {
//             // créé un <li> pour chaque tag de logement.tags
//             return (
//                <span key={tags} className="logement_tags">
//                   {tags}
//                </span>
//             )
//          })}
//       </ul>
//    )
// }

export default Tag

// function Tag2(props) {
//    return { tags }
// }

// export default Tag2
