import './tags.css'

function Tags({ tags }) {
   return (
      <ul className="tags_container">
         {tags.map((tags) => {
            // créé un <li> pour chaque tag de logement.tags
            return (
               <li key={tags} className="tag_item">
                  {tags}
               </li>
            )
         })}
      </ul>
   )
}

export default Tags
