// import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// import {
//    BrowserRouter,
//    Routes,
//    Route,
//    Navigate,
//    // ScrollRestoration,
// } from 'react-router-dom'
// import './index.css'

// import Header from './components/Header/Header.jsx'
// import Footer from './components/Footer/Footer.jsx'
// import Home from './pages/Home/Home.jsx'
// import About from './pages/About/About.jsx'
// import NotFound from './pages/404/404.jsx'
// import Logement from './pages/Logement/Logement.jsx'
// import ScrollToTop from './assets/utils/ScrollToTop'
import App from './App.jsx'

// const router = createBrowserRouter(
//    createRoutesFromElements(
//       <Route path="/" element={<Home />}>
//          <Route path="about" element={<About />} />
//       </Route>
//    )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//    <React.StrictMode>
//       <RouterProvider router={router} />
//    </React.StrictMode>
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

reportWebVitals()
