import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Vegan } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Plus } from 'lucide-react';
import { X } from 'lucide-react';

const Nav = () => {

  const [mobileRes, setMobileRes] = useState(false);

  const activate = () => {
    setMobileRes(!mobileRes);
    console.log(mobileRes);
  }

  return (
    <>
      <nav className='mb-5 hidden sm:block'>
          <div className='px-5 max-w-[1240px] mx-auto py-[30px] flex items-center justify-center flex-col'>
              <Link to="/">
                <Vegan size={60} color="#212121" />
              </Link>
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
      { 
        !mobileRes &&

        <div className='top-5 left-5 p-5 flex justify-between sm:hidden'>
          <div className='bg-[#ffad4a] p-2 rounded-md'>
            <Menu onClick={activate} color="white"/>
          </div>
          <div className='bg-[#ffad4a] p-2 rounded-md flex justify-center align-middle items-center'>
            <Link to="/create"><p className='text-white font-semibold'>AÑADIR</p></Link>
            <Plus size={20} color="white"/>
          </div>
        </div> 
      }
      { 
        mobileRes && 
        
        <nav className='sm:hidden relative'>
          <div className='p-5 absolute bg-white left-0 right-15 top-0 h-screen z-10'>
            <ul className='font-semibold text-[#212121]'>
              <li className='pb-2'><X onClick={activate} size={30} color="#212121" /></li>
              <li className='py-2'><Link to="/">RECETAS</Link></li>
              <li className='py-2'><Link to="/ingredients">INGREDIENTES</Link></li>
              <li className='py-2'><Link to="/surprise">SORPRESA</Link></li>
              <li className='py-2'><Link to="/create">CREAR</Link></li>
            </ul>
            <Vegan size={30} color="#212121" />
          </div>
          <div onClick={activate} className='absolute right-0 w-screen top-0 h-screen inset-0 bg-black/10 backdrop-blur-3xl'></div>
        </nav>
      }
    </>
  )
}

export default Nav
