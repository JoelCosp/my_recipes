import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import Recipe from '../models/Recipe'

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get<Recipe[]>('http://localhost:5000/recipes')
    .then((response) => {
      setRecipes(response.data);
    })
  }, [])

  return (
    <div className='max-w-[1240px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-3 gap-5'>
      {
        recipes.map(( recipe ) => {
          return (
            <Link to={`/recipe/${recipe.id}`}>
              <div className='pb-5 rounded-b-2xl bg-[#f9f9f9] hover:cursor-pointer' key={recipe.id}>
                <img className='rounded-t-2xl pb-5' src={ recipe.img_url } alt="" />
                <div className='px-5'>
                  <div className='flex flex-wrap justify-between md:mb-3'>
                    <h3 className='text-lg font-bold'>{ recipe.name }</h3>
                    <p className='font-normal bg-[#ffad4a] px-2 rounded-2xl text-white font-semibold'>{ recipe.difficulty }</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      }
    </div>
  )
}

export default Recipes
