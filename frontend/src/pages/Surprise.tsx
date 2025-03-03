import React, { useEffect, useState } from 'react'
import axios from "axios";
import Recipe from '../models/Recipe';

const Surprise = () => {
    const [surprise, setSurprise] = useState<Recipe[]>([]);

    useEffect(() => {
        axios.get<Recipe[]>('http://localhost:5000/random-recipe')
        .then((response) => {
            setSurprise(response.data);
        })
    }, [])
  return (
    <div className='max-w-[1240px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
      {
        surprise.map(( recipe ) => {
          return (
            <div className='pb-5 rounded-b-2xl bg-[#f9f9f9] hover:cursor-pointer' key={recipe.id}>
              <img className='rounded-t-2xl pb-5' src={ recipe.img_url } alt="" />
              <div className='px-5'>
                <div className='flex justify-between mb-3'>
                  <h3 className='text-lg font-bold'>{ recipe.name }</h3>
                  <p className='font-normal bg-[#ffad4a] px-2 rounded-2xl text-white font-semibold'>{ recipe.difficulty }</p>
                </div>
                <p>{ recipe.description }</p>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Surprise
