import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Downloads from './components/Downloads'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route  path='/downloads' element={<Downloads />}/>
      </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
