import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Layout from './component/Layout/Layout'
import BurgerBuilder from './component/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import ContactData from '../src/component/BurgerBuilder/ContactData/ContactData'; 
import Orders from '../src/container/Orders/Orders'; 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
        <Route path="/checkout" exact component={Checkout}/>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/orders" exact component={Orders}/>
        <Route path='/checkout/contact-info' component={ContactData}/>
        </Switch>
           </Layout>
      </div>       
    )
  }
}

export default App;
