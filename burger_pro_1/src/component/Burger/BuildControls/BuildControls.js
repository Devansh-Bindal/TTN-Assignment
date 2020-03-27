import React from 'react';
import BuildControl from './BuildControl/BuilControl';
import classes from './BuildControl/BuilControl.module.css';

const controls=[
    {label:'salad' ,type:'salad'},
    {label:'meat' ,type:'meat'},
    {label:'bacon' ,type:'bacon'},
    {label:'cheese' ,type:'cheese'}
]

const BuildControls=()=>(
    <div className={classes.BuildControls}>
      {controls.map(ctrl=>(
          <BuildControl key={ctrl.label} label={ctrl.label}/>
      ))}
    </div>
);
export default BuildControls;
