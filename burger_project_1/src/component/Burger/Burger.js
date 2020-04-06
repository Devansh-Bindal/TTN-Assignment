import React, { Fragment,Component, useReducer } from'react';
import './Burger.module.css';
import BurgerIngredient from '../Burger/Burgeringredient/Burgeringredient';
import '../Burger/Burgeringredient/Burgeringredient.module.css';
// import Aux from '../../hoc/Aux'
class Burger extends Component {
    render() {
    //   console.log("this.props="+this.props)
      const ingredients = this.props.ingredients;
        // console.log("this.props.ingredients"+this.props.ingredients)
      let transformIngredients = Object.keys(ingredients)
      .map((igkey) => {
        return [...Array(this.props.ingredients[igkey])]
        .map((_, index) => {
        //   console.log("igkey="+igkey);
          return <BurgerIngredient key={igkey + index} type={igkey} />
        })
      })
      .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
        //   console.log(transformIngredients);
        if(transformIngredients.length===0)
        {
            transformIngredients=<p>Please Add Ingredients</p>
        }



    //   let flag = true;
    //   for(let i in ingarray)
    //   {
    //     // console.log("this is ingarray length " , ingarray[i].length)
    //     if(ingarray[i].length!=0)
    //     {
    //       flag = false;
    //        break;
    //     }
    //   }
    //    if(flag)
    //    {
    //      ingarray = <p>please add ingredients</p>
    //    }
      return (
          <Fragment>
            <div className="burger">
                <BurgerIngredient type="bread-top" />
                 {transformIngredients}
                 <BurgerIngredient type="bread-bottom" />
            </div>
         </Fragment> 
      )
    }
   }
   export default Burger;







//  const Burger = (props) => {
    // let transformIngredients=Object.keys(props.ingredients)
    //  .map((igKey)=>{
    //    let newArr= [...Array(props.ingredients[igKey])];
    //      newArr.push(props.ingredients.igKey);
    //     // console.log(a.igKey);
    //     // newArr[a.igkey]=newArr[a.x];
    //     console.log(newArr);

        //  let arr=[...Array(props.ingredients[igKey])]
        //  console.log(newArr);
    //  .map((newArr,i)=>{
    //      console.log(newArr);
    //      console.log(i);
    //         //  return<BurgerIngredient key={newArr+i} type="igKey"/>;
    //  });
    //  })


    // .reduce((arr,el)=>{
    //     return arr.concat(el)
    // },[]);
    //     //   console.log(transformIngredients);
    //     if(transformIngredients.length===0)
    //     {
    //         transformIngredients=<p>Please Add Ingredients</p>
    //     }

//     return(
//         <Fragment>
//             <BurgerIngredient type="bread-top"/>
//             <BurgerIngredient type="meat"/>
//             <BurgerIngredient type="salad"/>
//             <BurgerIngredient type="bacon"/>
//             <BurgerIngredient type="meat"/>
//             <BurgerIngredient type="cheese"/>
//             {/* {transformIngredients} */}
//             <BurgerIngredient type="bread-bottom"/>
//         </Fragment>
//     );
//     }
// export default Burger;