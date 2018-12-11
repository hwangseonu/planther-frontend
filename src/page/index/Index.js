import React, {Component} from 'react';
import Header from '../../component/header/Header';
import Login from '../../component/login/Login';
import Register from '../../component/register/Register';
import Main from "../../component/main/Main";

import './Index.css';

class Index extends Component {

  render() {
    return (
      <div className="index bg-cal">
        <div id={'form-wrapper'} className={'hidden gray'}>
          <Login className={'hidden'}/>
          <Register className={'hidden'}/>
        </div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default Index;
