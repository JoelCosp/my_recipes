import React from 'react'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className='bg-[#262626] mb-5'>
        <div className='px-5 max-w-[1240px] mx-auto py-[30px]'>
            <ul className='flex justify-between text-white font-semibold'>
                <li><Link to="/">RECETAS</Link></li>
                <li><Link to="/ingredients">INGREDIENTES</Link></li>
                <li><Link to="/surprise">SORPRESA</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav
