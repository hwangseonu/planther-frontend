import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import logo from '../assets/images/logo.svg';

import {userActions} from '../actions';

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
  color: #555;
  cursor: pointer;
  
  &:hover {
  color: #000;
  }
`;

class Navbar extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    // dispatch(userActions.getUserData(this.props.isLogin));
  }

  render() {
    return (
      <Wrapper className={'navbar'}>
        <Link to={'/'}>
          <Brand className={'navbar-brand'}>
            <Logo className={'logo'} src={logo}/>
            <span>Planther</span>
          </Brand>
        </Link>
        {this.props.isLogin ?
          null:
          <Menu className={'navbar-menu'}>
            <Item style={{marginRight: '20px'}} onClick={() => this.event.emit('show-login')}>로그인</Item>
            <Item onClick={() => this.event.emit('show-register')}>회원가입</Item>
          </Menu>
        }
        <LoginModal/>
        <RegisterModal/>
      </Wrapper>
    )
  }
}

function mapStateToProps(state) {
  const {user} = state.user;
  const {isLogin} = state.auth;
  return {
    isLogin,
    user
  }
}

export default connect(mapStateToProps)(Navbar);