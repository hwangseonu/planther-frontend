import React, {Component} from 'react';
import Header from './component/header/Header';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Main from "./component/main/Main";

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div id={'form-wrapper'} className={'hidden'}>
          <Login className={'hidden'}/>
          <Register className={'hidden'}/>
        </div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
