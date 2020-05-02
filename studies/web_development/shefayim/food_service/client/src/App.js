import React, { Component} from 'react';
import Navigation from './Navigation.js';
import Homepage from './Homepage.js';
import './App.css';


class App extends Component{
  render (){
    return(
      <div>
        <div>
          <Navigation></Navigation>
        </div>
        <div>
          <Homepage></Homepage>
        </div>
    </div>
    )
  }
}

export default App;
