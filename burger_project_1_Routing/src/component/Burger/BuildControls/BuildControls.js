import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import  '../BuildControls/BuildControls.module.css';
const controls=[
    {label:'salad' ,type:'salad'},
    {label:'meat' ,type:'meat'},
    {label:'bacon' ,type:'bacon'},
    {label:'cheese' ,type:'cheese'}
]
const BuildControls=(props)=>(
    <div className="BuildControls">
        {/* <p>Current Price = <strong>{props.price}</strong></p> */}
      {controls.map(ctrl=>(
          <BuildControl
           key={ctrl.label} 
          label={ctrl.label} 
          added={()=>props.ingredientsAdded(ctrl.type)}
          removed={()=>props.ingredientsRemoved(ctrl.type)}
          />
      ))}
      <button
       className="OrderButton"
       disabled={!props.purchasable}    //OrderSummary
       onClick={props.ordered}
       >ORDER NOW</button>
    </div>
);
export default BuildControls;
