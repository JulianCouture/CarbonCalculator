import Counter from './Counter'
import CounterHooks from './CounterHooks'
import React,{ useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'
import {v4 as uuidv4} from 'uuid'
import RecipeEdit from './RecipeEdit'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

export const ThemeContext = React.createContext()

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  


  useEffect(() => {
      const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
      if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
    },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  },[recipes])


  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd(type) {
    const newRecipe = {
      id: uuidv4(),
      name: 'Carbon Calculator',
      type: type,
      importance: null,
      urgency: null,
      difficulty: null,
      cookTime: '',
      instructions: '',
      ingredients: [
        { id: uuidv4(), name: '', amount: ''}
      ]
    }
  
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id,recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeDelete(id) {
    if(selectedRecipeId != null && selectedRecipeId === id) setSelectedRecipeId(undefined)
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
        <div className='home'> 
        {/* <div>Sort by:</div>
        <button onClick={() => setRecipes([...(recipes.sort((x,y)=>(x.importance <= y.importance ? 1 : -1)))])}>Importance</button>
        <button onClick={() => setRecipes([...(recipes.sort((x,y)=>(x.urgency <= y.urgency ? 1 : -1)))])}>Urgency</button>
        <button onClick={() => setRecipes([...(recipes.sort((x,y)=>(x.difficulty <= y.difficulty ? 1 : -1)))])}>Difficulty</button>
        <button onClick={() => setRecipes([...(recipes.sort((x,y)=>(x.importance + x.urgency + x.difficulty <= y.importance + y.urgency + y.difficulty ? 1 : -1)))])}>Average</button> */}
        <RecipeList recipes={recipes} />
        {/* {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />} */}
        </div>  
    </RecipeContext.Provider>
  ); 

  
  
}





const sampleRecipes = [
  // {
  //   id: 1,
  //   name: 'Plain Chicken',
  //   urgency: 3,
  //   cookTime: '1:45',
  //   instructions: "1. Put salt on Chicken\n2. Put chicken in oven\n3. Eat chicken",
  //   ingredients: [
  //     {
  //       id: 1,
  //       name: 'Chicken',
  //       amount: '2 Pounds'
  //     },
  //     {
  //       id: 2,
  //       name: 'Salt',
  //       amount: '1Tbs'
  //     }
  //   ]

    
  // },
  // {
  //   id: 2,
  //   name: 'Plain Pork',
  //   urgency: 5,
  //   cookTime: '0:45',
  //   instructions: "1. Put paprika on Pork\n2. Put pork in oven\n3. Eat pork",
  //   ingredients: [
  //     {
  //       id: 1,
  //       name: 'Pork',
  //       amount: '3 Pounds'
  //     },
  //     {
  //       id: 2,
  //       name: 'Paprika',
  //       amount: '2Tbs'
  //     }
  //   ]

    
  // }
]

export default App;
