import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {

  state =
    {
      fruit: '',
      fruits: [],
      blank:true,
      id:null
    }
   

  changeHandler = (event) => {
    let fruit = event.target.value;
    this.setState({
      fruit:fruit
    })
  }

  submitHandler=(event)=>{
    event.preventDefault();
    let fruits = [...this.state.fruits];
    let {fruit} = this.state;
    fruits.push({
      fruitName:fruit.split('-')[0],
      fruitValue:fruit.split('-')[1],
    })
    this.setState({
      fruit:'',
      fruits:fruits,
      blank:false,
    })

  }
  deleteHandler=(deleteIndex)=>{
      let fruits=this.state.fruits;
      fruits.splice(deleteIndex,1);
      this.setState({
        fruits:fruits
      });
  }
 
editHandler = ((index) => {
  this.setState((prevState) => {
  const fruitsItem = prevState.fruits[index];
  return { fruit: `${fruitsItem.fruitName}-${fruitsItem.fruitValue}`,
  editMode:true,
  id:index }})})

  
  render() {
    let list=
    (
    <ul>
      {
        this.state.fruits.map((fruit,index)=>
        {
        return <Person
         
          fruitName={fruit.fruitName}
          fruitValue={fruit.fruitValue}
          delete={()=>this.deleteHandler(index)}
          edit={()=>this.editHandler()}
        ></Person>
        })
      }
    </ul>
    );
    return (
      <div className="App">
        <h1>Enter Fruits Item</h1>
        <form className='form-list'>
          <label>Name </label>
          <input type="text"
           onChange={this.changeHandler}
           placeholder="Enter Fruit with Fruit Cost"
           ></input>
          <button
           onClick={this.submitHandler}
          >Submit</button>
            {/* <input type="reset" defaultValue="Reset" />  */}
        </form>
        {list}
      </div>
    );
  }
}
export default App;
