import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import  './BuildControl/BuildControl.module.css';
const controls=[
    {label:'salad' ,type:'salad'},
    {label:'meat' ,type:'meat'},
    {label:'bacon' ,type:'bacon'},
    {label:'cheese' ,type:'cheese'}
]
const BuildControls=()=>(
    <div className="BuildControls">
      {controls.map(ctrl=>(
          <BuildControl key={ctrl.label} label={ctrl.label}/>
      ))}
    </div>
);
export default BuildControls;
