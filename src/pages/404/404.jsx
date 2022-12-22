import { Link } from 'react-router-dom'
import './404.css'

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </p>
    </div>
  )
}

export default NotFound
