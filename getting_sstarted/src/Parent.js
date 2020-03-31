import React,{Component} from 'react';
import Child from '../src/Child';
class Parent extends Component{
    state={
            x:2
    }
    render(){
        return(
            <div>
            Value of x is : {this.state.x}
            <Child x={this.state.x} updateX={(obj) => {this.setState(obj);}}/>
            </div>
        );
    }
}
export default Parent;
