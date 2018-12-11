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

  onLogout() {
    cookie.remove('JWT', {path: '/'})
  }

  render() {
    const items = (this.state.username) ? (
      <div className={'navbar-right'}>
        <span id={'profile'} className={'header-menu'}>안녕하세요 {this.state.username}님</span>
        <span onClick={this.onLogout} id={'logout'} className={'header-menu'}>로그아웃</span>
      </div>
    ): (
      <div className={'navbar-right'}>
        <span id={'profile'} className={'header-menu'}>로그인</span>
        <span id={'logout'} className={'header-menu'}>회원가입</span>
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
