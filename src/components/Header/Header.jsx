import logo from './../../assets/img/LOGO.svg'
import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
   return (
      <header>
         <div className="header_logo-container">
            <NavLink to="/">
               <img className="header_logo" src={logo} alt="logo Kanap" />
            </NavLink>
         </div>
         <nav className="header_nav">
            <ul>
               <li>
                  <NavLink to="/" className="header_nav-link">
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/about" className="header_nav-link">
                     À propos
                  </NavLink>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header
