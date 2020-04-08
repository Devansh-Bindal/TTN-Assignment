import React from 'react';
import Burger from '../../Burger/Burger';
import './CheckoutSummary.css';
const checkoutSummary=(props)=>{
    return(
        <div className="CheckoutSummary">
        <h1>We Hope It tastes well</h1>
        <div style={{width:'300px',height:'300px',margin:'auto'}}>
        <Burger ingredients={props.ingredients}/>
        </div>
        <button onClick={props.checkoutCancelled} className="Danger" >Cancel</button>
        <button onClick={props.checkoutContinued} className="Success">Continue</button>
        </div>
    );
}
export default checkoutSummary;