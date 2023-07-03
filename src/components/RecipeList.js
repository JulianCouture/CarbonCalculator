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
            <option value="CO2ToObject">CO2 To Object</option>
            <option value="HouseholdEmissions">Household Emissions</option>
        </select>
        <button onClick={() => {handleRecipeAdd(document.getElementById("types").value)}}>Submit</button>
      </div>
    </div>
    
  )
}
