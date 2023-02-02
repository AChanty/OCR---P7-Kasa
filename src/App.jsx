import React, { useState, useEffect } from 'react'
import {
   BrowserRouter,
   Routes,
   Route,
   Navigate,
   // ScrollRestoration,
} from 'react-router-dom'
import './index.css'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import NotFound from './pages/404/404.jsx'
import Logement from './pages/Logement/Logement.jsx'
import BackToTop from './assets/utils/BackToTop'

// création du contexte logements, permettant de ne fetch logement.json
// qu'une seule fois pour toute l'application
const LogementsContext = React.createContext(null)

export default function App() {
   // stockage des logements tirés du fetching de logements.json
   const [logements, setLogements] = useState([])
   const [isDataLoading, setDataLoading] = useState(true)
   const [errorState, setError] = useState(false)

   useEffect(() => {
      setDataLoading(true) // active l'état de barre de chargement

      fetch('/logements.json')
         .then((response) => {
            if (response.ok) {
               return response.json()
            }
            throw new Error('Erreur lors de la récupération de la réponse')
         })
         .then((data) => {
            setLogements(data) // passe les données de la réponse dans le state "logements"
            setDataLoading(false) // désactive l'état de barre de chargement
         })
         .catch((error) => {
            console.log(error)
            setError(true) // active l'état d'erreur
            setDataLoading(false) // désactive l'état de barre de chargement
         })
   }, [])

   return (
      <React.StrictMode>
         <LogementsContext.Provider
            value={{ logements, isDataLoading, errorState }}
         >
            <BrowserRouter>
               <BackToTop />
               <Header />
               <Routes>
                  <Route path="*" element={<Navigate to="/404" />}></Route>
                  <Route index element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/logement/:id" element={<Logement />}></Route>
                  <Route path="/404" element={<NotFound />}></Route>
               </Routes>
               <Footer />
            </BrowserRouter>
         </LogementsContext.Provider>
      </React.StrictMode>
   )
}

// export du contexte pour pouvoir l'utiliser dans les pages Home et Logement
export { LogementsContext }
