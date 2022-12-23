import './banner.css'

function Banner(props) {
   let text = props.text
   let background = props.background
   return (
      <div className="banner_container">
         <div className="banner_text-container">
            <img src={background} alt="background" />
            <h2 className="banner_text">{text}</h2>
         </div>
      </div>
   )
}

export default Banner
