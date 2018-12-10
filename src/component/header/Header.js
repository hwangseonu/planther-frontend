import React, {Component} from 'react';
import {Navbar, NavbarBrand, NavItem, Container} from 'reactstrap';
import cookie from 'react-cookies';
import axios from 'axios';

import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      grade: null,
      cls: null,
      number: null
    };
  }

  componentDidMount() {
    if (cookie.load('JWT')) {
      axios.get('http://localhost:8080/users', {
        headers: {
          Authorization: 'Bearer ' + cookie.load('JWT')
        }
      }).then(res => {
        const {username, grade, cls, number} = res.data;
        this.setState({
          username: username,
          grade: grade,
          cls: cls,
          number: number
        })
      }).catch(e => {
        cookie.remove('JWT', {path: '/'});
      })
    }
  }

  onLoginClick(event) {
    if (!document.getElementById('login').classList.contains('hidden') || !document.getElementById('register').classList.contains('hidden')) {
      event.preventDefault();
      return;
    }
    event.preventDefault();
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('root').classList.add('gray')
  }

  onLogoutClick(event) {
    cookie.remove('JWT', {path: '/'});
    window.location.href = '/';
    alert('로그아웃 되었습니다.');
  }

  render() {
    let items;

    if (this.state.username) {
      items = (
        <NavItem tag={'div'} className={'navbar-right'}>
          <a className={'header-menu'} id={'SignOut'} onClick={this.onLogoutClick}>로그아웃</a>
        </NavItem>
      )
    } else {
      items = (
        <NavItem tag={'div'} className={'navbar-right'}>
          <a className={'header-menu'} id={'SignIn'} onClick={this.onLoginClick}>로그인</a>
        </NavItem>
      );
    }

    return (
      <Navbar dark={true} fixed={'top'}>
        <Container>
          <NavbarBrand href={'index.html'}>Class room calendar</NavbarBrand>
          {items}
        </Container>
      </Navbar>
    )
  }

}

export default Header;