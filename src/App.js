import React, { Component }from 'react';
import jen from './pics/jen.png';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className = "App">
        <div className = "App-header">
        <h2> Tada a Spinning Jenny:</h2>
          <img src ={jen} className="App-logo" alt="jenPic" />
          
        </div>
        <p className = "App-intro"></p>
             </div>
    );
  }
}

export default App;
