import logo from './../../assets/img/LOGO.svg'
import './footer.css'

function Footer() {
   return (
      <footer>
         <div className="footer_container">
            <div className="footer_logo-container">
               <img src={logo} alt="logo Kanap" />
            </div>
            <div className="footer_description">
               <p>© 2020 Kasa. All rights reserved</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
