import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import Login from "../Login/Login";
import Register from "../Register/Register";

import config from '../../config';
import logo from '../../assets/images/logo.svg';
import './Navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  onLoginClick() {
    document.getElementById('login-wrapper').classList.remove('hidden');
  }

  onRegisterClick() {
    document.getElementById('register-wrapper').classList.remove('hidden');
  }

  componentDidMount() {
    const access = cookie.load('access');
    if (access) {
      axios.get(`${config.api}/users`, {
        headers: {
          Authorization: `Bearer ${access}`
        }
      }).then(res => {
        this.setState({user: res.data})
      }).catch(e => {
        cookie.remove('access', {path: '/'});
        cookie.remove('refresh', {path: '/'});
      })
    }
  }

  render() {
    const item = this.state.user ? (
      <div className={'navbar-menu'}>
        <span>{this.state.user.name} 님 환영합니다.</span>
        <span onClick={() => {
          cookie.remove('access', {path: '/'});
          cookie.remove('refresh', {path: '/'});
          alert('로그아웃 되었습니다.');
          window.location.href = '/';
        }}>로그아웃</span>
      </div>
    ) : (
      <div className={'navbar-menu'}>
        <span onClick={this.onLoginClick}>로그인</span>
        <span onClick={this.onRegisterClick}>회원가입</span>
      </div>
    );

    return (
      <div className={'navbar'}>
        <a href={'/'}>
          <div className={'navbar-brand'}>
            <img className={'logo'} src={logo} alt={'logo'}/>
            <span className={'navbar-title'}>Planther</span>
          </div>
        </a>
        <div className={'navbar-menu'}>
          {item}
        </div>
        <Login/>
        <Register/>
      </div>
    )
  }

}

export default Navbar;
