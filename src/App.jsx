import { useState } from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Calc from './Pages/Calc'
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import Contact from './Pages/Contact';
import Cancel from './Pages/Cancel';
import Success from './Pages/Success';
import Failure from './Pages/Failure';


function App() {

  return (
    <>
    <Router>

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='calculator' element={<Calc />} />
        <Route path='programs' element={<Programs />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/payment-success' element={<Success />} />
        <Route path='/payment-failure' element={<Failure />} />
        <Route path='/payment-cancel' element={<Cancel />} />


      </Routes>
    </Router>
    </>
   
  )
}

export default App
