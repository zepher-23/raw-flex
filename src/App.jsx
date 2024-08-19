import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Calc from './Pages/Calc'
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import Contact from './Pages/Contact';
function App() {

  return (
    <>
    <Router>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='calculator' element={<Calc />} />
        <Route path='programs' element={<Programs />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
    </>
   
  )
}

export default App
