import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navpage } from './Componant/NavPage/Navpage'
import { Hero } from './Componant/HeroPage/Hero'
import { About } from './Componant/AboutPage/About'
import Token from './Componant/TokenPage/Token'
import Footer from './Componant/FooterPage/Footer'
import Faq from './Componant/FAQPage/Faq'
import { Contract } from './Componant/Address/Contract'
import { Partner } from './Componant/PartnerPage/Partner'
import Roadmap from './Componant/RoadMap/Roadmap'
import Case from './Componant/UseCasePage/Case'
import { Presale } from './Componant/Presale/Presale'

function App() {


  return (
  <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navpage />
              <Hero />
              <About />
              <Case />
              <Token />
              <Roadmap />
              <Partner />
              <Contract />
              <Faq />
              <Footer />
            </>
          }
        />

        {/* Presale Page Only */}
        <Route
          path="/presale"
          element={
            <>
              <Navpage />
              <Presale />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
