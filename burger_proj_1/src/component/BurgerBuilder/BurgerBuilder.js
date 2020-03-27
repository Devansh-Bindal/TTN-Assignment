import React,{Component,Fragment} from 'react';
// import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
class BurgerBuilder extends Component
{   state={
        ingredients:{
            salad:1,
            bacon:1,
            meat:2,
            cheese:2
         }}
    render(){
        return(
            <Fragment>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Fragment>
                );
            }
}
export default BurgerBuilder; 
