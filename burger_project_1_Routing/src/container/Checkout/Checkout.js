import React,{Component} from 'react';
import CheckoutSummary from '../../component/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component
{
    state={
        ingredients:{
            salad:1,
            bacon:1,
            meat:2,
            cheese:2
        }
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-info')

    }
    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancelled={this.checkoutCancelHandler}
                checkoutContinued={this.checkoutContinueHandler}
                />
            </div>
        );
    }
} 
export default Checkout;