import React, { Component } from 'react';
import Layout from './component/Layout/Layout'
import BurgerBuilder from './component/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Layout> */}
           <BurgerBuilder />
        {/* </Layout> */}
      </div>       
    )
  }
}

export default App;
