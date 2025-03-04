import React from 'react'
import { Link } from "react-router-dom";
import { Vegan } from 'lucide-react';

const Nav = () => {
  return (
    <nav className='mb-5'>
        <div className='px-5 max-w-[1240px] mx-auto py-[30px] flex items-center justify-center flex-col'>
            <Vegan size={60} color="black" />
            <div className='border-b-1 border-[#c5c5c5] w-full flex items-center justify-center'>
              <ul className='flex text-[#212121] font-semibold'>
                  <li className='px-4 py-[30px] hover:text-[#ffad4a]'><Link to="/">RECETAS</Link></li>
                  <li className='px-4 py-[30px] hover:text-[#ffad4a]'><Link to="/ingredients">INGREDIENTES</Link></li>
                  <li className='px-4 py-[30px] hover:text-[#ffad4a]'><Link to="/surprise">SORPRESA</Link></li>
                  <li className='px-4 py-[30px] hover:text-[#ffad4a]'><Link to="/create">CREAR</Link></li>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav
