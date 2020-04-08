import React from 'react';
import './Order.css';
const order=(props)=>{
    const ingredients=[];
    let ingr=props.ingredients;
    for(let index in ingr)
    {
        ingredients.push({
            name:index,
            amount:ingr[index]
        });
    }
    const ingredientOutput=ingredients.map(ig=>{return <span>{ig.name} ({ig.value})</span>});
    return(
        <div className="Order">
        <h3>Here is Order List</h3>
        <p>Ingredients: salad(0), meat(2), bacon(3), cheese(0)
            {/* {ingredientOutput} */}
            </p>
    </div>
    );
    };
export default order;