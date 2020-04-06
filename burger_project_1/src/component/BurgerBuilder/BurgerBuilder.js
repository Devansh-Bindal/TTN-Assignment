import React,{Component,Fragment} from 'react';
// import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';
import BuildControls from '../../component/Burger/BuildControls/BuildControls';
import Modal from '../UI/Modal/Modal';
import OrderSummary from '../Burger/OrderSummary/OrderSummary';
import axios from '../../../src/axios-orders';
import Spinner from '../../component/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
// const ingredient_price={
//     salad:7,
//     bacon:5,
//     meat:10,
//     cheese:13
// }
class BurgerBuilder extends Component
{   state={
        ingredients:null,
        // {
        //     salad:1,
        //     meat:2,
        //     bacon:1,
        //     cheese:2
        //  }
         purchasable:false,
         purchased:false,
         loading:false,
         error:false
        //  totalPrice:30
        }
        componentDidMount(){
            axios.get('https://react-my-burger-5a3c2.firebaseio.com/ingredients.json')
            .then(response=>{this.setState({ingredients:response.data})})
            .catch(error=>{this.setState({error:true})})
        }

        updatePurchaseState=(ingredients)=>{                        
            const sum=Object.keys(ingredients)
            .map((igKey)=>{
                return ingredients[igKey];
            })
            .reduce((sum,el)=>{
                return sum+el;
            },0);
            this.setState(
                {
                    purchasable:sum>0
                }
            );
        }

        purchasedHandler=()=>{
            this.setState({purchased:true});
        }
        purchasedCancelHandler=()=>{
            this.setState({purchased:false});
        }
        purchaseContinueHandler=()=>{
            this.setState({loading:true})
            const order={
                ingredients:this.state.ingredients,
                customer:{
                    name:'AJAX',
                    contact:'8755667651',
                    address:'New-Delhi',
                    email:'Ajax229@gmail.com'
                }
            }
            axios.post('/orders',order)
            .then(response=>{this.setState({loading:false,purchased:false});})
            .catch(error=>{this.setState({loading:false,purchased:false});});
            // alert("Continue Purchasing");
        }

         addIngredientHandler=(type)=>{
            //  alert("pressed");
            const oldCount=this.state.ingredients[type];
            const updatedCount=oldCount+1;
            const updatedIngredients={                      //state should be updated in an immutable way
                ...this.state.ingredients
            };
            // alert("hg");
            updatedIngredients[type]=updatedCount;
            // alert("hg");
            // const newPrice=this.state.totalPrice+ingredient_price(type);
            // alert(newPrice);
            this.setState({
                // totalPrice:newPrice,
                ingredients:updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients);
        }
         removeIngredientHandler=(type)=>{
            const oldCount=this.state.ingredients[type];
            if(oldCount<=0)
            {
                return;
            }
            const updatedCount=oldCount-1;
            const updatedIngredients={                      //state should be updated in an immutable way
                ...this.state.ingredients
            };
            updatedIngredients[type]=updatedCount;
            // const priceDeduction=ingredient_price(type);
            // const oldPrice=this.state.totalPrice;
            // const newPrice=oldPrice+priceDeduction;
            this.setState({
                // totalPrice:newPrice,
                ingredients:updatedIngredients
            });
            this.updatePurchaseState(updatedIngredients)
         }

    render(){
        let orderSummary=null;
        let burger=<Spinner/>
        if(this.state.ingredients)
        {
        burger=(
            <Fragment>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            //    price={this.state.totalPrice}
            ingredientsAdded={this.addIngredientHandler}
            ingredientsRemoved={this.removeIngredientHandler}
            purchasable={this.state.purchasable}
            ordered={this.purchasedHandler}
            />
            </Fragment>
        )
        orderSummary= <OrderSummary ingredients={this.state.ingredients}
        purchaseContinue={this.purchaseContinueHandler}
        purchaseCancel={this.purchasedCancelHandler}/>;
        }
        if(this.state.loading)
        {
            orderSummary=this.state.error?<p>Ingredients Cant Be loaded</p>:<Spinner/>;
        }
        return(
            <Fragment>
                <Modal show={this.state.purchased} modalClosed={this.purchasedCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Fragment>
                );
            }
}
export default withErrorHandler(BurgerBuilder,axios); 
