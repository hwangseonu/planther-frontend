import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import cookie from 'react-cookies';
import axios from 'axios';

import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onCancelClick(event) {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('root').classList.remove('gray');
  }

  onRegisterClick(event) {
    event.preventDefault();
    document.getElementById('register').classList.remove('hidden');
    document.getElementById('login').classList.add('hidden');
    document.getElementById('root').classList.add('gray')
  }

  onSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8080/auth', {
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      cookie.save('JWT', res.data.access, {path: '/'});
      window.location.href = '/';
    }).catch(e => {
      alert('로그인에 실패하였습니다.');
    })
  }

  handleChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return (
      <div id={'login'} className={this.props.className}>
        <div id={'login-panel'}>
          <h2>로그인</h2>
          <p>Please enter your username and password</p>
          <Form id={'login-form'} onSubmit={this.onSubmit}>
            <FormGroup tag={'div'}>
              <Input type={'text'} className={'form-control'} placeholder={'Username'}
                     onChange={this.handleChangeUsername}/>
            </FormGroup>
            <FormGroup tag={'div'}>
              <Input type={'password'} className={'form-control'} placeholder={'Password'}
                     onChange={this.handleChangePassword}/>
            </FormGroup>
            <Button type={'reset'} color={'danger'} className={'w-50 form-control'}
                    onClick={this.onCancelClick}>Cancel</Button>
            <Button type={'submit'} color={'primary'} className={'w-50 form-control'}>Login</Button>
            <a id={'SignUp'} onClick={this.onRegisterClick}>회원가입</a>
          </Form>
        </div>
      </div>
    )
  }

}

export default Login;
