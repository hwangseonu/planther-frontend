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
    }
  }

  componentDidMount() {
    if (cookie.load('JWT')) {
      axios.get('https://class-room-calendar.herokuapp.com/users', {
        Authorization: cookie.load('JWT')
      }).then(res => {
        if (res.status === 200) {
          const {username, grade, cls, number} = res.data;
          this.setState({
            username: username,
            grade: grade,
            cls: cls,
            number: number
          })
        } else {
          cookie.remove('JWT', {path: '/'})
        }
      })
    }
  }

  render() {
    let items;

    if (this.state.username) {
      items = (
        <NavItem tag={'div'} className={'navbar-right'}>
          <span className={'header-menu'} id={'SignOut'}>로그아웃</span>
        </NavItem>
      )
    } else {
      items = (
        <NavItem tag={'div'} className={'navbar-right'}>
          <span className={'header-menu'} id={'SignIn'}>로그인</span>
          <span className={'header-menu'} id={'SignUp'}>회원가입</span>
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
