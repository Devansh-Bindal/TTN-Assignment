import React,{Component} from 'react';
import Child from '../src/Child';
class Parent extends Component{
    state={
            x:2
    }
  
    render(){
        return(
            <Child x={this.state.x} updateX={this.setState}/>
        );
    }
}
export default Parent;
