import React, { useEffect, useState } from 'react'
import axios from "axios";

import Ingredient from '../models/Ingredient'

const Ingredients = () => {
  
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  
  useEffect(() => {
    axios.get<Ingredient[]>('http://localhost:5000/ingredients')
    .then((response) => {
      setIngredients(response.data);
    })
  }, [])

  return (
    <section>
      <div className='max-w-[1240px] mx-auto px-5'>
        <table className='w-full text-center'>
          <thead>
            <tr className='bg-[#efefef]'>
              <th className='py-5'>ID</th>
              <th className='py-5'>IMAGES</th>
              <th className='py-5'>NAME</th>
              <th className='py-5'>CALORIES</th>
            </tr>
          </thead>
          <tbody>
            {
              ingredients.map((ingredient) => {
                return (
                  <tr key={ ingredient.id } className={ `${ ingredient.id % 2 == 0 ? "bg-[#efefef]" : "" }` }>
                    <td className='py-5'>{ ingredient.id }</td>
                    <td className='flex items-center justify-center py-5'><img className='max-w-[60px]' src={ ingredient.img_url } alt={ ingredient.name } /></td>
                    <td className='py-5'>{ ingredient.name }</td>
                    <td className='py-5'>{ ingredient.calories }</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Ingredients
