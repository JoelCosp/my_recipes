import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router";
import Recipe from '../models/Recipe';
import { Clock } from 'lucide-react';
import { ChefHat } from 'lucide-react';

const RecipePage = () => {  // Cambié el nombre del componente
  const params = useParams()

  const [recipeIngredients, setRecipeIngredients] = useState<any[]>([]);
  const [recipe, setRecipe] = useState<Recipe | null>(null); // Un solo objeto, no un array

  useEffect(() => {
    axios.get<any[]>(`http://localhost:5000/ingredients/${params.id}`)
      .then((response) => {
        setRecipeIngredients(response.data);
      })
      .catch(console.error);

    axios.get<Recipe>(`http://localhost:5000/recipe/${params.id}`) // Esperamos un solo objeto
      .then((response) => {
        setRecipe(response.data);
      })
      .catch(console.error);
  }, [params.id]); // Agregar dependencia para evitar problemas

  return (
    <section>
      {recipe ? ( // Asegurarnos de que recipe no sea null antes de acceder a sus datos
        <div className='max-w-[1240px] mx-auto px-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <img className='rounded-t-2xl rounded-b-2xl' src={recipe[0].img_url} alt="" />
            <div>
              <h3 className='font-bold uppercase text-2xl pb-5 mb-5 border-b-2 border-[#afafaf]'>{recipe[0].name}</h3>
              <p className='text-justify pb-5'>{recipe[0].description}</p>
              <p className='flex gap-2 pb-5'><ChefHat size={25} color={"#ffad4a"}/><b>NIVEL DE DIFICULTAD:</b> {recipe[0].difficulty}</p>
              <p className='flex gap-2 pb-5'><Clock size={25} color={"#ffad4a"}/><b>DURACION:</b> {recipe[0].time} min</p>
            </div>
          </div>
          <h4 className='font-bold uppercase text-xl py-5 border-b-1'>Ingredients:</h4>
          <ul className='pt-5'>
            {recipeIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
    </section>
  );
};

export default RecipePage;
