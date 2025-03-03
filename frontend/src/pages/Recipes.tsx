import React, { useEffect, useState } from 'react'
import axios from "axios";

import Recipe from '../models/Recipe'

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    axios.get<Recipe[]>('http://localhost:5000/recipes')
    .then((response) => {
      setRecipes(response.data);
      console.log("DATA RECIBIDA: " + recipes);
    })
  }, [])

  return (
    <div className='max-w-[1240px] mx-auto px-5'>
      {
        recipes.map(( recipe ) => {
          return (
            <div key={recipe.id}>
              <img className='rounded-t-2xl' src={ recipe.img_url } alt="" />
              <h3>{ recipe.name } <span>{ recipe.difficulty }</span></h3>
              <p>{ recipe.description }</p>
            </div>
          );
        })
      }
    </div>
  )
}

export default Recipes
