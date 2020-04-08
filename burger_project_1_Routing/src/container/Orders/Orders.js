import React,{Component} from 'react';
import Order from '../../component/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
class Orders extends Component
{
    state={
        orders:[],
        loadingg:true
    }
    componentDidMount=()=>{
        axios.get('/orders.json')
        .then(resp=>{
            // console.log(resp.data);
            const fetchedOrders=[];
            let res=resp.data;
            for(let key in res)
            {
                fetchedOrders.push({
                    ...res[key],
                id:key});
            }
            this.setState({loadingg:false,orders:fetchedOrders})})
         .catch(err=>{this.setState({loadingg:false})});
    }
    render()
    {
        return(
            <div>
                {/* <div>hi</div> */}
                {/* {this.state.orders.map(order=>( */}
                    <Order
                    
                    // key={order.id}
                    // ingredients={order.ingredients}
                    />
                {/* ))} */}
            </div>
        );
    }
}
export default WithErrorHandler(Orders,axios);