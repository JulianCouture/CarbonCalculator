import React,{ useState, useEffect } from 'react'



export default function TonneCO2toObject({recipe}) {

    const [emissions, setEmissions] = useState(0);

    const handleChange = (event) => {
        setEmissions(event.target.value);
      };

    return (
        <div>
            <div className='houselabel'><b>TonneCO2 to Object</b></div> 
        <div className="recipe-edit__details-grid">
            <div className='recipe-edit__row'>
                <div><label 
                htmlFor='name' 
                className="recipe-edit__label_tonneco2">
                Tonne CO2 
                </label>
                <input 
                type="text" 
                name='name' 
                id='name'
                onChange={handleChange}
                className='recipe-edit__input_tonneco2'
                />
                </div>
            </div>
            <div className='recipe-edit__row'>
                
                <div>{Math.round(emissions*5973.750 * 100)/100}</div>
                <div>{Math.round(emissions*170.823 * 100)/100}</div>
                <div>{Math.round(emissions* 1.225 * 100)/100}</div>
                <div>{Math.round(emissions*.00032736 * 100)/100}</div>
                <div>{Math.round(emissions*.00025504 * 100)/100}</div>

            </div>
            <div className='recipe-edit__row'>
                
                <div>Cardboard Box </div>
                <div>Mid-Sized Car</div>
                <div>Airplane</div>
                <div>Metrodome</div>
                <div>Pentagon</div>
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