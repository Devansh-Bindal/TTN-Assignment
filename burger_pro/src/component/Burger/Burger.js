import React from'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';


const bar=(props)=>{

    return(
    <div classes={classes.Burger}>
        <BurgerIngredient type="burger-top"/>
            <BurgerIngredient type="burger-bottom"/>
        </div>
    )
}
export default bar;