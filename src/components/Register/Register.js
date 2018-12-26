import React, {Component} from 'react';

import './Register.css';

class Register extends Component {

  onCloseClick() {
    document.getElementById('register-form').reset();
    document.getElementById('register-wrapper').classList.add('hidden');
  }

  onOutClick(event) {
    if (event.target.id === 'register-wrapper') {
      document.getElementById('register-form').reset();
      document.getElementById('register-wrapper').classList.add('hidden');
    }
  }

  render() {
    return (
      <div onClick={this.onOutClick} id={'register-wrapper'} className={'hidden'}>
        <div className={'register'}>
          <div className={'register-header'}>
            <span className={'register-title'}>회원가입</span>
            <i onClick={this.onCloseClick} className={'register-close far fa-times-circle'}/>
          </div>
          <div className={'register-body'}>
            <form id={'register-form'}>
              <input placeholder={'아이디'}/>
              <input placeholder={'비밀번호'} type={'password'}/>
              <input placeholder={'이름'}/>
              <input placeholder={'학년'} type={'number'}/>
              <input placeholder={'반'} type={'number'}/>
              <input placeholder={'번호'} type={'number'}/>
              <button type={'submit'}>회원가입</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default Register;
