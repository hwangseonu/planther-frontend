import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/logo.svg';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position:fixed;
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  background: #f2c61d; 
`;

const Brand = styled.div`
  font-weight: bold;
  font-size: 2em;
  color: #000;
  margin-left: 2.5vw;
  cursor: pointer;
`;

const Logo = styled.img`
  margin-right: 10px;
  width: 30px;
`;

const Menu = styled.div`
  flex: 0 0 auto;
  margin-left: auto;
  margin-right: 2.5vw;
`;

const Item = styled.span`
  font-weight: bold;
  cursor: pointer;
`;

class Navbar extends Component {

  render() {
    return (
      <Wrapper className={'navbar'}>
        <Link to={'/'}>
          <Brand className={'navbar-brand'}>
            <Logo className={'logo'} src={logo}/>
            <span>Planther</span>
          </Brand>
        </Link>
        <Menu className={'navbar-menu'}>
          <Item style={{marginRight: '20px'}}>로그인</Item>
          <Item>회원가입</Item>
        </Menu>
      </Wrapper>
    )
  }
}


export default Navbar;