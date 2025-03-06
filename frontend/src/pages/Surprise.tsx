import React, { useEffect, useState } from 'react'
import axios from "axios";
import Recipe from '../models/Recipe';
import { Link } from "react-router-dom";

const Surprise = () => {
    const [surprise, setSurprise] = useState<Recipe[]>([]);

    useEffect(() => {
        axios.get<Recipe[]>('http://localhost:5000/random-recipe')
        .then((response) => {
            setSurprise(response.data);
        })
    }, [])
    
    const btn = () => {
      axios.get<Recipe[]>('http://localhost:5000/random-recipe')
      .then((response) => {
          setSurprise(response.data);
      })
    }

  return (
    <>
    <div className='max-w-[1240px] mx-auto px-5 flex justify-center items-center flex-col'>
      {
        surprise.map(( recipe ) => {
          return (
            <Link to={`/recipe/${recipe.id}`}>
              <div className='pb-5 rounded-b-2xl max-w-[500px] bg-[#f9f9f9] hover:cursor-pointer' key={recipe.id}>
                <img className='rounded-t-2xl pb-5' src={ recipe.img_url } alt="" />
                <div className='px-5'>
                  <div className='flex justify-between mb-3'>
                    <h3 className='text-lg font-bold'>{ recipe.name }</h3>
                    <p className='font-normal bg-[#ffad4a] px-2 rounded-2xl text-white font-semibold'>{ recipe.difficulty }</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      }
      <button onClick={btn} className='px-5 bg-[#4fa909] max-w-[500px] mt-5 w-full rounded-2xl py-3 text-white hover:cursor-pointer hover:bg-[#3b8700]'>GENERAR</button>
    </div>
    </>
  )
}

export default Surprise
