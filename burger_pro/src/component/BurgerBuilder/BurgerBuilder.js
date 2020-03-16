import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';

class BurgerBuilder extends Component{

    render(){
        return(
            <Aux>
                <Burger></Burger>
               <div>Burger</div>
            </Aux>

        );
    }
}



export default BurgerBuilder; 