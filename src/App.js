import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header/Header";
import Index from "./page/Index/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index/>
      </div>
    );
  }
}

export default App;
