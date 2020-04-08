import React,{Component} from 'react';
import './ContactData.css';
import Spinner from '../../UI/Spinner/Spinner';
import axios from '../../../axios-orders';
// import {Route} from 'react-router-dom';
class ContactData extends Component{
    state={
        name:'',
        email:'',
        contact:'',
        loading:false
    }
    orderHandler=()=>{
        event.preventDefault();
         this.setState({loading:true})
            const order={
                ingredients:this.props.ingredients,
                customer:{
                    name:'AJAX',
                    contact:'8755667651',
                    address:'New-Delhi',
                    email:'Ajax229@gmail.com'
                }
            }
            axios.post('/orders',order)
            .then(response=>{
                this.setState({loading:false})
                this.props.history.push('/');})
            .catch(error=>{this.setState({loading:false});});

    }
render(){
    let form=(
        <form className="form">
        <input className="input" type="text" name="name" placeholder="Enter Name"/>
        <input className="input" type="email" name="email" placeholder="Enter Email"/>
        <input className="input" type="value" name="number" placeholder="Enter Contact"/>
        <button className="Success" onClick={this.orderHandler}>ORDER</button>
    </form>
    );
    if(this.state.loading)
    {
        form=<Spinner/>
    }
    return(
        <div className='ContactData'>
        <h4>Enter Your Contact Data</h4>
       {form}
        </div>
    );
}
}
export default ContactData;