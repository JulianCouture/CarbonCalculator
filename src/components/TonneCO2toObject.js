import React,{ useState, useEffect } from 'react'



export default function HouseholdEmissions({recipe}) {

    const [emissions, setEmissions] = useState(0);

    const handleChange = (event) => {
        setEmissions(event.target.value);
      };

    return (
        <div>
            <div className='houselabel'><b>House fuels</b></div>
        <div className="recipe-edit__details-grid">
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Electricity
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Electricity: {emissions/17980}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Natural Gas
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Natural Gas: {emissions/17980}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Propane
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Propane: {emissions/17980}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Residual Oil
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Residual Oil: {emissions/17980}</div>
            </div>
            {/* <label 
            htmlFor='cookTime'
            className='recipe-edit__label'>
            Cook Time
            </label>
            <input type="text" 
            name='cookTime' 
            id='cookTime'
            value={recipe.cookTime} 
            onChange={e => handleChange({ cookTime: e.target.value})}
            className='recipe-edit__input'/> */}
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Wood
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Wood: {emissions/17980}</div>
            </div>
            
            <div className='carfuels'><b>Car Fuels</b></div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Gasoline
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Gasoline: {emissions/17980}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Diesel
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Diesel: {emissions/17980}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Biodiesel
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input'
                />
                </div>
                <div>Biodiesel: {emissions/17980}</div>
            </div>
            {/* <label 
            htmlFor='urgency'
            className='recipe-edit__label'>
            Wood
            </label>
            <input 
            type="number" 
            min='1' 
            name='urgency' 
            id='urgency' 
            value={0}
            //onChange={e => handleChange({ urgency: parseInt(e.target.value) || ''})}
            className='recipe-edit__input'/>
            <label 
            htmlFor='difficulty'
            className='recipe-edit__label'>
            Gasoline
            </label>
            <input 
            type="number" 
            min='1' 
            name='difficulty' 
            id='difficulty' 
            value={0}
            //onChange={e => handleChange({ difficulty: parseInt(e.target.value) || ''})}
            className='recipe-edit__input'/>
            <label 
            htmlFor="instructions"
            className='recipe-edit__label'>
            Diesel
            </label>
            <input 
            type="number" 
            min='1' 
            name='difficulty' 
            id='difficulty' 
            value={0}
            //onChange={e => handleChange({ difficulty: parseInt(e.target.value) || ''})}
            className='recipe-edit__input'/> */}
        </div>

        </div>
    )
}