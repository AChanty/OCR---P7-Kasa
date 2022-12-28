import './tag.css'

function Tag(props) {
   return (
      <ul className="tags_container">
         {props.tagsList.map((tags) => {
            // créé un <li> pour chaque tag de logement.tags
            return (
               <li key={tags} className="logement_tags">
                  {tags}
               </li>
            )
         })}
      </ul>
   )
}

export default Tag

// function Tag2(props) {
//    return { tags }
// }

// export default Tag2
