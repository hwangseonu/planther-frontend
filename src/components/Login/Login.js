import React, {Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';

import Loading from '../Loading/Loading';
import config from '../../config';
import './Login.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoad: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }


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

  onSubmit(event) {
    this.setState({isLoad: true});
    const username = event.target[0].value;
    const password = event.target[1].value;

    axios.post(`${config.api}/auth`, {
      username: username,
      password: password
    }).then(res => {
      cookie.save('access', res.data.access);
      cookie.save('refresh', res.data.refresh);
      alert('로그인되었습니다.');
      document.getElementById('login-wrapper').classList.add('hidden');
      this.setState({isLoad: false});
    }).catch(e => {
      let msg = '';
      try {
        msg = e.response.data.message;
      } catch (err) {
        msg = e.message;
      }
      alert('로그인에 실패했습니다. ' + msg);
      this.setState({isLoad: false});
    });

    event.target.reset();
    event.preventDefault();
  }

  render() {
    return (
      <div onClick={this.onOutClick} id={'login-wrapper'} className={'hidden'}>
        <Loading visible={this.state.isLoad}/>
        <div className={'login'}>
          <div className={'login-header'}>
            <span className={'login-title'}>로그인</span>
            <i onClick={this.onCloseClick} className={'login-close far fa-times-circle'}/>
          </div>
          <div className={'login-body'}>
            <form id={'login-form'} onSubmit={this.onSubmit}>
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
