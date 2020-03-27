import React, { Fragment, useReducer } from'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';
import Aux from '../../hoc/Aux'


const Burger = (props) => {
    let transformIngredients=Object.keys(props.ingredients)
    .map((igKey)=>{
        return[...Array(props.ingredients[igKey])]
    .map((_,i)=>{
            return<BurgerIngredient key={igKey+i} type="igKey"/>;
    });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
        //   console.log(transformIngredients);
        if(transformIngredients.length===0)
        {
            transformIngredients=<p>Please Add Ingredients</p>
        }
    return(
        <Fragment>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </Fragment>
    )
}
export default Burger;