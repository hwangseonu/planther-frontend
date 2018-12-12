import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import './Header.css';
import config from '../../config.json';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      grade: null,
      cls: null,
      number: null,
    }
  }

  componentDidMount() {
    const jwt = cookie.load('JWT');
    if (jwt) {
      axios.get(`${config.server}/users`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      }).then(res => {
        const {username, grade, cls, number} = res.data;
        this.setState({
          username: username,
          grade: grade,
          cls: cls,
          number: number
        });
      }).catch(e => {
        alert(`login error ${e.message}`);
        cookie.remove('JWT', {path: '/'});
      })
    }
  }

  onClickLogin() {
    document.getElementById('login-wrapper').classList.remove('hidden');
  }

  onClickRegister() {
    document.getElementById('register-wrapper').classList.remove('hidden');
  }

  onClickLogout() {
    cookie.remove('JWT', {path: '/'});
    window.location.href = '/';
    alert('로그아웃되었습니다.');
  }

  render() {
    const items = (this.state.username) ? (
      <div className={'navbar-right'}>
        <span id={'profile'} className={'header-menu'}>안녕하세요 {this.state.username}님</span>
        <span onClick={this.onClickLogout} id={'logout'} className={'header-menu'}>로그아웃</span>
      </div>
    ): (
      <div className={'navbar-right'}>
        <span onClick={this.onClickLogin} id={'profile'} className={'header-menu'}>로그인</span>
        <span onClick={this.onClickRegister} id={'logout'} className={'header-menu'}>회원가입</span>
      </div>
    );

    return (
      <nav id={'navbar'} className={'top'}>
        <div className={'navbar-brand'}>
          <a href={'/'}>
            Planther
          </a>
        </div>
        {items}
      </nav>
    )
  };

}

export default Header;
