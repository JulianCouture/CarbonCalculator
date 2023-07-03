import React, { useContext } from 'react'
import IngredientList from './IngredientList'
import { RecipeContext } from './App'
import RecipeEdit from './RecipeEdit'
import CounterHooks from './CounterHooks'
import HouseholdEmissions from './HouseholdEmissions'
import TonneCO2toObject from './TonneCO2toObject'

export default function Recipe(props) {
    const { handleRecipeDelete,handleRecipeSelect } = useContext(RecipeContext)
    const {
        id,
        name,
        type,
        cookTime,
        importance,
        difficulty,
        urgency,
        instructions,
        ingredients
    } = props
  return (
    <div className='recipe'>
        <div className='recipe__header'>
            <h3 className='recipe__title'>{name}</h3>
            <div>
                {/* <button 
                className='btn btn--primary mr-1'
                onClick={() => handleRecipeSelect(id)}
                >
                    Edit
                </button> */}
                <button 
                    className='btn btn--danger'
                    onClick={() => handleRecipeDelete(id)}
                >
                    Delete
                </button>
            </div>
        </div>
        {/* <div className='recipe__row'>
            <span className='recipe__label'>Cook Time</span>
            <span className='recipe__value'>{cookTime}</span>
        </div> */}
        {type == "HouseholdEmissions" && <HouseholdEmissions recipe={props}/>}
        {type == "CO2ToObject" && <TonneCO2toObject recipe={props}/>}

        {/* <div className='column__container'>
        <div className='recipe__row'>
            <span className='recipe__label'>Importance:</span>
            <span className='recipe__value'>{importance}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Urgency:</span>
            <span className='recipe__value'>{urgency}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Difficulty:</span>
            <span className='recipe__value'>{difficulty}</span>
        </div>
        <div className='recipe__row'>
            <span className='recipe__label'>Description:</span>
            <div className='recipe__value recipe__instructions recipe__value--indented'>{instructions}</div>
        </div>
        </div> */}
        {/* <div className='recipe__row'>
            <span className='recipe__label'>Ingredients</span>
            <div className='recipe__value recipe__value--indented'>
                <IngredientList ingredients={ingredients} />
            </div>
        </div>  */}
    </div>
    
  )
}
