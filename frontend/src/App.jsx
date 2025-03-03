import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />}>
          <Route path="*" element={<Recipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
