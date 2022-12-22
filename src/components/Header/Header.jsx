import logo from './../../assets/LOGO.svg'
import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <div className="header_logo-container">
        <img className="header_logo" src={logo} alt="logo Kanap" />
      </div>
      <div>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
