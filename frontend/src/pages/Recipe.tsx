import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router";
import Recipe from '../models/Recipe';

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
    <div>
      {recipe ? ( // Asegurarnos de que recipe no sea null antes de acceder a sus datos
        <div>
          <h1>NOMBRE DE LA RECETA: {recipe[0].name}</h1>
          <p>{recipe.description}</p>
          <h2>Ingredients:</h2>
          <ul>
            {recipeIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading recipe...</p>
      )}
    </div>
  );
};

export default RecipePage;
