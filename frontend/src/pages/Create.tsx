import React, { useEffect, useState } from 'react';
import axios from "axios";
import Category from '../models/Category';
import Ingredient from '../models/Ingredient';

const Create = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [newRecipe, setNewRecipe] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        time: '',
        difficulty: '',
        img_url: '',
        category_id: '',
        ingredients: [] as number[]
      });

    useEffect(() => {
        axios.get<Category[]>('http://localhost:5000/categories')
        .then((response) => {
            setCategories(response.data);
        })
        .catch(console.error);

        axios.get<Ingredient[]>('http://localhost:5000/ingredients')
        .then((response) => {
            setIngredients(response.data);
        })
        .catch(console.error);
    }, [])

    const handleIngredientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIngredients = Array.from(e.target.selectedOptions, option => Number(option.value));        
        setFormData(prev => ({
            ...prev,
            ingredients: selectedIngredients
        }));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/create-recipe', formData);
          console.log('Form data submitted successfully:', response.data);
        } catch (error) {
          console.error('Error submitting form data:', error);
        }
      };


  return (
    <section>
        <div className='max-w-[1240px] mx-auto px-5 flex justify-center'>
            <div className=''>
                <form className='grid grid-cols-1 sm:grid-cols-2 gap-5' onSubmit={handleSubmit}>
                    <div>
                        <h2 className='font-bold text-2xl pb-5 text-[#212121]'>NUEVA RECETA</h2>
                        <input className='w-full px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' name="name" type="text" placeholder='Nombre' onChange={handleChange}/>
                        <input className='w-full px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' name="description" type="text" placeholder='Descripción' onChange={handleChange}/>
                        <input className='w-full px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' name="time" type="number" min="0" placeholder='Duración' onChange={handleChange}/>
                        <input className='w-full px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' name="img_url" type="url" placeholder='Url' onChange={handleChange}/>
                        <select className='w-full px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' name="category_id" onChange={handleChange}>
                            {
                                categories.map((category) => {
                                    return (
                                        <option key={category.id} className='w-[400px] px-5 py-5 mb-5 rounded-2xl outline-hidden bg-[#dadada]' value={category.id}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='flex mb-5'>
                            <label className='mr-5 hover:cursor-pointer'><input className='mr-1 hover:cursor-pointer' type="radio" name="difficulty" value="Baja" onChange={handleChange}/>Baja</label>
                            <label className='mr-5 hover:cursor-pointer'><input className='mr-1 hover:cursor-pointer' type="radio" name="difficulty" value="Media" onChange={handleChange}/>Media</label>
                            <label className='mr-5 hover:cursor-pointer'><input className='mr-1 hover:cursor-pointer' type="radio" name="difficulty" value="Alta" onChange={handleChange}/>Alta</label>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl text-[#212121] font-bold mb-5'>SELECCIONA LOS INGREDIENTES: </h3>
                        <select id="ingredients" className='outline-hidden' name="ingredients" onChange={handleIngredientChange} multiple>
                            {
                                ingredients.map((ingredient) => {
                                    return (
                                        <option key={ingredient.id} className='w-[400px] px-5 py-5 mb-5 outline-hidden' value={ingredient.id}>{ingredient.id}. {ingredient.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className='flex justify-center gap-5 font-semibold'>
                        <button className='px-5 w-full rounded-2xl py-3 border-1 border-[red] text-red-600 hover:cursor-pointer hover:bg-red-600 hover:text-white'>CANCELAR</button>
                        <button className='px-5 bg-[#4fa909] w-full rounded-2xl py-3 text-white hover:cursor-pointer hover:bg-[#3b8700]'>CREAR</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Create
