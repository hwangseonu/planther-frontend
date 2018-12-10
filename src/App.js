import React, {Component} from 'react';
import Header from './component/header/Header';
import Login from './component/login/Login';
import Register from './component/register/Register';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App" onClick={this.onClick}>
        <Login className={'hidden'}/>
        <Register className={'hidden'}/>
        <Header/>
      </div>
    );
  }
}

export default App;
