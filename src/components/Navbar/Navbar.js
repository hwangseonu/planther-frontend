import React, {Component} from 'react';

import logo from '../../assets/images/logo.svg';
import './Navbar.css';

class Navbar extends Component {

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
          <span>로그인</span>
          <span>회원가입</span>
        </div>
      </div>
    )
  }

}

export default Navbar;
