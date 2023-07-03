import React,{ useState, useEffect } from 'react'



export default function HouseholdEmissions({recipe}) {

    const [emissions, setEmissions] = useState(0);
    const [naturalgas, setNaturalGas] = useState(0);
    const [propane, setPropane] = useState(0);
    const [residualoil, setResidualOil] = useState(0);
    const [gasoline, setGasoline] = useState(0);
    const [wood, setWood] = useState(0);
    const [diesel, setDiesel] = useState(0);
    const [biodiesel, setBiodiesel] = useState(0);

    const handleEmissionsChange = (event) => {
        setEmissions(event.target.value);
      };

    const handleNaturalGasChange = (event) => {
    setNaturalGas(event.target.value);
    };

    const handlePropaneChange = (event) => {
        setPropane(event.target.value);
      };

    const handleResidualOilChange = (event) => {
        setResidualOil(event.target.value);
    };
    const handleWoodChange = (event) => {
        setWood(event.target.value);
    };

    const handleGasolineChange = (event) => {
        setGasoline(event.target.value);
    };
    const handleDieselChange = (event) => {
        setDiesel(event.target.value);
    };
    const handleBiodieselChange = (event) => {
        setBiodiesel(event.target.value);
    };
    


    return (
        <div>
            <div className='houselabel'><b>House fuels</b><b className='tonneCO2'>Tonne CO2</b></div>
        <div className="recipe-edit__details-grid">
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Electricity (kWh)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleEmissionsChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{emissions/17980}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Natural Gas (SCF)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleNaturalGasChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{naturalgas/5532}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Propane (Gallons)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handlePropaneChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{propane/5235325}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Residual Oil (Gallons)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleResidualOilChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{residualoil/145125}</div>
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
                Wood (ft3)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleWoodChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{wood/59325}</div>
            </div>
            
            <div className='carfuels'><b>Car Fuels</b></div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Gasoline (Gallons)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleGasolineChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{gasoline/4}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Diesel (Gallons)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleDieselChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{diesel/413}</div>
            </div>
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label">
                Biodiesel (Gallons)
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleBiodieselChange}
                className='recipe-edit__input'
                />
                </div>
                <div>{biodiesel/1414}</div>
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