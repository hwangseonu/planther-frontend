import React, {Component} from 'react';

import './Login.css';

class Login extends Component {

  onCloseClick() {
    document.getElementById('login-form').reset();
    document.getElementById('login-wrapper').classList.add('hidden');
  }

  onOutClick(event) {
    if (event.target.id === 'login-wrapper') {
      document.getElementById('login-form').reset();
      document.getElementById('login-wrapper').classList.add('hidden');
    }
  }

  render() {
    return (
      <div onClick={this.onOutClick} id={'login-wrapper'} className={'hidden'}>
        <div className={'login'}>
          <div className={'login-header'}>
            <span className={'login-title'}>로그인</span>
            <i onClick={this.onCloseClick} className={'login-close far fa-times-circle'}/>
          </div>
          <div className={'login-body'}>
            <form id={'login-form'}>
              <input placeholder={'아이디'}/>
              <input placeholder={'비밀번호'} type={'password'}/>
              <button type={'submit'}>로그인</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Login;
