import './banner.css'

function Banner(props) {
   return (
      <div className="banner_container">
         <div className="banner_text-container">
            <img src={props.background} alt="background" />
            <h2 className="banner_text">{props.text}</h2>
         </div>
      </div>
   )
}

export default Banner
