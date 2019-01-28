import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import {authActions} from "../actions";
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

class RegisterModal extends Component {
  state = {
    show: false,
    loading: false,
    username: '',
    password: '',
    name: '',
    grade: '',
    cls: '',
    number: ''
  };

  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    this.event.on('show-register', this.show);
  }

  componentWillUnmount() {
    this.event.removeListener('show-register', this.show);
  }

  show() {
    this.setState({show: true});
  }

  close() {
    this.setState({show: false});
  }

  async handleSubmit() {
    const {dispatch} = this.props;
    const {username, password, name, grade, cls, number} = this.state;

    this.setState({loading: true});

    if (username && password && name && grade && cls && number) {
      try {
        await dispatch(authActions.register(username, password, name, grade, cls, number));
        this.setState({loading: false});
        alert("회원가입되었습니다.");
        window.location.reload();
      } catch (err) {
        this.setState({loading: false});
        alert("회원가입에 실패했습니다.");
      }
    } else {
      alert("빈칸이 있습니다.");
    }
  }

  render() {
    return this.state.show ? (
      <Wrapper className={'register-wrapper'} onClick={({target}) => {
        if (target.classList.contains('register-wrapper')) this.close();
      }}>
        {this.state.loading ? <Loading/> : null}
        <Modal>
          <ModalHeader>
            <ModalTitle>회원가임</ModalTitle>
            <Close className="fas fa-times" onClick={this.close}/>
          </ModalHeader>
          <ModalBody onKeyPress={(e) => {
            if (e.key === 'Enter') this.handleSubmit()
          }}>
            <Input placeholder={'Username'} onChange={({target}) => this.setState({username: target.value})}/>
            <Input placeholder={'Password'} type={'password'}
                   onChange={({target}) => this.setState({password: target.value})}/>
            <Input placeholder={'Name'} onChange={({target}) => this.setState({name: target.value})}/>
            <Input placeholder={'Grade'} type={'number'} onChange={({target}) => this.setState({grade: target.value})}/>
            <Input placeholder={'Class'} type={'number'} onChange={({target}) => this.setState({cls: target.value})}/>
            <Input placeholder={'Number'} type={'number'}
                   onChange={({target}) => this.setState({number: target.value})}/>
            <Button onClick={this.handleSubmit.bind(this)}>회원가입</Button>
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
  }
}

export default connect(mapStateToProps)(RegisterModal);