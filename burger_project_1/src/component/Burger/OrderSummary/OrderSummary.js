import React from 'react';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';
const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igKey=>{
    return <li>{igKey} : {props.ingredients[igKey]}</li>
    })

    return(
        <div className="Button">
        <h3>Order Summary</h3>
        <ul>{ingredientSummary}</ul>
        <p>Want to Checkout?</p>
        {/* <p><strong>Total Price: {props.price}</strong></p> */}
         <button  className="Danger" onClick={props.purchaseCancel} >CANCEL</button> 
         <button  className="Success" onClick={props.purchaseContinue} >Continue</button>
        </div>
    );
};
export default orderSummary;