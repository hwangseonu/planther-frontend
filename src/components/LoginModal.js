import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {authActions} from '../actions';
import Loading from "./Loading";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  padding: 30px;
  width: 570px;
  border-radius: 30px;
  background: #FFF;
`;

const ModalHeader = styled.div`
  display: flex;
`;

const ModalTitle = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

const Close = styled.i`
  font-size: 2em;
  color: #AAA;
  flex: 0 1 auto;
  margin-left: auto;
  cursor: pointer;
  
  &:hover {
    color: #000;
  }
`;

const ModalBody = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  font-weight: bold;
  font-size: 1.3em;
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: #f2c61d;
  font-weight: bold;
  font-size: 1.3em;
  color: #FFF;
  
  &:hover {
    background: #ffd52a;
  }
`;

class LoginModal extends Component {
  state = {
    show: false,
    loading: false,
    username: '',
    password: ''
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    this.event.on('show-login', this.show);
  }

  componentWillUnmount() {
    this.event.removeListener('show-login', this.show);
  }

  show() {
    this.setState({show: true});
  }

  close() {
    this.setState({show: false});
  }

  async handleSubmit() {
    const {username, password} = this.state;
    const {dispatch} = this.props;

    if (username && password) {
      this.setState({loading: true});
      try {
        await dispatch(authActions.login(username, password));
        alert("로그인되었습니다.");
        this.setState({loading: false});
        window.location.reload();
      } catch (err) {
        this.setState({loading: false});
        alert("로그인에 실패했습니다.");
      }
    } else {
      alert("빈칸이 있습니다.");
    }
  }

  render() {
    return this.state.show ? (
      <Wrapper className={'login-wrapper'} onClick={({target}) => {if (target.classList.contains('login-wrapper')) this.close();}}>
        {this.state.loading ? <Loading/> : null}
        <Modal>
          <ModalHeader>
            <ModalTitle>로그인</ModalTitle>
            <Close className="fas fa-times" onClick={this.close}/>
          </ModalHeader>
          <ModalBody onKeyPress={(e) => {if (e.key === 'Enter') this.handleSubmit()}}>
            <Input placeholder={'Username'} onChange={({target}) => this.setState({username: target.value})}/>
            <Input placeholder={'Password'} onChange={({target}) => this.setState({password: target.value})} type={'password'}/>
            <Button onClick={this.handleSubmit.bind(this)}>로그인</Button>
          </ModalBody>
        </Modal>
      </Wrapper>
    ) : null;
  }
}

function mapStateToProps(state) {
  const {isLogin} = state.auth;
  return {
    isLogin
  };
}

export default connect(mapStateToProps)(LoginModal);