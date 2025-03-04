import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipes from './pages/Recipes';
import Ingredients from './pages/Ingredients';
import Surprise from './pages/Surprise';
import Recipe from './pages/Recipe';
import Create from './pages/Create';
import './App.css'

import Nav from './components/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/surprise" element={<Surprise />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
