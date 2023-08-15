import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({recipes}) {
  const { handleRecipeAdd } = useContext(RecipeContext)

  return (
  <div className="recipe-list">
      <div>
      {recipes.map(recipe => {
          return (
              <Recipe key={recipe.id} {...recipe}/>
          )
      })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <select id="types">
            <option value="Household Emissions">Household Emissions</option>
            <option value="CO2 To Object">CO2 To Object</option>
            <option value="CO2 To Object">Tonne CO2 to Quantity of Fuel Type</option>
        </select>
        <button className="btn btn--primary" onClick={() => {handleRecipeAdd(document.getElementById("types").value)}}>Add Calculator</button>
      </div>
    </div>
    
  )
}
