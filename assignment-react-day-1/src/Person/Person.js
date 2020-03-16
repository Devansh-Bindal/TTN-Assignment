import React from 'react';
import './Person.css'
const person=(props)=>
{   
    console.log('pros'+props)
    return(
    <div className="Person-List">
    <li>{props.fruitName} -{props.fruitValue}</li>
    <button onClick={props.edit}>Edit Quantity</button>
    <button onClick={props.delete}>Delete</button>
    {/* <li>{props.fruitValue}</li> */}
    
    </div>
    );
}
export default person;