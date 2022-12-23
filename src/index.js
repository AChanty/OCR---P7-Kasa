import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import NotFound from './pages/404/404.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="*" element={<NotFound />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
         </Routes>
         <Footer />
      </BrowserRouter>
   </React.StrictMode>
)

reportWebVitals()
