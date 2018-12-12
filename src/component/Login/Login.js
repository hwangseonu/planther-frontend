import React, {Component} from 'react';
import cookie from 'react-cookies';

import axios from "axios";
import config from "../../config";
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }


  onClickClose() {
    document.getElementById('login-wrapper').classList.add('hidden');
    document.getElementById('login-form').reset();
  }

  onSubmit(event) {
    event.preventDefault();
    document.getElementById('login-form').reset();
    axios.post(`${config.server}/auth`, this.state).then(res => {
      window.location.href = '/';
      cookie.save('JWT', res.data.access, {path: '/'});
      alert('로그인되었습니다.');
    }).catch(e => {
      let msg = '';
      switch (e.response.status) {
        case 401:
          msg = '패스워드가 올바르지 않습니다.';
          break;
        case 404:
          msg = '사용자를 찾을 수 없습니다.';
          break;
        default:
          msg = '로그인에 실패했습니다.';
      }
      alert(msg);
    })
  }

  onChangeUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div id={'login-wrapper'} className={this.props.className}>
        <div className={'login'} onSubmit={this.onSubmit}>
          <i onClick={this.onClickClose} className={'login-close far fa-times-circle fa-2x'}/>
          <h2>로그인</h2>
          <form id={'login-form'}>
            <input onChange={this.onChangeUsername} type={'text'} placeholder={'Username'}/>
            <input onChange={this.onChangePassword} type={'password'} placeholder={'Password'}/>
            <button type={'submit'} className={'btn-login'}>로그인</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
