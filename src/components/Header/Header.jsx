import logo from './../../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
   return (
      <header>
         <div className="header_logo-container">
            <NavLink to="/">
               <img className="header_logo" src={logo} alt="logo Kanap" />
            </NavLink>
         </div>
         <div className="menu_links">
            <ul>
               <li>
                  <NavLink to="/">Accueil</NavLink>
               </li>
               <li>
                  <NavLink to="/about">À propos</NavLink>
               </li>
            </ul>
         </div>
      </header>
   )
}

export default Header
