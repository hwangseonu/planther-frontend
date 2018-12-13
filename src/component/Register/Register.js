import React, {Component} from 'react';
import axios from 'axios';

import config from '../../config';
import './Register.css';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      grade: null,
      cls: null,
      number: null
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeGrade = this.onChangeGrade.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
  }

  onClickClose() {
    document.getElementById('register-wrapper').classList.add('hidden');
    document.getElementById('register-form').reset();
  }

  onSubmit(event) {
    event.preventDefault();
    document.getElementById('register-form').reset();
    axios.post(`${config.server}/users`, this.state).then(res => {
      window.location.href = '/';
      alert('회원가입 되었습니다.');
    }).catch(e => {
      let msg = '';
      switch (e.response.status) {
        case 409:
          msg = '이미 가입되어 있는 정보입니다.';
          break;
        default:
          msg = '';
      }
      alert(`회원가입에 실패했습니다. ${msg}`);
    })
  }

  onChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  onChangePassword(event) {
    this.setState({password: event.target.value});
  }

  onChangeGrade(event) {
    this.setState({grade: event.target.value});
  }

  onChangeClass(event) {
    this.setState({cls: event.target.value});
  }

  onChangeNumber(event) {
    this.setState({number: event.target.value});
  }

  render() {
    return (
      <div id={'register-wrapper'} className={this.props.className}>
        <div className={'register'}>
          <i onClick={this.onClickClose} className={'login-close far fa-times-circle fa-2x'}/>
          <h2>회원가입</h2>
          <form id={'register-form'} onSubmit={this.onSubmit}>
            <input onChange={this.onChangeUsername} placeholder={'Username'}/>
            <input onChange={this.onChangePassword} type={'password'} placeholder={'Password'}/>
            <input onChange={this.onChangeGrade} placeholder={'Grade'}/>
            <input onChange={this.onChangeClass} placeholder={'Class'}/>
            <input onChange={this.onChangeNumber} placeholder={'Number'}/>
            <button type={'submit'} className={'btn-register'}>회원가입</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Register;
