import React, {Component} from 'react';

import logo from '../../assets/images/logo.svg';
import './Navbar.css';
import Login from "../Login/Login";

class Navbar extends Component {

  onLoginClick() {
    document.getElementById('login-wrapper').classList.remove('hidden');
  }

  render() {
    return (
      <div className={'navbar'}>
        <a href={'/'}>
          <div className={'navbar-brand'}>
            <img className={'logo'} src={logo} alt={'logo'}/>
            <span className={'navbar-title'}>Planther</span>
          </div>
        </a>
        <div className={'navbar-menu'}>
          <span onClick={this.onLoginClick}>로그인</span>
          <span>회원가입</span>
        </div>
        <Login/>
      </div>
    )
  }

}

export default Navbar;
